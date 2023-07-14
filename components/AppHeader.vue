<script setup lang="ts">
import ActionTheme from './ActionTheme.vue'

interface Props {
  position?: 'sticky' | 'fixed'
}
const props = withDefaults(defineProps<Props>(), {
  position: 'fixed',
})

const { y } = useWindowScroll()

const isShowFlyOut = ref(false)
const flyOutRef = ref<HTMLUListElement>()
onClickOutside(flyOutRef, () => (isShowFlyOut.value = false))

const menus = [
  {
    label: '主页',
    link: '/',
  },
  {
    label: '关于',
    link: '/#about',
  },
  {
    label: '联系',
    link: '/#contact',
  },
]
</script>
<template>
  <header
    class="top-0 w-full backdrop-blur px-4 md:px-0"
    :class="[props.position]"
  >
    <div class="container mx-auto h-24 flex items-center">
      <IconsLogo
        class="w-8 h-8 md:w-10 md:h-10 animate-spin hover:animate-none"
      />
      <div class="ml-auto hidden md:flex items-center gap-10">
        <nav>
          <ul class="flex items-center gap-5">
            <li
              v-for="menu in menus"
              :key="menu.label + menu.link"
              class="cursor-pointer hover:text-sky-400"
              :class="menu.link === `/${useRoute().hash}` && 'text-sky-300'"
            >
              <NuxtLink :to="menu.link">
                {{ menu.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="relative flex justify-center items-center gap-5">
          <ActionTheme />
          <ActionGithub />
        </div>
      </div>
      <div class="relative ml-auto block md:hidden">
        <button
          class="hover:opacity-70"
          aria-label="fly out"
          @click="isShowFlyOut = true"
        >
          <IconsFlyOut />
        </button>

        <ul
          v-if="isShowFlyOut"
          ref="flyOutRef"
          class="absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 p-2 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-4"
          role="listbox"
          tabindex="0"
        >
          <li
            v-for="menu in menus"
            :key="menu.label + menu.link"
            class="p-2 flex items-center cursor-pointer hover:text-sky-300"
            :class="menu.link === `/${useRoute().hash}` && 'text-sky-300'"
          >
            <NuxtLink :to="menu.link">
              {{ menu.label }}
            </NuxtLink>
          </li>
          <li
            class="p-2 pt-3 flex items-center cursor-pointer gap-4 border-t border-slate-200"
          >
            <ActionTheme />
            <ActionGithub />
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
