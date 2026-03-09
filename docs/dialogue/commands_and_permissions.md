# Commands & Permissions

## Commands

### `/message <player> <message>`

Sends a private message to an online player. The recipient and sender each see the message in their own format (incoming/outgoing). Also sets the recipient as your reply target.

**Aliases:** Configurable in `config.yml` (default: `/msg`)
**Permission:** `dialogue.command.message`

---

### `/reply <message>`

Replies to the last player who messaged you or the last player you messaged. Works the same way as `/message` but automatically fills in the recipient.

**Aliases:** Configurable in `config.yml` (default: `/r`)
**Permission:** `dialogue.command.reply`

---

### `/mail send <player> <message>`

Sends a mail to any player. The recipient does not need to be online — mails are stored persistently and can be read later.

**Permission:** `dialogue.command.mail.send`

---

### `/mail read [page]`

Displays your received mails in a paginated list. Unread mails are highlighted differently from read mails. Each entry has a clickable delete button.

The `[page]` argument is 1-indexed — `/mail read 1` shows the first page. Omitting the page defaults to page 1.

> **Note:** Reading any page of your mail list marks **all** your mails as read at once. Read/unread status is tracked by a single "last read" timestamp, not per-mail.

**Permission:** `dialogue.command.mail.read`

---

### `/mail delete <mail_id>`

Deletes a specific mail from your inbox by its ID.

**Permission:** `dialogue.command.mail.delete`

---

### `/mail deleteall`

Clears all mails from your inbox.

**Permission:** `dialogue.command.mail.deleteall`

---

### `/messagespy`

Toggles message spy mode. When enabled, you can see all private messages sent between other players. Players with the bypass permission are excluded from being spied on.

**Permission:** `dialogue.command.messagespy`

> **Note:** Players who have the `dialogue.command.messagespy` permission are automatically placed into spy mode when they join the server, and removed from spy mode when they leave. Spy mode is therefore session-scoped and always-on by default for permitted players. Using `/messagespy` toggles spy mode off (or back on) for the current session.

---

### `/mailspy sent <player> [page]`

View all mails sent by a specific player. Supports pagination.

**Permission:** `dialogue.command.mailspy.sent`

---

### `/mailspy received <player> [page]`

View all mails received by a specific player. Supports pagination.

**Permission:** `dialogue.command.mailspy.received`

---

### `/mailspy delete <mail_id>`

Delete a specific mail entry from the system.

**Permission:** `dialogue.command.mailspy.delete`

---

### `/mailspy deleteall sent <player>`

Delete all mails sent by a specific player.

**Permission:** `dialogue.command.mailspy.deleteall`

---

### `/mailspy deleteall received <player>`

Delete all mails received by a specific player.

**Permission:** `dialogue.command.mailspy.deleteall`

---

### `/dialogue reload`

Reloads all configuration files (`config.yml`, `messages.yml`) and re-registers command aliases.

**Permission:** `dialogue.command.reload`

---

## Permissions

All permissions are given to OPs by default. You can grant individual permissions using a permissions plugin.

### Command Permissions

| Permission | Description |
|---|---|
| `dialogue.command.message` | Allows using `/message` |
| `dialogue.command.reply` | Allows using `/reply` |
| `dialogue.command.mail` | Parent permission for the `/mail` command. |
| `dialogue.command.mail.send` | Allows using `/mail send` |
| `dialogue.command.mail.read` | Allows using `/mail read` |
| `dialogue.command.mail.delete` | Allows using `/mail delete` |
| `dialogue.command.mail.deleteall` | Allows using `/mail deleteall` |
| `dialogue.command.messagespy` | Allows using `/messagespy` and enables automatic spy mode on join (see above) |
| `dialogue.command.mailspy` | Parent permission for the `/mailspy` command. |
| `dialogue.command.mailspy.sent` | Allows using `/mailspy sent` |
| `dialogue.command.mailspy.received` | Allows using `/mailspy received` |
| `dialogue.command.mailspy.delete` | Allows using `/mailspy delete` |
| `dialogue.command.mailspy.deleteall` | Allows using `/mailspy deleteall sent` and `/mailspy deleteall received` |
| `dialogue.command.reload` | Allows using `/dialogue reload` |

### Other Permissions

| Permission | Description |
|---|---|
| `dialogue.messagespy.bypass` | Private messages sent by or to a player with this permission will not be visible to message spies |
