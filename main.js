

const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 1100,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        resizable: true,
        autoHideMenuBar: true,
    });

    win.loadFile('queue_management.html'); // Load the first HTML file by default

    // Set the zoom factor to 0.8 (80% zoom)
    win.webContents.on('did-finish-load', () => {
        win.webContents.setZoomFactor(0.7);
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// Handle switching between pages
ipcMain.on('switch-page', (event, page) => {
    if (page === 'queue_management') {
        win.loadFile('queue_management.html');
    } else if (page === 'queue_display') {
        win.loadFile('queue_display.html');
    }
});

// Handle print request from renderer process
ipcMain.on('print-queue', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();

    focusedWindow.webContents.print({
        printBackground: true, // Ensure backgrounds are printed
    }, (success, errorType) => {
        if (!success) console.log('Print failed:', errorType);
    });
});