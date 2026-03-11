# Feelings

Feelings are the core of BetterChatFeelings. Each feeling is a custom emote command that players can send to each other. Feelings are defined in `feelings.yml`, where each top-level key is the internal feeling name used for permissions and player data.

## How It Works

When a player sends a feeling (e.g., `/hug Steve`), the plugin:

1. Runs validation checks (cooldown, permissions, ignore list, toggles).
2. Sends the **sender message** to the player who used the command.
3. Sends the **receiver message** to the target player.
4. Broadcasts the **global message** to all other online players.
5. Spawns **particles** at the receiver's location.
6. Plays **sounds** to both the sender and receiver.
7. Optionally sends a **Discord embed** via DiscordSRV.

If `only_use_global_messages` is enabled in [settings.yml](configuration.md), only the global message is sent to everyone.

## Feeling Properties

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `enabled` | Boolean | No | `true` | Whether this feeling is registered as a command. Disabled feelings are not available in-game. |
| `command` | String | Yes | | The command name players will use (e.g., `hug` registers `/hug`). |
| `aliases` | List | No | `[]` | Alternative command names for this feeling. |
| `description` | String | No | | Short description shown in the `/feelings` list. |

## Messages

Messages are nested under the `messages` key of each feeling and support [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting.

| Property | Description |
|---|---|
| `sender` | Message shown only to the player who sent the feeling. |
| `receiver` | Message shown only to the player who received the feeling. |
| `global` | Message broadcast to all other online players and the console. |
| `discord` | Plain text message sent as a Discord embed (requires DiscordSRV integration). |

### Placeholders

| Placeholder | Description |
|---|---|
| `%sender%` | The sender's raw username. |
| `%receiver%` | The receiver's raw username. |

> **PlaceholderAPI support:** If PlaceholderAPI is installed, you can use any PlaceholderAPI placeholder directly in message templates. Placeholders are resolved using the sender as the player context and are applied after `%sender%` and `%receiver%` substitution. See [Configuration](./configuration.md#placeholderapi-support) for details.

## Discord Embed Color

| Property | Type | Default | Description |
|---|---|---|---|
| `discord_embed_color` | String | Inherited from settings | Per-feeling override of the Discord embed color in `#RRGGBB` format. Falls back to `discordsrv_integration.default_embed_color` in settings.yml. |

## Sounds

Sounds are nested under the `sounds` key. Each sub-key is an arbitrary name for the sound entry. Sounds are played to both the sender and receiver.

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | String | Yes | | The Bukkit Sound enum name (e.g., `ENTITY_CAT_PURREOW`). |
| `delay` | Integer | No | `0` | Delay in ticks before playing the sound. |
| `volume` | Float | No | `1.0` | Sound volume. |
| `pitch` | Float | No | `1.0` | Sound pitch. |

## Particles

Particles are nested under the `particles` key. Each sub-key is an arbitrary name for the particle entry. Particles are spawned at the receiver's location.

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | String | Yes | | The Bukkit Particle enum name (e.g., `HEART`). |
| `delay` | Integer | No | `0` | Delay in ticks before spawning. |
| `count` | Integer | No | `1` | Number of particles to spawn. |
| `position_offset.x` | Double | No | `0` | Horizontal spread on the X axis. |
| `position_offset.y` | Double | No | `0` | Vertical spread on the Y axis. |
| `position_offset.z` | Double | No | `0` | Horizontal spread on the Z axis. |

## Permissions

Each feeling has its own permission node: `betterchatfeelings.feeling.<feeling_name>`, where `<feeling_name>` is the top-level key in `feelings.yml` (not necessarily the command name). By default, all players can use all feelings unless restricted by a permissions plugin.

## Example

```yaml
hug:
  enabled: true
  command: hug
  aliases: [cuddle]
  description: 'Give someone a warm hug!'
  messages:
    sender: '<gold>You gave %receiver% a warm hug!'
    receiver: '<gold>%sender% gave you a warm hug!'
    global: '<gold>%sender% gave %receiver% a warm hug!'
    discord: '%sender% gave %receiver% a warm hug!'
  discord_embed_color: "#FF6B6B"
  sounds:
    purr:
      name: ENTITY_CAT_PURREOW
      delay: 0
      volume: 2.0
      pitch: 2.0
  particles:
    hearts:
      name: HEART
      delay: 0
      count: 9
      position_offset:
        x: 0.5
        y: 1
        z: 0.5
```
