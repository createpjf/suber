<p align="center">
  <img src="public/icons/icon-128.png" width="80" alt="Suber Icon">
</p>

<h1 align="center">Suber</h1>

<p align="center">
  A Chrome extension for tracking and managing your subscriptions.<br>
  Built with React, TypeScript, and Tailwind CSS.
</p>

<p align="center">
  <a href="https://github.com/createpjf/suber/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://github.com/createpjf"><img src="https://img.shields.io/badge/GitHub-createpjf-181717?logo=github" alt="GitHub: createpjf"></a>
  <a href="https://twitter.com/createpjf"><img src="https://img.shields.io/badge/Twitter-@createpjf-1DA1F2?logo=twitter&logoColor=white" alt="Twitter: @createpjf"></a>
  <img src="https://img.shields.io/badge/Chrome-Extension-4285F4?logo=googlechrome&logoColor=white" alt="Chrome Extension">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18">
</p>

<p align="center">
  Companion to the <a href="https://github.com/createpjf/suber-macos">Suber macOS App</a>
</p>

## Features

- **Calendar View** — Visual monthly calendar with billing date indicators and subscription logos
- **List View** — Searchable, filterable, sortable subscription list
- **Subscription Management** — Add, edit, delete subscriptions with billing cycle, category, and status tracking
- **Monthly Spend** — Automatic calculation of total monthly subscription cost
- **Light / Dark Mode** — Follows system appearance automatically
- **Custom Typography** — Space Grotesk font throughout the UI
- **Website Favicons** — Automatically fetches icons from subscription websites
- **Data Export / Import** — JSON backup and restore
- **Local Storage** — All data stored locally via `chrome.storage.local`, no account required
- **Notifications** — Configurable billing reminders (1, 2, 3, 5, 7 days before)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 18, TypeScript, Tailwind CSS v3 |
| State | Zustand + `chrome.storage.local` persistence |
| Dates | date-fns |
| Build | Vite 5 + CRXJS Vite Plugin |
| Test | Vitest + Testing Library |
| Font | Space Grotesk |
| Platform | Chrome Extension Manifest V3 (Popup) |

## Project Structure

```
src/
├── background/          # Service worker (alarm registration)
├── popup/
│   ├── components/      # UI components (TopBar, CalendarView, ListView, etc.)
│   ├── hooks/           # Custom hooks (useCalendar, useFilteredSubscriptions, etc.)
│   ├── pages/           # Full-page views (SettingsPage)
│   ├── store/           # Zustand stores (subscriptions, settings)
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── index.css        # Space Grotesk fonts + CSS custom properties
├── shared/
│   ├── types/           # TypeScript interfaces
│   ├── constants.ts     # App constants (currencies, categories, status colors)
│   ├── storage.ts       # chrome.storage adapter
│   └── utils.ts         # Date calculations, currency formatting
└── test/                # Test setup
public/
├── fonts/               # Space Grotesk TTF files
└── icons/               # Extension icons (16, 48, 128px)
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Install & Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Run tests
npm run test:run
```

### Load in Chrome

1. Open `chrome://extensions/`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked**
4. Select the `dist/` folder
5. Click the Suber icon in the toolbar

### Development

```bash
npm run dev
```

Starts the Vite dev server with HMR. Load the extension from Chrome — CRXJS handles live reload automatically.

## Import from macOS App

1. In the Suber macOS app, go to Settings → Export JSON
2. In the Chrome extension, go to Settings → Import JSON
3. Select the exported file — subscriptions and settings will be imported

## Author

**createpjf** — [@createpjf](https://twitter.com/createpjf)

## License

[MIT](LICENSE) © createpjf
