# eslint篇
## 相关链接
[中文文档](https://eslint.bootcss.com/docs/user-guide/getting-started)
[英文文档](https://eslint.org)
## 如何配置eslint
### vscode中的配置
> command+shift+p => setting.json(用户设置user setting)
```json
   {
    "emmet.triggerExpansionOnTab": true,
    "window.zoomLevel": 1,
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "git.confirmSync": false,
    "git.enableSmartCommit": true,
    "workbench.editor.enablePreview": false,
    "[javascript]": {},
    "editor.renderIndentGuides": false,
    // 设置大括弧的颜色缩进
    "guides.active.color.dark": "rgba(0,255,0, 0.75)",
    "prettier.tabWidth": 4,
    "prettier.disableLanguages": [],
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "liveServer.settings.donotShowInfoMsg": true,
    // eslint相关
    "eslint.autoFixOnSave": true,
    "eslint.options": {
      "extensions": [
          ".js",
          ".vue"
      ]
    },
    "eslint.validate": [
        "javascript",  // 用eslint的规则检测js文件
        {
          "language": "vue",   // 检测vue文件
          "autoFix": true   // 为vue文件开启保存自动修复的功能
        },
        {
          "language": "html",
          "autoFix": true
        },
    ],
    "terminal.integrated.rendererType": "dom",
}
```
### .eslintrc中的配置
> plugins的配置
```js
{
  "plugins": [
    <pluginName>, // 直接省略eslint-plugin-
    eslint-plugin-<pluginName>, // 不省略的写法
  ]
}
```
#### rules config

'off'/0 关闭规则</br>
'warn'/1 警告级别的提示</br>
'error'/2 错误级别的提示</br>

> 在文件中单独配置rules，使用注释配置

开启quotes规则
/* eslint quotes: ["error", "double"], curly: 2 */

> 在配置文件中配置rules

```js
{
  "rules": {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"]
  }
}
```

> disabled rules with inline comments(使用行内注释禁用rules)

```js
// 块级禁用
/* eslint-disabled */
code
/* eslint-disabled */
// 制定行禁用
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

/* eslint-disable-next-line */
alert('foo');

alert('foo'); /* eslint-disable-line */
```

> 文件级别的禁用rules
```js
{
  "rules": {...},
  "overrides": [
    {
      "files": ["*-test.js","*.spec.js"],
      "rules": {
        "no-unused-expressions": "off"
      }
    }
  ]
}
```

> ignoring Files and Directories(规则忽略某些文件夹)

1、创建.eslintignore文件
```js
**/*.js
```
2、在package.json文件中配置
```json
{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
      "env": {
          "browser": true,
          "node": true
      }
  },
  "eslintIgnore": ["hello.js", "world.js"]
}
```
