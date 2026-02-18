// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChange = () => {
        const discordBtn = document.querySelectorAll('.VPButton.discord')
        if (discordBtn) {
          discordBtn.forEach(btn => {
            btn.setAttribute('target', '_blank')
            btn.setAttribute('rel', 'noopener noreferrer')
          })
        }
      }
    }
  }
} satisfies Theme
