# BetterChatFeelings

BetterChatFeelings is a chat emote plugin for Paper 1.21+ servers that lets players send customizable "feelings" (social interactions like hugs, pokes, etc.) to other players.

## Features

- **Feelings**: Define unlimited custom emote commands with personalized messages for the sender, receiver, and all other players. Each feeling can include sounds and particle effects. See [Feelings](feelings.md) for details.

- **Player Preferences**: Players can toggle all feelings on or off, disable specific feelings, and ignore other players to block feeling interactions.

- **Cooldown System**: A configurable global cooldown prevents players from spamming feelings. Administrators can bypass the cooldown with a permission.

- **Paginated Feelings List**: Players can browse all available feelings in-game with a paginated, clickable list.

## Integrations

| Plugin | Purpose |
|---|---|
| [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) | Use PAPI placeholders for sender and receiver display names in feeling messages. |
| [DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) | Forward feeling messages to a Discord channel as embed messages. |

## Configuration Files

| File | Description |
|---|---|
| `settings.yml` | General plugin settings such as cooldown, self-feelings, console logging, PlaceholderAPI providers, and DiscordSRV integration. |
| `feelings.yml` | Defines all feelings with their commands, messages, sounds, and particles. |
| `messages.yml` | All plugin UI messages (errors, notifications, feelings list layout). |
| `player_data.yml` | Stores player preferences (toggles, ignored players). Auto-managed by the plugin. |
