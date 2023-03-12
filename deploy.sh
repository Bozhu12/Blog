#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
mkdir -p docs/.vuepress/dist
cd docs/.vuepress/dist

# 部署
git init
# 远程连接
git remote add origin git@github.com:Sanscan12/Blog.git

# github默认分支main
# 获取远程分支
git fetch origin
# 清空 master节点 工作区目录
git clean -d -fx
# 切换分支
git checkout main

# 生成静态文件 / 生成覆盖
npm run build
# 自定义域名 (没有则注释)
echo 'www.bozhu12.cc' > CNAME

# git add --all 有等于 git add . (兼容更多版本)
git add -A
git commit -m "deploy"
git push -f origin main

# 删除
cd .
rm -rf dist
