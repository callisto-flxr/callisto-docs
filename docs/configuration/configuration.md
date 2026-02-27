---
sidebar_position: 1
---

# Configuration

Callisto has a wide range of settings that can be configured. To view your settings, run `c!callisto config`. To change a setting, run `c!callisto config set <setting> <value>`.

## Viewing settings
```bash
c!callisto config
```

This shows all your current settings organized by category, along with a description of what each one does.

## Changing a setting
```bash
c!callisto config set
```

**Examples:**
```bash
c!callisto config set staffrole @Role
c!callisto config set cooldown 120
c!callisto config set usercanclose no
```

## Settings reference

### Core

| Setting | Description | Default |
|---|---|---|
| `prefix` | The character(s) before every command | `c!` |
| `staffrole` | Members with this role can view and manage all tickets | *Not set by default* |
| `logchannel` | Ticket close-summaries and transcript links are posted here | *Not set by default* |

### Tickets

| Setting | Description | Default |
|---|---|---|
| `usercanclose` | Whether members can close their own tickets. If off, only staff can close tickets | `yes` |
| `claiming` | Lets staff claim a ticket so others know who is handling it | `yes` |
| `channelformat` | How ticket channels are named. `ticket-number` = ticket-0001, `ticket-username` = ticket-john | `ticket-number` |
| `maxtickets` | How many tickets one member can have open at once. Set to `0` for unlimited | `1` |
| `cooldown` | Seconds a member must wait before opening another ticket. Set to `0` for no cooldown | `300` |
| `closelock` | If on, the ticket channel is locked briefly before being deleted | `yes` |
| `closedelay` | How long in seconds to wait after locking before the channel is deleted | `10` |

### Idle Detection

| Setting | Description | Default |
|---|---|---|
| `idlewarn` | Warn in the ticket after this many minutes of no messages. Set to `0` to disable | `1440` |
| `idleclose` | Auto-close the ticket this many seconds after the idle warning fires. Set to `0` to disable | `0` |

### Panel & DMs

| Setting | Description | Default |
|---|---|---|
| `panelmode` | `multi` = one emoji per category, `single` = one 🎫 button then DM to pick | `multi` |
| `dmtickets` | If on, members can DM Callisto directly to open a ticket | `no` |

## Accepted values
- Accepts `yes`, `no`, `true`, `false`, `on`, `off`
- Accepts any positive whole number
- Make sure to mention the role (ex: `@Mods`) or paste the role ID
- Make sure to mention the channel (ex: `#log`) or paste its channel ID