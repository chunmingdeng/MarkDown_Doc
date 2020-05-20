# vuepress
[link](https://www.vuepress.cn/guide/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F)
---
## introduction
VuePress 由两部分组成：第一部分是一个极简静态网站生成器，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

## 项目的目录结构
[link](https://www.vuepress.cn/guide/directory-structure.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)</br>
> .vuepress文件夹需要创建在docs文件夹之下

> .vuepress\>config.js</br>
```json
module.exports = {
  themeConfig: { // 配置页面顶部的导航，位于搜索栏的右侧
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'English', link: '/language/english' }
          ]
        },
        { text: 'External', link: 'https://www.baidu.com' },
      ],
      sidebarDepth: 2, // 配置页面左侧的导航栏，会根据h标签来生成，数字定义了根据h*来生成；
      sidebar: [
        {
          title: 'electron', // 目录名称
          collapsable: true, // 是否折叠
          children: ['/electron/'] // 指定生成导航的文件
        },
        {
          title: 'vuepress',
          collapsable: true,
          children: ['/vuepress/']
        },         
      ]
    }
}
```
