import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: ".",
  
  title: "nonsenz's projects",
  description: "The homepage for nonsenz's Minecraft plugins and other projects",
  themeConfig: {
    logo: "/logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/plugins_list' }
    ],

    sidebar: [
      {
        text: 'Chatty',
        items: [
          { text: 'Coming soon', link: '/docs/chatty/coming_soon' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wendeburg' }
    ],

    footer: {
      message: 'All rights reserved',
      copyright: 'Copyright © 2025-present nonsenz'
    }
  }
})
