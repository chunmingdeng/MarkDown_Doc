# vue
> vue 相关内容
## vuecli
> vue的脚手架工具
### version
> 版本相关的内容  

|version|cmd|
|---|---|
|2.*|`npm install vue`|
|3.*|`npm install -g @vue/cli`|

* 2.*

|cmd|desc|
|-|-|
|vue init webpack <project_name>|初始化项目|

* 3.* 
> 踩坑相关文章  [link](https://segmentfault.com/a/1190000016423943)

|cmd|desc|
|-|-|
|vue create <project_name>|初始化项目|
> 3.0+版本的工具包也可以拉取老版本的模版
```js
npm install -g @vue/cli-init
vue init webpack my-project
```

### vscode + debugger工具使用
1. vscode安装debugger for chrome插件<br>
2. webpack配置  
    - webpack的`devtool: 'srouce-map'`，这里不区分vuecli版本，都需要这样配置
3. launch.json file configurations
    - 由vscode启动一个浏览器来执行debugger，非vscode启动的无效`"request": "launch"`
    ```json
        {
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "chrome",
                    //request 是指具体的模式 有launch和attach两种
                    //launch 模式会新打开一个浏览器窗口,自动填入url选项
                    "request": "launch",
                    "name": "vuejs: chrome",
                    "url": "http://localhost:8080",
                    "webRoot": "${workspaceFolder}/src",
                    "breakOnLoad": true,
                    "sourceMapPathOverrides": {
                        "webpack:///./src/*": "${webRoot}/*",
                        "webpack:///src/*": "${webRoot}/*"
                    }
                }
            ]
        }
     ```
    > sourceMapPathOverrides中的两个选项都建议写上，否则可能会出现断点位置和实际vue文件断点的位置不一样导致断点错位问题；
    - 自己打开的浏览器加载页面`"request": "attach"`，*<u>**目前尝试没有成功**</u>*
    ```json
        {
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "chrome",
                    "request": "attach",
                    "name": "vuejs: chrome",
                    "url": "http://localhost:8080",
                    "webRoot": "${workspaceFolder}/src",
                    "breakOnLoad": true,
                    "sourceMapPathOverrides": {
                        "webpack:///./src/*": "${webRoot}/*",
                        "webpack:///src/*": "${webRoot}/*"
                    }
                }
            ]
        }
     ```