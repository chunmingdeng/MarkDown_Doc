# echarts options
## options中和定位相关的参数
> 如何给label，legend，title设置位置参数</br>
>> top,right,left,bottom都可以用来设置，值既可以是百分比也可以是具体多少‘*px’</br>
>> x,y的只可以用来进行居中定位，可以设置‘center’的值</br>

## 地图label自定义位置的问题
> 在geojson注册的时候，可以定义 properties.cp 属性，实现文本的坐标自定义，实现自定义位置。
```json
{
    "type": "FeatureCollection",
    "features": [{
        "id": "650000",
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [],
            "encodeOffsets": [[88824, 50096]]
        },
        "properties": {
            "cp": [87.617733, 43.792818],
            "name": "新疆",
            "childNum": 1
        }
    }],
    "UTF8Encoding": true
}
```