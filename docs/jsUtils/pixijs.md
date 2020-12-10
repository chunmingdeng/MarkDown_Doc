# pixi.js tutorial

## 基础
|method name| desc|
|---|---|
|`new PIXI.Application`|create instance|
|`PIXI.loader.add`|load image|
|`new PIXI.Sprite`|texture from loader|
|`sprite.position.set`|set sprite position|
|`sprite.scale.set`|set sprite scale|
- 初始化实例
```js
let app =  new PIXi.Application({width: 1000, height: 1000});
document.appendChild(app.view);
```
- 加载sprite将要使用到的img
```js
// 首先将image加载到PIXI中，然后在使用texture
PIXI.loader.add(<image_path>).load(<loaded_callback>)

function <loaded_callback>(loader, source) {
    let sprit = new PIXI.Sprite(
        PIXI.resource[<image_path>].texture
    )
}
```
- 使用texture渲染
```js
sprite.postion.set(x,y);
sprite.scale.set(xScale,yScale);
sprite.height = h;
sprite.width = w;
app.stage.appendChild(sprite)
```
- sprite.position
```js
// 1 sprite 左上角的位置
sprite.x = x;
sprite.y = y;
// 2
sprite.postion.set(x,y);
```
- sprite.scale
```js
// 1
sprite.scale.x = xScale;
sprite.scale.y = yScale;
// 2
sprite.scale.set(xScale,yScale);
```
- sprite.rotate
```js
// 设置旋转点为sprite的中心点（默认是图片的左上角）
// 1
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;
// 2
sprite.anchor.set(0.5, 0.5)
```
- sprite.pivot
```js
// 使用pixel，相对于图片的左上角定位旋转中心
sprite.pivot.set(32,32)
```
- sprite.rotation
```js
sprite.rotation = 0.1; // 弧度制 Math.PI = 180deg
```

## methods
- `PIXI.loaders.Loader()`创建一个loader实例，v5.0.0之后废弃
- `loader.add(name, url)`将指定资源加载到loader实例中
- `loader.pre(function(resource, next){})`每次load add好的sequence中资源的时候会触发该函数，第一个参数是load的资源，第二个参数next是一个函数，类似于Generator函数（或者vue-router钩子函数）中的next，用来继续下个load，pre中的callback function在每次load resource的时候都会触发
- `loader.load(function(loader, resources){})`用来开始sequence的加载，并且在sequence加载完成的时候调用callback function，这个函数只会调用一次
- `new PIXI.container()` A Container represents a collection of display objects.
    ```js
    let container = new PIXI.Container();
    container.addChild(sprite);
    ```
- `new PIXI.Graphics()` 返回值是一个容器引用，本质上也是用来存储简单图形（线line，圆形circle，长方形rectAngle，多边形polygon），也可以进行填充，然后用来绘制的，这个容器中保存的内容可以复用