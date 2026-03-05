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
      },
      {
        text: 'Announcements',
        items: [
          { text: 'Overview', link: '/docs/announcements/overview' },
          { text: 'Configuration', link: '/docs/announcements/configuration' },
          { text: 'Automatic Announcements', link: '/docs/announcements/automatic_announcements' },
          { text: 'Manual Announcements', link: '/docs/announcements/manual_announcements' },
          { text: 'Commands & Permissions', link: '/docs/announcements/commands_and_permissions' },
        ]
      },
      {
        text: 'Custom Death Messages',
        items: [
          { text: 'Overview', link: '/docs/custom_death_messages/overview' },
          { text: 'Configuration', link: '/docs/custom_death_messages/configuration' },
          { text: 'Death Messages', link: '/docs/custom_death_messages/death_messages' },
          { text: 'Commands & Permissions', link: '/docs/custom_death_messages/commands_and_permissions' },
        ]
      },
      {
        text: 'BetterChatFeelings',
        items: [
          { text: 'Overview', link: '/docs/betterchatfeelings/overview' },
          { text: 'Configuration', link: '/docs/betterchatfeelings/configuration' },
          { text: 'Feelings', link: '/docs/betterchatfeelings/feelings' },
          { text: 'Commands & Permissions', link: '/docs/betterchatfeelings/commands_and_permissions' },
        ]
      },
      {
        text: 'Dialogue',
        items: [
          { text: 'Overview', link: '/docs/dialogue/overview' },
          { text: 'Configuration', link: '/docs/dialogue/configuration' },
          { text: 'Commands & Permissions', link: '/docs/dialogue/commands_and_permissions' },
        ]
      },
    ],

    footer: {
      message: 'All rights reserved',
      copyright: 'Copyright © 2025-present nonsenz'
    }
  }
})
