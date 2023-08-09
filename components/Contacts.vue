<script setup lang="ts">
import type { ContactProps } from './Contact.vue'

const contacts: ContactProps[] = [
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

function handleItemClick(contact: ContactProps) {
  window.location.replace(contact.link)
}
</script>
<template>
  <div class="max-w-5xl flex flex-col sm:flex-row gap-5 justify-around">
    <Contact
      v-for="contact in contacts"
      :key="contact.label"
      :label="contact.label"
      :link="contact.link"
      @click="handleItemClick(contact)"
    />
  </div>
</template>
