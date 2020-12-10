# webpack打包优化

## 如何优化
[相关资料](https://segmentfault.com/a/1190000019395237?utm_source=tag-newest)

### css split
- 在webpack.prod.js中的css-loader最前面加上`MiniCssExtractPlugin.loader`单独提取css
- plugins选项中配置
    ```js
        new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[id].[contenthash:8].css',
        }),
    ```

### code split

#### webpack4自带的code-split
```js
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
```
重新打包，发现新生成了一个vendor.js文件，公用的一些代码就被打包进去了。
但是这种方式只对简单的项目有用，一旦项目的复杂度上升到一定程度，webpack每次都需要去分析哪些包是公共库，会浪费大量的时间，打包速度就急剧下降。

#### dll-package
- 新建webpack.dll.js
    ```js
        const path = require('path');
        const webpack = require('webpack');
        const { CleanWebpackPlugin } = require('clean-webpack-plugin');

        module.exports = {
            mode: 'production',
            entry: {
                vendors: ['react', 'react-dom'] // 手动指定打包哪些库
            },
            output: {
                filename: '[name].[hash:8].dll.js',
                path: path.resolve(__dirname, './dll'),
                library: '[name]'
            },
            plugins: [
                new CleanWebpackPlugin(),
                new webpack.DllPlugin({
                    path: path.join(__dirname, './dll/[name].manifest.json'), // 生成对应的manifest.json，给webpack打包用
                    name: '[name]',
                }),
            ],
        }
    ```
- 添加一条命令:`"build:dll": "webpack --config webpack.dll.js"`
- 运行dll打包`npm run build:dll`，项目下会生成一个dll目录，里面包含了vendors.[*].dll.js文件，venders.manifest.json文件。
- 修改webpack.prod.js
    ```js
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, './dll/vendors.manifest.json') // 读取dll打包后的manifest.json，分析哪些代码跳过
        }),
    ```
- 配置add-asset-html-webpack-plugin到webpack.prod.js中，将dll提取出的公共包引用自动新增到页面
```js
new AddAssetHtmlPlugin({ filepath: path.resolve(__dirname, './dll/*.dll.js') })
```