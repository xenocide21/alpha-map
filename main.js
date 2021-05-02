const { app, BrowserWindow } = require('electron')

let mainWindow

async function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        icon: __dirname + `/o.ico`,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true}
    })
    mainWindow.loadURL(`file://${__dirname}/startup.html`).then(()=>{
        console.log({Message: "URL Loaded"})
    })
    // BYPASS BOOT SCREEN COMMENT ABOVE AND UNCOMMENT BELOW
    // mainWindow.loadURL(`file://${__dirname}/index.html`).then(()=>{
    //     console.log({Message: "URL Loaded"})
    // })

    // mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.whenReady().then(() => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow().then(r => console.log({Message: "Application Started"}))
        }
})


// ipcMain.on('quit', (e) => {
//     e.preventDefault()
//     app.quit()
// })
//
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// })