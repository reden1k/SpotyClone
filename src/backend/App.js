import {Server} from "./Server.js"
import {app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'node:path';
import execute from './Executor.js'
import * as WebSocket from "ws";

let win;
const wss = new WebSocket.WebSocketServer({port: 3000});

function createWindow () {
    win = new BrowserWindow({
    width: 720,
    height: 1280,
    sandbox: true,
    resizable: true,
    icon: path.join(process.cwd(), '/dist/source/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
        // preload: path.join(process.cwd(), '/dist/bundle.js')
      }
  })
  win.setMinimumSize(700, 500);
  console.log(path.join(process.cwd(), 'src/frontend/index.js'))
  win.loadFile(path.join(process.cwd(), 'dist/index.html'))
  // win.setMenu(null) deleting default menu
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    Server.close()
    wss.close()
    app.quit()
  }
})

ipcMain.on('open-auth-window', (event, url) => {
  Server.start(url)
});

wss.on('connection', (socket) => {
  console.log('Socket connected!');

  socket.on('message', (event) => {
    const token = JSON.parse(event.toString('utf8')).accessToken;
    console.log(`Token: ${token}`);
    // win.webContents.send('message-from-main', 'Привет')
    execute(token);
  })
})

