# 发布-订阅者模式(publish/subscribe)
> 在聊发布-订阅者模式之前，我们先了解一下观察者模式（observer）

## 观察者模式
- 一个被观察对象Target
- 多个观察这Observer
```js
class Target { // 被观察对象（目标对象）构造函数
    constructor() {
        this.squence = [];
    }
    add(o) {
        this.squence.push(o);
        return this;
    }
    remove(o) {
        let i = this.squence.findIndex(e => e == o);
        i > -1 && this.squence.splice(i, 1);
        return this;
    }
    notify() {
        this.squence.forEach(e => e.update());
    }
}

class Observer { // 观察者构造函数
    constructor(name) {
        this.name = name;
    }
    update() {
        console.log(`target通知-${this.name}-更新了`)
    }
}

let TargetInstance = new Target();
let ob1 = new Observer('ob1');
let ob2 = new Observer('ob2');
TargetInstance.add(ob1).add(ob2);
TargetInstance.notify();
```
**优势**：目标者与观察者，功能耦合度降低，专注自身功能逻辑；观察者被动接收更新，时间上解耦，实时接收目标者更新状态。    
**缺点**：观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控，如 “筛选通知”，“指定主题事件通知” 。

## 发布-订阅者模式
> 相较于观察者模式，发布-订阅者模式多了一个事件中心，目标并不直接通知观察对象，而是通过事件中心来派发通知。
```js
class Listener {
    constructor() {
        this.list = {};
    }
    publish(type, ...rest) {
        if(!this.list[type]) {
            console.log('不存在该订阅');
            return;
        }
        this.list[type].forEach(callback => {
            callback.call(this, ...rest);
        })
    }
    subscribe(type, callback) {
        if(!this.list[type]) {
            this.list[type] = [];
        }
        this.list[type].push(callback);
    }
    unSubscribe(type, callback) {
        if(!this.list[type]) {
            console.log('不存在该订阅');
            return;
        }
        if(!callback) {
            delete this.list[type];
            return;
        };
        let i = this.list[type].findIndex(e => e == callback);
        i > -1 && this.list.splice(i, 1);
        if (this.list[type].length == 0) delete this.list[type];
    }
}

let l = new Listener();
l.subscribe('onwork', time => {
    console.log(`${time} onwork`);
})
l.subscribe('offwork', time => {
    console.log(`${time} offwork`);
})
l.publish('onwork', '2020-09-14')
```
