# 基础
## 相关书籍推荐
- javascript+ES6函数式编程入门经典.pdf
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
let c00 = curry(add)
c00(1,2,3,4)


let curry = (fn, ...args) => {
    return args.length >= fn.length ?
    fn(...args) : 
    (..._args) => curry.bind(null, fn, ..._args)
} 
let c01 = curry(add)
c01(1,2,3,4)() // 这里因为使用的是bind函数，所以需要再额外调用一次

```
## 工具函数
- <b>unary</b> # 无论传入多少个参数，只使用传入参数的第一个
  ```js
  const unary = (fn) => {
    fn.length == 1 ? fn : (arg) => fn(arg);
  }
  ```
- <b>once</b> # 无论调用多少次，函数只执行一次，使用场景表单提交，支付
  ```js
  // (exp1, exp2)表示会执行两个参数并返回第二个表达式的结果
  const once = (fn) => {
    let done = false;
    return function () {
      return done ? undefined : (done = true, fn.apply(this, arguments));
    }
  }
  ```
- <b>memorized</b> # 存贮纯函数的计算结果
  ```js
  const memorized = (fn) => {
    const lookupTable = {};
    return (arg) => lookupTable[arg] || (lookupTable[arg] = fn(arg));
  }
  ```
- <b>reduce</b> # 归约数组
  ```js
    // 不给定初始值
    const reduce = (arr, fn) => {
      let acc;
      for(var val of arr)
        acc = fn(acc, val); // 计算之后的值和当前的值计算
      return [acc];
    }
    // 给定初始值
    const reduce => (arr, fn, initialValue) => {
      let acc;
      if(initialValue != undefined)
        acc = initialValue;
      else
        acc = arr[0];
      
      if(initialValue != undefined)
        for(const val of arr)
          acc = fn(acc, val);
      else
        for(let i = 1;i< arr.length; i++) 
          acc = fn(acc, arr[i]);

      return [acc];
    }
  ```
- <b>partial（偏函数）</b> # 允许开发者部分的应用函数的参数
  ```js
  const partial = (fn, ...partialArgs) => {
    let args = partialArgs;
    return function(...fullArgs) {
      let count = 0;
      for(let i = 0; i < args.length && count < fullArgs.length; i++) {
        if(args[i] == undefined) {
          args[i] = fullArgs[count++];
        }
      };
      return fn.apply(null, args);
    }
  }
  ```

- <b>compose</b> # 组合，满足结合律
  ```js
  const compose = (...fns) => 
    (value) => 
      reduce(fn.reserve(), (acc, fn) => fn(acc), value);
  ```

- <b>pipe</b> # 管道
  ```js
  const pipe = (...fns) => 
    (value) => 
      reduce(fns, (acc, fn) => fn(acc), value);
  ```

- **Functor** # 函子
  ```js
  // MayBe函子
  const MayBe = function(val) {
    return {value: val};
  }
  MayBe.of = function() {
    return new MayBe();
  }
  MayBe.prototype.isNothing = function() {
    return (this.value == null || this.value == undefined);
  }
  MayBe.prototype.map = function(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
  }
  ```