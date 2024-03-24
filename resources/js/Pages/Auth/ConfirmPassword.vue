<script setup>
defineProps({
  status: {
    type: String
  }
})

const form = useForm({
  password: ''
})
const showPassword = ref(false)

const submit = () => {
  form.post('/confirm-password', {
    onFinish: () => form.reset()
  })
}
</script>

<template layout="AuthLayout">
  <Head title="Confirme sua senha" />
  <v-form @submit.prevent="submit">
    <div class="text-subtitle-2 text-medium-emphasis mb-4">Esta é uma área segura do aplicativo. Por favor, confirme sua senha antes de continuar.</div>
    <v-text-field
      v-model="form.password"
      label="Senha"
      placeholder="Digite sua senha"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="showPassword ? 'text' : 'password'"
      :error-messages="form.errors.password"
      @click:append-inner="showPassword = !showPassword"
    />
    <v-btn :loading="form.processing" class="mt-4" type="submit" block color="primary"> Confirmar </v-btn>
  </v-form>
</template>
