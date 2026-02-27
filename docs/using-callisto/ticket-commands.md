---
sidebar_position: 1
---

# Ticket Commands

These are the commands available to all members. Staff commands are covered on the next page.

## Command Reference

| Command | Description |
|---|---|
| `c!ticket open <category> [message]` | Open a ticket in the specified category |
| `c!ticket close [reason]` | Close the current ticket |
| `c!close [reason]` | Shortcut for `c!ticket close` |
| `c!ticket categories` | See all available ticket categories |
| `c!ticket info` | View details about the current ticket |
| `c!help` | General help and category list |

---

## Opening a ticket
```bash
c!ticket open <category> [message]
```

Opens a ticket in the specified category. You can optionally include an initial message which will be shown in the ticket when it opens.

**Examples:**
```bash
c!ticket open support
c!ticket open support I need help with my rank
```

## Closing a ticket
```bash
c!ticket close [reason]
c!close [reason]
```

Closes the current ticket. Must be run inside a ticket channel. Whether members can close their own tickets depends on the `usercanclose` setting. If it is turned off, only staff can close tickets.

**Examples:**
```bash
c!close
c!close Issue has been resolved
```

## Viewing categories
```bash
c!ticket categories
```

Shows all currently open ticket categories along with the command to open each one.

## Ticket info
```bash
c!ticket info
```

Shows details about the current ticket including the category, status, opener, claimed by, and when it was opened. Must be run inside a ticket channel.

## Help
```bash
c!help
```

Shows a general help message with available commands and open categories.