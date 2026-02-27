---
sidebar_position: 2
---

# Categories

Categories are the different types of tickets members can open in your server, for example Support, Appeals, or Reports. Each category has its own category channel where ticket channels are created, and can have its own staff role and emoji.

## Listing categories
```bash
c!callisto category list
```

Shows all categories with their current status, emoji, channel, and staff role.

## Creating a category
```bash
c!callisto category add <name> <label> <#channel>
```

- `<name>` - the internal name used in commands. Must be one word with no spaces, ex: `support`
- `<label>` - the name shown to members, ex: `"Support"`
- `<#channel>` - the category channel where ticket channels will be created

**Examples:**
```bash
c!callisto category add support "Support" #support-tickets
c!callisto category add appeals "Appeals" #appeals-tickets
c!callisto category add reports "Reports" #reports-tickets
```

### Optional flags

You can add these to the end of the create command:

- `--role @Role` - sets a staff role specifically for this category, overriding the global staff role

**Example:**
```bash
c!callisto category add reports "Reports" #reports-tickets --role @Admins
```

## Removing a category
```bash
c!callisto category remove <name>
```

If the category has existing tickets, Callisto will warn you and ask you to confirm with `--force`.
```bash
c!callisto category remove support --force
```

Note that removing a category does not delete any existing tickets that were opened under it.

## Opening and closing a category
```bash
c!callisto category toggle <name>
```

Toggles the category between open and closed. When a category is closed, members can no longer open tickets in it. Existing tickets are not affected.

**Example:**
```bash
c!callisto category toggle support
```

## Setting a panel emoji
```bash
c!callisto category emoji <name> <emoji>
```

Sets the emoji used for this category on the reaction panel. Required if you are using multi-mode panels.

**Examples:**
```bash
c!callisto category emoji support 🔧
c!callisto category emoji appeals ⚖️
c!callisto category emoji reports 🚨
```

Both standard emojis and custom server emojis are supported.