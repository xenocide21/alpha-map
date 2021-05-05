const { app, BrowserWindow } = require('electron')

let mainWindow

async function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 700,
        icon: __dirname + `/o.ico`,
        frame: false,
        transparent: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true}
    })
    mainWindow.loadURL(`file://${__dirname}/startup2.html`).then(()=>{
        console.log({Message: "URL Loaded"})
    })

    // BYPASS BOOT SCREEN COMMENT ABOVE AND UNCOMMENT BELOW
    // mainWindow.loadURL(`file://${__dirname}/index.html`).then(()=>{
    //     console.log({Message: "URL Loaded"})
    // })

    // SHOW DEV TOOLS ON MAINWINDOW @ LOADURL, CAN MAKE EVENT AND BUTTON TO TOGGLE THIS FEATURE FOR DEV
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