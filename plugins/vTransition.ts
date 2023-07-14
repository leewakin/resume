import type { DirectiveBinding } from 'nuxt/dist/app/compat/capi'

interface VTransitionProps {
  x: number
  y: number
  scale: number
  opacity: number
  animateOptions?: KeyframeAnimationOptions
}

const defaultKeyframe = {
  x: 0,
  y: 10,
  scale: 1,
  opacity: 0,
}
const defaultAnimateOptions = {
  easing: 'ease-in',
  duration: 700,
  iterations: 1,
}

function playAnimate(target: HTMLElement, config?: VTransitionProps) {
  const { x, y, scale, opacity } = Object.assign({}, defaultKeyframe, config)

  const keyframes = [
    {
      transform: `translate(${x}rem, ${y}rem)`,
      opacity,
      scale,
    },
    { transform: `translate(0, 0)`, opacity: 1, scale: 1 },
  ]
  target.animate(
    keyframes,
    Object.assign({}, defaultAnimateOptions, config?.animateOptions)
  )
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('transition', {
    mounted(el: HTMLElement, binding: DirectiveBinding<VTransitionProps>) {
      el.style.opacity = '0'
      const { stop } = useIntersectionObserver(el, ([entry]) => {
        if (entry.isIntersecting) {
          playAnimate(el, binding.value)
          el.style.opacity = 'unset'
          stop()
        }
      })
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    },
  })
})
