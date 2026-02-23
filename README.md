# Gorgon Quest Tracker

A web-based utility for tracking inventory, storage, vendors, and active quests in Project Gorgon. Also has a map explorer and a chat watcher (still needs more work).

# **[Launch Tracker](http://kaeus.github.io/KaeusGorgonTools/index.html)**  

## Features

- 📜 **Quest Browser** - View all active quests organized by location
  - Quick Objectives list - See all quest objectives at a glance, grouped by zone
  - Search by quest name, NPC, description, or objectives
  - Shows quest objectives, rewards, and quest giver
  - Collapsible accordions grouped by location

- 🎒 **Inventory Browser** - Browse items across all storage vaults
  - 3-column grid layout with rarity-based coloring
  - Organized by storage location
  - Items sorted by total value (highest first)
  - Shows item rarity, level, and slot information
  - Shows total value per vault
  - Search by item name or vault

- 🛒 **Vendor Browser** - Track merchant stores and favor-gated buy caps
  - Shows all merchants with a store service, grouped by region (Serbule and Red Wing Casino pinned first)
  - Displays your current favor level with each merchant
  - Shows the gold cap available to sell at your current favor tier
  - Lists what item categories each merchant buys
  - Tooltip with full favor tier cap breakdown for each merchant
  - Gift preferences table (Love/Hate items and favor-per-gift values)

- 🗺️ **Interactive Maps** (maps.html) - Dedicated map viewer with markers
  - View zone maps with NPC locations and landmarks
  - Click-and-drag panning, mouse wheel zoom
  - Filter markers by type (NPCs, Landmarks, Portals)
  - Coordinate-based marker placement from game data
  - Adjacent zone navigation

- 💬 **Chat Watcher** (chat-watcher.html) - Real-time chat log monitoring
  - Monitor live chat logs for specific patterns (e.g., NPC spawns)
  - Configurable search patterns and alert sounds
  - Customizable polling interval (default 2 seconds)
  - Visual highlighting of matching lines
  - Statistics tracking (total lines, matches, last match time)
  - Auto-scrolling chat display with line limit

### Data Sources

**Local Files:**
- `Character_{Character}_{Server}.json` - Character stats, active quests, skills, NPCs
- `CHARACTERNAME_SERVERNAME_items_*.json` - Inventory and storage items

**CDN Data:**
- Quest definitions from `https://cdn.projectgorgon.com/v457/data/quests.json`
- Item definitions from `https://cdn.projectgorgon.com/v457/data/items.json`
- NPC info, storage vaults, etc.

## Notes

- CDN data is cached in-memory during the session
- Page refresh clears cache
