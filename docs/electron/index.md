# electron guide

## summary
electron可以用来写客户端的程序，类似app或者桌面程序；

## install
cross-env提供传递参数的支持
> `npm install cross-env -g`

安装的时候传入指定的参数
> `cross-env npm_config_electron_mirror="https://npm.taobao.org/mirrors/electron/" npm_config_electron_custom_dir="8.0.2" npm install electron@8.0.2`

tips：目前版本的electron执行install命令的时候会出现卡在某一步骤或者出现安装的路径不对的问题，这时候需要设置安装的registry以及传入相应的参数避免安装出现路径问题导致安装不成功。

## 新建一个electron项目
- npm install electron
main.js
```js
const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('http://www.baidu.com');
    mainWindow.webContents.openDevTools(); // 开发者情况下使用，默认打开开发者工具

    mainWindow.on('closed', function() {
        mainWindow = null;
    })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
app.on('activate', () => {
    if (mainWindow == null) createWindow();
})
```