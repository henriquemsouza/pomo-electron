import { app, Menu, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
  let windown = new BrowserWindow({
    width: 404,
    height: 438,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
    },
    resizable: false,
  });

  windown.on("ready-to-show", function () {
    windown.show();
    windown.focus();
  });

  windown.webContents.openDevTools()

  const indexHTML = path.join(__dirname + "/index.html");
  windown
    .loadFile(indexHTML)
    .then(() => {})
    .catch((e) => console.error(e));
}
// Menu.setApplicationMenu(false)

app.on("ready", createWindow);
