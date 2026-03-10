# Dialogue - Plugin Overview

Dialogue is a messaging and mail plugin for Paper servers (1.21+). It provides direct messaging between players, a persistent mail system for offline communication, and admin tools for monitoring player conversations.

## Features

- **Direct Messaging** — Send private messages to online players and quickly reply to conversations. See [Commands & Permissions](commands_and_permissions.md).
- **Mail System** — Send mails to any player, even if they're offline. Mails are stored persistently and support read/unread tracking with paginated viewing. See [Configuration](configuration.md).
- **Message Spy** — Admins can monitor private messages between players in real time. See [Commands & Permissions](commands_and_permissions.md).
- **Mail Spy** — Admins can view and manage any player's sent or received mails. See [Commands & Permissions](commands_and_permissions.md).
- **Join Notifications** — Players are notified of unread mails when they join the server.

## Integrations

Dialogue optionally hooks into the following plugins (soft dependencies):

| Plugin | Purpose |
|---|---|
| **PremiumVanish / SuperVanish** | Filters vanished players from command auto-completion, so vanished staff aren't revealed through tab suggestions |

## Configuration Files

| File | Purpose |
|---|---|
| `config.yml` | General plugin settings (command aliases, mail pagination) |
| `messages.yml` | All plugin messages and formats (direct messages, mail list display, notifications) |
| `mails_storage.db` | SQLite database storing all mails and per-player read timestamps. Located at `plugins/Dialogue/mails_storage.db`. |
