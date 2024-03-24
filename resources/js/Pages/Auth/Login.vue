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
  email: 'karl@admim.com',
  password: '187915',
  remember: false
})
const showPassword = ref(false)

const submit = () => {
  form.post('/login', {
    onFinish: () => form.reset('password')
  })
}
</script>

<template layout="AuthLayout">
  <Head title="Login" />
  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="form.email"
      class="mx-auto my-1"
      type="email"
      label="Email"
      placeholder="Endereço de email"
      prepend-inner-icon="mdi-email-outline"
      :error-messages="form.errors.email"
    />
    <div class="d-flex align-center justify-space-between">
      <div></div>
      <Link class="text-caption text-decoration-none text-blue" href="/forgot-password" rel="noopener noreferrer" target="_blank"> Esqueceu sua senha?</Link>
    </div>
    <v-text-field
      v-model="form.password"
      class="my-auto my-1"
      label="Senha"
      placeholder="Coloque sua senha"
      prepend-inner-icon="mdi-lock-outline"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="showPassword ? 'text' : 'password'"
      :error-messages="form.errors.password"
      @click:append-inner="showPassword = !showPassword"
    />
    <v-checkbox v-model="form.remember" label="Lembre de mim" />

    <v-btn :loading="form.processing" type="submit" block color="primary" class="mb-12">Entrar</v-btn>
  </v-form>
  <v-card-text class="text-center">
    <Link class="text-blue text-decoration-none" href="/register"> Inscreva-se agora <v-icon icon="mdi-chevron-right" /> </Link>
  </v-card-text>
</template>
