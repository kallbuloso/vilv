<script setup>
import { computed } from 'vue'

const props = defineProps({ status: Number })

const title = computed(() => {
  return {
    503: '503: Serviço não disponível',
    500: '500: Erro de servidor',
    404: '404: Página não encontrada',
    403: '403: Proibido'
  }[props.status]
})

const description = computed(() => {
  return {
    503: 'Desculpe, estamos fazendo alguma manutenção. Por favor, volte em breve.',
    500: 'Opa, algo deu errado em nossos servidores.',
    404: 'Desculpe, a página que você está procurando não foi encontrada.',
    403: 'Desculpe, você não pode acessar esta página.'
  }[props.status]
})
</script>

<template layout="GuestLayout">
  <div>
    <H1>{{ title }}</H1>
    <div>{{ description }}</div>
  </div>
  <Head title="Welcome" />
  <v-row align="center" justify="center" style="height: 100vh">
    <v-col cols="12" sm="7" md="5" lg="4" xl="3" xxl="2">
      <v-card class="pa-3 rounded-lg elevation-8">
        <v-card-title>
          <div class="d-flex justify-center mb-4">
            <ApplicationLogo class="ml-1" style="height: 75" />
          </div>
          <div class="d-flex justify-center mb-4">
            <span class="text-h5">{{ title }}</span>
          </div>
        </v-card-title>
        <v-card-text>
          <p class="text-body-2">
            {{ description }}
          </p>
        </v-card-text>
        <v-card-actions>
          <Link href="/" as="div">
            <v-btn color="primary">Ir para a pagina inicial</v-btn>
          </Link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
