# 🌿 TAS Connect — Adventure Singles Community App

A community profile & connection app for Adventure Singles members. 
Browse members, filter by location & activity, and get in touch directly.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app (HTML + CSS + JS) |
| `config.js` | **Edit this** — paste your Sheet URL and Form URL here |
| `netlify.toml` | Routing config for Netlify (don't touch) |

---

## 🚀 Quick Deploy (GitHub + Netlify)

### Step 1 — Push to GitHub
1. Create a new GitHub repo (e.g. `tas-connect`)
2. Upload these three files to it (or use `git push`)

### Step 2 — Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
2. Connect your GitHub account → select your repo
3. Build settings: leave blank (it's a plain HTML site)
4. Click **Deploy site**
5. Netlify gives you a URL like `tas-connect.netlify.app` — share it!

### Step 3 — Custom domain (optional)
In Netlify → Site settings → Domain management → Add custom domain.

---

## 📋 Google Form + Sheet Setup

### Create the Google Form
Go to [forms.google.com](https://forms.google.com) and add these questions:

| Question | Type |
|----------|------|
| Full Name | Short answer |
| Location / Suburb | Short answer |
| Occupation | Short answer |
| About Me | Paragraph |
| Activities I love | Checkboxes (Hiking, Paddleboarding, Cycling, Rock Climbing, Running, Swimming, Camping, Other) |
| Skills I can offer | Short answer (comma-separated) |
| Profile photo URL | Short answer |
| Contact email or Instagram handle | Short answer |

### Link to Google Sheets
Responses tab → green Sheets icon → Create new spreadsheet.

### Publish as JSON
1. In the Sheet: **File → Share → Publish to web**
2. Choose the responses tab → CSV → Publish
3. Get your Sheet ID from the URL bar
4. Edit `config.js` → paste the JSON URL (format below)

```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/gviz/tq?tqx=out:json
```

---

## 🔧 Customisation

- **Colours / fonts**: edit the CSS variables at the top of `index.html` (`:root { ... }`)
- **Demo profiles**: edit the `DEMO_MEMBERS` array in `index.html` — shown before real data loads
- **Community name**: change `COMMUNITY_NAME` in `config.js`

---

Built with plain HTML/CSS/JS — no frameworks, no build step, deploys anywhere.
