# Talkify Desktop App

This is the desktop application for Talkify, built with Electron.

## Prerequisites

- Node.js >= 20
- npm (comes with Node.js)
- A running instance of the Talkify web application

## Cross-Platform Support

The app supports all major operating systems:

### Windows
- Distributable: NSIS Installer (.exe)
- Requirements: Windows 10 or later
- Installation: Run the .exe installer
- Development: Works with PowerShell or Command Prompt

### macOS
- Distributable: DMG file (.dmg)
- Requirements: macOS 10.13 (High Sierra) or later
- Installation: Mount the .dmg and drag to Applications
- Development: Works with Terminal
- Note: For M1/M2 Macs, Rosetta 2 is not required as the app is universal binary

### Linux
- Distributable: AppImage
- Requirements: Modern Linux distribution (Ubuntu 18.04+, Fedora 30+, etc.)
- Installation: Make AppImage executable and run
- Development: Works with any standard terminal
- Note: Some distributions may require additional dependencies

## Installation

1. Navigate to the desktop app directory:
```bash
cd apps/desktop
```

2. Install dependencies:
```bash
npm install
```

## Running the App

### Development Mode

1. First, start the web application in one terminal:
```bash
# From the root directory
npm run web:dev
```

2. Then, in a new terminal, start the desktop app:
```bash
# From apps/desktop directory
npm run dev
```

This will:
- Start the app with developer tools enabled
- Connect to http://localhost:3000 for development
- Enable hot reloading

### Production Mode

To run the app in production mode:
```bash
npm start
```

This will connect to the production URL (www.talkify.cc).

## Building the App

To create distributable packages for all platforms:
```bash
npm run build
```

Platform-specific builds:
```bash
# Windows only
npm run build -- --win

# macOS only
npm run build -- --mac

# Linux only
npm run build -- --linux
```

This will create:
- Windows: NSIS installer (.exe) in `dist` folder
- macOS: DMG file (.dmg) in `dist` folder
- Linux: AppImage in `dist` folder

Note: 
- Building for macOS requires a macOS system
- Building for Windows is possible on any platform with Wine installed
- Building for Linux is possible on any platform

## Project Structure

```
apps/desktop/
├── main.js           # Main Electron process
├── preload.js        # Preload script for security
├── error.html        # Error page
├── package.json      # Project configuration
└── README.md         # This file
```

## Scripts

- `npm run dev` - Start in development mode with debugging
- `npm start` - Start in production mode
- `npm run build` - Build distributable packages

## Troubleshooting

If you see a blank window:
1. Make sure the web application is running
2. Check if you can access http://localhost:3000 in your browser
3. Look for errors in the developer tools console (Ctrl+Shift+I)

## Development Notes

- The app uses `electron-is-dev` to determine the environment
- Security features like contextIsolation are enabled
- Web security is disabled in development mode for local development
