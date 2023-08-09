<script setup lang="ts">
export type ContactProps = {
  label: string
  link: string
}
const props = defineProps<ContactProps>()
</script>
<template>
  <button
    :aria-label="props.label"
    class="py-2 px-4 rounded hover:shadow hover:shadow-gray-200 ring-2 ring-gray-950 dark:ring-white"
  >
    {{ props.label }}
  </button>
</template>
