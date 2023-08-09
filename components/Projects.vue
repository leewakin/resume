<script setup lang="ts">
import imageHome from 'assets/images/project-home.png'
import imageBuilder from 'assets/images/project-builder.png'
import imageTrade from 'assets/images/project-trade.jpg'
import type { ProjectProps } from './Project.vue'

const projects: ProjectProps[] = [
  {
    name: '主场运营系统',
    preview: imageHome,
    url: 'https://builds.dataexpo.com.cn/',
  },
  {
    name: '施工证件自助办理终端',
    preview: imageBuilder,
    url: 'https://szcec.dataexpo.com.cn/hz-print/',
  },
  {
    name: '中国-非洲经贸博览会',
    preview: imageTrade,
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
