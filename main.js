'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
var startWindow = null;


app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {

    const electronScreen = electron.screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    // ブラウザ(Chromium)の起動, 初期画面のロード
    mainWindow = new BrowserWindow({
        width: size.width,
        height: size.height,
        transparent: false,// ウィンドウの背景を透過
        frame: false,// 枠の無いウィンドウ
        "always-on-top": true,
        "title-bar-style": "hidden-inset"
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
      mainWindow = null;
    });

    //LinkStartWindow
    startWindow = new BrowserWindow({
        width: size.width,
        height: size.height,
        transparent: false,
        frame: false,
        "always-on-top": true,
        "title-bar-style": "hidden-inset"
    });
    startWindow.loadURL('file://' + __dirname + '/movie.html');
    startWindow.on('closed', function() {
      startWindow = null;
    });





});