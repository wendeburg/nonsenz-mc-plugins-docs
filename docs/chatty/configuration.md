# Configuration

## config.yml

General plugin settings.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `force_channel_format` | Boolean | `false` | When `true`, MiniMessage tags in channel messages are escaped, preventing players from using formatting in channels regardless of permissions |
| `discord_role_aliases` | Map | `{}` | Maps Discord role names to custom display text. Useful for giving roles colored names with MiniMessage tags |
| `discord_roles_allowed_minimessage_use` | List | `[]` | Discord roles whose messages's MiniMessage formatting tags will be parsed |

### Example

```yaml
force_channel_format: false

discord_role_aliases:
  "Admin": "<red>Admin</red>"
  "Moderator": "<gold>Moderator</gold>"

discord_roles_allowed_minimessage_use:
  - "Admin"
  - "Developer"
```

---

## messages.yml

All system messages the plugin sends to players. Every message supports MiniMessage tags for formatting.

### Prefix System

The `prefix` key defines a reusable prefix string. Other messages can reference it with `%prefix%`.

```yaml
prefix: "<green><bold>Chatty</bold></green> <dark_gray>»</dark_gray>"
command_only_usable_by_player: "%prefix% <red>This command can only be used by a player!</red>"
```

### Messages Reference

| Key | Placeholders | Description |
|---|---|---|
| `prefix` | — | Global prefix referenced by other messages via `%prefix%` |
| `command_only_usable_by_player` | — | Shown when the console tries to run a player-only command |
| `plugin_reloaded` | `%player_name%`, `%player_display_name%` | Confirmation after reloading the plugin |
| `player_not_in_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Shown when a player tries to leave but isn't in a channel |
| `joined_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Confirmation after joining a channel |
| `switched_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Confirmation after switching channels |
| `left_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Confirmation after leaving a channel |
| `no_permission_to_join_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Shown when the player lacks permission to join |
| `non_existent_channel` | — | Shown when the specified channel doesn't exist |
| `already_in_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Shown when the player is already in the target channel |
| `no_permission_to_spy_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Shown when the player lacks spy permission |
| `spying_all_channels` | `%player_name%`, `%player_display_name%` | Confirmation after enabling spy on all channels |
| `stopped_spying_all_channels` | `%player_name%`, `%player_display_name%` | Confirmation after disabling spy on all channels |
| `spying_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Confirmation after enabling spy on a specific channel |
| `stopped_spying_channel` | `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Confirmation after disabling spy on a specific channel |
| `channel_spy_format` | `%message%`, `%channel_name%`, `%channel_id%`, `%player_name%`, `%player_display_name%` | Format used to display spied channel messages |
| `channel_spy_format_discord_message` | `%discord_channel_name%`, `%discord_member_name%`, `%message%`, `%channel_name%`, `%channel_id%` | Format used to display spied Discord messages |
