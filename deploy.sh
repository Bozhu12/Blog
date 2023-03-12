#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件 / 生成覆盖
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 自定义域名
echo 'blog.bozhu12.cc' > CNAME



# 部署
git add -A
git commit -m "deploy1"
git push -f git@github.com:Sanscan12/Blog.git main

# 删除
cd .
rm -rf dist
