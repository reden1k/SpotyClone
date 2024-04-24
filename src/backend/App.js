import {Server} from "./Server.js"
import {app, BrowserWindow} from 'electron';
import path from 'node:path';
//Server.start();
function createWindow () {
  const win = new BrowserWindow({
    width: 512,
    height: 1024,
    resizable: false,
    icon: 'src/frontend/source/icon.png',
    sandbox: true,
    webPreferences: {
        preload: path.join(process.cwd(), '/dist/bundle.js')
      }
  })
  console.log(path.join(process.cwd(), 'src/frontend/index.js'))
  win.loadFile('src/frontend/index.html')
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
    app.quit()
  }
})

