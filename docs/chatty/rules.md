# Message Rules

Rules let you filter and process chat messages using regex patterns (for both Minecraft and Discord messages). They are defined in `rules.yml`.

Rules are evaluated **before** channel routing, so they apply to all chat messages regardless of whether the player is in a channel or using global chat.

## Rule Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `conditions` | List | Required | Regex patterns to match against the message. If **any** condition matches, the rule triggers |
| `cancel_message` | Boolean | `false` | When `true`, the message is blocked entirely |
| `replace_with` | String | Optional | Text to replace the matched pattern with |
| `console_commands` | List | `[]` | Commands to execute from the console when the rule triggers |
| `player_commands` | List | `[]` | Commands to execute as the player when the rule triggers |

## Bypass Permission

Each rule can be bypassed with the permission `chatty.rule.bypass.<rule_name>`, where `<rule_name>` is the rule's key in `rules.yml`.

## How Rules Work

All rules in `rules.yml` are evaluated against every message — not just the first matching one. Multiple rules can trigger on the same message, and their actions all execute.

For each rule:
1. Each condition is tested as a regex pattern against the message.
2. If any condition matches, the rule triggers.
3. All configured actions execute:
   - The matched text is replaced with `replace_with` (if set).
   - The message is cancelled if `cancel_message` is `true`.
   - Console and player commands are executed.
4. Commands support the `%player_name%` placeholder and any PlaceholderAPI placeholders (e.g. `%vault_prefix%`).

A rule must define at least one action (`cancel_message`, `replace_with`, `console_commands`, or `player_commands`).

## Example

```yaml
block_word:
  conditions:
    - test
  cancel_message: true
  replace_with: '****'
  console_commands:
    - say %player_name% has used a blocked word!
  player_commands:
    - kill
```

This rule:
- Matches any message containing the regex pattern `test`
- Cancels the message so it isn't sent
- Would replace the match with `****` (not visible since the message is cancelled)
- Runs `say <player> has used a blocked word!` from the console
- Runs `kill` as the player

## Use Cases

- **Word filter** — Block or censor specific words with `cancel_message` or `replace_with`
- **Regex content filter** — Match complex patterns like URLs or IP addresses
- **Automated moderation** — Execute punishment commands when rules trigger
- **Message transformation** — Replace text patterns (e.g., emoticon shortcuts)
