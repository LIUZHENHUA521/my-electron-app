const { app,BrowserWindow } = require('electron');

function createWindow(){
    const win = new BrowserWindow({ width: 800, height: 1500,skipTaskbar:true })
    win.loadURL('https://cloud1-7g89mule96dd3a75-1306423945.tcloudbaseapp.com')
    const contents = win.webContents;
    console.log(contents)
}
app.whenReady().then(res=>{
    createWindow()
})