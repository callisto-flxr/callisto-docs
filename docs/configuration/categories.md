---
sidebar_position: 2
---

# Categories

Categories are the different types of tickets members can open in your server, for example Support, Appeals, or Reports. Each category has its own category channel where ticket channels are created, and can have its own staff role and emoji.

## Listing categories
```bash
c!category list
```

Shows all categories with their current status, emoji, channel, and staff role.

## Creating a category
```bash
c!category add <name> <label> <#channel>
```

- `<name>` - the internal name used in commands. Must be one word with no spaces, ex: `support`
- `<label>` - the name shown to members, ex: `"Support"`
- `<#channel>` - the category channel where ticket channels will be created

**Examples:**
```bash
c!category add support "Support" #support-tickets
c!category add appeals "Appeals" #appeals-tickets
c!category add reports "Reports" #reports-tickets
```

### Optional flags

You can add these to the end of the create command:

- `--role @Role` - sets a staff role specifically for this category, overriding the global staff role

**Example:**
```bash
c!category add reports "Reports" #reports-tickets --role @Admins
```

## Removing a category
```bash
c!category remove <name>
```

If the category has existing tickets, Callisto will warn you and ask you to confirm with `--force`.
```bash
c!category remove support --force
```

Note that removing a category does not delete any existing tickets that were opened under it.

## Opening and closing a category
```bash
c!category toggle <name>
```

Toggles the category between open and closed. When a category is closed, members can no longer open tickets in it. Existing tickets are not affected.

**Example:**
```bash
c!category toggle support
```

## Setting a panel emoji
```bash
c!category emoji <name> <emoji>
```

Sets the emoji used for this category on the reaction panel. Required if you are using multi-mode panels.

**Examples:**
```bash
c!category emoji support 🔧
c!category emoji appeals ⚖️
c!category emoji reports 🚨
```

Both standard emojis and custom server emojis are supported.