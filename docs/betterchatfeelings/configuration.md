# Configuration

BetterChatFeelings uses two main configuration files for general settings and messages: `settings.yml` and `messages.yml`. For feeling definitions, see [Feelings](feelings.md).

## settings.yml

### Options

| Property | Type | Default | Description |
|---|---|---|---|
| `feelings_cooldown` | Integer | `60` | Cooldown in seconds between sending any feeling. Bypassed with the `betterchatfeelings.bypass.cooldown` permission. |
| `allow_self_feelings` | Boolean | `false` | Whether players can send feelings to themselves. |
| `log_feelings_to_console` | Boolean | `true` | Whether the global feeling message is logged to the server console. |
| `only_use_global_messages` | Boolean | `false` | Controls whether sender/receiver-specific messages are used. When `false` (default): sender and receiver are excluded from the global broadcast if they have a dedicated `sender`/`receiver` message - each gets their own message instead. When `true`: only the global message is sent to all players including the sender and receiver; dedicated messages are suppressed. |
| `save_player_data_every_ticks` | Integer | `6000` | How often player data is auto-saved in ticks (6000 ticks = 5 minutes). Set to `0` or a negative number to disable periodic saves. |

### DiscordSRV Integration

These settings are nested under `discordsrv_integration` in `settings.yml`.

| Property | Type | Default | Description |
|---|---|---|---|
| `enabled` | Boolean | `false` | Enable or disable the DiscordSRV integration. |
| `channel` | String | `""` | The DiscordSRV channel name to post feeling embeds to. |
| `default_embed_color` | String | `"#3E61FA"` | Default embed color in `#RRGGBB` format. Used when a feeling does not specify its own color. |

---

## PlaceholderAPI Support

If [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) is installed, you can use any PlaceholderAPI placeholder directly inside your feeling message templates in `feelings.yml`. Placeholders are resolved using the **sender** as the player context.

For example, to include the sender's LuckPerms prefix in a message:

```yaml
sender: "<gold>%luckperms_prefix%%sender% hugs %receiver%!</gold>"
```

This applies to all message types: `sender`, `receiver`, `global`, and `discord`.

Note: `%sender%` and `%receiver%` are resolved to raw usernames **before** PlaceholderAPI processing.

---

## messages.yml

All plugin messages support [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting. The `%prefix%` placeholder is available in every message and is replaced with the value of the `prefix` key.

### Messages

| Key | Placeholders | Description |
|---|---|---|
| `command_only_usable_players` | `%feeling_command%`, `%feeling_name%` | Shown when a non-player tries to use a player-only command. |
| `cant_send_feeling_to_self` | `%feeling_command%`, `%feeling_name%` | Shown when a player tries to send a feeling to themselves (if disabled). |
| `settings_reloaded` | - | Shown after a successful config reload. |
| `cant_use_command_on_self` | - | Shown when a player tries to use a command on themselves. |
| `player_not_found` | `%feeling_command%`, `%feeling_name%` (only when triggered by a feeling command) | Shown when the target player is offline or doesn't exist. When called via `/bcf ignore`, only `%prefix%` is available - `%feeling_command%` and `%feeling_name%` will appear as literal text if used in this message. |
| `feeling_not_found` | - | Shown when the specified feeling doesn't exist. |
| `cant_send_feeling_yet` | `%cooldown_left%`, `%feeling_command%`, `%feeling_name%` | Shown when the player is still on cooldown. |
| `sender_ignoring_receiver` | `%receiver%`, `%feeling_command%`, `%feeling_name%` | Shown when the sender is ignoring the target player. |
| `receiver_ignoring_sender` | `%receiver%`, `%feeling_command%`, `%feeling_name%` | Shown when the target player is ignoring the sender. |
| `sender_has_feelings_disabled` | `%feeling_command%`, `%feeling_name%` | Shown when the sender has all feelings disabled. |
| `receiver_has_feelings_disabled` | `%receiver%`, `%feeling_command%`, `%feeling_name%` | Shown when the receiver has all feelings disabled. |
| `sender_has_feeling_disabled` | `%feeling_command%`, `%feeling_name%` | Shown when the sender has the specific feeling disabled. |
| `receiver_has_feeling_disabled` | `%feeling_command%`, `%feeling_name%`, `%receiver%` | Shown when the receiver has the specific feeling disabled. |
| `ignored_player` | `%target%` | Shown when a player is added to the ignore list. |
| `player_already_ignored` | `%target%` | Shown when the target is already ignored. |
| `unignored_player` | `%target%` | Shown when a player is removed from the ignore list. |
| `player_already_unignored` | `%target%` | Shown when the target was not being ignored. |
| `disabled_feelings` | - | Shown when a player disables all feelings. |
| `enabled_feelings` | - | Shown when a player enables all feelings. |
| `disabled_feeling` | `%feeling_command%`, `%feeling_name%` | Shown when a player disables a specific feeling. |
| `enabled_feeling` | `%feeling_command%`, `%feeling_name%` | Shown when a player enables a specific feeling. |
| `page_does_not_exist` | `%total_pages%` | Shown when a player requests a non-existent page in the feelings list. |

### Feelings List

The `feelings_list` section controls the layout of the `/feelings` command output. It has three sub-sections: `header`, `feeling`, and `footer`. Each sub-section supports `default`, `first_page`, and `last_page` variants for per-page customization.

| Sub-key | Placeholders | Description |
|---|---|---|
| `empty_list_text` | | Shown when there are no enabled feelings. |
| `header.default` | `%current_page%`, `%total_pages%` | A YAML list of strings. Header shown on middle pages. |
| `header.first_page` | `%current_page%`, `%total_pages%` | A YAML list of strings. Header override for the first page. |
| `header.last_page` | `%current_page%`, `%total_pages%` | A YAML list of strings. Header override for the last page. |
| `feeling` | `%feeling_command%`, `%feeling_description%`, `%current_page%`, `%total_pages%`, `%next_page%`, `%previous_page%` | A YAML list of strings. Each list entry is rendered as a separate line for every feeling in the list. |
| `footer.default` | `%current_page%`, `%total_pages%`, `%next_page%`, `%previous_page%` | A YAML list of strings. Footer shown on middle pages. |
| `footer.first_page` | `%current_page%`, `%total_pages%`, `%next_page%` | A YAML list of strings. Footer override for the first page. |
| `footer.last_page` | `%current_page%`, `%total_pages%`, `%previous_page%` | A YAML list of strings. Footer override for the last page. |

---

## Known Limitations & Behavior Notes

- **Cooldown persistence:** Feeling cooldowns are stored in memory only. They reset when the server restarts.
- **Feelings list page size:** The `/feelings` command displays 7 entries per page. This is not configurable.
- **Particle spawn position:** Particles always spawn 1 block above the receiver's feet. The `position_offset` values in a feeling's particle config are applied on top of this fixed +1 Y offset.
- **Player data save on shutdown:** In addition to the periodic save controlled by `save_player_data_every_ticks`, player data is always saved when the server shuts down.
