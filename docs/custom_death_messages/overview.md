# CustomDeathMessages - Plugin Overview

CustomDeathMessages is a death message customization plugin for Paper servers (1.21+). It lets you define custom death messages based on the type of damage and the entity that caused the kill, with full MiniMessage formatting support.

## Features

- **Death Message Matching** — Define death messages that trigger based on damage type and killer entity, with wildcard pattern support. See [Death Messages](death_messages.md).
- **Placeholders** — Use placeholders for player names, killer names, weapons, death coordinates, and more. See [Death Messages](death_messages.md#placeholders).
- **Weapon Detection** — Automatically detects the weapon used in player kills, with separate messages for unarmed kills. See [Death Messages](death_messages.md#weapon-detection).
- **MiniMessage Formatting** — Style your death messages with colors, bold, italic, and other MiniMessage tags.
- **Commands & Permissions** — Reload configuration in-game with permission control. See [Commands & Permissions](commands_and_permissions.md).

## Configuration Files

| File | Purpose |
|---|---|
| `config.yml` | General plugin settings (debug mode, weapon display) |
| `messages.yml` | Plugin system messages (prefix, reload confirmation) |
| `death_messages.yml` | Death message definitions (damage types, entities, messages) |
