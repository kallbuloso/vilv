<template>
  <v-list v-model:opened="openedGroup" density="compact" :lines="false" nav>
    <!-- List Menu -->
    <template v-for="(item, index) in items">
      <!-- If header -->
      <template v-if="item.header">
        <v-list-subheader :key="index">
          {{ item.header }}
        </v-list-subheader>
        <v-divider v-if="item.divider" :key="index" />
      </template>
      <!-- If children -->
      <template v-else-if="item.children">
        <v-list-group :key="index" :value="item.group" :prepend-icon="item.icon" link>
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

const activeRoute = ref(null)
const openedGroup = ref([''])
const items = reactive({
  ...navigation
})

router.on('navigate', () => {
  if (isNotEmpty(route().current())) {
    activeRoute.value = route().current()
    openedGroup.value = [activeRoute.value.split('.')[0]]
  }
})
</script>
