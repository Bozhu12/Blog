# 确保脚本抛出遇到的错误
set -e

# 生成静态文件 / 生成覆盖
npm run build

# 缓存目录
rm -rf docs/.vuepress/gitTemp
mkdir -p docs/.vuepress/gitTemp
cd docs/.vuepress/gitTemp
git init
# 远程连接
git remote add origin git@github.com:Sanscan12/Blog.git
# 获取远程分支
git fetch origin
# 切换分支
git checkout main
# 拷贝(覆盖)
cp -rf ../dist/* ./
# 自定义域名 (没有则注释)
echo 'www.bozhu12.cc' > CNAME
# git add --all 有等于 git add . (兼容更多版本)
git add .
git commit -m "deploy"
git push -f origin main
# 删除
cd ..

rm -rf gitTemp
