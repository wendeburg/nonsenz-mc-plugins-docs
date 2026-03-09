# Automatic Announcements

Automatic announcements are scheduled messages that broadcast to all players at regular intervals. They are defined in `automatic_announcements.yml`.

## How It Works

- Announcements are organized into **groups**. Each group has its own timing and set of announcements.
- When the server starts, each group begins broadcasting after its initial delay, then repeats at the configured interval.
- Groups can cycle through announcements **sequentially** (in order) or pick one **randomly** each time.
- Each announcement can have multiple lines.

## Group Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `send_every` | Integer | Required | Seconds between each announcement. Groups without this property are ignored |
| `time_offset` | Integer | `0` | Seconds to wait before the first announcement after server start |
| `random` | Boolean | `false` | When `true`, a random announcement is picked each time. When `false`, announcements cycle in order |
| `announcements` | Map | Required | A map of named announcements, each containing a list of message lines |

## Placeholders

| Placeholder | Description |
|---|---|
| `%prefix%` | The global prefix defined in `messages.yml` |

PlaceholderAPI placeholders are also supported if PlaceholderAPI is installed. Note that automatic announcements run without a player context, so only server-side (non-player-specific) PlaceholderAPI placeholders will work.

## Example

```yaml
important_announcements:
  time_offset: 60
  random: true
  send_every: 300
  announcements:
    welcome:
      - "<green>Welcome to our server!</green>"
      - "<gray>Check out /help for available commands.</gray>"
    rules:
      - "<yellow>Remember to follow the server rules!</yellow>"
    tip:
      - "<aqua>Tip: You can use /spawn to return to spawn.</aqua>"
```

This configuration:
- Waits 60 seconds after server start before the first announcement
- Picks a random announcement every 300 seconds (5 minutes)
- Each announcement is broadcast to all online players
