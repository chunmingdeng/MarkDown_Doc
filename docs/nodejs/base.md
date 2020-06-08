#  base

## 基础模块
- `http`
  - `server.createServer()`
  - `server.lister()`
- `url`
- `path`
- `fs`
  - `fs.readFile()`
  - `fs.readFileSync()`
  - `fs.createReadStream()`
  - `fs.createWriteStream()`

## 社区模块
- `formidable`
    > 文件上传模块：随着数据的上传接收它们，解析它们，并吐出它们，高效安全；不会因为需要大量缓冲而导致内存膨胀；
    - `const form = new formidable.IncomingForm();`
    - `form.on('file', () => {});`
    - `form.on('field', () => {});`
    - `form.on('end', () => {});`
    - `form.parse(<req>);`
    - `form.parse(req, (err, fields, files) => {})`
    - `form.on('progress', (received, expected) => { var p = Math.floor(received / expected * 100)})`

## process
-  `stdin & stdout`
  ```js
    const stdin = process.stdin;
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', (data) => {
      console.log(data)
    })
  ```

- events
  - `beforeExit`
  - `disconnect`
  - `exit` callback function 中只能有同步函数，异步函数将会被放弃执行
  - `message`
  - `uncaughtException`

- property
  - `arch` 操作系统cpu架构 
  - `argv`

## 应用
- 如何给进程（progress）传递参数，挂载到process.env上
  - `PORT=8080 node  <*.js>` 在访问该进程的时候就可以在process.env.PORT上访问到配置的端口
    ```js
    $ PORT=8090 NODE_ENV=dev SSA=aaaa node app.js
    // app.js
    console.log(process.env.PORT)
    console.log(process.env.NODE_ENV)
    console.log(process.env.SSA)
    // console
    > 8090
      dev
      aaaa
    ```

## 原理
- nodejs如何运行js文件的
  - 所有的js文件会被解析，对js的内容进行包装
    ```js
    (function(exports, require, module, __filename, __dirname){
      // 实际的js内容
    })
    ```
    这里就解释了为什么每个js文件中能够使用exports, require, module, __filename, __dirname这些对象
