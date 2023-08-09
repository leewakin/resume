<script setup lang="ts">
const props = defineProps<{ label?: string }>()
</script>
<template>
  <h1 class="text-center text-4xl my-20">
    <slot>
      {{ props.label }}
    </slot>
  </h1>
</template>
