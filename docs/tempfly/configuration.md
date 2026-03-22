# Configuration

TempFly uses two configuration files: `config.yml` for general settings and `messages.yml` for all plugin messages.

## config.yml

### Options

| Property | Type | Default | Description |
|---|---|---|---|
| `default-flight-time` | Integer | `300` | Seconds of flight time given when a player uses `/fly` for the first time. |
| `slow-fall-duration` | Integer | `5` | Duration in seconds of the Slow Falling effect applied when flight expires or the player changes worlds. |
| `disabled-worlds` | List | `[]` | World names where TempFly flight is disabled. Case-insensitive. Players already flying when entering a disabled world are safely grounded. |

### action-bar

These settings are nested under `action-bar` in `config.yml`.

| Property | Type | Default | Description |
|---|---|---|---|
| `always-show` | Boolean | `false` | When `true`, the action bar is shown every second while flight is enabled. When `false`, it only appears when remaining time is at or below `warning-threshold`. |
| `warning-threshold` | Integer | `60` | Seconds remaining at which the action bar begins showing (when `always-show` is `false`). Has no effect if `always-show` is `true`. |
| `only-while-flying` | Boolean | `true` | When `true`, the action bar only shows while the player is actively airborne. When `false`, it shows whenever flight is enabled, even while grounded. |

---

## messages.yml

All messages support [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting. The `prefix` key is prepended to relevant messages automatically.

### Messages

| Key | Placeholders | Description |
|---|---|---|
| `prefix` | — | Plugin prefix prepended to most messages. |
| `fly-enabled` | — | Shown to the player when they enable flight with `/fly`. |
| `fly-disabled` | — | Shown to the player when they disable flight with `/fly`. |
| `fly-no-time` | — | Shown when a player tries to enable flight but has no remaining time. |
| `fly-disabled-world` | — | Shown when a player tries to enable flight in a disabled world. |
| `fly-enabled-world` | — | Shown when a player's flight is re-enabled after leaving a disabled world. |
| `fly-survival-only` | — | Shown when a player tries to use `/fly` outside of Survival mode. |
| `unlimited-text` | — | Text used to represent unlimited flight time (used in the action bar). |
| `action-bar` | `<time>` | Action bar message shown while flight is active. `<time>` is replaced with the formatted remaining time or the `unlimited-text` value. |
| `give-success` | `<player>`, `<amount>`, `<total>` | Shown to the admin after adding time to a player. `<amount>` is the added seconds; `<total>` is the new total. |
| `give-subtract` | `<player>`, `<amount>`, `<total>` | Shown to the admin after subtracting time from a player. `<amount>` is the absolute value subtracted; `<total>` is the new total. |
| `set-success` | `<player>`, `<amount>` | Shown to the admin after setting a player's flight time. `<amount>` is the new value in seconds. |
| `player-not-found` | — | Shown when the specified player cannot be found. |
| `reload-success` | — | Shown after a successful `/tempfly reload`. |

### Time Format

The `time-format` key controls how remaining flight time is displayed in the action bar.

| Token | Description |
|---|---|
| `<hh>` | Hours, zero-padded (e.g., `05`). |
| `<mm>` | Minutes, zero-padded (e.g., `03`). |
| `<ss>` | Seconds, zero-padded (e.g., `45`). |

The default format is `<mm>:<ss>`. If `<hh>` is omitted, minutes overflow freely beyond 59. If both `<hh>` and `<mm>` are omitted, seconds overflow freely.

**Examples:**

| Format | 3725 seconds remaining |
|---|---|
| `<mm>:<ss>` | `62:05` |
| `<hh>:<mm>:<ss>` | `01:02:05` |
| `<ss>s` | `3725s` |
