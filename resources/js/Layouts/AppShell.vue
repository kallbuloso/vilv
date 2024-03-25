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
      //   console.log('Toasts Source: ', toas)
    })
  }
}

onMounted(() => {
  setTimeout(() => {
    renderToasts(toast)
  }, 200)
})

watch(toast, (newToasts) => {
  renderToasts(newToasts)
})
</script>
