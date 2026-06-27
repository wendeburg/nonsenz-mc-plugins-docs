# Chat Formats

Chat formats control how player messages appear in global chat (outside of channels). They are defined in `formats.yml`.

## How It Works

- Each format has a **priority** - the format with the highest priority that the player has permission for is used.
- The `default` format is required and applies to all players without needing a permission.
- Other formats require the permission `chatty.format.<format_name>`.

## Format Structure

A format is made up of four sections displayed in order: **prefix**, **name**, **suffix**, and **message**. Each section has three properties:

| Property | Type | Description |
|---|---|---|
| `text` | String | The display text, supports MiniMessage tags and placeholders |
| `hover` | List | Lines of text shown when hovering over this section |
| `click` | Object | Click action triggered when this section is clicked |

### Click Actions

| Action | Description |
|---|---|
| `SUGGEST_COMMAND` | Pre-fills the chat box with the value |
| `RUN_COMMAND` | Executes the value as a command |
| `COPY_TO_CLIPBOARD` | Copies the value to the player's clipboard |
| `OPEN_URL` | Opens the value as a URL in the player's browser |
| `OPEN_FILE` | Opens a local file |
| `CUSTOM` | Fires a custom event identified by a namespaced key. Intended for plugins that listen for custom click events via the `PlayerCustomClickEvent` listener. |

Click action format:
```yaml
click:
  action: 'SUGGEST_COMMAND'
  value: '/msg %player_name% '
```

The `CUSTOM` action takes a namespaced key as its value:
```yaml
click:
  action: 'CUSTOM'
  value: 'myplugin:event_name'
```

## Placeholders

| Placeholder | Description |
|---|---|
| `%player_name%` | The player's username |
| `%player_display_name%` | The player's display name |
| `%message%` | The chat message content |

PlaceholderAPI placeholders are also supported if PlaceholderAPI is installed.

## Example

```yaml
# No permission needed - applies to all players
default:
  priority: 0
  prefix:
    text: ''
    hover: []
    click: {}
  name:
    text: '<green>%player_name%</green> '
    hover:
      - "<white>Some text</white>"
      - "<white>That appears on hover</white>"
    click:
      action: 'SUGGEST_COMMAND'
      value: '/msg %player_name% '
  suffix:
    text: '<dark_gray>›</dark_gray> '
    hover: []
    click: {}
  message:
    text: '%message%'
    hover: []
    click: {}

# Requires chatty.format.vip permission
vip:
  priority: 10
  prefix:
    text: '<gold>[VIP]</gold> '
    hover:
      - '<yellow>VIP Player</yellow>'
    click: {}
  name:
    text: '<gold>%player_name%</gold> '
    hover: []
    click:
      action: 'SUGGEST_COMMAND'
      value: '/msg %player_name% '
  suffix:
    text: '<dark_gray>›</dark_gray> '
    hover: []
    click: {}
  message:
    text: '%message%'
    hover: []
    click: {}
```

## MiniMessage Tags

Format text supports MiniMessage tags for styling. Players with the `chatty.use.minimessagetags` will have the MiniMessage tags in their messages parsed (unless in a channel with `force_channel_format` enabled in `config.yml`).