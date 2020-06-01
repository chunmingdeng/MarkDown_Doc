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