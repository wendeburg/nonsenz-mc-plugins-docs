# Channels

Channels provide scoped chat areas where players can communicate. They are defined in `channels.yml`.

## Channel Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `name` | String | Required | Display name of the channel |
| `shortcut` | String | Optional | A single character that, when typed at the start of a message, routes it to this channel (e.g., `!`) |
| `shortcut_commands` | List | Optional | Command aliases that send messages directly to this channel (e.g., `sc`, `staffchat`) |
| `range` | Integer | `-1` | Maximum distance in blocks for message visibility. `-1` means no distance limit (global) |
| `format` | String | Required | MiniMessage format string for messages in this channel |
| `discord_message_format` | String | Optional | Format for messages coming from Discord into this channel |
| `always_visible` | Boolean | `true` | When `true`, players with the channel permission can see messages without joining. When `false`, only joined members see messages |
| `same_world` | Boolean | `false` | When `true`, only players in the same world as the sender can see messages |

## Permissions

- `chatty.channel.<channel_id>` — Allows joining and receiving messages from the channel. Also grants access to the channel's shortcut and shortcut commands.
- `chatty.spy.channel.<channel_id>` — Allows spying on the channel (see messages without joining).

## Shortcuts

There are two ways to quickly send messages to a channel without joining it:

1. **Shortcut prefix** — Type the shortcut character at the start of your message. For example, if `staff_chat` has shortcut `!`, typing `!hello` sends "hello" to the staff chat.
2. **Shortcut commands** — Use a command alias. For example, `/sc hello` or `/staffchat hello` sends "hello" to the staff chat.

## Range & Visibility

- **Range `-1`** — Messages reach all players (global).
- **Range `> 0`** — Only players within the specified number of blocks can see the message.
- **`same_world: true`** — Restricts visibility to players in the sender's world.
- **`always_visible: true`** — Players with the channel permission see messages even if they haven't joined the channel.
- **`always_visible: false`** — Only players who have explicitly joined the channel see messages.

## Placeholders

### Channel Format Placeholders

| Placeholder | Description |
|---|---|
| `%player_name%` | The sender's username |
| `%player_display_name%` | The sender's display name |
| `%channel_name%` | The channel's display name |
| `%channel_id%` | The channel's ID (config key) |
| `%message%` | The message content |

### Discord Message Format Placeholders

These are available in the `discord_message_format` field:

| Placeholder | Description |
|---|---|
| `%discord_member_name%` | The Discord user's effective name |
| `%discord_member_role%` | The Discord role name (with alias applied, or role color if no alias is set) |
| `%discord_member_role_raw%` | The Discord role name (plain, no styling) |
| `%discord_member_role_color%` | The Discord role color as `#RRGGBB` |
| `%discord_channel_name%` | The Discord channel name |
| `%discord_channel_internal_id%` | DiscordSRV's internal channel ID |
| `%channel_name%` | The Minecraft channel's display name |
| `%channel_id%` | The Minecraft channel's ID |
| `%message%` | The message content |

## Example

```yaml
staff_chat:
  name: "Staff Chat"
  shortcut: "!"
  shortcut_commands:
    - "sc"
    - "staffchat"
  range: -1
  format: "<blue>[%channel_name%]</blue> <yellow>%player_name%</yellow> <dark_gray>›</dark_gray> %message%"
  discord_message_format: "<gray><bold>[DISCORD]</bold></gray> <blue>[%channel_name%]</blue> <yellow>%discord_member_name%</yellow> <dark_gray>›</dark_gray> %message%"
  always_visible: true
  same_world: true

local_chat:
  name: "Local Chat"
  shortcut: "?"
  shortcut_commands:
    - "lc"
    - "localchat"
  range: 100
  format: "<green>[%channel_name%]</green> <yellow>%player_name%</yellow> <dark_gray>›</dark_gray> %message%"
  always_visible: true
  same_world: true
```
