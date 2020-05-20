# koa
---
```js
mkdir <dir>
npm init -y
touch server.js
```
server.js
```js
const koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    console.log(ctx);
    await next();
    ctx.response.type = 'image/gif';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
    ctx.set('Content-Disposition','attachment; filename=test')
})

app.listen(3000, ()=>{
    console.log("prot 3000 listening")
})
```

## ctx对象和netx方法
> ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response，next是koa传入的将要处理的下一个异步函数。

ctx设置请求头<br>
`ctx.set('Content-Disposition','attachment; filename=test')`