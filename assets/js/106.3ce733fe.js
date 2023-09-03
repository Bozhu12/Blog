(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{444:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("该主题配置实战经历 , 也是给了自己在当中学习的经历作为记录 , 虽说是转载 , 但自己也在当中踩了不少坑")]),t._v(" "),s("p",[t._v("以下是采用  Artalk自托管评论系统 来配置 "),s("a",{attrs:{href:"https://doc.xugaoyi.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-vdoing"),s("OutboundLink")],1),t._v(" 主题")]),t._v(" "),s("p",[s("strong",[t._v("官方文档 :")]),t._v(" https://artalk.js.org/")]),t._v(" "),s("p",[s("strong",[t._v("转载文章 :")]),t._v(" https://wiki.eryajf.net/pages/b74c2b")]),t._v(" "),s("h2",{attrs:{id:"后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[t._v("#")]),t._v(" 后端")]),t._v(" "),s("p",[t._v("后端基于 "),s("a",{attrs:{href:"/backend/1hg7cc"}},[t._v("docker")]),t._v(" , 开箱即用的容器 , 需要到服务器 !!")]),t._v(" "),s("p",[s("strong",[t._v("准备 :")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/backend/1hg7cc"}},[t._v("Docker")]),t._v(" 服务器/搭载docker云空间")]),t._v(" "),s("li",[s("a",{attrs:{href:"/web/1hg7wd"}},[t._v("Nginx")]),t._v(" 反向代理")])]),t._v(" "),s("p",[s("strong",[t._v("大致步骤 :")]),t._v(" (点击快速跳转)")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#%E6%8B%89%E5%8F%96%E9%95%9C%E5%83%8F"}},[t._v("拉取镜像")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%95%9C%E5%83%8F%E5%AE%B9%E5%99%A8%E8%BF%90%E8%A1%8C"}},[t._v("镜像容器运行")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE%E7%99%BB%E5%BD%95%E8%B4%A6%E5%8F%B7"}},[t._v("配置登录账号")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#Nginx%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"}},[t._v("Nginx反向代理配置")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#Web%E7%AE%A1%E7%90%86%E9%A1%B5%E9%85%8D%E7%BD%AE"}},[t._v("Web管理页配置")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%87%8D%E5%90%AFdocker"}},[t._v("重启docker")])])]),t._v(" "),s("h3",{attrs:{id:"拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[t._v("docker pull artalk/artalk-go\n")])])]),s("h3",{attrs:{id:"镜像容器运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像容器运行"}},[t._v("#")]),t._v(" 镜像容器运行")]),t._v(" "),s("div",{staticClass:"language-docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[t._v("docker run -d \\\n    --name artalk \\\n    -p 8088:23366 \\\n    -v $(pwd)/data:/data \\\n    --restart=always \\\n    artalk/artalk-go\n")])])]),s("p",[s("strong",[t._v("选项说明 :")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-d")]),t._v(" "),s("td",[t._v("后台运行")])]),t._v(" "),s("tr",[s("td",[t._v("--name")]),t._v(" "),s("td",[t._v("指定容器名称")])]),t._v(" "),s("tr",[s("td",[t._v("-p")]),t._v(" "),s("td",[t._v("指定端口 [外部端口]:[容器端口]")])]),t._v(" "),s("tr",[s("td",[t._v("-v")]),t._v(" "),s("td",[t._v("映射 目录/文件")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("端口可以自定义")])]),t._v(" "),s("h3",{attrs:{id:"nginx反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx反向代理"}},[t._v("#")]),t._v(" Nginx反向代理")]),t._v(" "),s("p",[t._v("检测上一步的容器是否正在运行")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看正在运行的容器相关信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看容器端口是否开放 填下 容器名/容器id")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" port "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name/id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("检查无误后进行配置反向代理")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("配置Nginx  (注意自己的nginx根路径 , 可能和我的不同)")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/nginx/conf.d/comment.bozhu12.cc\n")])])])]),t._v(" "),s("li",[s("p",[t._v("粘贴以下配置\n"),s("strong",[t._v("含SSL证书")])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" [::]:80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" [::]:443 ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 外部访问的域名")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" comment.bozhu12.cc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" /etc/nginx/ssl/comment.bozhu12.cc.pem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" /etc/nginx/ssl/comment.bozhu12.cc.key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v(" ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v(" TLSv1 TLSv1.1 TLSv1.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("on")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X-Forwarded-Proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X-Real-IP         "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8088")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("无SSL证书")])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" [::]:80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" [::]:443 ssl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 外部访问的域名")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" comment.bozhu12.cc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X-Forwarded-Proto "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X-Real-IP         "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" http://localhost:8088")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("ul",[s("li",[t._v("80是 http访问 / 443是 https访问")]),t._v(" "),s("li",[t._v("防火墙需要开放 80/443 端口 , 外部访问需要")]),t._v(" "),s("li",[t._v("有些平台 并非采用防火墙 , 则是需要开放 安全组")]),t._v(" "),s("li",[t._v("如果是个人的服务器 , 供应商必然会屏蔽 80/443 端口 , 因此配置需要添加端口")])])]),t._v(" "),s("h3",{attrs:{id:"配置登录账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置登录账号"}},[t._v("#")]),t._v(" 配置登录账号")]),t._v(" "),s("p",[t._v("通过管理员创建账户")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" artalk artalk admin\n")])])]),s("p",[t._v("根据提示填写 账号/密码")]),t._v(" "),s("h3",{attrs:{id:"web管理页配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web管理页配置"}},[t._v("#")]),t._v(" Web管理页配置")]),t._v(" "),s("p",[t._v("有些人会倾向于在 docker 映射的 /data中更改配置 , 为了更直观的更改配置 , 我选择了Web进行配置")]),t._v(" "),s("p",[t._v("如果上面的配置没有问题 , 那么我们可以通过 comment.bozhu12.cc  访问到后台进行配置")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("根据Nginx配置的不同 , 会有所差异!!!")])]),t._v(" "),s("p",[s("strong",[t._v("关键配置 : (个人建议)")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置项")]),t._v(" "),s("th",[t._v("值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("语言 (最新版默认英文)")]),t._v(" "),s("td",[t._v("zh-CN")])]),t._v(" "),s("tr",[s("td",[t._v("可信域名(一个测试 , 一个发布)")]),t._v(" "),s("td",[t._v("http://localhost:8080"),s("br"),t._v("https://www.bozhu12.cc")])]),t._v(" "),s("tr",[s("td",[t._v("前端配置->头像 (国内最好头像镜像平台)")]),t._v(" "),s("td",[t._v("https://cravatar.cn/avatar/")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("其他配置自行细品")])]),t._v(" "),s("h3",{attrs:{id:"重启docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启docker"}},[t._v("#")]),t._v(" 重启docker")]),t._v(" "),s("p",[t._v("必不可少的一个重要步骤 , 前面所有在Web配置中 , 不会立马生效 , 需要重启docker容器才能生效")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" restart artalk\n")])])]),s("h2",{attrs:{id:"前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),s("p",[s("strong",[t._v("大致步骤 :")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装评论插件")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--save")]),t._v(" vuepress-plugin-vdoing-comment "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npmmirror.com\n")])])])]),t._v(" "),s("li",[s("p",[t._v("配置评论插件 , 在自己的 vdoing 工程项目中，插件配置可能在 :")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("docs/.vuepress/config.ts")])]),t._v(" "),s("li",[s("code",[t._v("docs/.vuepress/config/plugins.js")])])]),t._v(" "),s("p",[t._v("但下面的配置一定相同 :")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserPlugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 评论")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-vdoing-comment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("choosen")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'artalk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://comment.bozhu12.cc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// （必填）")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("site")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'柏竹'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// （必填）")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disableEmotion: false, // 是否禁用表情（可选）")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disablePicture: true, // 是否禁用图片（可选）")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disablePreview: false // 是否禁用预览（可选）")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("样式配置 , 兼容主题 "),s("code",[t._v("docs/.vuepress/styles/palette.styl")]),t._v(" 最后添加如下内容进行优化：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// artalk 评论框 适配暗黑模式\n.theme-mode-dark #vuepress-plugin-vdoing-comment")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--at-color-bg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" --bodyBg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ffffff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--at-color-font")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ffffff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--at-color-bg-transl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" --bodyBg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--at-color-bg-grey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #373a40\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".theme-mode-dark #vuepress-plugin-vdoing-comment .atk-editor-plug-emoticons > .atk-grp-switcher > span:hover, .atk-editor-plug-emoticons > .atk-grp-switcher > span.active")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--at-color-bg-grey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".theme-mode-dark #vuepress-plugin-vdoing-comment .atk-editor-plug-emoticons > .atk-grp-switcher")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--at-color-bg-grey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("以上内容仅限做引导说明 , 如有问题评论区讨论吧")])])}),[],!1,null,null,null);s.default=r.exports}}]);