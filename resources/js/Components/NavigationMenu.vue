<template>
  <v-list v-model:opened="openedGroup" class="bg-background" density="compact" :lines="false" nav>
    <!-- List Menu -->
    <template v-for="(item, index) in items">
      <!-- If header -->
      <template v-if="item.header">
        <div :key="index" class="mb-2">
          <v-list-subheader>
            {{ item.header }}
          </v-list-subheader>
          <v-divider v-if="item.divider" />
        </div>
      </template>
      <!-- If children -->
      <template v-else-if="item.children">
        <v-list-group :key="index" :value="item.group" link>
          <template #activator="{ props }">
            <v-list-item v-bind="props" class="bg-background" :class="{ 'text-primary': route().current(`${item.group}.*`) }">
              <v-list-item-title>
                <div class="d-flex flex-row align-center">
                  <v-icon class="mr-2">
                    {{ item.icon || 'mdi-chevron-double-right' }}
                  </v-icon>
                  <span>{{ item.title }}</span>
                </div>
              </v-list-item-title>
            </v-list-item>
          </template>
          <Link v-for="(child, i) in item.children" :key="i" :href="route(child.href)" as="div">
            <v-list-item
              link
              class="v-list-item--offset"
              :class="{
                'text-primary': activeRoute === child.href || route().current(`${child.active}`)
              }"
            >
              <v-list-item-title>
                <div class="d-flex flex-row align-center">
                  <v-icon class="mr-2">
                    {{ child.icon || 'mdi-chevron-right' }}
                  </v-icon>
                  <span>{{ child.title }}</span>
                </div>
              </v-list-item-title>
            </v-list-item>
          </Link>
        </v-list-group>
      </template>
      <!-- If Item -->
      <template v-else>
        <Link :key="index" :href="route(item.href)" as="div">
          <v-list-item link :class="{ 'text-primary': activeRoute === item.href || route().current(`${item.active}.*`) }">
            <v-list-item-title>
              <div class="d-flex flex-row align-center">
                <v-icon class="mr-2">
                  {{ item.icon || 'mdi-chevron-right' }}
                </v-icon>
                <span>{{ item.title }}</span>
              </div>
            </v-list-item-title>
          </v-list-item>
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

<style>
.v-list-item--offset {
  left: -10px;
  position: relative;
}
</style>
