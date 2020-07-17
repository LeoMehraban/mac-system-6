const {app, BrowserWindow} = require('electron');
app.on('ready', () => {
   new BrowserWindow().loadURL(`file://${__dirname}/stuff/index.html`);
});
