---
sidebar_position: 2
---

# Getting Started

This page walks you through setting up Callisto in your server for the first time. You can also run `c!callisto setup` at any time to check your setup status.

## Step 1 - Add Callisto to your server

Click [this invite link](https://web.fluxer.app/oauth2/authorize?client_id=1473925654608011283&scope=bot&permissions=6756636731763927) and select the server you want to add Callisto to.

## Step 2 - Set your staff role

Your staff role is the role your moderators or support team have. Callisto uses it to decide who can manage tickets.
```bash
c!callisto config set staffrole @StaffRole
```

## Step 3 - Set your log channel

Your log channel is where Callisto posts a close-summary and transcript link every time a ticket is closed.
```bash
c!callisto config set logchannel #channel
```

## Step 4 - Create a ticket category

Categories are the types of tickets membres can open, for example Support, Appeals, or Reports. You need at least one category before members can open tickets.
```bash
c!callisto category add support Support #channel
```

Replace `support` with the internal name (one word, no spaces), `Support` with the label shown to members, and `#channel` with the category channel where ticket channels will be created.

Once created, run `c!callisto category list` to confirm it was set up correctly.

## Step 5 - Set up a reaction panel (optional)

A reaction panel lets members open tickets by clicking an emoji instead of type a command.
```bash
c!callisto panel post #channel
```

For multiple-emoji panels where each category has its own emoji, set a category emoji first:
```bash
c!callisto category emoji support 🔧
```

Then post the panel:
```bash
c!callisto panel post #channel
```

## Step 6 - That's it!

Members can now open tickets with `c!ticket open <category>` or by reacting to the panel if you set one up. Run `c!callisto setup` at any time to check your configuration status.