<template>
  <v-footer class="d-flex mt-2" color="background">
    <div class="px-4 py-2 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>{{ $page.props.appName }}</strong>
    </div>
  </v-footer>
</template>
