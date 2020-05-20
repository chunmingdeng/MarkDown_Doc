# git
---
## [toturial](https://git-scm.com/book/zh/v2)
## git命令
> `git add .`</br>
> `git commit -m <message: string>`</br>
> `git commit -amend` \#本次的提交追加在上次的提交里面合为一次，必须在git add .之后才能执行本命令</br>
> `git remote add origin <url>` \#添加远程仓库的地址</br>

### 删除命令
git branch -D <branch_name> \#删除本地仓库的某个分支</br>
git push <repository_name> --delete <branch_name> \#删除远程的某个分支</br>
git push <repository_name> :<branch_name> \#同样是删除远程分支的另一种方法</br>
git push rm <repository_name> \#删除远程的某个仓库</br>

### 仓库相关命令
git fetch <repository_name> \#同步远程服务器数据到本地
git remote show \#可以查看到远程有多少仓库</br>
git remote -v \#可以查看远程仓库以及其对应的仓库地址</br>
git remote show <repository_name> \#查看远程的指定仓库</br>
git remote rename pb Paul  \#修改某个远程仓库在本地的简称</br>

### 分支相关命令
git branch -vv \#查看本地分支对应的远程分支</br>
git branch -a \#查看所有的本地及远程分支</br>
git branch -v \# 查看各个分支最后一个提交信息</br>
git remote prune <repository_name> \#清楚远程仓库的无效分支（远程删除了，但是本地还有之前记录）

### 取消提交
git reset --hard <commit_id> \#彻底回退到commit_id的版本，本地源码页恢复到commit_id版本（撤销commit和add）</br>
git reset --soft <commit_id> \#回退到commit_id版本，但是本地的修改可以提交（撤销commit但是add保留）</br>
git reset <commit_id> \#默认使用--mixed选项，回退到commit_id版本，修改的文件需要git add后才能提交</br>
git checkout <commit_id> <file_name> \#取消<file_name>的<commit_id>版本提交 </br>

### 修改提交
git commit --amend \#修改最后一次提交。先git add 新的changes，然后再跑这个命令重新提交</br>
> 如何撤销--amend的某次提交
>> git reflog \#查看提交的历史记录，区别于git log</br>
>> git reset HEAD@{\<number\>} \#reset到指定的commit_hash

### 合并提交
git rebase -i HEAD~\<number\> \#number需要合并的commit的个数，从当前位置向前推

### 暂存修改
git stash save -a <message_info> \#</br>
git stash list \#展示所有的stash</br>
git stash pop --index stash@{0} \#取出指定index的stash，并在stash list中清除</br>
git stash apply --index stash@{0} \#apply指定index的stash，stash list中仍然存在</br> 
git stash clear \#清除所有的stash</br>

### reset
git reset HEAD . \#在git add .之后可以用来撤销暂存的文件</br>

### checkout 
git checkout . \#在git add .之后执行会撤销所有的文件修改

### clean
git clean -f \#删除所有的untracked files</br>
git clean -fd \#删除所有的untracked files & untracked directory</br>
git clean -xfd \#连 gitignore 的untrack 文件/目录也一起删掉 （慎用，一般这个是用来删掉编译出来的 .o之类的文件用的）</br>
> 在用上述 git clean 前，墙裂建议加上 -n 参数来先看看会删掉哪些文件，防止重要文件被误删