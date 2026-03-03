# Manual Announcements

Manual announcements are predefined messages that are triggered on demand via the `/announce` command. They are defined in `manual_announcements.yml`.

## How It Works

- Each announcement has a unique ID (its key in the config file) and a message.
- Announcements can optionally play a sound to all online players.
- You can define custom arguments in the message that are filled in when the command is run.

## Announcement Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `message` | List | Required | The message lines to broadcast. Supports MiniMessage tags and placeholders |
| `sound` | Object | Optional | A sound to play to all online players when the announcement is triggered |

### Sound Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `name` | String | Required | The Bukkit sound name (e.g., `ENTITY_CAT_PURREOW`, `BLOCK_NOTE_BLOCK_PLING`) |
| `volume` | Float | `1.0` | The volume level of the sound |
| `pitch` | Float | `1.0` | The pitch of the sound |
| `delay` | Float | `0.0` | Delay in seconds before the sound plays |

## Custom Arguments

You can define placeholder arguments in your announcement messages using `%args_<key>%`. When triggering the announcement, pass arguments as `key:value` pairs.

**Example message:**
```yaml
message:
  - "<yellow>%args_player_name% has won the %args_event% event!</yellow>"
```

**Triggered with:**
```
/announce event_winner noplayer player_name:Steve event:PvP
```

**Result:** `Steve has won the PvP event!`

## Placeholders

| Placeholder | Description |
|---|---|
| `%prefix%` | The global prefix defined in `messages.yml` |
| `%args_<key>%` | A custom argument passed when the announcement is triggered |

PlaceholderAPI placeholders are also supported if PlaceholderAPI is installed. Use the `withplayer` option in the `/announce` command to provide a player context for player-specific PlaceholderAPI placeholders.

## Example

```yaml
# Simple announcement
welcome_back:
  message:
    - "<green>Welcome back to the server!</green>"
    - "<gray>Check out the latest updates with /news.</gray>"

# Announcement with sound and custom arguments
event_start:
  sound:
    name: ENTITY_ENDER_DRAGON_GROWL
    volume: 1.0
    pitch: 1.5
    delay: 0.5
  message:
    - "<gold><bold>EVENT STARTING!</bold></gold>"
    - "<yellow>%args_event_name% begins now! Head to %args_location%!</yellow>"
```
