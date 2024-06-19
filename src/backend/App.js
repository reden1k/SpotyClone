import {Server} from "./Server.js"
import {app, BrowserWindow, ipcMain, shell, webContents } from 'electron';
import path from 'node:path';
import {execute} from './Executor.js'
import * as WebSocket from "ws";

let win;
const wss = new WebSocket.WebSocketServer({port: 3000});

function createWindow () {
    win = new BrowserWindow({
    width: 1080,
    height: 1440,
    sandbox: true,
    resizable: true,
    icon: path.join(process.cwd(), 'resources', 'app', 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      }
  })
  win.setMinimumSize(700, 952);
  win.loadFile(path.join(process.cwd(), 'resources', 'app', 'distApp', 'index.html'))
  win.setMenu(null)
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

process.on('uncaughtException', (error) => {
  console.error('Exception:', error);
});


ipcMain.on('open-auth-window', (event, url) => {
  Server.start(url)
});

wss.on('connection', (socket) => {
  console.log('Socket connected!');
  socket.on('message', (event) => {
    const json = JSON.parse(event.toString('utf8'));
    const type = json.type;

    switch (type) {
      case 'token':
        console.log(`Token: ${json.accessToken}`);
        win.webContents.send('authorized', 'Authorized!')
        execute(json.accessToken);
        break;
      
      case 'error': 
        console.log(json)
        win.webContents.send('throw-error', json);
        break;
        
      default:
        win.webContents.send('send-created-playlist', json.createdPlaylist);
        break;
    }
  })
})
