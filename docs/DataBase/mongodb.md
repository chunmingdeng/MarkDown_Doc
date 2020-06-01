# mongo
## install 
#### 下载方式
1. curl下载 [link](https://www.runoob.com/mongodb/mongodb-osx-install.html)
    > 需要手动配置~/.bash_profile的配置
    - `sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.9.tgz`
2. homebrew下载[link](https://www.jianshu.com/p/d929436a4b7c) [link](https://www.cnblogs.com/zgaspnet/p/11769704.html)
    > homebrew安装会自动配置~/.bash_profile文件中的配置
    - `brew tap mongodb/brew`
    - `brew install mongodb-community@4.2`

#### 基础配置
> 关于mkdir /data/db 报错的问题，在catalina系统下，根目录已经是只读的了，不支持创建，可以根据自己的情况在别的目录新建数据库的保存文件夹     
1. 数据库文件保存路径配置
    - `mongod --dbpath <*/data/db>` 需要提前新建好*/data/db文件夹
2. 启动数据库
    - `mongod`
    - `mongod --config <config文件路径>` 根据制定配置文件启动数据库
    - 1.也就是指定数据库保存目录启动数据库

## syntax
1. database
- `use <dataBaseName>` 切换数据库
- `show dbs` 查看所有数据库
- `db.dropDatabase()` 删除当前数据库
2. collection
> 当直接向不存在的collection中insert数据时，会自动创建collection
- `db.createCollection(<collectionname>,<options>)` 创建集合（表）
- `show collections` 查看所有集合
<!-- - `db.<collectionName>.drop()`  删除集合（表） -->
3. document
- `db.<collectionName>.insert(<document>)` 创建文档
- `db.<collectionName>.find()` 查看文档
#### node & mongo
nodejs mongodb 第三方库的api[link](https://mongodb.github.io/node-mongodb-native/)