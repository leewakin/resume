<script setup lang="ts">
export type ProjectProps = {
  name: string
  url: string
  preview: string
}

const props = defineProps<ProjectProps>()

const emits = defineEmits<{ (e: 'onClick'): void }>()

function handleClick() {
  emits('onClick')
}
</script>
<template>
  <div>
    <h1 class="text-center text-4xl my-10 cursor-pointer" @click="handleClick">
      {{ props.name }}
    </h1>
    <div
      class="dark:hover:ring-white hover:ring-gray-950 hover:ring-2 w-full max-h-[512px]  rounded-lg overflow-y-auto overflow-x-hidden aspect-[1/2]  transition dark:hover:shadow-gray-600 hover:shadow-xl cursor-pointer"
      @click="handleClick"
    >
      <img :src="props.preview" class="w-full min-h-full" :alt="props.name" />
    </div>
  </div>
</template>
