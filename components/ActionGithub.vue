<script setup lang="ts">
function toGithub() {
  window.open('https://github.com/leewakin')
}
</script>

<template>
  <button class="flex items-center hover:opacity-80" aria-label="github" @click="toGithub">
    <IconsGithub />
  </button>
</template>
