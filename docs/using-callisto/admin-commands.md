---
sidebar_position: 3
---

# Admin Commands

These commands are only available to members with the Manage Server permission. They are used to configure and manage Callisto at the server level.

## Command Reference

| Command | Description |
|---|---|
| `c!setup` | First-time setup checklist |
| `c!config` | View all current settings |
| `c!config set <setting> <value>` | Change a setting |
| `c!category list` | View all categories |
| `c!category add <name> <label> <#channel>` | Create a category |
| `c!category remove <name>` | Delete a category |
| `c!category toggle <name>` | Open or close a category |
| `c!category emoji <name> <emoji>` | Set a category's panel emoji |
| `c!category edit <name> --channel #new-channel` | Edit the channel the tickets can be opened in |
| `c!category edit <name> --label "New Label"` | Edit the category label |
| `c!category edit <name> --role @NewRole` | Edit the staff role |
| `c!category edit <name> --description "New description"` | Edit the ticket description |
| `c!panel post <#channel>` | Post the reaction panel |
| `c!panel post <#channel> --only <name>` | Post the reaction panel with specified categories |
| `c!panel remove` | Remove the reaction panel |
| `c!ignore list` | View ignored channels |
| `c!ignore add <#channel>` | Ignore a channel |
| `c!ignore remove <#channel>` | Unignore a channel |
| `c!tag list` | View all canned responses |
| `c!tag add <name> <text>` | Save a canned response |
| `c!tag remove <name>` | Delete a canned response |
| `c!tag show <name>` | Preview a canned response |
| `c!tickets` | View all currently open tickets |
| `c!transcript <number>` | Fetch a closed ticket's transcript |

---

## Setup
```bash
c!setup
```

Shows a live checklist of required settings with their current status. Tells you exactly what still needs to be configured and the command to fix it. Run this any time to check your configuration status.

## Config
```bash
c!config
```

Shows all current settings organized by category, with a plain-English description of what each one does and its current value.
```bash
c!config set <setting> <value>
```

Changes a setting. See the [Configuration](/docs/configuration/configuration.md) page for a full list of settings and accepted values.

**Examples:**
```bash
c!config set staffrole @Mods
c!config set cooldown 120
c!config set usercanclose no
c!config set maxtickets 2
```

## Categories
```bash
c!category add <name> <label> <#channel>
```

Creates a new ticket category. `name` is the internal identifier used in commands and must be a single word with no spaces. `label` is what members see. `#channel` is the category channel where ticket channels will be created.

You can also pass `--role @Role` to assign a specific staff role to this category, overriding the global staff role.

**Examples:**
```bash
c!category add support "Support" #support-tickets
c!category add appeals "Appeals" #appeals-tickets --role @Admins
```
```bash
c!category remove <name>
```

Deletes a category. If the category has existing tickets, Callisto will warn you and ask you to confirm with `--force`.
```bash
c!category remove support --force
```
```bash
c!category toggle <name>
```

Opens or closes a category. When closed, members can no longer open tickets in it. Existing tickets are not affected.
```bash
c!category emoji <name> <emoji>
```

Sets the emoji used for this category on the reaction panel. Required for multi-mode panels.

```bash
c!category edit <name> --channel #new-channel
```

Edits the channel that the category is set to.
```bash
c!category edit <name> --label "New Label"
```

Edit the category's label
```bash
c!category edit <name> --role @NewRole
```

Edit the staff role for the category
```bash
c!category edit <name> --description "New description"
```

Edit the description for the category

## Reaction Panel
```bash
c!panel post <#channel> [multi|single]
```

Posts the reaction panel in the specified channel. Defaults to the mode set in `panelmode`. See the [Reaction Panels](/docs/configuration/reaction-panels.md) page for more details.
```bash
c!panel post <#channel> --only <name>,<name>
```

Posts the reaction panel with only the specified categories. **Category names are separated by a comma with *no spaces!***
```bash
c!panel remove
```

Removes the panel message and stops Callisto from watching it for reactions.

## Ignored Channels
```bash
c!ignore add <#channel>
c!ignore remove <#channel>
c!ignore list
```

Manages the list of channels Callisto ignores. See the [Ignored Channels](/docs/configuration/ignored-channels.md) page for more details.

## Canned Responses
```bash
c!tag add <name> <text>
```

Saves a canned response that staff can post in any ticket with `c!ticket tag <name>`. See the [Canned Responses](/docs/using-callisto/canned-responses.md) page for more details.

## Viewing tickets
```bash
c!tickets
```

Fetches all currently open tickets including the channel that was created.

## Transcripts
```bash
c!transcript <ticket number>
```

Fetches the transcript for a closed ticket and returns a link to it.

**Example:**
```bash
c!transcript 42
```