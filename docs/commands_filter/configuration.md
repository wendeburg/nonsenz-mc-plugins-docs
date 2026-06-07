# Configuration

## settings.yml

Controls which commands are filtered for each group and how filters are applied.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `permissions_groups_list` | List | `[]` | Ordered list of permission group names, from highest to lowest priority. The first group a player belongs to (checked top-to-bottom) determines which filter is applied |
| `hide_namespaced_commands` | Boolean | `false` | When `true`, removes namespaced command variants (e.g. `minecraft:gamemode`, `commandsfilter:commandsfilter`) from the tab-completion list. Bypass with `commandsfilter.bypass.hidenamespacedcommands` |
| `use_filters_list_as` | String | `whitelist` | How to interpret the `filters` lists. Must be `whitelist` (only listed commands are shown/allowed) or `blacklist` (listed commands are hidden/blocked) |
| `block_filtered_commands` | Boolean | `false` | When `true`, players who attempt to run a filtered command will have the execution cancelled and receive the `command_is_blocked` message. Bypass with `commandsfilter.bypass.filters_list` |
| `filters` | Map | `{}` | Per-group command lists. Each key is a group name from `permissions_groups_list` and its value is a list of command names (without `/`) |

### Group Priority and Inheritance

The plugin resolves a player's group by checking `group.<group_name>` permissions in the order defined in `permissions_groups_list`. The first match wins.

**No configured group:** If a player does not match any group in `permissions_groups_list`, all commands are hidden from tab-completion. If `block_filtered_commands` is enabled, all commands are also blocked from execution.

**Whitelist mode:** Higher-priority groups automatically inherit all commands from lower-priority groups. You only need to list commands that are exclusive to each group. If a group has an empty list, it inherits the full list of the next lower-priority group.

**Blacklist mode:** Each group has its own independent blacklist. An empty list means no commands are blocked for that group - there is no inheritance between groups.

**Example:** With groups `[owner, admin, member]` in whitelist mode:
- `member` can see commands defined under `member`
- `admin` can see `admin` commands **plus** all `member` commands
- `owner` can see `owner` commands **plus** all `admin` and `member` commands

### Example

```yaml
# Permissions' plugin player groups, sorted by priority
permissions_groups_list:
  - owner
  - admin
  - member

# Filters namespaced commands from the commands list
# Bypass permission: commandsfilter.bypass.hidenamespacedcommands
hide_namespaced_commands: true

# Sets whether to use filters as whitelist or blacklist
# Values can be: whitelist / blacklist
# Bypass permission: commandsfilter.bypass.filters_list
use_filters_list_as: "whitelist"

# Blocks the filtered commands from being used
block_filtered_commands: true

# Sets the filtered commands for each group
filters:
  member:
    - help
    - spawn
    - home
    - sethome
  admin:
    - kick
    - ban
    - mute
  owner:
    - op
    - stop
    - reload
```

In this example with whitelist mode:
- A `member` can only see and use: `help`, `spawn`, `home`, `sethome`
- An `admin` can see and use: `kick`, `ban`, `mute` + all member commands
- An `owner` can see and use: `op`, `stop`, `reload` + all admin and member commands

---

## messages.yml

All system messages the plugin sends to players. Every message supports MiniMessage tags for formatting. The `%prefix%` placeholder is available in every message and is replaced with the value of the `prefix` key.

### Messages Reference

| Key | Description |
|---|---|
| `prefix` | Global prefix referenced by other messages via `%prefix%` |
| `plugin_reloaded` | Confirmation after reloading the plugin |
| `command_is_blocked` | Shown when a player tries to use a filtered command and `block_filtered_commands` is enabled |
