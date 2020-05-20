# mock
---
## summary
> mockjs相当于拦截了请求，这些请求在浏览器的XHR中是看不到的
## 基于vuecli 3.0-
> vue早期版本的mock使用

1.`npm install mockjs`.  
2.在main.js同级新建一个mock directory，在该directory下新建一个index.js
```js
import Mock from 'mockjs'

Mock.mock( '/mock/data', 'get',  { 'data|1-10':10 } );
Mock.mock( '/mock/data1', 'get',  { 'data|10':[{'age|1-100':100}] } );
```
3.在main.js中引入
```js
import './mock/index.js'
```

## 基于vuecli 3.0+
> 网上有些配置方案需要在webpack的devServer选项中配置before选项  [link](https://www.cnblogs.com/canulook/p/9995903.html)

> 但是实际使用的时候可以完全和3.0-的版本一致的使用方法就可以
