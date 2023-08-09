<script setup lang="ts">
import type { ProjectProps } from './Project.vue'

const projects: ProjectProps[] = [
  {
    name: '主场运营系统',
    preview: 'assets/images/project-home.png',
    url: 'https://builds.dataexpo.com.cn/',
  },
  {
    name: '施工证件自助办理终端',
    preview: 'assets/images/project-builder.png',
    url: 'https://szcec.dataexpo.com.cn/hz-print/',
  },
  {
    name: '中国-非洲经贸博览会',
    preview: 'assets/images/project-trade.jpg',
    url: 'https://www.caetexpo.org.cn/',
  },
]

function handleClick(project: ProjectProps) {
  window.location.replace(project.url)
}
</script>
<template>
  <div class="flex flex-col gap-20">
    <Project
      v-for="project in projects"
      :key="project.name"
      v-bind="project"
      @onClick="handleClick(project)"
    />
  </div>
</template>
