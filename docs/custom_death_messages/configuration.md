# Configuration

## config.yml

General plugin settings.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `show_debug_messages` | Boolean | `false` | Enables debug logging in the console. When `true`, the plugin logs the damage type and killer entity type for each death, useful for finding the correct values to use in `death_messages.yml` |
| `use_display_name_for_weapon_placeholder` | Boolean | `false` | Controls how `%weapon%` is resolved. When `false` (default), uses the item's translated default name (e.g. "Diamond Sword"). When `true`, uses the item's custom rename if set; falls back to the translated name if no custom name is set |

---

## messages.yml

All system messages the plugin sends to players. Every message supports MiniMessage tags for formatting. The `%prefix%` placeholder is available in every message and is replaced with the value of the `prefix` key.

### Messages Reference

| Key | Placeholders | Description |
|---|---|---|
| `prefix` | — | Global prefix referenced by other messages via `%prefix%` |
| `plugin_reloaded` | — | Confirmation sent after reloading the plugin |

---

## death_messages.yml

Defines all custom death message entries. See [Death Messages](death_messages.md) for the full format reference.

> **Note:** If `death_messages.yml` fails to parse (e.g. due to a YAML syntax error), all custom death messages are disabled until the next successful reload. Deaths will fall back to vanilla messages. The error is logged to the console.
