const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object

// Creates a secure bridge between main and renderer processes
contextBridge.exposeInMainWorld(
  'electron',
  {
    isElectron: true,
    platform: process.platform
  }
);

// Setup and debugging
window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload script loaded');
  
  // Add version info to help with debugging
  const versions = process.versions;
  console.log('Running with:');
  console.log(` - Electron: ${versions.electron}`);
  console.log(` - Chrome: ${versions.chrome}`);
  console.log(` - Node: ${versions.node}`);
}); 