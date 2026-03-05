# Commands & Permissions

## Commands

### `/announcements reload`

Reloads all configuration files (`automatic_announcements.yml`, `manual_announcements.yml`, `messages.yml`). Automatic announcement schedules are restarted with the updated settings.

**Permission:** `announcements.command.reload`

---

### `/broadcast reload <message>`

Broadcasts a custom message to all online players. The message supports MiniMessage tags for formatting.

**Permission:** `announcements.command.broadcast`
**Arguments:** `message` — the text to broadcast (supports MiniMessage tags)

**Example:**
- `/broadcast reload <red><bold>Server restarting in 5 minutes!</bold></red>`

---

### `/announce <announcement> noplayer [extra_arguments]`

Triggers a manual announcement without a player context. The announcement is broadcast to all online players.

**Permission:** `announcements.command.announce`
**Arguments:**
- `announcement` — the announcement ID as defined in `manual_announcements.yml` (tab-completable)
- `extra_arguments` — optional `key:value` pairs separated by spaces, used to fill `%args_<key>%` placeholders

**Example:**
- `/announce welcome_back noplayer`
- `/announce event_start noplayer event_name:PvP location:Arena`

---

### `/announce <announcement> withplayer <player> [extra_arguments]`

Triggers a manual announcement with a player context. This allows PlaceholderAPI to resolve player-specific placeholders for the specified player. The announcement is still broadcast to all online players.

**Permission:** `announcements.command.announce`
**Arguments:**
- `announcement` — the announcement ID as defined in `manual_announcements.yml` (tab-completable)
- `player` — an online player's name (tab-completable), used as context for PlaceholderAPI placeholders
- `extra_arguments` — optional `key:value` pairs separated by spaces, used to fill `%args_<key>%` placeholders

**Example:**
- `/announce player_join withplayer Steve`
- `/announce achievement withplayer Steve achievement:Dragon_Slayer`

---

## Permissions

All permissions are given to OPs by default. You can grant individual permissions using a permissions plugin.

| Permission | Description |
|---|---|
| `announcements.command.reload` | Allows using `/announcements reload` |
| `announcements.command.broadcast` | Allows using `/broadcast reload` to send custom messages |
| `announcements.command.announce` | Allows using `/announce` to trigger manual announcements |
