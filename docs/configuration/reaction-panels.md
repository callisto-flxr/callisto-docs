---
sidebar_position: 3
---

# Reaction Panels

A reaction panel is a message Callisto posts in a channel that members can react to in order to open a ticket. It removes the need for members to know any commands.

## Panel modes

Callisto supports two panel modes:

**Multi mode**
Each category has its own emoji. Members click the emoji for the category they need and their ticket opens immediately.

**Single mode**
The panel shows a single 🎫 emoji. Members click it and Callisto DMs them a numbered list of categories to choose from.

You can set the default panel mode with:
```bash
c!callisto config set panelmode multi
```
or
```bash
c!callisto config set panelmode single
```

## Setting up a multi-mode panel

Before posting a multi-mode panel, every enabled category needs an emoji assigned to it. Set emojis with:
```bash
c!callisto category emoji <name> <emoji>
```

**Example:**
```bash
c!callisto category emoji support 🔧
c!callisto category emoji appeals ⚖️
c!callisto category emoji reports 🚨
```

Once all categories have emojis, post the panel:
```bash
c!callisto panel post #your-channel multi
```

Callisto will post the panel message and add the appropriate reactions automatically.

## Setting up a single-mode panel

Single mode does not require category emojis. Just post the panel:
```bash
c!callisto panel post #your-channel single
```

When a member clicks 🎫, Callisto will DM them a list of categories to choose from. They reply with the number of the category they need and their ticket is opened.

## Removing a panel
```bash
c!callisto panel remove
```

This deletes the panel message and stops Callisto from watching it for reactions.

## Tips

- Post the panel in a read-only channel so it stays clean and visible
- Make sure Callisto has permission to send messages and add reactions in the channel you post the panel in
- If you add or remove categories after posting the panel, remove and repost it so the reactions stay up to date
- Only one panel can be active per server at a time