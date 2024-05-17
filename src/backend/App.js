import {Server} from "./Server.js"
import {app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'node:path';
import { io as socketIOClient } from 'socket.io-client';
import execute from './Executor.js'

let win;
const socket = socketIOClient('http://localhost:3000');

function createWindow () {
    win = new BrowserWindow({
    width: 1280,
    height: 720,
    sandbox: true,
    resizable: false,
    icon: path.join(process.cwd(), '/dist/source/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
        // preload: path.join(process.cwd(), '/dist/bundle.js')
      }
  })
  console.log(path.join(process.cwd(), 'src/frontend/index.js'))
  win.loadFile(path.join(process.cwd(), '/dist/index.html'))
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
    socket.close()
    app.quit()
  }
})

ipcMain.on('open-auth-window', (event, url) => {
  Server.start(url)
});

socket.on('auth-code', (accessToken) => {
  const token = accessToken.accessToken
  console.log('Token:', token.trim())
  execute(token);
});


