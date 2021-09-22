---
title: git
date: 2021-09-22
tags:
 - tag7
categories: 
 - git
---
## 上传代码
    1.建立GIt可管理的仓库
    cd到本地项目根目录下，执行 git init 命令：
    git init

    2.将项目的所有文件添加到仓库中(注意add后面有一个“ . ”)
    git add .

    3.将上一步add的文件commit到仓库
    git  commit -m "提交的说明注释"

    4.到GitHub官网新建一个仓库（Create repository）,复制仓库地址

    5.将本地仓库关联到GitHub新建的仓库上
    git remote add origin https://github.com/RmBBBBBBBBB/myblog.git

    6.使用pull命令
    git pull origin master

    7.将本地仓库的文件上传到GitHub远程仓库
    git push -u origin master



