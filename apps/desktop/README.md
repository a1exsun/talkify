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
   # First terminal: Start web app
   cd ../../    # Go to root directory
   npm run web:dev

   # Second terminal: Start desktop app
   cd apps/desktop
   npm run dev
   ```

## Building for Distribution

```bash
# Create installer for your current platform
npm run build
```

## Troubleshooting

If the app shows a blank window:
1. Make sure web app is running (`npm run web:dev`)
2. Check if you can open https://www.talkify.cc in your browser
3. Press Ctrl+Shift+I (or Cmd+Option+I on Mac) to see error messages

## Supported Platforms

- Windows 10 or later
- macOS 10.13 or later
- Modern Linux distributions (Ubuntu 18.04+, Fedora 30+)

## Development Notes

### Project Files
```
apps/desktop/
├── main.js                 # Main app code
├── preload.js             # Security bridge
├── error.html             # Error page for connection issues
├── package.json           # Project config
└── README.md             # This file
```

### Useful Commands
```bash
npm run dev     # Run in development mode
npm start      # Run in production mode
npm run build  # Create installers
```

For more detailed documentation and advanced usage, please visit our [Wiki](https://github.com/a1exsun/talkify/wiki).
