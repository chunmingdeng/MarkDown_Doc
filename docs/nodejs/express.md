# node server

## 一个最简单的服务器
```js
    const fs = require('fs')
    const http = require('http')

    let server = http.createServer((req, res) => {
        console.log('请求拦截器，每个请求都会触发')
    }).listen(3000, () => console.log('server listing in port 3000'));

    server.on('request', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        console.log(req.url)
        if (req.url.indexOf('/search') > -1) {
            res.end(req.url);
        } else {
            res.end('非法请求')
        }
    })
```
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