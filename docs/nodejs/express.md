# node server

## express
如何使用express搭建一个服务来部署前端打包好的项目

mkdir server && cd server</br>
npm install express</br>
创建app.js文件</br>
```js
const express = require('express')
const app = new express()
const path = require('path')
app.use(express.static(path.resolve(__dirname, 'dist')))
app.listen(3000, () => {
  console.log('server listen at 3000')
})
```
npm init
修改package.json
```json
{
    "scripts": {
        "dev": "node build/dev-server.js",
        "build": "node build/build.js",
        "server": "nodemon app.js",
        "start": "node app.js"
    }
}
```