# JS设计模式

#### 观察者模式（发布-订阅者模式/消息机制）
```js
var observer = (function() {
    var _message = {};
    return {
        regist : function(type, fn) {
            if(typeof _message[type] == "undefined") { // ??? 
                _message[type] = [fn]
            } else {
                _message[type].push(fn);
            }
        },
        remove : function(type, fn) {
            if(!_message[type] instanceof Array) return;
            for(var i=0; i<_message[type].length; i++) {
                _message[type].splice(i, 1);
                fn();
                i--;
            }
        },
        fire : function(type, args) {
            if(!_message[type]) return;
            for(var i=0; i<_message[type].length; i++){
                _message[type][i].call(this, {type: type,args: args});
            }
        },
    }
})();
// observer.regist('alert', function(args) {console.log(`alert01 ${args}`)})
// observer.regist('alert', function(args) {console.log(`alert02 ${args}`)})
// observer.fire('alert', {name: 'danel'})
```

#### 状态模式
```js
var StatesModel = function(){
    var states = {
        state1: function() {},
        state2: function() {},
        // ...
    }
    return function(state){
        states[state]
    }
}()
```

#### 策略模式
> 用途：表单验证
```js
var PriceStrategy = function() {
    var startegy = {
        return30: function(arg) {},
        return50: function(arg) {},
        // ...
    }
    return function(stra, price) {
        strategy[stra] && strategy[stra](price)
    }
}()
```