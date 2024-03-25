<script setup>
const props = defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  auth: Object
})
</script>

<template layout="GuestLayout">
  <Head title="Welcome" />
  <v-row align="center" justify="center" style="height: 100vh">
    <v-col cols="12" sm="7" md="5" lg="4" xl="3" xxl="2">
      <v-card class="pa-3 rounded-lg elevation-8">
        <v-card-title>
          <div class="d-flex justify-center mb-4">
            <VuetifyLogo class="ml-1" style="height: 75" />
          </div>
          <div class="d-flex justify-center mb-4">
            <span class="text-h5">Bem vindo ao V.I.L.V.</span>
          </div>
        </v-card-title>
        <v-card-text>
          <p class="text-body-2">
            O V.I.L.V. é um Starter Kit de desenvolvimento para a construção de aplicatições. <br />
            Contruído com Laravel 11, Vue 3, Inertia e Vuetify.<br />
            Pronto para construir sua próxima grande ideia?
          </p>
        </v-card-text>
        <v-card-actions>
          <div v-if="props.auth.user != null">
            <Link href="/dashboard" as="div">
              <v-btn color="primary">Dashboard</v-btn>
            </Link>
          </div>
          <div v-else>
            <div class="d-flex">
              <Link v-if="props.canLogin" href="/login" class="mr-2" as="div">
                <v-btn color="primary">Entrar</v-btn>
              </Link>
              <Link v-if="props.canRegister" href="/register" as="div">
                <v-btn color="secondary">Inscrever-me</v-btn>
              </Link>
            </div>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
