# Configuration

BlockPlacementLimiter uses four configuration files: `settings.yml` for general behavior, `limits.yml` for limit definitions, `world_restrictions.yml` for per-world placement blocks, and `messages.yml` for all plugin messages.

## settings.yml

### Options

| Property | Type | Default | Description |
|---|---|---|---|
| `send_action_bar_messages` | Boolean | `true` | Whether to send feedback messages via the action bar. |
| `send_chat_messages` | Boolean | `true` | Whether to send feedback messages via chat. |
| `send_message_on_limit_reached` | Boolean | `true` | Send a message when a player's placement is blocked because they reached their limit. |
| `send_message_on_place` | Boolean | `true` | Send a message when a player successfully places a tracked block. |
| `send_message_on_remove` | Boolean | `true` | Send a message when a player breaks a tracked block. |
| `send_message_on_placement_restricted_in_world` | Boolean | `true` | Send a message when placement is blocked by a world restriction. |
| `save_limit_data_every_ticks` | Integer | `10000` | How often player data is auto-saved in ticks. Set to `0` or a negative number to disable periodic saves. Data is always saved on shutdown. |

---

## limits.yml

Defines all block placement limit groups. Each top-level key under `limits` is a limit name used for permissions and data tracking.

### Structure

```yaml
limits:
  <limit_name>:
    blocks:
      - <MATERIAL>
    limit: <max_count>
    worlds:
      - <world_name>
```

### Properties

| Property | Type | Description |
|---|---|---|
| `blocks` | List | Bukkit Material enum names (e.g., `SPAWNER`, `TRIAL_SPAWNER`) of the block types that count toward this limit. |
| `limit` | Integer | Maximum number of blocks a single player may have placed across all tracked worlds for this limit. |
| `worlds` | List | World names where this limit applies. Use `*` to apply to all currently loaded worlds. Case-sensitive. |

### Example

```yaml
limits:
  spawners_limit:
    blocks:
      - SPAWNER
      - TRIAL_SPAWNER
    limit: 20
    worlds:
      - world
```

A limit named `spawners_limit` restricts each player to 20 spawners (of any tracked type combined) in the `world` world. The bypass permission for this limit is `blockplacementlimiter.limits.bypass.spawners_limit`.

> **Note:** A block type should not appear in multiple limits that share the same world, as this leads to undefined behavior.

---

## world_restrictions.yml

Defines worlds where specific block types are completely blocked from placement, independently of any limit.

### Structure

```yaml
restrict_placement:
  <world_name>:
    - <MATERIAL>
```

### Example

```yaml
restrict_placement:
  world:
    - SPAWNER
```

Players in `world` cannot place `SPAWNER` blocks at all. This is checked before limit enforcement. Players with `blockplacementlimiter.world_restrictions.bypass.<world_name>` (or `blockplacementlimiter.world_restrictions.bypass.*`) are exempt.

---

## messages.yml

All messages support [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting. `%prefix%` is available in every message and is replaced with the value of the `plugin_prefix` key.

### Messages

| Key | Placeholders | Description |
|---|---|---|
| `plugin_prefix` | - | Plugin prefix prepended to all messages. |
| `world_placement_restriction_chat_message` | `%prefix%`, `%block_name%`, `%block_id%`, `%world%`, `%player_name%` | Chat message when placement is blocked by a world restriction. |
| `world_placement_restriction_actionbar_message` | `%prefix%`, `%block_name%`, `%block_id%`, `%world%`, `%player_name%` | Action bar version of the world restriction message. |
| `placed_block_chat_message` | `%prefix%`, `%block_name%`, `%block_id%`, `%player_total_blocks_count%`, `%limit%`, `%player_block_count%`, `%worlds%`, `%player_name%` | Chat message on successful tracked block placement. |
| `placed_block_actionbar_message` | (same as above) | Action bar version of the placement message. |
| `removed_block_chat_message` | `%prefix%`, `%block_name%`, `%block_id%`, `%player_total_blocks_count%`, `%limit%`, `%player_block_count%`, `%worlds%`, `%player_name%` | Chat message when a tracked block is broken. |
| `removed_block_actionbar_message` | (same as above) | Action bar version of the removal message. |
| `limit_reached_chat_message` | `%prefix%`, `%block_name%`, `%block_id%`, `%player_total_blocks_count%`, `%limit%`, `%player_block_count%`, `%worlds%`, `%player_name%` | Chat message when placement is blocked because the player reached their limit. |
| `limit_reached_actionbar_message` | (same as above) | Action bar version of the limit-reached message. |
| `blockslimit_command_messages.header` | `%prefix%`, `%player_name%`, `%player_total_blocks_count%`, `%limit%`, `%worlds%`, `%limit_name%` | Header line of the `/blockslimit` command output. |
| `blockslimit_command_messages.block_limit` | `%prefix%`, `%block_id%`, `%player_block_count%` | Per-block-type line in the `/blockslimit` command output. |
| `blockslimit_command_messages.footer` | `%prefix%`, `%player_total_blocks_count%`, `%limit%`, `%worlds%` | Footer line of the `/blockslimit` command output. |

### Placeholders Reference

| Placeholder | Description |
|---|---|
| `%prefix%` | Plugin prefix from `plugin_prefix`. |
| `%player_name%` | The player's username. |
| `%block_name%` | Human-readable block name (capitalized, spaces instead of underscores). |
| `%block_id%` | Bukkit Material enum name (e.g., `SPAWNER`). |
| `%player_total_blocks_count%` | The player's total placed block count across all types in the limit. |
| `%player_block_count%` | The player's placed count for a specific block type. |
| `%limit%` | The maximum allowed count for the limit group. |
| `%limit_name%` | The name of the limit group. |
| `%worlds%` | Comma-separated list of worlds the limit applies to. |
| `%world%` | The world where the event occurred (world restriction messages only). |