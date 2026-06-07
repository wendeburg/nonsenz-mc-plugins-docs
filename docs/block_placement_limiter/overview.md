# BlockPlacementLimiter

BlockPlacementLimiter is a block placement control plugin for Paper servers (1.21+). It lets you define per-player limits on how many blocks of specific types can be placed, and optionally restrict certain blocks from being placed in specific worlds entirely.

## Features

- **Block Placement Limits**: Define named limit groups, each with a set of block types, a per-player cap, and a list of applicable worlds. When a player hits their cap, further placement is blocked. See [Configuration](configuration.md).

- **World Restrictions**: Independently block specific block types from being placed in chosen worlds, regardless of any limit. Bypass with a permission.

- **Accurate Placement Tracking**: Counts decrease when a block is broken. The plugin also handles piston movement, explosions, shearing, and entity-triggered block changes to keep counts consistent.

- **Configurable Messaging**: Feedback on placement, removal, limit reached, and world restrictions can be sent via action bar, chat, or both - each individually toggleable.

- **Data Persistence**: Per-player placement data survives server restarts. Data is validated on load against the current limit configuration and saved on shutdown (and periodically, if configured).

## Configuration Files

| File | Description |
|---|---|
| `settings.yml` | Message delivery toggles (action bar, chat) and auto-save interval. |
| `limits.yml` | Block limit group definitions: block types, per-player cap, and applicable worlds. |
| `world_restrictions.yml` | Per-world lists of blocks whose placement is completely blocked. |
| `messages.yml` | All plugin messages with MiniMessage formatting support. |
| `limits_data.yml` | Stores per-player placement data. Auto-managed by the plugin. |