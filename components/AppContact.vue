<script setup lang="ts">
export interface Contact {
  label: string
  link: string
}
interface Props {
  list: Contact[]
}
const props = defineProps<Props>()

function handleContactClick(link: string) {
  window.location.href = link
}
</script>
<template>
  <div
    id="contact"
    class="h-screen flex flex-col items-center justify-center gap-6"
  >
    <h2 class="text-4xl font-black">联系方式</h2>
    <div class="flex flex-col md:flex-row gap-4 md:gap-6">
      <button
        v-for="contact in props.list"
        :key="contact.label + contact.link"
        class="py-2 px-4 border rounded bg-black text-white dark:bg-white dark:text-black"
        @click="handleContactClick(contact.link)"
      >
        {{ contact.label }}
      </button>
    </div>
  </div>
</template>
