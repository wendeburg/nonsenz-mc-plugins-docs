# Configuration

## messages.yml

All system messages the plugin sends to players. Every message supports MiniMessage tags for formatting.

### Prefix System

The `prefix` key defines a reusable prefix string. Other messages can reference it with `%prefix%`.

```yaml
prefix: "<blue><bold>Announcements</bold></blue> <dark_gray>»</dark_gray>"
plugin_reloaded: "%prefix% <green>Plugin reloaded!</green>"
```

### Messages Reference

| Key | Description |
|---|---|
| `prefix` | Global prefix referenced by other messages via `%prefix%` |
| `plugin_reloaded` | Confirmation after reloading the plugin |
| `player_not_found` | Shown when the specified player is not online |
| `manual_announcement_not_found` | Shown when the specified announcement ID doesn't exist |

### Example

```yaml
prefix: "<blue><bold>Announcements</bold></blue> <dark_gray>»</dark_gray>"

plugin_reloaded: "%prefix% <green>Plugin reloaded!</green>"
player_not_found: "%prefix% <red>Couldn't find target player!</red>"
manual_announcement_not_found: "%prefix% <red>That announcement doesn't exist!</red>"
```