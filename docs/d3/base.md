# D3.js

## svg
#### marker
> 标记`marker`写在`defs`中，用于定义可以重复利用的图形元素
```js
	<svg width='300' height='300' xmlns='http://www.w3.org/2000/svg'>
		<defs>
			<marker id='arrow' 
				markerUnits='strokeWidth' 
				markerWidth='12'
				markerHeight='12'
				viewBox='0 0 12 12'
				refX='6'
				refY='6'
				orient='auto'>
					<path d='M2,2 L10,6 L2,10 L6,6 L2,2' fill='#000'/>
				</marker>
        </defs>
		<line x1='20' y1='20' x2='100' y2='200' stroke='black' stroke-width='4' marker-start='url(#arrow)' marker-mid='url(#arrow)' marker-end='url(#arrow)'/>
	</svg>
```
- `markerWidth`,`markerHeight`定义了marker的大小  
- `viewBox`定义了marker的视窗大小     
- `refX`,`refY`定义了该marker在使用的时候的origin point    
- `orient`定义了marker使用时的方向   
- `markerUnits:strokeWidth`表示以调用次标记的元素的轮廓线的大小为基准（此例中以line元素的stroke-width为基准系数）

#### filter
> 滤镜`filter`也是定义在`defs`标签内的，使用方法和marker一样，以下是一个高斯模糊的例子
```html
<defs>
    <filter id='GaussianBlur'>
        <feGaussianBlur in='SourceGraphic' stdDeviation='2'/>
    </filter>
</defs>
<line x1='20' y1='20' x2='100' y2='200' stroke='black' stroke-width='4' filter='url(#GaussianBlur)'/>
```

#### linearGradient
> 线性渐变`linearGradient`同上
```html
<defs>
    <linearGradient id='myGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <linearGradient id='myGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
		        <stop offset='0%' stop-color='#f00'></stop>
		        <stop offset='100%' stop-color='#0ff'></stop>
		    </linearGradient>
    </linearGradient>
</defs>
<rect x1='10' y1='10' height='100' width='200' fill='url(#myGradient)'/>
<line x1='20' y1='20' x2='100' y2='200' stroke-width='4' stroke='url(#myGradient)'/>
```
- `linearGradient`的(x1,y1) (x2,y2)定义了渐变的起始点和结束点（或者叫渐变方向+渐变范围）
- `stop`的`offset`定义了**渐变范围内**渐变起始位置的颜色和结束位置的颜色