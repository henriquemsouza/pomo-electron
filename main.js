const { Menu, app, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow({
    width: 404,
    height: 438,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    },
    resizable: false
  })


  win.loadFile('index.html')
  win.on('ready-to-show', function () {
    win.show();
    win.focus();
  });

  // win.webContents.openDevTools()
}
Menu.setApplicationMenu(false)

app.on('ready', createWindow);
