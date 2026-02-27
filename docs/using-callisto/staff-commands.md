---
sidebar_position: 2
---

# Staff Commands

These commands are only available to members with the configured staff role or the Manage Server permission. Most of them must be run inside a ticket channel.

## Command Reference

| Command | Description |
|---|---|
| `c!ticket close [reason]` | Close the current ticket |
| `c!close [reason]` | Shortcut for `c!ticket close` |
| `c!ticket claim` | Claim the current ticket |
| `c!claim` | Shortcut for `c!ticket claim` |
| `c!ticket unclaim` | Unclaim the current ticket |
| `c!unclaim` | Shortcut for `c!ticket unclaim` |
| `c!ticket add <@user>` | Add a user to the current ticket |
| `c!ticket remove <@user>` | Remove a user from the current ticket |
| `c!ticket note <text>` | Add a private note to the current ticket |
| `c!ticket notes` | View all private notes on the current ticket |
| `c!ticket tag <name>` | Post a canned response in the current ticket |
| `c!ticket list` | View all open tickets in the server |

---

## Closing a ticket
```bash
c!ticket close [reason]
c!close [reason]
```

Closes the current ticket. Callisto will lock the channel, post a close summary to the log channel, generate an HTML transcript, and DM the opener to let them know their ticket was closed. The channel is then deleted after the configured delay.

**Examples:**
```bash
c!close
c!close Issue resolved, user was given the correct role
```

## Claiming a ticket
```bash
c!ticket claim
c!claim
```

Claims the current ticket, marking it as being handled by you. The claim is shown in the ticket and in `c!ticket list` so other staff know who is dealing with it. Only one staff member can claim a ticket at a time.

## Unclaiming a ticket
```bash
c!ticket unclaim
c!unclaim
```

Removes your claim from the current ticket, making it available for other staff to claim. You can only unclaim a ticket you have claimed yourself.

## Adding and removing users
```bash
c!ticket add <@user>
c!ticket remove <@user>
```

Adds or removes a user's access to the current ticket channel. Useful for bringing in another staff member or a third party. The ticket opener cannot be removed.

**Examples:**
```bash
c!ticket add @Admin
c!ticket remove @Admin
```

## Private notes
```bash
c!ticket note <text>
c!ticket notes
```

Adds a private note to the current ticket that is saved internally and viewable by staff. Notes are not visible to the ticket opener and are included in the ticket record for future reference.

**Example:**
```bash
c!ticket note User has been warned twice before for this behavior
```

## Canned responses
```bash
c!ticket tag <name>
```

Posts a saved canned response in the current ticket. Canned responses are managed by admins using `c!callisto tag`. See the [Canned Responses](/docs/using-callisto/canned-responses.md) page for more details.

**Example:**
```bash
c!ticket tag greeting
```

## Listing open tickets
```bash
c!ticket list
```

Shows all currently open tickets in the server, including the category, opener, and whether each ticket has been claimed. Shows up to 20 tickets at a time.