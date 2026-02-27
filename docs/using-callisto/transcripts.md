---
sidebar_position: 5
---

# Transcripts

Every time a ticket is closed, Callisto automatically generates a full HTML transcript of the conversation and saves it. Transcripts are posted to your log channel as a link and can be re-fetched at any time by an admin.

## How transcripts work

When a ticket is closed, Callisto will do the following:

1. Collects all messages from the ticket channel
2. Generates a formatted HTML file of the conversation
3. Saves it to the transcript server
4. Posts a close summary to the log channel with a link to the transcript
5. Deletes the ticket channel

The transcript link is accessible to anyone who has it, so be mindful of who you share it with.

## Viewing a transcript

Transcript links are posted automatically in your log channel every time a ticket is closed. If you need to re-fetch a transcript for a closed ticket, use:
```bash
c!callisto transcript <ticket number>
```

**Example:**
```bash
c!callisto transcript 42
```

This returns the transcript link along with the message count and the date the ticket was closed.

## Transcript contents

Each transcript includes:

- The server name and ticket number
- The category the ticket was opened in
- Who opened the ticket and when
- Every message sent in the ticket, including embeds posted by Callisto
- Timestamps for each message
- Any attachments linked by filename and URL

## Notes

- Transcripts are stored for 365 days by default before expiring
- Closing a ticket that has already been closed will not generate a duplicate transcript
- The transcript server must be running and accessible for links to work