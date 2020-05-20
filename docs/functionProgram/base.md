# 基础
## [toturial](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
## 函数柯里化curry
> 如何实现add(1)(2)(3);
```js
const fn = x => y => z => x + y + z
```
> 这里为什么可以这样写？其实这里就使用到了**函数柯里化**的概念
> 什么是函数柯里化？</br>
>> 函数柯里化（curry）是函数式编程里面的概念。curry的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

> 简单实现一个柯里化函数
```js
const curry = (fn, ...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (..._args) => curry(fn, ...args, ..._args)
const add = (a,b,c,d) => a+b+c+d;
curry(add)
```