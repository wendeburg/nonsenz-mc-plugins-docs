# Announcements - Plugin Overview

Announcements is a broadcast plugin for Paper servers (1.21+). It lets you set up automatic scheduled announcements and trigger manual announcements with commands, all formatted with MiniMessage.

## Features

- **Automatic Announcements** — Schedule recurring messages with configurable intervals, delays, and random or sequential ordering. See [Automatic Announcements](automatic_announcements.md).
- **Manual Announcements** — Trigger predefined announcements via commands, with optional sound effects and custom arguments. See [Manual Announcements](manual_announcements.md).
- **Broadcast Command** — Send a one-off formatted message to all players instantly.
- **Commands & Permissions** — Control who can reload the plugin, broadcast messages, and trigger announcements. See [Commands & Permissions](commands_and_permissions.md).

## Integrations

Announcements optionally hooks into the following plugins (soft dependencies):

| Plugin | Purpose |
|---|---|
| **PlaceholderAPI** | Use PAPI placeholders inside announcement messages |

## Configuration Files

| File | Purpose |
|---|---|
| `automatic_announcements.yml` | Scheduled announcement groups with timing and ordering settings |
| `manual_announcements.yml` | Named announcements triggered by command, with optional sounds |
| `messages.yml` | All plugin system messages |
