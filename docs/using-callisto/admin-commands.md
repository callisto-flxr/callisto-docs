---
sidebar_position: 3
---

# Admin Commands

These commands are only available to members with the Manage Server permission. They are used to configure and manage Callisto at the server level.

## Command Reference

| Command | Description |
|---|---|
| `c!callisto` | Show the admin command list |
| `c!callisto setup` | First-time setup checklist |
| `c!callisto config` | View all current settings |
| `c!callisto config set <setting> <value>` | Change a setting |
| `c!callisto category list` | View all categories |
| `c!callisto category add <name> <label> <#channel>` | Create a category |
| `c!callisto category remove <name>` | Delete a category |
| `c!callisto category toggle <name>` | Open or close a category |
| `c!callisto category emoji <name> <emoji>` | Set a category's panel emoji |
| `c!callisto panel post <#channel>` | Post the reaction panel |
| `c!callisto panel remove` | Remove the reaction panel |
| `c!callisto ignore list` | View ignored channels |
| `c!callisto ignore add <#channel>` | Ignore a channel |
| `c!callisto ignore remove <#channel>` | Unignore a channel |
| `c!callisto tag list` | View all canned responses |
| `c!callisto tag add <name> <text>` | Save a canned response |
| `c!callisto tag remove <name>` | Delete a canned response |
| `c!callisto tag show <name>` | Preview a canned response |
| `c!callisto transcript <number>` | Fetch a closed ticket's transcript |

---

## Setup
```bash
c!callisto setup
```

Shows a live checklist of required settings with their current status. Tells you exactly what still needs to be configured and the command to fix it. Run this any time to check your configuration status.

## Config
```bash
c!callisto config
```

Shows all current settings organized by category, with a plain-English description of what each one does and its current value.
```bash
c!callisto config set <setting> <value>
```

Changes a setting. See the [Configuration](/docs/configuration/configuration.md) page for a full list of settings and accepted values.

**Examples:**
```bash
c!callisto config set staffrole @Mods
c!callisto config set cooldown 120
c!callisto config set usercanclose no
c!callisto config set maxtickets 2
```

## Categories
```bash
c!callisto category add <name> <label> <#channel>
```

Creates a new ticket category. `name` is the internal identifier used in commands and must be a single word with no spaces. `label` is what members see. `#channel` is the category channel where ticket channels will be created.

You can also pass `--role @Role` to assign a specific staff role to this category, overriding the global staff role.

**Examples:**
```bash
c!callisto category add support "Support" #support-tickets
c!callisto category add appeals "Appeals" #appeals-tickets --role @Admins
```
```bash
c!callisto category remove <name>
```

Deletes a category. If the category has existing tickets, Callisto will warn you and ask you to confirm with `--force`.
```bash
c!callisto category remove support --force
```
```bash
c!callisto category toggle <name>
```

Opens or closes a category. When closed, members can no longer open tickets in it. Existing tickets are not affected.
```bash
c!callisto category emoji <name> <emoji>
```

Sets the emoji used for this category on the reaction panel. Required for multi-mode panels.

## Reaction Panel
```bash
c!callisto panel post <#channel> [multi|single]
```

Posts the reaction panel in the specified channel. Defaults to the mode set in `panelmode`. See the [Reaction Panels](/docs/configuration/reaction-panels.md) page for more details.
```bash
c!callisto panel remove
```

Removes the panel message and stops Callisto from watching it for reactions.

## Ignored Channels
```bash
c!callisto ignore add <#channel>
c!callisto ignore remove <#channel>
c!callisto ignore list
```

Manages the list of channels Callisto ignores. See the [Ignored Channels](/docs/configuration/ignored-channels.md) page for more details.

## Canned Responses
```bash
c!callisto tag add <name> <text>
```

Saves a canned response that staff can post in any ticket with `c!ticket tag <name>`. See the [Canned Responses](/docs/using-callisto/canned-responses.md) page for more details.

## Transcripts
```bash
c!callisto transcript <ticket number>
```

Fetches the transcript for a closed ticket and returns a link to it.

**Example:**
```bash
c!callisto transcript 42
```