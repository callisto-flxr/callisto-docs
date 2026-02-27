---
sidebar_position: 4
---

# Ignored Channels

Ignored channels are channels where Callisto will not respond to any commands or react to any panel reactions. This is useful for channels where you don't want Callisto to interfere, such as general chat, announcements, or bot spam channels.

## Viewing ignored channels
```bash
c!callisto ignore list
```

Shows all channels that are currently ignored.

## Ignoring a channel
```bash
c!callisto ignore add #channel
```

Once added, Callisto will completely ignore all activity in that channel. Members will not get any response if they try to run commands there.

**Examples:**
```bash
c!callisto ignore add #general
c!callisto ignore add #announcements
```

## Unignoring a channel
```bash
c!callisto ignore remove #channel
```

Removes the channel from the ignore list. Callisto will respond to commands there again immediately.

**Example:**
```bash
c!callisto ignore remove #general
```

## Notes

- Ignoring a channel does not affect tickets that are already open — it only prevents new commands from being processed there
- You can ignore as many channels as you need
- The ignore check happens before anything else — Callisto won't process the message at all, not even for idle tracking