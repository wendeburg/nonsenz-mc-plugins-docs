# Configuration

BetterChatFeelings uses two main configuration files for general settings and messages: `settings.yml` and `messages.yml`. For feeling definitions, see [Feelings](feelings.md).

## settings.yml

### Options

| Property | Type | Default | Description |
|---|---|---|---|
| `feelings_cooldown` | Integer | `60` | Cooldown in seconds between sending any feeling. Bypassed with the `betterchatfeelings.bypass.cooldown` permission. |
| `allow_self_feelings` | Boolean | `false` | Whether players can send feelings to themselves. |
| `log_feelings_to_console` | Boolean | `true` | Whether the global feeling message is logged to the server console. |
| `only_use_global_messages` | Boolean | `false` | When enabled, only the global message is used for everyone. Sender and receiver specific messages are suppressed. |
| `sender_text_provider` | String | `"default"` | PlaceholderAPI placeholder string for the sender's display name (e.g., `%luckperms_prefix%%player_name%`). Set to `"default"` to use the raw player name. |
| `receiver_text_provider` | String | `"default"` | Same as above but for the receiver's display name. |
| `save_player_data_every_ticks` | Integer | `6000` | How often player data is auto-saved in ticks (6000 ticks = 5 minutes). Set to `0` or a negative number to disable periodic saves. |

### DiscordSRV Integration

These settings are nested under `discordsrv_integration` in `settings.yml`.

| Property | Type | Default | Description |
|---|---|---|---|
| `enabled` | Boolean | `false` | Enable or disable the DiscordSRV integration. |
| `channel` | String | `""` | The DiscordSRV channel name to post feeling embeds to. |
| `default_embed_color` | String | `"#3E61FA"` | Default embed color in `#RRGGBB` format. Used when a feeling does not specify its own color. |
| `sender_text_provider` | String | `"default"` | PlaceholderAPI placeholder for the sender name in Discord messages. |
| `receiver_text_provider` | String | `"default"` | PlaceholderAPI placeholder for the receiver name in Discord messages. |

### Example

```yaml
feelings_cooldown: 60
allow_self_feelings: false
log_feelings_to_console: true
only_use_global_messages: false
sender_text_provider: "default"
receiver_text_provider: "default"
save_player_data_every_ticks: 6000

discordsrv_integration:
  enabled: false
  channel: ""
  default_embed_color: "#3E61FA"
  sender_text_provider: "default"
  receiver_text_provider: "default"
```

---

## messages.yml

All plugin messages support [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting. The `%prefix%` placeholder is available in every message and is replaced with the value of the `prefix` key.

### Prefix

```yaml
prefix: '<green><bold>FEELINGS</bold></green> <dark_gray>»</dark_gray>'
```

### Messages

| Key | Placeholders | Description |
|---|---|---|
| `command_only_usable_players` | `%prefix%` | Shown when a non-player tries to use a player-only command. |
| `cant_send_feeling_to_self` | `%prefix%` | Shown when a player tries to send a feeling to themselves (if disabled). |
| `settings_reloaded` | `%prefix%` | Shown after a successful config reload. |
| `cant_use_command_on_self` | `%prefix%` | Shown when a player tries to use a command on themselves. |
| `player_not_found` | `%prefix%` | Shown when the target player is offline or doesn't exist. |
| `feeling_not_found` | `%prefix%` | Shown when the specified feeling doesn't exist. |
| `cant_send_feeling_yet` | `%prefix%`, `%cooldown_left%` | Shown when the player is still on cooldown. |
| `sender_ignoring_receiver` | `%prefix%`, `%receiver%` | Shown when the sender is ignoring the target player. |
| `receiver_ignoring_sender` | `%prefix%`, `%receiver%` | Shown when the target player is ignoring the sender. |
| `sender_has_feelings_disabled` | `%prefix%` | Shown when the sender has all feelings disabled. |
| `receiver_has_feelings_disabled` | `%prefix%`, `%receiver%` | Shown when the receiver has all feelings disabled. |
| `sender_has_feeling_disabled` | `%prefix%`, `%feeling_command%` | Shown when the sender has the specific feeling disabled. |
| `receiver_has_feeling_disabled` | `%prefix%`, `%feeling_command%`, `%receiver%` | Shown when the receiver has the specific feeling disabled. |
| `ignored_player` | `%prefix%`, `%target%` | Shown when a player is added to the ignore list. |
| `player_already_ignored` | `%prefix%`, `%target%` | Shown when the target is already ignored. |
| `unignored_player` | `%prefix%`, `%target%` | Shown when a player is removed from the ignore list. |
| `player_already_unignored` | `%prefix%`, `%target%` | Shown when the target was not being ignored. |
| `disabled_feelings` | `%prefix%` | Shown when a player disables all feelings. |
| `enabled_feelings` | `%prefix%` | Shown when a player enables all feelings. |
| `disabled_feeling` | `%prefix%`, `%feeling_command%` | Shown when a player disables a specific feeling. |
| `enabled_feeling` | `%prefix%`, `%feeling_command%` | Shown when a player enables a specific feeling. |
| `page_does_not_exist` | `%prefix%`, `%total_pages%` | Shown when a player requests a non-existent page in the feelings list. |

### Feelings List

The `feelings_list` section controls the layout of the `/feelings` command output. It has three sub-sections: `header`, `feeling`, and `footer`. Each sub-section supports `default`, `first_page`, and `last_page` variants for per-page customization.

| Sub-key | Placeholders | Description |
|---|---|---|
| `empty_list_text` | | Shown when there are no enabled feelings. |
| `header.default` | `%current_page%`, `%total_pages%` | Header shown on middle pages. |
| `header.first_page` | `%current_page%`, `%total_pages%` | Header override for the first page. |
| `header.last_page` | `%current_page%`, `%total_pages%` | Header override for the last page. |
| `feeling` | `%feeling_command%`, `%feeling_description%`, `%current_page%`, `%total_pages%`, `%next_page%`, `%previous_page%` | Template for each feeling entry row. |
| `footer.default` | `%current_page%`, `%total_pages%`, `%next_page%`, `%previous_page%` | Footer shown on middle pages. |
| `footer.first_page` | `%current_page%`, `%total_pages%`, `%next_page%` | Footer override for the first page. |
| `footer.last_page` | `%current_page%`, `%total_pages%`, `%previous_page%` | Footer override for the last page. |
