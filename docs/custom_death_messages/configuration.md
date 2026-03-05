# Configuration

## config.yml

General plugin settings.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `show_debug_messages` | Boolean | `false` | Enables debug logging in the console. When `true`, the plugin logs the damage type and killer entity type for each death, useful for finding the correct values to use in `death_messages.yml` |
| `use_display_name_for_weapon_placeholder` | Boolean | `false` | Controls how the `%weapon%` placeholder is resolved. When `true`, uses the item's custom display name (e.g. a renamed sword). When `false`, uses the item's default name (e.g. "Diamond Sword") |

### Example

```yaml
show_debug_messages: false
use_display_name_for_weapon_placeholder: false
```

---

## messages.yml

All system messages the plugin sends to players. Every message supports MiniMessage tags for formatting.

### Prefix System

The `prefix` key defines a reusable prefix string. Other messages can reference it with `%prefix%`.

```yaml
prefix: "<yellow><bold>CustomDeathMessages</bold></yellow> <dark_gray>»</dark_gray>"
plugin_reloaded: "%prefix% <green>Plugin reloaded!</green>"
```

### Messages Reference

| Key | Placeholders | Description |
|---|---|---|
| `prefix` | — | Global prefix referenced by other messages via `%prefix%` |
| `plugin_reloaded` | — | Confirmation sent after reloading the plugin |
