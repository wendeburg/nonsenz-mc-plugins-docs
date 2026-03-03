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
      { text: 'Documentation', link: '/docs/chatty/overview' }
    ],

    sidebar: [
      {
        text: 'Chatty',
        items: [
          { text: 'Overview', link: '/docs/chatty/overview' },
          { text: 'Configuration', link: '/docs/chatty/configuration' },
          { text: 'Formats', link: '/docs/chatty/formats' },
          { text: 'Channels', link: '/docs/chatty/channels' },
          { text: 'Rules', link: '/docs/chatty/rules' },
          { text: 'Commands & Permissions', link: '/docs/chatty/commands_and_permissions' },
        ]
      }
    ],

    footer: {
      message: 'All rights reserved',
      copyright: 'Copyright © 2025-present nonsenz'
    }
  }
})
