Striver CF Ratings – Chrome / Brave Extension

This browser extension displays Codeforces problem ratings directly on Striver’s CP Sheet, saving you time by eliminating the need to open each problem on Codeforces.

It supports both Codeforces URL formats:

/problemset/problem/{contestId}/{index}

/contest/{contestId}/problem/{index}

Features

Automatically fetches ratings from the official Codeforces API

Displays ratings next to each Codeforces problem link

Works with the updated Striver CP Sheet

Compatible with Chrome and Brave

No login, no permissions, lightweight and fast

Supported Page

https://takeuforward.org/competitive-programming/strivers-cp-sheet

Installation Instructions (Manual – Unpacked Extension)
Step 1: Download / Create Extension Folder

Create a folder (for example):

striver-cf-ratings


Inside it, place the following files:

striver-cf-ratings/
│
├── manifest.json
├── content.js
└── icons/
    └── icon128.png


If you do not have an icon, you may remove the icons block from manifest.json.

Step 2: Load Extension in Browser
Chrome

Open chrome://extensions

Enable Developer mode (top-right)

Click Load unpacked

Select the striver-cf-ratings folder

Brave

Open brave://extensions

Enable Developer mode

Click Load unpacked

Select the striver-cf-ratings folder

Step 3: Use the Extension

Open the Striver CP Sheet:

https://takeuforward.org/competitive-programming/strivers-cp-sheet


Wait 1–2 seconds for ratings to load

Codeforces ratings will appear next to problem links as:

⭐ 1200

Important Notes
🔄 Reload After Changes

If you edit content.js or manifest.json:

Go to chrome://extensions / brave://extensions

Click Reload

Refresh the Striver CP Sheet page

⚠️ Why Some Problems May Not Show Ratings

Some Codeforces problems do not have a rating

Very new problems may not yet be rated

Non-Codeforces links are ignored

How It Works (High-Level)

Fetches all problems from:

https://codeforces.com/api/problemset.problems


Builds a mapping:

contestId + problemIndex → rating


Scans all links on the Striver page

Matches Codeforces URLs

Injects rating next to the problem link

Troubleshooting
Ratings Not Appearing?

Open DevTools → Console

Look for:

Striver CF Ratings: Fetching Codeforces ratings...


If missing, reload the extension and refresh the page

Manifest Errors?

Ensure manifest.json is saved as UTF-8

Load the folder, not the file

Ensure icons/icon128.png exists (or remove icon config)

Browser Compatibility
Browser	Supported
Chrome	Yes
Brave	Yes
Edge	Yes (Chromium)
Firefox	No (requires MV2 rewrite)
Disclaimer

This project is unofficial and not affiliated with:

Codeforces

takeUforward / Striver

All data is fetched from the public Codeforces API.
