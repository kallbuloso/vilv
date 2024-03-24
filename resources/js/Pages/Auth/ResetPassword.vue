<script setup>
const props = defineProps({
  email: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  }
})

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: ''
})

const submit = () => {
  form.post('/reset-password', {
    onFinish: () => form.reset('password', 'password_confirmation')
  })
}

const showPassword = ref(false)
</script>

<template layout="AuthLayout">
  <Head title="Redefinir senha" />
  <v-form @submit.prevent="submit">
    <v-text-field v-model="form.email" type="email" label="Email" placeholder="Endereço de email" prepend-inner-icon="mdi-email-outline" :error-messages="form.errors.email" />
    <v-text-field
      v-model="form.password"
      label="Senha"
      placeholder="Coloque sua senha"
      prepend-inner-icon="mdi-lock-outline"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="showPassword ? 'text' : 'password'"
      :error-messages="form.errors.password"
      @click:append-inner="showPassword = !showPassword"
    />
    <v-text-field
      v-model="form.password_confirmation"
      label="Confirme a senha"
      placeholder="Repita sua senha"
      prepend-inner-icon="mdi-lock-outline"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="showPassword ? 'text' : 'password'"
      :error-messages="form.errors.password_confirmation"
      @click:append-inner="showPassword = !showPassword"
    />
    <v-btn :loading="form.processing" class="mt-4" type="submit" block color="primary"> Redefinir senha </v-btn>
  </v-form>
</template>
