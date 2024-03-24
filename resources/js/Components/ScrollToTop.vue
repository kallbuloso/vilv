<script setup>
import { useGoTo } from 'vuetify'

const goTo = useGoTo()
const fab = ref(false)
const onScroll = (e) => {
  fab.value = window.scrollY > 150
}

// const toTop = () => {
//   goTo(0)
// }
</script>

<template>
  <VScaleTransition style="transform-origin: center" class="scroll-to-top d-print-none">
    <VBtn v-scroll="onScroll" v-show="fab" icon density="comfortable" @click="goTo(0)">
      <VIcon size="22" icon="$collapse" />
    </VBtn>
  </VScaleTransition>
</template>

<style lang="scss">
.scroll-to-top {
  position: fixed !important;

  // To keep button on top of v-layout. E.g. Email app
  z-index: 999;
  inset-block-end: 2%;
  inset-inline-end: 20px;
}
</style>
