# 确保脚本抛出遇到的错误
set -e

# 生成静态文件 / 生成覆盖
npm run build

echo "服务器上传"

# 将收录文件放置根目录
cp baidu_verify_codeva-9ffekTXf39.html docs/.vuepress/dist

# 进入路径
cd docs/.vuepress/dist
pwd

# 使用scp命令上传文件夹，并覆盖已存在的文件
scp -r ./ root@8.134.216.202:/home/bozhu/BlogDocker/nginx/html

read -p "点击任意键关闭"
