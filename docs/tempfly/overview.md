# TempFly

TempFly is a temporary flight plugin for Paper servers (1.21+). It lets you grant players a limited amount of flight time that counts down while they're actively flying, with configurable world restrictions, action bar display, and safe landing when time expires.

## Features

- **Time-Limited Flight**: Players receive a configurable amount of flight time that decrements only while actively flying. When time runs out, a Slow Falling effect is applied to prevent fall damage.

- **Action Bar Display**: Displays remaining flight time in the action bar. Configurable to always show, show only below a warning threshold, or only show while the player is airborne.

- **World Restrictions**: Disable flight in specific worlds. Players entering a disabled world while flying are safely grounded. Can be bypassed with a permission.

- **Flight Persistence**: Flight state is saved across server restarts and rejoins. Players who were flying when they left the server resume flying when they return.

- **Admin Controls**: Add, subtract, or set a player's flight time precisely with admin commands. Supports both online and offline players.

- **PlaceholderAPI Integration**: Exposes remaining flight time via a placeholder for use in scoreboards, tab lists, and other plugins.

## Integrations

| Plugin | Purpose |
|---|---|
| [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) | Exposes `%tempfly_time_remaining%` for use in external plugins. |

## Configuration Files

| File | Description |
|---|---|
| `config.yml` | General plugin settings: default flight time, action bar behavior, world restrictions, and slow fall duration. |
| `messages.yml` | All plugin messages with MiniMessage formatting support. |
| `data.yml` | Stores player flight time and state. Auto-managed by the plugin. |
