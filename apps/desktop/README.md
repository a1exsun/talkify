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

## Version Control

### Files to Exclude
The following files and directories are excluded from version control (configured in `.gitignore`):

1. **Dependencies and Package Management**
   - `node_modules/` - Contains all installed packages
   - `package-lock.json` - Auto-generated dependency lock file

2. **Build Outputs**
   - `dist/` - Contains all build artifacts
   - `*.exe`, `*.dmg`, `*.deb`, `*.AppImage` - Installers
   - Generated icons (`build/icon-*.png`, `build/icon.ico`, `build/icon.icns`)

3. **Environment and Configuration**
   - `.env` files (except `.env.example`)
   - IDE configuration files (`.vscode/`, `.idea/`)

4. **System and Temporary Files**
   - `.DS_Store` (macOS)
   - `Thumbs.db` (Windows)
   - Debug logs (`npm-debug.log*`, etc.)

### Files to Include
Always commit these files:
- Source code (`main.js`, `preload.js`, etc.)
- `package.json`
- `.gitignore`
- `README.md`
- Source icon file (`build/icon.svg`)
- Icon generation script (`build/generate-icons.js`)
- Configuration files (`.eslintrc`, etc.)

## Building and Packaging

### Prerequisites
- **Windows**: Run PowerShell/Command Prompt as Administrator (required for symlinks)
- **macOS**: No special requirements
- **Linux**: No special requirements

### Quick Build
```bash
# Create installer for your current platform
npm run build
```

### Advanced Packaging Options
```bash
# Create unpacked directory (for testing)
npm run pack

# Create installers for all platforms
npm run dist

# Create platform-specific installers
npm run dist:win   # Windows only
npm run dist:mac   # macOS only
npm run dist:linux # Linux only
```

### Build Outputs
All packaged files will be in the `dist` directory:
- Windows: 
  - `Talkify Setup 1.0.0.exe` - NSIS installer
  - `win-unpacked/` - Unpacked application for testing
  - `latest.yml` - Auto-update configuration
- macOS: 
  - `Talkify-1.0.0.dmg` - DMG installer
  - `mac-universal/` - Unpacked application
- Linux: 
  - `talkify_1.0.0_amd64.AppImage` - Portable AppImage
  - `talkify_1.0.0_amd64.deb` - Debian package

### Application Icons
The application uses a custom icon set located in the `build` directory:
- `icon.svg` - Source vector icon
- `icon-*.png` - Generated PNG icons in various sizes
- `icon.ico` - Windows icon
- `icon.icns` - macOS icon

To regenerate icons:
```bash
# Install icon generation dependencies
npm install --save-dev sharp

# Generate platform-specific icons
node build/generate-icons.js
```

### Installer Features
- Windows: 
  - Custom installation directory
  - Desktop shortcut option
  - Start menu entry
  - Silent installation support
  - Uninstaller
- macOS: 
  - Standard DMG installer
  - Applications folder shortcut
  - Drag-and-drop installation
- Linux: 
  - AppImage for portable use
  - deb package for Debian-based systems
  - Desktop integration
  - Menu entries

## Troubleshooting

### Build Issues
1. **Windows Symlink Error**:
   - Error: `Cannot create symbolic link: A required privilege is not held by the client`
   - Solution: Run PowerShell as Administrator or enable Developer Mode in Windows settings

2. **Icon Issues**:
   - If icons aren't showing correctly, regenerate them using the icon generation script
   - Ensure the `build` directory contains all required icon files

### Runtime Issues
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

- Windows 10 or later (x64)
- macOS 10.13 or later (Intel and Apple Silicon)
- Modern Linux distributions (Ubuntu 18.04+, Fedora 30+)

## Development Notes

### Project Files
```
apps/desktop/
├── main.js                 # Main app code (window management, security settings)
├── preload.js             # Security bridge for IPC communication
├── error.html             # Error page for connection issues
├── package.json           # Project config and build settings
├── build/                 # Build resources directory
│   ├── icon.svg          # Source vector icon
│   ├── icon-*.png        # Generated PNG icons
│   ├── icon.ico          # Windows icon
│   ├── icon.icns         # macOS icon
│   └── generate-icons.js # Icon generation script
└── README.md             # This file
```

### Available Commands
```bash
npm run dev     # Run in development mode with DevTools and debugging
npm start      # Run in production mode
npm run build  # Build installer for current platform
npm run dist   # Build installers for all platforms
```

### Environment Variables
- `NODE_ENV`: Set to 'development' or 'production'
- Uses electron-is-dev for environment detection

For more detailed documentation and advanced usage, please visit our [Wiki](https://github.com/a1exsun/talkify/wiki).
