const electron = require('electron');
const { app, BrowserWindow , ipcMain} = electron;

let mainWindow;


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {backgroundThrottling: false, nodeIntegration: true}
    });

    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});

ipcMain.on('GET_MANIFEST_FILE', (event, data) => {
    console.log('got event');
    mainWindow.webContents.send('GOT_MANIFEST_FILE', data + "@msn.com");
});
