// mkdir XX：创建一个空目录 XX指目录名
// pwd：显示当前目录的路径
// cat xx：查看xx文件内容
// git init：吧当前的目录变成可以管理的git仓库，生成隐藏的.git文件
// git add xx：把xx文件添加到暂存区
// git commit -m “xx”：提交文件 -m后面的是注释
// git status：查看仓库状态
// git log：查看历史记录
// git reset --hard HEAD^：网上回退一个版本
// git reflog：查看历史记录的版本号id
// git checkout -- xx：把xx文件在工作区的修改全部撤销
// git rm xx：删除xx文件 之后要commit
// git remote add origin https://github.com/qiuhaifeng01/a.git 关联一个远程库
//     git push -u（第一次要用-u以后不用）origin master：把当前master分支推送到远程库
// git clone https://github.com/xxxxx   从远程库中克隆
//     git checkout -b dev：创建dev分支 并切换到dev分支上
// git branch：查看当前所有的分支
// git checkout master：切换回master分支
// git merge dev：在当前分支合并dev分支
// git branch -d dev：删除dev分支
// git branch xxx：创建分支xxx