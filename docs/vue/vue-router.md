# vue router

## 钩子函数 [link(全局守卫，独享守卫，组件内守卫)](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)
> 路由钩子可以分为全局的，单个路由独享的以及组件级别的，解决上述需求只用到了组件级别的路由钩子，所以本文只介绍组件级别的路由钩子，全局的和单个路由独享的路由钩子    
- 组件级别路由钩子分为三种：<i><b>这里强调必须要在路由组件内，否则不生效</b></i>
    - beforeRouteEnter：当成功获取并能进入路由(在渲染该组件的对应路由被 confirm 前)
    - beforeRouteUpdate：在当前路由改变，但是该组件被复用时调用
    - beforeRouteLeave：导航离开该组件的对应路由时调用
    ```js
        const Foo = {
            template: `...`,
            beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            // 可以通过传一个回调给 next来访问组件实例
            next(vm => { 
                // 通过 `vm` 访问组件实例
            })
            },
            beforeRouteUpdate (to, from, next) {
                // 在当前路由改变，但是该组件被复用时调用
                // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
                // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
                // 可以访问组件实例 `this`
                // 不支持传递回调(因为this实例已经创建可以获取到，所以没必要)
                next()
            },
            beforeRouteLeave (to, from, next) {
                // 导航离开该组件的对应路由时调用
                // 可以访问组件实例 `this`
                // 该导航可以通过 next(false) 来取消。
                const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
                if (answer) {
                    next()
                } else {
                    // 不支持传递回调(因为this实例已经创建可以获取到，所以没必要)
                    next(false)
                }
            }
        }
    ```