# Commands & Permissions

## Commands

### Feeling Commands

Each feeling defined in `feelings.yml` registers its own command. See [Feelings](feelings.md) for how to configure them.

**Usage:** `/<command> <player>`

**Example:** `/hug Steve`

The `<player>` argument tab-completes with online player names.

---

### /feelings

Lists all available feelings in a paginated, clickable list.

**Usage:** `/feelings [page]`

**Permission:** `betterchatfeelings.command.feelings`

---

### /betterchatfeelings

The main plugin command for administration and player preferences. Also available as `/bcf` and `/chatfeelings`.

**Permission:** `betterchatfeelings.command.main`

#### /bcf reload

Reloads all configuration files (`settings.yml`, `feelings.yml`, `messages.yml`), re-registers feeling commands, and reloads player data.

**Usage:** `/bcf reload`

**Permission:** `betterchatfeelings.command.reload`

#### /bcf toggle

Toggles all feelings on or off for yourself. When feelings are disabled, you cannot send or receive any feelings.

**Usage:** `/bcf toggle`

**Permission:** `betterchatfeelings.command.toggle`

#### /bcf toggle \<feeling\>

Toggles a specific feeling on or off for yourself. The feeling name tab-completes from configured feelings.

**Usage:** `/bcf toggle <feeling>`

**Permission:** `betterchatfeelings.command.toggle`

#### /bcf ignore \<player\>

Adds an online player to your ignore list. Ignored players cannot send feelings to you, and you cannot send feelings to them.

**Usage:** `/bcf ignore <player>`

**Permission:** `betterchatfeelings.command.ignore`

#### /bcf unignore \<player\>

Removes a player from your ignore list.

**Usage:** `/bcf unignore <player>`

**Permission:** `betterchatfeelings.command.ignore`

---

## Permissions

All permissions are given to OPs by default. You can grant individual permissions using a permissions plugin.

### Command Permissions

| Permission | Description |
|---|---|
| `betterchatfeelings.command.main` | Access to the `/betterchatfeelings` command. |
| `betterchatfeelings.command.reload` | Access to `/bcf reload`. |
| `betterchatfeelings.command.toggle` | Access to `/bcf toggle`. |
| `betterchatfeelings.command.ignore` | Access to `/bcf ignore` and `/bcf unignore`. |
| `betterchatfeelings.command.feelings` | Access to `/feelings`. |

### Feeling Permissions

| Permission | Description |
|---|---|
| `betterchatfeelings.feeling.<feeling_name>` | Allows the player to use a specific feeling. `<feeling_name>` is the top-level key in `feelings.yml`. Granted to all players by default. |

### Other Permissions

| Permission | Description |
|---|---|
| `betterchatfeelings.bypass.cooldown` | Bypasses the global feeling cooldown. |
