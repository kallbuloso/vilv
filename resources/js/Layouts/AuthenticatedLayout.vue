<script setup>
import { useDrawerStore } from '@/Stores/drawerStore'
import { useThemeStore } from '@/Stores/themeStore'
const themeStore = useThemeStore()
const drawerStore = useDrawerStore()
// const appName = import.meta.env.VITE_APP_NAME || 'Laravel'
const drawer = computed(() => {
  return drawerStore.isOpen
})

// const avatar = computed(() => {
//   return 'https://cdn.vuetifyjs.com/images/john.jpg'
// })
function toggleDrawer() {
  drawerStore.toggleDrawer()
}
function toggleTheme() {
  themeStore.toggleTheme()
}
const theme = computed(() => {
  return themeStore.darkMode ? 'dark' : 'light'
})

onMounted(() => {
  // TODO: Adicionar responsividade mobile
  // https://vuetifyjs.com/en/features/display-and-platform/#interface
})
</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" color="background" floating permanent>
      <v-list>
        <v-list-item>
          <template #prepend>
            <v-icon>
              <Link href="/" as="a">
                <ApplicationLogo style="height: 35" />
              </Link>
            </v-icon>
          </template>
          <v-list-item-title>{{ $page.props.appName }}</v-list-item-title>
          <v-list-item-subtitle>{{ $page.props.auth.user.name }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <NavigationMenu />
      <template #append>
        <v-list v-show="drawer" density="compact" :lines="false" nav>
          <Link :href="route('logout')" method="post" as="div">
            <v-list-item prepend-icon="mdi-exit-to-app" title="Sair" link />
          </Link>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar color="background" :elevation="0">
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      <v-toolbar-title :text="$page.props.title" />
      <v-spacer />
      <v-btn icon @click.stop="toggleTheme">
        <v-icon>
          {{ themeStore.darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <Head :title="$page.props.title" />
        <div v-if="$page.props.breadcrumbs" class="mb-4">
          <Breadcrumbs :items="$page.props.breadcrumbs" class="pa-0 mt-0" />
        </div>
        <slot />
        <scroll-to-top />
        <app-footer></app-footer>
      </v-container>
    </v-main>
  </v-app>
</template>
