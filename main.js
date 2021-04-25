const { app, BrowserWindow } = require('electron')
//const path = require('path')
const { ipcMain } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 1200,
        height: 694,
        icon: __dirname + `/o.ico`,
        frame: false
    })
    win.loadFile('startup.html')
    win.setMenu(null)
    win.setResizable(false)
    win.setMaximizable(false)

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})


ipcMain.on('quit', (e) => {
    e.preventDefault()
    app.quit()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})