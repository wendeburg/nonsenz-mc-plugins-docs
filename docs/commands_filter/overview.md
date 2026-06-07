# CommandsFilter - Plugin Overview

CommandsFilter is a command visibility and access control plugin for Paper servers (1.21+). It lets you control which commands players can see in tab-completion and optionally prevent them from using filtered commands, based on their permission group.

## Features

- **Command List Filtering** - Hide commands from tab-completion based on the player's permission group, using either a whitelist or blacklist. See [Configuration](configuration.md).
- **Command Usage Blocking** - Optionally block players from executing filtered commands entirely, not just from seeing them. See [Configuration](configuration.md).
- **Namespaced Command Hiding** - Strip namespaced command variants (e.g. `minecraft:tp`, `commandsfilter:commandsfilter`) from the tab-completion list based on permissions. See [Configuration](configuration.md).
- **Group Inheritance** - In whitelist mode, higher-priority groups automatically inherit all commands from lower-priority groups. In blacklist mode, each group has an independent list with no inheritance. See [Configuration](configuration.md).
- **Commands & Permissions** - Reload the plugin and bypass filters with fine-grained permissions. See [Commands & Permissions](commands_and_permissions.md).

## Requirements

CommandsFilter reads group membership from a permissions plugin (e.g. LuckPerms) via standard `group.<group_name>` permissions. Players must have the appropriate `group.<group_name>` permission for their group's filter to apply.

## Configuration Files

| File | Purpose |
|---|---|
| `settings.yml` | Group list, filter mode, per-group command filters, and behavior options |
| `messages.yml` | All plugin system messages |
