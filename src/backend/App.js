import {Server} from "./Server.js"
import {app, BrowserWindow, ipcMain, shell, webContents } from 'electron';
import path from 'node:path';
import {execute, artistEndpointHandler} from './Executor.js'
import * as WebSocket from "ws";

let win;
const wss = new WebSocket.WebSocketServer({port: 3000});

function createWindow () {
    win = new BrowserWindow({
    width: 1080,
    height: 1440,
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
  win.setMinimumSize(700, 952);
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

process.on('uncaughtException', (error) => {
  console.error('Необработанное исключение:', error);
});


ipcMain.on('open-auth-window', (event, url) => {
  Server.start(url)
});

ipcMain.on('send-endpoint', (event, endpoint) => {
  artistEndpointHandler(endpoint);
}) 

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
      
      case 'artist':
        win.webContents.send('response-artist', json);
        break;
        
      default:
        win.webContents.send('send-created-playlist', json.createdPlaylist);
        break;
    }
  })
})
