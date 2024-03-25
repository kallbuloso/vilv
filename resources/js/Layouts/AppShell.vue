<template>
  <FadeTransition>
    <slot />
  </FadeTransition>
</template>

<script setup>
import { swToast } from '@/utils/sweetAlert2'

const toast = computed(() => {
  return usePage().props.toasts
})

const renderToasts = (toastsSource) => {
  const toasts = toastsSource
  if (Array.isArray(toasts)) {
    toasts.forEach((toas) => {
      swToast(toas.text, toas.type, toas.duration)
      console.log('Toasts Source: ', toas)
    })
  }
}

onMounted(() => {
  renderToasts(toast)
})

watch(toast, (newToasts) => {
  renderToasts(newToasts)
})
</script>
