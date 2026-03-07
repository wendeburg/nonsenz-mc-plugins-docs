---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My projects' homepage"
  text: ""
  tagline: Documentation for my projects!
  image:
    src: /logo.png
    alt: My Minecraft skin's head
  actions:
    - theme: discord
      text: Join Discord for Support!
      link: "https://discord.gg/CYvfmcXZRk"
    - theme: alt
      text: See documentation
      link: /docs/plugins_list

features:
  - title: Chatty
    details: A chat management plugin for Paper servers (1.21+). It gives you full control over how chat messages are formatted, routed through channels, and filtered with rules.
    link: /docs/chatty/overview
  - title: Announcements
    details: A broadcast plugin for Paper servers (1.21+). It lets you set up automatic scheduled announcements and trigger manual announcements with commands, all formatted with MiniMessage.
    link: /docs/announcements/overview
  - title: Dialogue
    details: A messaging and mail plugin for Paper servers (1.21+). It provides direct messaging between players, a persistent mail system for offline communication, and admin tools for monitoring player conversations.
    link: /docs/dialogue/overview
  - title: BetterChatFeelings
    details: A chat emote plugin for Paper 1.21+ servers that lets players send customizable "feelings" (social interactions like hugs, pokes, etc.) to other players.
    link: /docs/betterchatfeelings/overview
  - title: Custom Death Messages
    details: A death message customization plugin for Paper servers (1.21+). It lets you define custom death messages based on the type of damage and the entity that caused the kill, with full MiniMessage formatting support.
    link: /docs/custom_death_messages/overview
  - title: CommandsFilter
    details: A command visibility and access control plugin for Paper servers (1.21+). It lets you control which commands players can see in tab-completion and optionally block them from executing filtered commands, based on their permission group.
    link: /docs/commands_filter/overview
---

