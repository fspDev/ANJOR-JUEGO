const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  // Crea la ventana del navegador.
  let mainWindow = new BrowserWindow({
    width: 1280,
    height: 1024,
    webPreferences: {
      nodeIntegration: true // Permite la integración de Node.js en el proceso de renderizado de la página.
    }
  });

  // Carga la aplicación de React.
  mainWindow.loadURL(
    url.format({
        pathname: path.join(__dirname, '../build/index.html'),
      protocol: 'file:',
      slashes: true
    })
  );
}

app.on('ready', createWindow);
