// Core imports from Electron and Node.js
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let mainWindow;

// Main window management
function createWindow() {
   // Configure the main application window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: isDev ? false : true // Disable web security in dev mode
    }
  });

  // URL configuration based on environment
  const startUrl = isDev 
    ? 'http://www.talkify.cc' // Development URL
    : 'https://www.talkify.cc'; // Production URL

  // Debugging information
  console.log('Application Info:');
  console.log('- Running in:', isDev ? 'development' : 'production');
  console.log('- Loading URL:', startUrl);
  console.log('- Electron version:', process.versions.electron);
  console.log('- Chrome version:', process.versions.chrome);
  console.log('- Node version:', process.versions.node);

  // Handle loading timeouts and errors
  const loadTimeout = setTimeout(() => {
    console.error('Timeout: URL failed to load after 10 seconds');
    console.error('Please make sure your web application is running on https://www.talkify.cc');
    mainWindow.loadFile(path.join(__dirname, 'error.html'));
  }, 10000);

  // Load the web application
  mainWindow.loadURL(startUrl)
    .then(() => {
      clearTimeout(loadTimeout);
      console.log('Successfully loaded URL');
    })
    .catch((error) => {
      clearTimeout(loadTimeout);
      console.error('Failed to load URL:', error);
      console.error('Please make sure your web application is running on https://www.talkify.cc');
      mainWindow.loadFile(path.join(__dirname, 'error.html'));
    });

  // Open the DevTools in development mode.
  if (isDev) {
    mainWindow.webContents.openDevTools();
    
    // Log any console messages from the web page
    mainWindow.webContents.on('console-message', (event, level, message) => {
      console.log('Web page log:', message);
    });
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Handle any certificate errors (especially for development)
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  if (isDev) {
    event.preventDefault();
    callback(true);
  } else {
    callback(false);
  }
});

// Application lifecycle events
app.whenReady().then(createWindow); // Create the main window when the app is ready

app.on('window-all-closed', () => { // Handle window closure events
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => { // Handle window activation events
  if (mainWindow === null) {
    createWindow();
  }
}); 