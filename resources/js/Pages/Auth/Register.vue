<script setup>
defineProps({
  canResetPassword: {
    type: Boolean
  },
  status: {
    type: String
  }
})

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})
const showPassword = ref(false)

const submit = () => {
  form.post('/register', {
    onFinish: () => form.reset('password', 'password_confirmation')
  })
}
</script>

<template layout="AuthLayout">
  <Head title="Registrar" />
  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="form.name"
      class="mb-4"
      type="text"
      label="Nome completo"
      placeholder="Nome completo"
      prepend-inner-icon="mdi-account"
      :error-messages="form.errors.name"
    />
    <v-text-field
      v-model="form.email"
      class="mb-4"
      type="email"
      label="Email"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      :error-messages="form.errors.email"
    />
    <v-text-field
      v-model="form.password"
      class="mb-4"
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
      class="mb-4"
      label="Confirme sua senha"
      placeholder="Repita sua senha"
      prepend-inner-icon="mdi-lock-outline"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="showPassword ? 'text' : 'password'"
      :error-messages="form.errors.password_confirmation"
      @click:append-inner="showPassword = !showPassword"
    />
    <v-btn :loading="form.processing" type="submit" block color="primary" class="mb-5 mt-3">Registrar</v-btn>
  </v-form>
  <v-card-text class="text-center">
    <Link class="text-blue text-decoration-none" href="/login"> Já tem cadastro? </Link>
  </v-card-text>
</template>
