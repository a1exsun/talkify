# Talkify Desktop App

<div align="center">

This is the desktop application for Talkify, built with Electron. It provides a native desktop experience for the Talkify web application.

[Getting Started](#getting-started) •
[Installation](#installation) •
[Development](#development) •
[Building](#building) •
[Troubleshooting](#troubleshooting)

</div>

## Features

- 🌍 Cross-platform support (Windows, macOS, Linux)
- 🚀 Fast and responsive native desktop experience
- 🔄 Real-time synchronization with web app
- 🛡️ Secure communication between processes
- 🎨 Native system integration
- 🔧 Developer tools and debugging support

## Getting Started

### Prerequisites

- Node.js >= 20
- npm (comes with Node.js)
- Git
- A running instance of the Talkify web application
- VS Code (recommended)

### System Requirements

#### Windows
- Windows 10 or later (x64)
- 4GB RAM minimum
- 500MB disk space

#### macOS
- macOS 10.13 (High Sierra) or later
- Intel or Apple Silicon (M1/M2)
- 4GB RAM minimum
- 500MB disk space

#### Linux
- Modern Linux distribution (Ubuntu 18.04+, Fedora 30+, etc.)
- X11 or Wayland
- 4GB RAM minimum
- 500MB disk space

## Installation

1. Clone the repository (if not already done):
```bash
git clone https://github.com/your-username/talkify.git
cd talkify
```

2. Navigate to the desktop app directory:
```bash
cd apps/desktop
```

3. Install dependencies:
```bash
npm install
```

4. Set up VS Code workspace:
   - Open VS Code
   - File -> Open Workspace from File...
   - Select `talkify.code-workspace`

## Development

### Development Mode

1. Start the web application:
```bash
# From the root directory
npm run web:dev
```

2. In a new terminal, start the desktop app:
```bash
# From apps/desktop directory
npm run dev
```

Development features:
- Hot reloading enabled
- DevTools available (Ctrl+Shift+I or Cmd+Option+I)
- Source maps for debugging
- Console logging enabled

### Environment Variables

- `ELECTRON_IS_DEV`: Force development mode
- `TALKIFY_API_URL`: Override API URL
- `DEBUG`: Enable debug logging

### Code Structure

```
apps/desktop/
├── main.js                 # Main Electron process
├── preload.js             # Preload script (security bridge)
├── error.html             # Error page template
├── package.json           # Project & build configuration
├── talkify.code-workspace # VS Code workspace settings
└── README.md             # Documentation
```

## Building

### Development Build

```bash
npm run build -- --dir # Unpacked build for testing
```

### Production Build

For all platforms:
```bash
npm run build
```

Platform-specific:
```bash
npm run build -- --win   # Windows (.exe)
npm run build -- --mac   # macOS (.dmg)
npm run build -- --linux # Linux (.AppImage)
```

Build outputs in `dist/`:
- Windows: NSIS installer (.exe)
- macOS: DMG file (.dmg)
- Linux: AppImage (.AppImage)

### Build Requirements

- Windows builds: Any platform (Wine needed on non-Windows)
- macOS builds: Requires macOS system
- Linux builds: Any platform
- Code signing required for production builds

## Security

- Context isolation enabled
- Node integration disabled
- Secure IPC communication
- CSP policies implemented
- Regular security updates

## Troubleshooting

### Common Issues

1. Blank Window
   - Verify web app is running
   - Check http://localhost:3000
   - Check DevTools console (Ctrl+Shift+I)

2. Build Errors
   - Clear node_modules: `rm -rf node_modules`
   - Fresh install: `npm install`
   - Check platform requirements

3. Development Issues
   - Verify Node.js version
   - Check port conflicts
   - Review error logs

### Debug Mode

Run with debug logging:
```bash
DEBUG=talkify:* npm run dev
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details
