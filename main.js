const { Menu, app, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow({
    width: 405,
    height: 421,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false
  })

  win.loadFile('index.html')
}
Menu.setApplicationMenu(false)

app.on('ready', createWindow);
