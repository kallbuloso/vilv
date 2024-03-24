<script setup>
import { useThemeStore } from '@/Stores/themeStore'
const themeStore = useThemeStore()

const theme = computed(() => {
  return themeStore.darkMode ? 'dark' : 'light'
})
</script>

<template>
  <v-app :theme="theme">
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
