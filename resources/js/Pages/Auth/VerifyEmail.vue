<script setup>
const props = defineProps({
  status: {
    type: String
  }
})

const form = useForm({})

const submit = () => {
  form.post('/email/verification-notification')
}
const verificationLinkSent = computed(() => props.status === 'verification-link-sent')
</script>

<template layout="AuthLayout">
  <Head title="Verificação de e-mail" />
  <v-form @submit.prevent="submit">
    <div class="text-subtitle-2 text-medium-emphasis mb-4">
      <p>
        Obrigado por se inscrever! Antes de começar, você poderia verificar seu endereço de e-mail clicando no link que acabamos de enviar para você? Se você não recebeu o e-mail,
        teremos prazer em lhe enviar outro.
      </p>
    </div>
    <div v-if="verificationLinkSent" class="text-subtitle-2 mb-4">
      <p>Um novo link de verificação foi enviado para o endereço de e-mail que você forneceu durante o registro.</p>
    </div>
    <div class="d-flex justify-space-between align-center">
      <v-btn :loading="form.processing" type="submit" color="primary"> Reenviar email de verificação </v-btn>
      <Link href="/logout" method="post" class="text-black">Sair</Link>
    </div>
  </v-form>
</template>
