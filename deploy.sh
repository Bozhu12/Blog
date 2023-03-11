#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd docs/.vuepress/dist

# 初始化
git clone https://github.com/Sanscan12/Blog.git

# 生成静态文件 / 生成覆盖
npm run build

# 部署
git add -A
git commit -m "deploy"
git push -f git@github.com:Sanscan12/Blog.git main

# 删除
cd .
rm -rf dist
