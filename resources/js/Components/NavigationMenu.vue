<template>
  <v-list v-model:opened="openedGroup" density="compact" :lines="false" nav>
    <!-- List Menu -->
    <template v-for="(item, index) in items">
      <!-- If header -->
      <template v-if="item.header">
        <v-list-subheader :key="index" inset>
          {{ item.header }}
        </v-list-subheader>
        <v-divider v-if="item.divider" :key="index" inset />
      </template>
      <!-- If children -->
      <template v-else-if="item.children">
        <v-list-group :key="index" :value="item.group" :prepend-icon="item.icon" active-class="primary--text" link>
          <template #activator="{ props }">
            <v-list-item v-bind="props" :title="item.title" :class="{ 'v-list-group--active text-primary': route().current(`${item.group}.*`) }" />
          </template>
          <Link v-for="(child, i) in item.children" :key="i" :href="route(child.href)" as="div">
            <v-list-item :prepend-icon="child.icon" :title="child.title" link :class="{ 'v-list-item--active text-primary': activeRoute === child.href }" />
          </Link>
        </v-list-group>
      </template>
      <!-- If Item -->
      <template v-else>
        <Link :key="index" :href="route(item.href)" as="div">
          <v-list-item :prepend-icon="item.icon" :title="item.title" link :class="{ 'v-list-item--active text-primary': activeRoute === item.href }" />
        </Link>
      </template>
    </template>
  </v-list>
</template>

<script setup>
import navigation from '@/Configs/navigation'
const activeRoute = ref('')
const openedGroup = ref([''])
const items = computed(() => {
  return [...navigation.items]
})
const getString = (str) => {
  return str.split('.')[0]
}

onMounted(() => {
  router.on('navigate', (event) => {
    activeRoute.value = route().current()
    openedGroup.value = [getString(activeRoute.value)]
    // console.log(openedGroup.value[0])
  })
})
</script>
