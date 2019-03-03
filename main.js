const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadFile("./dist/index.html");

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
