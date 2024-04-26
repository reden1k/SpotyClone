import {Server} from "./Server.js"
import {app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'node:path';

let link;
let subWindow;

function createWindow () {
    const win = new BrowserWindow({
    width: 1280,
    height: 720,
    sandbox: true,
    resizable: false,
    icon: path.join(process.cwd(), '/src/frontend/source/icon.png'),
    webPreferences: {
        preload: path.join(process.cwd(), '/dist/bundle.js')
      }
  })
  console.log(path.join(process.cwd(), 'src/frontend/index.js'))
  win.loadFile('src/frontend/index.html')
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
    app.quit()
  }
})

ipcMain.on('open-auth-window', (event, url) => {
  // if (!subWindow || subWindow.isDestroyed()) {
  //     subWindow = new BrowserWindow({ width: 600, height: 400, nativeWindowOpen: true, nodeIntegration: true });
  //     subWindow.loadURL(url);
  //     subWindow.on('closed', () => {
  //         subWindow = null;
  //     });
  //     subWindow.setMenu(null)
      
  //     shell.openExternal(url)

  //     subWindow.webContents.on('did-finish-load', () => {
  //       // Получаем URL загруженной страницы
  //       const loadedURL = subWindow.webContents.getURL();
  //       console.log('URL загруженной страницы:', loadedURL);
  //   });
  // }
  Server.start(url)
});

