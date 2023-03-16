(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{427:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[s("strong",[t._v("🌈首次建站 :")]),t._v(" 19年开始使用 hexo建站 , 发现当中有很多缺陷不适合系统性阅读文章 , 太过于个性化 , 也没有找到相关较好的主题 , 于是搁置流放了....")]),t._v(" "),s("p",[s("strong",[t._v("🦜建站搁置 :")]),t._v(" 在学习Vue的时候 , 查阅官方文档时 , 嘿 , 发现也挺适合知识库存储(跟语雀差不多) ! 是采用 "),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1),t._v(" 开发的 , 也有了打算做的念头 . 在那期间也忙于实习 , 然后又鸽了一阵子 ...")]),t._v(" "),s("p",[s("strong",[t._v("🚩回归初衷 :")]),t._v(" 直到今年(23年) , 无意间发现有 某个博客采用 "),s("a",{attrs:{href:"https://doc.xugaoyi.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-vdoing"),s("OutboundLink")],1),t._v(" , 进去看了阵子 .... 简直是 "),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1),t._v(" 的优化版啊 , 大多配置什么的都不需要配 , 只要按照约定编写文档即可 , 开箱即用什么的 . 于是走起了开坑之旅..")]),t._v(" "),s("blockquote",[s("p",[t._v("如果对 主题配置有要求 , 不建议使用 . 进开源看演示指不定喜欢上呢💓")])]),t._v(" "),s("p",[t._v("主题基于 : "),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("采用主题 : "),s("a",{attrs:{href:"https://doc.xugaoyi.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-vdoing"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("p",[s("strong",[t._v("大致步骤 :")])]),t._v(" "),s("ol",[s("li",[t._v("跑一遍官方指南 , 所有!")]),t._v(" "),s("li",[t._v("按照 "),s("a",{attrs:{href:"https://doc.xugaoyi.com/pages/33d574/",target:"_blank",rel:"noopener noreferrer"}},[t._v("约定更改"),s("OutboundLink")],1),t._v(" 文章")]),t._v(" "),s("li",[t._v("运行 ==npm run deploy== (查看以下配置)")]),t._v(" "),s("li",[t._v("在GitHub配置仓库 , Settings -> Pages -> 构建部署 (指定分支..)")]),t._v(" "),s("li",[t._v("首次访问(里面会有个访问连接访问即可)")])]),t._v(" "),s("p",[t._v("新GitHub默认分支更改为 "),s("code",[t._v("main")]),t._v(" , 操作可按照以下配置")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件 / 生成覆盖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" docs/.vuepress/gitTemp\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/gitTemp\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 远程连接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:xxxx/Blog.git\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout main\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝(覆盖)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/dist/* ./\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义域名 (没有则注释)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blog.bozhu12.cc'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git add --all 有等于 git add . (兼容更多版本)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deploy"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" origin main\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" gitTemp\n")])])]),s("h2",{attrs:{id:"域名-收费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名-收费"}},[t._v("#")]),t._v(" 域名 (收费)")]),t._v(" "),s("p",[t._v("博主 采用 阿里云 配置 , 其他平台配置差异不大")]),t._v(" "),s("p",[t._v("假设 :")]),t._v(" "),s("ul",[s("li",[t._v("GitHub账号 : Sancan12")]),t._v(" "),s("li",[t._v("域名 : blog.bozhu12.cc")])]),t._v(" "),s("p",[s("strong",[t._v("大致步骤 :")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("购买域名")])]),t._v(" "),s("li",[s("p",[t._v("域名解析 (自选二级域名)")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("记录类型")]),t._v(" "),s("th",[t._v("主机记录(二级域名)")]),t._v(" "),s("th",[t._v("记录值 (注意名称)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("CNAME")]),t._v(" "),s("td",[t._v("blog")]),t._v(" "),s("td",[t._v("Sancan12.github.io")])])])])]),t._v(" "),s("li",[s("p",[t._v("在GitHub配置仓库 , Settings -> Pages -> Custom domain (填写配置的域名)")])]),t._v(" "),s("li",[s("p",[t._v("域名访问测试 https://blog.bozhu12.cc")])])]),t._v(" "),s("blockquote",[s("p",[t._v("加载可能没有那么块需要等待10min左右")])]),t._v(" "),s("h2",{attrs:{id:"ssl-免费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssl-免费"}},[t._v("#")]),t._v(" SSL (免费)")]),t._v(" "),s("p",[t._v("博主 采用 阿里云 配置 , 其他平台配置差异不大")]),t._v(" "),s("p",[t._v("假设 :")]),t._v(" "),s("ul",[s("li",[t._v("GitHub账号 : Sancan12")]),t._v(" "),s("li",[t._v("域名 : blog.bozhu12.cc")])]),t._v(" "),s("p",[s("strong",[t._v("大致步骤 :")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("进入 SSL证书 控制台 , 并实名认证")])]),t._v(" "),s("li",[s("p",[t._v("创建证书 , SSL证书 -> 免费证书 -> 创建证书 -> 申请证书")])]),t._v(" "),s("li",[s("p",[t._v("申请配置 , (选项形式呈现)")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("证书绑定域名")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blog.bozhu12.cc\n密钥算法"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("RSA\nSCR生成方式"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("系统生成\n")])])])]),t._v(" "),s("li",[s("p",[t._v("申请后会得到 主机记录,记录类型,记录值 , 需要域名逐一配置")])]),t._v(" "),s("li",[s("p",[t._v("下载证书 (证书到手 , 其他平台只需配置即可)")])])]),t._v(" "),s("p",[s("strong",[t._v("使用方式 :")])]),t._v(" "),s("ul",[s("li",[t._v("运行服务器 配置 Nginx")]),t._v(" "),s("li",[t._v("在GitHub仓库静态访问 , 在CDN配置")])]),t._v(" "),s("h2",{attrs:{id:"cdn-免费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn-免费"}},[t._v("#")]),t._v(" CDN(免费)")]),t._v(" "),s("p",[t._v("博主 采用 七牛云 配置 , 其他平台配置差异不大")]),t._v(" "),s("p",[t._v("免费 , 但提速有限 , 国内响应平均 4秒内")]),t._v(" "),s("p",[t._v("假设 :")]),t._v(" "),s("ul",[s("li",[t._v("GitHub账号 : Sancan12")]),t._v(" "),s("li",[t._v("域名 : blog.bozhu12.cc")])]),t._v(" "),s("p",[s("strong",[t._v("大致步骤 :")])]),t._v(" "),s("ol",[s("li",[t._v("SSL控制台 -> 上传证书 -> 下载证书 , CV内容 即可 (分别有 证书内容/私钥)")]),t._v(" "),s("li",[t._v("CDN控制台 -> 域名管理 -> 添加域名")]),t._v(" "),s("li",[t._v("填写配置 (下图")]),t._v(" "),s("li",[t._v("配置域名 CNAME记录即可")]),t._v(" "),s("li",[t._v("在网上找些网站平测试")])]),t._v(" "),s("img",{staticStyle:{zoom:"70%"},attrs:{src:"C:\\Users\\Sans\\AppData\\Roaming\\Typora\\typora-user-images\\image-20230312122610444.png",alt:"image-20230312122610444"}}),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("以上内容仅限做引导说明 , 如有问题评论区讨论吧")])])}),[],!1,null,null,null);s.default=e.exports}}]);