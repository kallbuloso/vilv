<script setup>
defineProps({
  status: {
    type: String
  }
})

const form = useForm({
  email: ''
})

const submit = () => {
  form.post('/forgot-password')
}
</script>

<template layout="AuthLayout">
  <Head title="Esqueceu sua senha" />
  <v-form @submit.prevent="submit">
    <div class="text-subtitle-2 text-medium-emphasis mb-4">
      Esqueceu sua senha? Sem problemas.<br />
      Basta nos informar seu endereço de e-mail e enviaremos um link de redefinição que permitirá que você escolha uma nova senha.
    </div>
    <div v-if="status" class="text-subtitle-2 mb-4">
      {{ status }}
    </div>
    <v-text-field v-model="form.email" type="email" label="Email" placeholder="Endereço de email" prepend-inner-icon="mdi-email-outline" :error-messages="form.errors.email" />
    <v-btn :loading="form.processing" class="mt-4" type="submit" block color="primary"> Enviar redefinição de senha </v-btn>
  </v-form>
</template>
