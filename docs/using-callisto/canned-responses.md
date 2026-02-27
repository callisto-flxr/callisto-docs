---
sidebar_position: 4
---

# Canned Responses

Canned responses are preset messages that staff can drop into any ticket with a single command. They are useful for common replies that your team sends frequently, such as greetings, instructions, or closing messages.

## Command Reference

| Command | Description |
|---|---|
| `c!callisto tag add <name> <text>` | Save a new canned response |
| `c!callisto tag remove <name>` | Delete a canned response |
| `c!callisto tag list` | View all saved canned responses |
| `c!callisto tag show <name>` | Preview a canned response |
| `c!ticket tag <name>` | Post a canned response inside a ticket |

---

## Adding a canned response
```bash
c!callisto tag add <name> <text>
```

Saves a new canned response. `name` is the identifier used to post it and must be a single word containing only lowercase letters, numbers, hyphens, and underscores. `text` is the message that will be posted.

**Examples:**
```bash
c!callisto tag add greeting Hello! Thanks for opening a ticket. A staff member will be with you shortly.
c!callisto tag add resolved Your issue has been resolved. Please open a new ticket if you need further assistance.
c!callisto tag add moreinfo Could you please provide more information about your issue so we can better assist you?
```

If a canned response with that name already exists, it will be overwritten with the new text.

## Removing a canned response
```bash
c!callisto tag remove <name>
```

Permanently deletes the canned response.

**Example:**
```bash
c!callisto tag remove greeting
```

## Viewing canned responses
```bash
c!callisto tag list
```

Shows the names of all saved canned responses.
```bash
c!callisto tag show <name>
```

Previews the full text of a canned response without posting it in the ticket.

**Example:**
```bash
c!callisto tag show greeting
```

## Posting a canned response in a ticket
```bash
c!ticket tag <name>
```

Posts the canned response as a message in the current ticket channel. Must be run inside a ticket by a staff member.

**Example:**
```bash
c!ticket tag greeting
```

## Tips

- Keep names short and memorable so staff can type them quickly
- Use canned responses for any message your team sends more than a couple of times a week
- You can update an existing canned response at any time by running `c!callisto tag add` with the same name and new text