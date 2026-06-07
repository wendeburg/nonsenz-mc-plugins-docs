# Commands & Permissions

## Commands

### /fly

Toggles flight on or off for the player. Only usable in Survival mode.

**Usage:** `/fly`

**Permission:** `tempfly.command.fly`

On first use, the player is given the default flight time defined in `config.yml`. Disabling flight while airborne does not apply slow falling to the player.

---

### /tempfly

The main admin command for managing player flight time.

**Permission:** `tempfly.command.tempfly`

#### /tempfly modify \<player\> \<amount\>

Adds or subtracts flight time from a player. Use a positive number to add time and a negative number to subtract.

**Usage:** `/tempfly modify <player> <amount>`

**Permission:** `tempfly.command.tempfly.modify`

The `<player>` argument tab-completes with online player names.

**Examples:**
- `/tempfly modify Steve 300` - adds 300 seconds to Steve's flight time
- `/tempfly modify Steve -60` - subtracts 60 seconds from Steve's flight time

---

#### /tempfly set \<player\> \<seconds\>

Sets a player's flight time to an exact number of seconds, replacing any existing time.

**Usage:** `/tempfly set <player> <seconds>`

**Permission:** `tempfly.command.tempfly.set`

The `<player>` argument tab-completes with online player names. `<seconds>` must be a non-negative integer.

---

#### /tempfly reload

Saves player data, then reloads `config.yml`, `messages.yml`, and player data from disk.

**Usage:** `/tempfly reload`

**Permission:** `tempfly.command.tempfly.reload`

---

## Permissions

All permissions default to OP. Grant individual permissions using a permissions plugin.

### Command Permissions

| Permission | Description |
|---|---|
| `tempfly.command.fly` | Allows using `/fly`. |
| `tempfly.command.tempfly` | Allows using `/tempfly` and its subcommands. |
| `tempfly.command.tempfly.modify` | Allows `/tempfly modify`. |
| `tempfly.command.tempfly.set` | Allows `/tempfly set`. |
| `tempfly.command.tempfly.reload` | Allows `/tempfly reload`. |

### Other Permissions

| Permission | Description |
|---|---|
| `tempfly.unlimitedtime` | Grants unlimited flight time. The action bar shows the `unlimited-text` value from `messages.yml`. |
| `tempfly.bypass.disabledworlds` | Allows flying in worlds listed under `disabled-worlds` in `config.yml`. |
