<script setup lang="ts">
export interface Project {
  title: string
  url: string
  link: string
}
interface Props {
  project: Project
}
const props = defineProps<Props>()

function toProject(url?: string) {
  if (!url) return
  window.open(url)
}
</script>

<template>
  <li
    v-transition
    class="h-screen flex flex-col justify-center items-center md:gap-10"
  >
    <slot name="title">
      <h3
        class="text-4xl font-black cursor-pointer"
        :class="props.project.link && 'hover:underline hover:text-sky-300'"
        @click="toProject(props.project.link)"
      >
        {{ props.project.title }}
      </h3>
    </slot>
    <div class="w-full max-w-5xl p-10">
      <div
        class="aspect-[9/16] md:aspect-video cursor-pointer border rounded-3xl overflow-auto shadow hover:shadow-lg"
        @click="toProject(props.project.link)"
      >
        <img
          class="w-full min-h-full"
          :src="props.project.url"
          :alt="props.project.title"
          loading="lazy"
        />
      </div>
    </div>
  </li>
</template>
