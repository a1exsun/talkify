# Talkify Desktop App

A cross-platform desktop application for Talkify, built with Electron.

## Quick Start

1. **Install Required Software**
   - Install [Node.js](https://nodejs.org/) (version 20 or higher)
   - Install [VS Code](https://code.visualstudio.com/) (recommended)

2. **Set Up Project**
   ```bash
   # Clone and enter project
   git clone https://github.com/a1exsun/talkify.git
   cd talkify/apps/desktop

   # Install dependencies
   npm install
   ```

3. **Run the App**
   ```bash
   # Start desktop app in development mode
   npm run dev
   ```

## Building for Distribution

```bash
# Create installer for your current platform
npm run build
```

The build output will be in the `dist` directory, with platform-specific installers:
- Windows: NSIS installer (.exe)
- macOS: DMG installer (.dmg)
- Linux: AppImage (.AppImage)

## Troubleshooting

If the app shows a blank window:
1. Check your internet connection
2. Check if you can open https://www.talkify.cc in your browser
3. Press Ctrl+Shift+I (or Cmd+Option+I on Mac) to see error messages

## Security Features

The app implements several security measures:
- Context Isolation: Enabled to prevent direct access to Node.js/Electron APIs
- Node Integration: Disabled to prevent malicious code execution
- Web Security: Enabled in production, disabled in development for testing
- Preload Scripts: Used as a secure bridge for necessary functionality

## Supported Platforms

- Windows 10 or later
- macOS 10.13 or later
- Modern Linux distributions (Ubuntu 18.04+, Fedora 30+)

## Development Notes

### Project Files
```
apps/desktop/
├── main.js                 # Main app code (window management, security settings)
├── preload.js             # Security bridge for IPC communication
├── error.html             # Error page for connection issues
├── package.json           # Project config and build settings
└── README.md             # This file
```

### Available Commands
```bash
npm run dev     # Run in development mode with DevTools and debugging
npm start      # Run in production mode
npm run build  # Create platform-specific installers
```

### Environment Variables
- `NODE_ENV`: Set to 'development' or 'production'
- Uses electron-is-dev for environment detection

For more detailed documentation and advanced usage, please visit our [Wiki](https://github.com/a1exsun/talkify/wiki).
