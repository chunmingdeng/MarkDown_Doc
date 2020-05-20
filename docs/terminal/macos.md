# macos terminal
* mkdir \<fileName\> \#创建directory
* sudo rm -r -f \<fileName\> \#删除directory

### 进程
- `sudo lsof -i :<port>` \# 查看当前端口的进程
- `sudo kill -9 <port>` \# kill port

### 打包
- `tar -cf <fileName>.tar *` \#打包当前文件夹下的所有文件
### chrome
- 打开一个非安全的chrome浏览器，并指定非安全目录  
    `open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/LeoLee/Documents/MyChromeDevUserData `

    `open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/chunmingdeng/personalProject/ThreeJs/img`
- 打开一个可以debugger的浏览器
`open -n /Applications/Google\ Chrome.app/ --args --remote-debugging-port=9222`

### man命令
> man是lunix下的manul（手册）命令缩写<br>
> eg:`man ls`

### linux
* `ll/ls -l`  
    * drwx------ 2 Guest users 1024 Nov 21 21:05 Mail  
    * 第一个栏位，表示文件的属性。Linux的文件基本上分为三个属性：可读（r），可写（w），可执行（x）。但是这里有十个格子可以添（具体程序实现时，实际上是十个bit位）。第一个小格是特殊表示格，表示目录或连结文件等等，d表示目录，例如drwx------;l表示连结文件，如lrwxrwxrwx;如果是以一横“-”表示，则表示这是文件。其余剩下的格子就以每3格为一个单位。因为Linux是多用户多任务系统，所以一个文件可能同时被许多人使用，所以我们一定要设好每个文件的权限，其文件的权限位置排列顺序是（以-rwxr-xr-x为例）：　　
    rwx(Owner)r-x(Group)r-x(Other)　　
    这个例子表示的权限是：使用者自己可读，可写，可执行；同一组的用户可读，不可写，可执行；其它用户可读，不可写，可执行。另外，有一些程序属性的执行部分不是X,而是S,这表示执行这个程序的使用者，临时可以有和拥有者一样权力的身份来执行该程序。一般出现在系统管理之类的指令或程序，让使用者执行时，拥有root身份。
    * 第二个栏位，表示文件个数。如果是文件的话，那这个数目自然是1了，如果是目录的话，那它的数目就是该目录中的文件个数了。    
    * 第三个栏位，表示该文件或目录的拥有者。若使用者目前处于自己的Home,那这一栏大概都是它的账号名称。　　
    * 第四个栏位，表示所属的组（group）。每一个使用者都可以拥有一个以上的组，不过大部分的使用者应该都只属于一个组，只有当系统管理员希望给予某使用者特殊权限时，才可能会给他另一个组。　　
    * 第五栏位，表示文件大小。文件大小用byte来表示，而空目录一般都是1024byte，你当然可以用其它参数使文件显示的单位不同，如使用ls –k就是用kb莱显示一个文件的大小单位，不过一般我们还是以byte为主。　　
    * 第六个栏位，表示创建日期。以“月，日，时间”的格式表示，如Aug 15 5:46表示8月15日早上5:46分。　　
    * 第七个栏位，表示文件名。我们可以用ls –a显示隐藏的文件名。


### ps 
> ps (process status)， 用来查看进程的状态<br>[link](https://www.cnblogs.com/tig666666/p/7251284.html)

- a  显示所有进程
- -a 显示同一终端下的所有程序
- u  显示指定用户的所有进程
- -au 显示较详细的资讯
- -aux 显示所有包含其他使用者的行程 

### grep
[link](https://www.jianshu.com/p/ca88e6ef504d)


### nohup
> nohup(np hang up) 非挂起执行每个命令  

- 一般命令以` &`结尾表示后台运行命令，但是terminal窗口关闭会终止
- `nohup <command> &`让命令在后台运行，即时terminal窗口关闭也不会终止


### shell syntax(脚本语法)
[link](https://zhuanlan.zhihu.com/p/83338411?utm_source=qq)
