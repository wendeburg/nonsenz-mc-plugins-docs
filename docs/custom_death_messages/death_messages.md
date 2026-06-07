# Death Messages

Death messages are custom messages displayed when a player is killed. They are defined in `death_messages.yml`.

## How It Works

1. When a player dies, the plugin checks the **damage type** (e.g. `PLAYER_ATTACK`, `FALL`) and the **causing entity** (e.g. `PLAYER`, `ZOMBIE`). For environmental deaths (fall, drowning, lava, etc.) there is no causing entity.
2. Each entry in `death_messages.yml` defines patterns for damage types and entities.
3. The first entry whose patterns match both the damage type and the causing entity is used.
4. If no entry matches, the vanilla death message is shown.
5. If the killer is a player and is holding no weapon, the `message_no_weapon` lines are used instead (if defined).

## Death Message Properties

| Property | Type | Required | Description |
|---|---|---|---|
| `damage_types` | List | Yes | Patterns to match against the damage type. Supports wildcards (`*`) |
| `causing_entity` | List | No | Patterns to match against the killer entity type. If omitted, matches regardless of entity. Supports wildcards (`*`) and the special literal `NONE` |
| `message` | List | Yes | Message lines to display. Supports MiniMessage tags and placeholders |
| `message_no_weapon` | List | No | Alternative message lines used when the killer is a player with no weapon (empty hand) |

## Pattern Matching

The `damage_types` and `causing_entity` fields use pattern matching with wildcard support:

- **Exact match** - `PLAYER_ATTACK` matches only the `PLAYER_ATTACK` damage type.
- **Wildcard** - `PLAYER*` matches any value starting with `PLAYER` (e.g. `PLAYER_ATTACK`, `PLAYER_EXPLOSION`).
- **Full wildcard** - `*` matches any value. For `causing_entity`, this matches only deaths **with** a killing entity - it does not match environmental deaths.
- **No entity** - `NONE` matches deaths with **no** killing entity (fall, drowning, lava, etc.).

If `causing_entity` is omitted entirely, the entry matches regardless of whether a killing entity is present.

The plugin checks entries in order and uses the first match.

## Weapon Detection

When a player kills another player, the plugin checks the killer's active hand:

- If the killer is holding an item, the `message` lines are used and the `%weapon%` placeholder is available.
- If the killer's hand is empty (fists), the `message_no_weapon` lines are used instead (if defined). If `message_no_weapon` is not defined, the regular `message` lines are used (however the %weapon% placeholder won't be available).

The `use_display_name_for_weapon_placeholder` option in `config.yml` controls how the weapon name is resolved. See [Configuration](configuration.md).

## Placeholders

| Placeholder | Description |
|---|---|
| `%prefix%` | The global plugin prefix defined in `messages.yml` |
| `%player%` | The killed player's username |
| `%player_display_name%` | The killed player's display name |
| `%killer%` | The killer entity's name. Not available for environmental deaths (`causing_entity: [NONE]`) |
| `%killer_display_name%` | The killer's display name. Only available if the killer is a player |
| `%weapon%` | The weapon's name. Only available if the killer is a player holding an item |
| `%death_location_x%` | The X block coordinate where the player died |
| `%death_location_y%` | The Y block coordinate where the player died |
| `%death_location_z%` | The Z block coordinate where the player died |
| `%death_location_world%` | The world name where the player died |

## Debug Mode

Enable `show_debug_messages` in `config.yml` to log the damage type and entity type for each death in the console. This is useful for finding the correct values to use in your `damage_types` and `causing_entity` patterns.

## Example

```yaml
# Player killed by another player
player_kills:
  damage_types:
    - PLAYER_ATTACK
  causing_entity:
    - PLAYER
  message:
    - "<red>%player% was killed by %killer% using %weapon%</red>"
  message_no_weapon:
    - "<red>%player% was punched to death by %killer%</red>"

# Player fell to death
fall_death:
  damage_types:
    - FALL
  causing_entity:
    - NONE
  message:
    - "<gray>%player% fell to their death</gray>"

# Player killed by any undead mob
undead_kills:
  damage_types:
    - MOB_ATTACK
  causing_entity:
    - ZOMBIE
    - SKELETON
    - WITHER_SKELETON
  message:
    - "<gray>%player% was slain by a %killer%</gray>"

# Catch-all - matches any remaining death regardless of entity
catch_all:
  damage_types:
    - "*"
  message:
    - "<gray>%player% died</gray>"
```

The first entry handles player-vs-player kills with weapon detection. The second matches fall deaths (no killing entity). The third matches specific undead mobs. The fourth uses wildcards to catch any remaining death.
