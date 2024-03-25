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
        <v-row align="center" justify="center" style="height: 100vh">
          <v-col cols="10" sm="7" md="5" lg="4" xl="3" xxl="2">
            <div class="d-flex justify-center">
              <Link href="/" as="a">
                <ApplicationLogo style="height: 75" />
              </Link>
            </div>
            <v-card class="px-6 py-4 mt-3 elevation-2 rounded-lg">
              <slot />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
