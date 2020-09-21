# TypeScript
<!-- [link](https://www.tslang.cn/docs/home.html)
## 纯粹的webpack下使用ts
- `npm install typescript ts-loader`
-  在webpack.conf.js中配置loader -->
[《TypeScript Deep Dive》](https://github.com/basarat/typescript-book/)
## install
> `npm install -g typescript`   
ts的包被安装在路径`/usr/local/lib/node_modules`下

## 编译上下文
> 在项目根目录下创建tsconfig.json，ts会默认使用其配置来编译ts文件；     

- 例如：(指定了tsc要编译的文件以及要忽略的文件)
    ```json
    {
        "files": [
            "./some/file.ts"
        ],
        "exclude": [
            "./folder/**/*.spec.ts",
            "./folder/someSubFolder"
        ]
    }
    ```

## 声明空间
### 类型声明空间
> 类型声明空间包含的是用来最类型注解的内容；    
> `class`会提供一个类型F`Foo`到类型声明空间，也会提供一个变量`Foo`到变量声明空间
```ts
class Foo {}
interface Bar {}
type Bas = {}
```
### 变量声明空间
```ts
let bar:Bar;
```