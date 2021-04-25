const { app, BrowserWindow } = require('electron')
//const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 1200,
        height: 700,
        icon: __dirname + `/o.ico`
    })
    win.loadFile('index.html')
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
        app.quit()
    }
})