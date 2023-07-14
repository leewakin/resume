<script setup lang="ts">
import type { Project } from './AppProjectItem.vue'

interface Props {
  list: Project[]
}
const props = withDefaults(defineProps<Props>(), {
  list: () => [],
})
</script>

<template>
  <ul class="flex flex-col text-center gap-y-0 sm:gap-y-96 md:gap-y-40">
    <AppProjectItem
      class="mt-40 md:mt-0"
      v-for="project in props.list"
      :key="project.title + project.url"
      :project="project"
    />
  </ul>
</template>
