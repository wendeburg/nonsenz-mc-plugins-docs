# Chatty - Plugin Overview

Chatty is a chat management plugin for Paper servers (1.21+). It gives you full control over how chat messages are formatted, routed through channels, and filtered with rules.

## Features

- **Chat Formats** — Define permission-based chat formats with hover text and click actions using MiniMessage. See [Formats](formats.md).
- **Channels** — Create chat channels with shortcuts, range limits, world isolation, per-channel formatting, and two-way communication with discord. See [Channels](channels.md).
- **Message Rules** — Filter and process messages with regex conditions, replacements, message cancellation, and command execution. See [Rules](rules.md).
- **Commands & Permissions** — Fine-grained permissions for channel access, spying, format selection, and rule bypassing. See [Commands & Permissions](commands_and_permissions.md).

## Integrations

Chatty optionally hooks into the following plugins (soft dependencies):

| Plugin | Purpose |
|---|---|
| **PlaceholderAPI** | Use PAPI placeholders inside format text, hover text, and click values |
| **DiscordSRV** | Relay messages between Minecraft channels and Discord, with dedicated Discord message formats |

## Configuration Files

| File | Purpose |
|---|---|
| `config.yml` | General plugin settings (MiniMessage enforcement, Discord role aliases) |
| `formats.yml` | Permission-based chat format definitions |
| `channels.yml` | Channel definitions (shortcuts, range, format, visibility) |
| `rules.yml` | Message filtering rules (regex, replacement, commands) |
| `messages.yml` | All plugin system messages |
