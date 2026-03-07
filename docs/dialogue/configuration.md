# Configuration

## config.yml

General plugin settings.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `message_command_aliases` | List | `["msg"]` | Command aliases for the `/message` command |
| `reply_command_aliases` | List | `["r"]` | Command aliases for the `/reply` command |
| `num_mails_per_list_page` | Integer | `3` | Number of mails shown per page when viewing your mail list |

### Example

```yaml
message_command_aliases:
  - msg

reply_command_aliases:
  - r

num_mails_per_list_page: 3
```

---

## messages.yml

All messages the plugin sends to players. Every message supports MiniMessage tags for formatting.

### Prefix System

The `prefix` key defines a reusable prefix string. Other messages can reference it with `%prefix%`.

```yaml
prefix: "<green><bold>Dialogue</bold></green> <dark_gray>»</dark_gray>"
command_only_usable_by_player: "%prefix% <red>This command can only be used by a player!</red>"
```

### General Messages

| Key | Placeholders | Description |
|---|---|---|
| `prefix` | — | Global prefix referenced by other messages via `%prefix%` |
| `command_only_usable_by_player` | — | Shown when the console tries to run a player-only command |
| `plugin_reloaded` | — | Confirmation after reloading the plugin |
| `player_not_found` | `%target%` | Shown when the target player can't be found |

### Direct Messaging Messages

| Key | Placeholders | Description |
|---|---|---|
| `message_format_incoming` | `%sender%`, `%sender_display_name%`, `%recipient%`, `%recipient_display_name%`, `%message%` | Format for messages you receive |
| `message_format_outgoing` | `%sender%`, `%sender_display_name%`, `%recipient%`, `%recipient_display_name%`, `%message%` | Format for messages you send |
| `message_spy_format` | `%sender%`, `%recipient%`, `%message%` | Format used when spying on messages |
| `cant_send_message_to_self` | — | Shown when trying to message yourself |
| `no_player_to_reply_to` | — | Shown when using `/reply` with no conversation partner |
| `messagespy_on` | — | Confirmation when enabling message spy |
| `messagespy_off` | — | Confirmation when disabling message spy |

### Mail Messages

| Key | Placeholders | Description |
|---|---|---|
| `mail_sent` | `%sender%`, `%sender_display_name%`, `%recipient%` | Confirmation after sending a mail |
| `mail_received` | `%sender%`, `%sender_display_name%` | Notification when receiving a mail while online |
| `mail_not_found` | — | Shown when trying to delete a non-existent mail |
| `not_recipient_of_mail` | — | Shown when trying to delete a mail you didn't receive |
| `mail_deleted` | — | Confirmation after deleting a mail |
| `all_mails_deleted` | — | Confirmation after clearing all mails |
| `cant_send_mail_to_self` | — | Shown when trying to mail yourself |

### Notification Messages

| Key | Placeholders | Description |
|---|---|---|
| `new_mails_notification` | `%number_unread_mails%` | Shown on join when you have unread mails |
| `no_new_mails_notification` | — | Shown on join when you have no unread mails |

### Mail List Display

The `mails_list` section controls how the mail list is displayed. It includes headers, entries, and footers with pagination support.

| Key | Description |
|---|---|
| `empty_list_text` | Shown when you have no mails |
| `empty_list_text_spy` | Shown when a spied player has no mails |
| `sent_message_type` | Label for sent mail type |
| `received_message_type` | Label for received mail type |

#### Header

| Key | Placeholders | Description |
|---|---|---|
| `header.default` | `%current_page%`, `%total_pages%` | Header for your own mail list |
| `header.spy` | `%current_page%`, `%total_pages%`, `%target%`, `%mail_type%` | Header when viewing another player's mails via mailspy |

Header values are lists of lines — each item is a separate chat line.

#### Entry

Mail entries are interactive — clicking the delete button removes the mail, and hovering shows a tooltip.

| Key | Placeholders | Description |
|---|---|---|
| `entry.read` | `%mail_id%`, `%sent_at%`, `%sender%`, `%message%` | Format for mails that have been read |
| `entry.unread` | `%mail_id%`, `%sent_at%`, `%sender%`, `%message%` | Format for unread mails |
| `entry.spy` | `%mail_id%`, `%sent_at%`, `%sender%`, `%message%` | Format for mails viewed through mailspy |

Entry values are lists of lines rendered per mail item — each item is a separate chat line.

#### Footer

The footer adapts based on pagination:

| Key | Placeholders | Description |
|---|---|---|
| `footer.default` | `%previous_page%`, `%next_page%` | Shown for middle pages (has both previous and next) |
| `footer.first_page` | `%next_page%` | Shown on the first page (next only) |
| `footer.last_page` | `%previous_page%` | Shown on the last page (previous only) |
| `footer.single_page` | — | Shown when there's only one page |

Footer values are lists of lines — adding `""` as the last item inserts a trailing blank line.
