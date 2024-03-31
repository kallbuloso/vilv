<script setup>
// import { swToastSuccess } from '@/utils/sweetAlert2'

onMounted(() => {
  //   swToastSuccess('Welcome back, ${' + $page.props.auth.user.name + '!')
})
</script>

<template layout="AppShell,AuthenticatedLayout">
  <v-card class="mx-auto" style="height: 1500px">
    <v-card-text>
      <div class="text-h6 text-medium-emphasis">Welcome back, {{ $page.props.auth.user.name }}!</div>
    </v-card-text>
    <v-card-item>
      <div>
        <Link href="/notify/success" method="post" as="button">
          <v-btn class="mb-2 mr-2" color="success"> Sucesso </v-btn>
        </Link>
        <Link href="/notify/info" method="post" as="button">
          <v-btn class="mb-2 mr-2" color="info"> Informações </v-btn>
        </Link>
        <Link href="/notify/warning" method="post" as="button">
          <v-btn class="mb-2 mr-2" color="warning"> Aviso </v-btn>
        </Link>
        <Link href="/notify/error" method="post" as="button">
          <v-btn class="mb-2 mr-2" color="error"> Erro </v-btn>
        </Link>
        <Link href="/notif" method="post" as="button">
          <v-btn class="mb-2 mr-2" color="error"> Erro </v-btn>
        </Link>
      </div></v-card-item
    >
  </v-card>
</template>
