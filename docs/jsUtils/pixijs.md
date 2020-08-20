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