const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const { menubar } = require('menubar');
const path = require('path');

let mainWindow;

const mb = menubar({
  index: `file://${path.join(__dirname, 'index.html')}`,
  browserWindow: {
    width: 500,
    height: 350,
    resizable: false,
    vibrancy: 'ultra-dark', // Options: 'appearance-based', 'light', 'dark', 'titlebar', 'selection', etc.
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false, // Enable for IPC communication
    },
  }
});

app.on('ready', () => {
  ipcMain.on('open-launchpad-app', (event, appName) => {
    if (!appName) {
      event.reply('open-app-response', 'Error: App name cannot be empty');
      return;
    }

    const command = `open -a "${appName}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        event.reply('open-app-response', `Error: ${error.message}`);
        return;
      }
      if (stderr) {
        event.reply('open-app-response', `Stderr: ${stderr}`);
        return;
      }
      event.reply('open-app-response', `Opened app: ${appName}`);
    });
  });
  ipcMain.on('quit-app', ()=>{
    app.quit();
  });
});
