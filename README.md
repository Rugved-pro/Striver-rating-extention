⭐ Striver CF Ratings – Browser Extension

A lightweight browser extension that shows Codeforces problem ratings directly on Striver’s CP Sheet, so you don’t have to open every problem on Codeforces.

🚀 What It Does

Fetches ratings from the official Codeforces API

Displays ratings next to each problem link

Supports both Codeforces URL formats

Works with the updated Striver CP Sheet

Compatible with Chrome & Brave

🌐 Supported Page

👉 https://takeuforward.org/competitive-programming/strivers-cp-sheet

📁 Folder Structure

Your extension folder should look like this:

striver-cf-ratings/
│
├── manifest.json
├── content.js
└── icons/
    └── icon128.png


🔹 If you don’t have an icon, remove the icons section from manifest.json.

🛠 Installation (Manual)
Chrome / Brave

Open:

Chrome → chrome://extensions

Brave → brave://extensions

Turn Developer mode ON (top-right)

Click Load unpacked

Select the striver-cf-ratings folder

✅ Extension is now installed

📌 How to Use

Open the Striver CP Sheet

Wait 1–2 seconds

Ratings will appear like:

<img width="1344" height="458" alt="image" src="https://github.com/user-attachments/assets/52bd9f5c-eaef-4380-84b6-10febd5ee734" />


🔄 After Making Changes

If you edit any file:

Go to extensions page

Click Reload

Refresh the Striver page

⚠️ Changes won’t apply without reloading.

❓ Why Some Problems Have No Rating

Problem is unrated on Codeforces

Problem is very new

Link is not a Codeforces problem

This is expected behavior.

⚙️ How It Works (Simple)

Fetches all problems from Codeforces API

Maps: contestId + problemIndex → rating

Finds Codeforces links on Striver sheet

Adds rating next to each link

🧪 Troubleshooting
Ratings not showing?

Open DevTools → Console

You should see:

Striver CF Ratings: Fetching Codeforces ratings...


If not:

Reload the extension

Refresh the page

🌍 Browser Support
Browser	Works
Chrome	✅
Brave	✅
Edge	✅
Firefox	❌
⚠️ Disclaimer

This is an unofficial project.
Not affiliated with Codeforces or takeUforward / Striver.
