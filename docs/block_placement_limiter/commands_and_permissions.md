# Commands & Permissions

## Commands

### /blockplacementlimiter

The main admin command. Also available as `/bpl`.

**Permission:** `blockplacementlimiter.command.main`

#### /bpl help

Shows a list of available plugin commands.

**Usage:** `/bpl help`

---

#### /bpl reload

Reloads all configuration files (`settings.yml`, `messages.yml`, `limits.yml`, `world_restrictions.yml`) and restarts the data loading and saving cycle.

**Usage:** `/bpl reload`

**Permission:** `blockplacementlimiter.command.reload`

---

### /blockslimit

Shows the placement statistics for a specific limit group.

**Permission:** `blockplacementlimiter.command.blockslimit`

#### /blockslimit \<limit_name\>

Shows your own placement counts for the given limit group, broken down by block type, along with the total and cap.

**Usage:** `/blockslimit <limit_name>`

The `<limit_name>` argument tab-completes with all configured limit names.

---

#### /blockslimit \<limit_name\> \<player\>

Shows another player's placement statistics for the given limit group. Works for both online and offline players.

**Usage:** `/blockslimit <limit_name> <player>`

**Permission:** `blockplacementlimiter.command.blockslimit.others`

The `<player>` argument tab-completes with online player names.

---

## Permissions

All permissions default to OP. Grant individual permissions using a permissions plugin.

### Command Permissions

| Permission | Description |
|---|---|
| `blockplacementlimiter.command.main` | Allows using `/bpl` and `/bpl help`. |
| `blockplacementlimiter.command.reload` | Allows `/bpl reload`. |
| `blockplacementlimiter.command.blockslimit` | Allows `/blockslimit <limit_name>` for oneself. |
| `blockplacementlimiter.command.blockslimit.others` | Allows `/blockslimit <limit_name> <player>` for other players. |

### Limit Bypass Permissions

| Permission | Description |
|---|---|
| `blockplacementlimiter.limits.bypass.<limit_name>` | Bypasses the specified limit entirely. The player can place blocks of that type without any cap. `<limit_name>` matches the key in `limits.yml`. |

### World Restriction Bypass Permissions

| Permission | Description |
|---|---|
| `blockplacementlimiter.world_restrictions.bypass.<world_name>` | Bypasses placement restrictions for the specified world. |
| `blockplacementlimiter.world_restrictions.bypass.*` | Bypasses all world placement restrictions. |