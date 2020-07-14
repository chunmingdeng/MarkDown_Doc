# vue 插件
## tost案例
[link](https://segmentfault.com/a/1190000021959058)

```js
// ***Plugin.js
import absComponent from './***.vue'
export default {
    install: (Vue, opts) => {
        Vue.prototype.$loading = function() {
            let c_fn = Vue.extend(absComponent);
            let instance = new c_fn({
                data: {},
                methods: {},
                // ...
            });
            instance.$mount();
            // instance // 虚拟的Vdom
            // instance.$mount().$el //真实的html结构
            // document.body // 操作真实的html挂载
            return instance; // instance 调不调用$mount()都可以
        }
    }
}
```