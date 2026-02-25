# Gorgon Quest Tracker

A web-based utility for tracking inventory, storage, vendors, and active quests in Project Gorgon. Runs entirely in the browser — no server or installation required.

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
  - **Vendor Tracker** - Record remaining gold and reset timer per vendor
    - Persisted in localStorage across reloads
    - Reset countdown ticks live in the table
    - Edit via modal dialog (Escape or ✕ to cancel)
  - **Auto-capture from Player.log** - Click "Watch Player.log" in the Vendors tab to select `Player.log` once; the tracker auto-fills remaining gold and reset time whenever you open a vendor shop in-game, with no further interaction needed

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

## Usage

Open `index.html` directly in Chrome or Edge (no server needed). On first load:

1. Click **Select Folder** and navigate to your Reports folder:
   `%LocalAppData%Low\Elder Game\Project Gorgon\Reports`
2. The tracker loads your character data and all CDN reference data automatically.
3. On future loads the folder permission is remembered for the session — no re-selection needed.

For the **Chat Watcher**, select your ChatLogs folder once:
`%LocalAppData%Low\Elder Game\Project Gorgon\ChatLogs`

For **vendor auto-capture**, select your Player.log once from the Vendors tab:
`%LocalAppData%Low\Elder Game\Project Gorgon\Player.log`

Folder and file selections are persisted via IndexedDB and auto-resume if the browser still has permission.

## Data Sources

**Local Files** (selected via browser file picker):
- `Character_*.json` - Character stats, active quests, skills, NPC favor levels
- `*_items_*.json` - Inventory and storage items
- `Player.log` - Live game log used for vendor auto-capture

**CDN Data** (fetched automatically):
- Quest, item, NPC, and storage vault definitions from `https://cdn.projectgorgon.com/v457/data/`

## Notes

- No installation, build step, or local server required — vanilla HTML/JS only
- CDN data is cached in-memory for the session; page refresh clears it
- Folder/file handles are stored in IndexedDB so the browser can reuse them without re-prompting (within the same session)
- Vendor tracker data (remaining gold, reset timers) is stored in localStorage
