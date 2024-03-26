<script setup>
import { useDrawerStore } from '@/Stores/drawerStore'
import { useThemeStore } from '@/Stores/themeStore'
const themeStore = useThemeStore()
const drawerStore = useDrawerStore()

const avatar = computed(() => {
  return 'https://cdn.vuetifyjs.com/images/john.jpg'
})

function toggleDrawer() {
  drawerStore.toggleDrawer()
}

function toggleTheme() {
  themeStore.toggleTheme()
}

const theme = computed(() => {
  return themeStore.darkMode ? 'dark' : 'light'
})
</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer :rail="drawerStore.isOpen" color="background" floating permanent>
      <v-list>
        <v-list-item :prepend-avatar="avatar" :title="$page.props.auth.user.name" :subtitle="$page.props.auth.user.email" />
      </v-list>
      <NavigationMenu />
      <template #append>
        <v-list v-show="!drawerStore.isOpen" density="compact" :lines="false" nav>
          <Link :href="route('logout')" method="post" as="div">
            <v-list-item prepend-icon="mdi-exit-to-app" title="Sair" link />
          </Link>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar color="background" :elevation="0">
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title text="VILV" />
      <v-spacer />
      <v-btn icon @click="toggleTheme">
        <v-icon>
          {{ themeStore.darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <slot />
        <scroll-to-top />
      </v-container>
    </v-main>
  </v-app>
</template>
