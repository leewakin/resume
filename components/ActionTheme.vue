<script setup lang="ts">
const colorMode = useColorMode()
function changeColorMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="relative top-0 w-5 h-5 overflow-hidden"
    aria-label="theme"
    @click="changeColorMode"
  >
    <IconsSun
      class="absolute top-0 left-0 transition-transform duration-300 translate-y-0 dark:-translate-y-6 hover:stroke-yellow-200"
    />
    <IconsMoon
      class="absolute top-0 left-0 transition-transform duration-300 translate-y-6 dark:translate-y-0 hover:stroke-yellow-200"
    />
  </button>
</template>
