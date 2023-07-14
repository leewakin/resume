<script setup lang="ts">
import homeImage from 'assets/images/projects/home.png'
import printImage from 'assets/images/projects/print.png'
import tradeImage from 'assets/images/projects/trade.png'
import type { Project } from '../components/AppProjectItem.vue'
import type { Contact } from '../components/AppContact.vue'

const projects: Project[] = [
  {
    title: '主场运营系统',
    url: homeImage,
    link: 'https://builds.dataexpo.com.cn/',
  },
  {
    title: '施工证件自助办理终端',
    url: printImage,
    link: 'https://szcec.dataexpo.com.cn/hz-print/',
  },
  {
    title: '中国-非洲经贸博览会',
    url: tradeImage,
    link: 'https://www.caetexpo.org.cn/',
  },
]

const contacts: Contact[] = [
  {
    label: 'Tel: 13691915910',
    link: 'tel:13691915910',
  },
  {
    label: 'WeChat: liwakin',
    link: 'weixin://liwakin',
  },
  {
    label: 'Mail: liwakin@qq.com',
    link: 'mailto:liwakin@qq.com',
  },
]
</script>

<template>
  <div class="h-screen w-full">
    <AppHeader />
    <AppContainer>
      <div
        v-transition
        class="h-screen flex flex-col justify-center items-center gap-10"
      >
        <h1 class="text-8xl font-black">李华键</h1>
        <p class="text-2xl">一名web前端开发工程师</p>
      </div>
      <div
        v-transition
        id="about"
        class="h-screen flex flex-col justify-center items-center gap-10"
      >
        <h2 class="text-4xl font-black">关于我</h2>
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-2xl">您好，我叫李华键。</p>
          <p class="text-2xl">
            我今年25岁，目前居住在深圳宝安。2019年开始担任web前端开发工作。
          </p>
          <p class="text-2xl">
            从一开始的只会用Vue做简单的业务，再到后来学习了更多的语言、框架和工具：
          </p>
          <p class="text-2xl">
            例如 Webpack, Vite, Uniapp, Nuxt3, TypeScript, Nodejs, Python.
          </p>
          <p class="text-2xl">
            这些学习经历不仅充实了我的技术栈，也为解决新的业务需求提供了源源不断的思路。
          </p>
          <p class="text-2xl">
            如果您有兴趣，请向下查看我的部分项目，感谢您的关注！
          </p>
        </div>
      </div>

      <AppProjectList class="mt-40 md:0" :list="projects" />

      <AppContact v-transition :list="contacts" />

      <AppFooter />
    </AppContainer>
  </div>
</template>

<style lang="postcss">
@import 'assets/css/theme.css';
</style>
