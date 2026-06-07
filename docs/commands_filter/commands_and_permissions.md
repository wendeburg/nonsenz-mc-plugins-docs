# Commands & Permissions

## Commands

### `/commandsfilter reload`

Reloads all configuration files (`settings.yml`, `messages.yml`) and applies the updated settings immediately.

**Aliases:** `/cmdsfilter reload`
**Permission:** `commandsfilter.command.reload`

---

## Permissions

All permissions are given to OPs by default. You can grant individual permissions using a permissions plugin.

| Permission | Description |
|---|---|
| `commandsfilter.command.reload` | Allows using `/commandsfilter reload` |
| `commandsfilter.bypass.filters_list` | Bypasses command list filtering - the player sees all commands in tab-completion and can use any command regardless of filter mode |
| `commandsfilter.bypass.hidenamespacedcommands` | Bypasses the `hide_namespaced_commands` setting - the player sees namespaced command variants in tab-completion |
