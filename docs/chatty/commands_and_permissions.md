# Commands & Permissions

## Commands

### `/chatty reload`

Reloads all configuration files (`config.yml`, `formats.yml`, `channels.yml`, `rules.yml`, `messages.yml`) and re-registers channel shortcut commands.

**Permission:** `chatty.command.reload`

---

### `/channel join <channel_id>`

Joins a channel or switches to it if you're already in a different channel. Tab completion suggests channels you have permission to join.

**Permission:** `chatty.command.channel.join`
**Arguments:** `channel_id` - the channel's ID as defined in `channels.yml`

---

### `/channel leave`

Leaves your current channel, returning you to global chat.

**Permission:** `chatty.command.channel.leave`

---

### `/channel spy <channel_id>`

Toggles spying on a specific channel. When spying, you can see messages sent in that channel without being a member. Tab completion suggests channels you have permission to spy on.

**Permission:** `chatty.command.channel.spy`
**Arguments:** `channel_id` - the channel to spy on

---

### `/channel spyall`

Toggles spying on all channels you have permission to spy on.

**Permission:** `chatty.command.channel.spy`

> **Auto-spy on join:** Players automatically begin spying on every channel they have `chatty.spy.channel.<channel_id>` permission for when they join the server. This mirrors the effect of `/channel spyall` and does not require players to opt in manually.

---

### Shortcut Commands

Each channel can define shortcut commands in `channels.yml`. These let you send a message directly to a channel without joining it.

**Example:** If `staff_chat` has `shortcut_commands: ["sc", "staffchat"]`, then:
- `/sc hello` sends "hello" to the staff chat
- `/staffchat hello` sends "hello" to the staff chat

**Permission:** `chatty.channel.<channel_id>`

---

## Permissions

All permissions are given to OPs by default. You can grant individual permissions using a permissions plugin.

### Command Permissions

| Permission | Description |
|---|---|
| `chatty.command.reload` | Allows using `/chatty reload` |
| `chatty.command.channel.join` | Allows using `/channel join` |
| `chatty.command.channel.leave` | Allows using `/channel leave` |
| `chatty.command.channel.spy` | Allows using `/channel spy` and `/channel spyall` |

### Channel Permissions

| Permission | Description |
|---|---|
| `chatty.channel.<channel_id>` | Grants access to a channel - allows joining, receiving messages, and using the channel's shortcut and shortcut commands |
| `chatty.spy.channel.<channel_id>` | Allows spying on a channel (viewing messages without joining) |

### Format Permissions

| Permission | Description |
|---|---|
| `chatty.format.<format_name>` | Applies a specific chat format to the player. The `default` format does not require a permission |

### Rule Permissions

| Permission | Description |
|---|---|
| `chatty.rule.bypass.<rule_name>` | Bypasses a specific message rule, exempting the player from its conditions |

### Other Permissions

| Permission | Description |
|---|---|
| `chatty.use.minimessagetags` | Allows the player to use MiniMessage formatting tags in their chat messages. Has no effect when `force_channel_format` is enabled in `config.yml` |
