# 工具类函数

## 常用的工具类函数

* deepClone(深克隆，深拷贝)
```js
function deepClone(source) {
	if(!source) return null;
	if(source instanceof RegExp) return new RegExp(source);
	if(source instanceof Date) return new Date(source);
	if(typeof source != 'object') return source;
	let temp = new source.constructor();
	for(let key in source) {
		temp[key] = deepClone(source[key]);
	};
	return temp;
}
```

* 数据千分位化
```js
Vue.prototype.numberThousandFormat = function (number){
    if(!number) return '0';
    const a = number.toString().split('');
    const a_r = a.reverse();
    var result = []
    for(var i=0;i<a_r.length;i++) {
        if(i%3 !== 0){
            result.push(a_r[i]);
        }else if(i%3 == 0 && i == 0){
            result.push(a_r[i]);
        }else if(i%3 == 0 && i != 0){
            result.push(',', a_r[i]);
        }
    }
    return result.reverse().join('');
}
```

* uuid生成
```js
getUUID: function() {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for(let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";

    let uuid = s.join("");
    return uuid.replace(/-/g, '');
},
```