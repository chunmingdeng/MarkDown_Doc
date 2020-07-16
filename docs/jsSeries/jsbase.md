# js基础
## 1.基础概念
#### JS 中 == 和 === 区别是什么？
1. 对于string,number等基础类型，==和===有区别
    * 不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等。
    * 同类型比较，直接进行“值”比较，两者结果一样。
2. 对于Array,Object等高级类型，==和===没有区别
    * 进行“指针地址”比较。
3. 基础类型与高级类型，==和===有区别
    * 对于==，将高级转化为基础类型，进行“值”比较。
    * 因为类型不同，===结果为false。

#### slice & splice
1. 前者有两个可选参数，后者有三个参数（一个必填，两个可选）
2. 前者不修改原属组，后者修改原数组；
3. 前者截取数组中的某部分作为新数组返回；后者1个参数，表示截取数组中的start到最后的元素，并返回；后者2个参数，表示截取[start, start+step)的元素，并返回；后者3个参数，表示截取[start, start+step)的元素，并替换为第三个参数；

#### export & module.exports
1. 在没有修改的情况下`export === module.exports`;
2. export其实指向的是module.exports的引用；
3. `export = {};`这是错误的写法，修改了export的引用，会导致无法正常导出，修改对象上的属性则不回导致这个问题；

#### 基本类型 & 引用类型
1. 基本类型保存在栈内存中，引用类型保存在堆内存中；
2. 基本类型：undefined, null, number, string, boolean, symbol; 引用类型：Object, Array, Function, Data, RegExp, Error；

#### 基本事件
1. contextmenu：鼠标的右击事件
    ```js
    window.document.addEventListener('contextmenu', e => {e.preventDefault();console.log(e)}, true)
    ```
2. drag：拖拽事件，当对某个元素进行拖拽监听（ondragstart）,想进行放置元素的时候需要对放置容器设置ondrop监听，同时需要对放置容器监听ondragover并且`e.preventDefault()`;􏷋􏳭􏷺􏼺􏻼􏳵􏸇􏴍􏺢􏺣􏼼􏻗􏵋􏳺􏴓􏵻􏳥􏴟􏴗􏳥􏳺􏴹􏵋􏳺􏴓􏵻􏴛􏴔􏳥􏳺􏻼􏳵􏳱􏴱􏴲􏸕􏵐􏴍􏼽􏷙􏻾􏳩􏵋􏳺􏴛􏳼􏻼􏳵􏳶
3. 获取选中的文本：
    ```js
        function getSelection() {
            window.getSelection?window.getSelection().toString():document.selection.createRange().text;
        }
        // 移除选中的文本
        document.getSelection().removeAllRanges()
    ```

#### 幂等操作
1. 如果一个事物不管是执行一次还是很多次，得到的结果都是相同的，那么该操作就是幂等；（http请求的get, head, delete, options, put, trace）

## 2.排序算法
> [link](https://www.cnblogs.com/onepixel/articles/7674659.html)

## 3.ES6部分原理详解
#### Pormise
> 自己实现promise；使用es6的class  
```js
    // 极简的实现+链式调用+延迟机制+状态
    class Promise {
        constructor(fn) {
            this.callbacks = [];
            this.state = 'pending'; // 增加状态
            this.value = null; // 保存结果
            fn(this._resolve.bind(this));
        }
        then(onFulfilled) {
            // 这里判断了调用then的时候，promise的状态（即resolve是否执行了），如果pending，则将函数放入调用栈，否则直接执行函数
            if (this.state === 'pending') { // 在resolve之前，跟之前逻辑一样，添加到callbacks中
                this.callbacks.push(onFulfilled);
            } else { // 在resolve之后，直接执行回调，返回结果了
                onFulfilled(this.value);
            }
            return this;
        }
        _resolve(value) {
            this.state = 'fulfilled'; // 改变状态
            this.value = value; // 保存结果
            this.callbacks.forEach(fn => fn(value));
        }
    }
```

## 4.bind 
> [link](https://www.webhek.com/post/javascript-bind.html)     
  bind返回的值是一个函数，并不会直接调用函数 

`fun.bind(thisArg[, arg1[, arg2[, ...]]])`
- thisArg 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用 new 操作符调用绑定函数时，该参数无效。
- arg1, arg2, … （可选）当绑定函数被调用时，这些参数加上绑定函数本身的参数会按照顺序作为原函数运行时的参数。
```js
// 利用apply实现原生浏览器的bind函数（低端浏览器不支持时候的hack）
Function.prototype.my_bind = function(context) {
    var fn = this;
    return function() {
        fn.apply(context, arguments);
    }
}
// 另外的实现
function bind(fn, context) {
    return function() {
        fn.apply(context, arguments);
    }
}
```

## 奇奇怪怪的函数
- 利用`a.b.c.e`创建嵌套对象
    ```js
    function createObj(str) {
        var o = p = g = {};
        var parts = str.split('.');
        for (var i = 0; i<parts.length; i++) {
            if(!p[parts[i]]) {
                p[parts[i]] = {} // 第一次这里的地址引用实际是g，所以修改的是g
            }
            old = p;
            p = p[parts[i]]
        }
        return g;
    }
    ```
- 利用上面的函数原理创建模块定义函数（JS设计模式中的同步模块模式）[javaScript设计模式p256]()
```js
var F = F || {};
F.define = function(str, fn) {
    var o = p = this;
    var parts = str.split('.');
    var i = 0;
    for(; i< parts.length; i++) {
        if(!p[parts[i]]) {
            p[parts[i]] = {};
        }
        o = p;
        p = p[parts[i]];
    }
    if(fn) 
        o[parts[--i]] = fn();
    return this;
}
// 定义模块/注册模块
// F.define('a.b.c.d.e', function() {
//     return function(){
//         console.log(9999)
//     }
// })
```
- 模块的调用[javaScript设计模式p258]()
```js
F.module = function() {
    var args = [].slice.call(arguments),
        fn = args.pop(),
        parts = args,
        pl = parts.length,
        i = 0,
        p, ms = [];
    while(i < pl){
        if(parts[i].constructor == String){
            var modules = parts[i].split('.');
            p = this;
            for(var j = 0; j< modules.length; j++){
                p = p[modules[j]] || false;
            }
            ms.push(p)
        } else {

        }
        i++;
    }
    fn.apply(null, ms);
}
// 调用模块
// F.module('a.b.c.d.e', function(e) {
//     e()
// })
```