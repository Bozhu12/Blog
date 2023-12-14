(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{429:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"jar打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jar打包"}},[s._v("#")]),s._v(" Jar打包")]),s._v(" "),t("p",[s._v("大致流程")]),s._v(" "),t("ol",[t("li",[s._v("jdk安装 , 并配置")]),s._v(" "),t("li",[s._v("Maven打包项目 , 上传服务器")]),s._v(" "),t("li",[s._v("运行jar项目")])]),s._v(" "),t("blockquote",[t("p",[s._v("SpringBoot内置集成Tomcat , 无需安装即可应用")])]),s._v(" "),t("p",[t("strong",[s._v("项目打包")])]),s._v(" "),t("p",[s._v("Maven -> 双击package , 加载完会在 /target(缓存路径) 上看到 .jar 文件 , 在Liunx系统里运行即可")]),s._v(" "),t("p",[t("strong",[s._v("运行jar包项目")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" shop-0.0.1-SNAPSHOT.jar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" logName.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("p",[t("strong",[s._v("指令说明")])]),s._v(" "),t("ul",[t("li",[s._v("==nohup java -jar shop-0.0.1-SNAPSHOT.jar== 运行项目 , 不挂断运行")]),s._v(" "),t("li",[s._v("==Log.log 2>&1== 表示将"),t("code",[s._v("stdout")]),s._v("和"),t("code",[s._v("stderr")]),s._v("合并后重定向到"),t("code",[s._v("log.file")])])]),s._v(" "),t("blockquote",[t("p",[s._v("运行后可以看到 一串数值 , 可通过 ==jps==指令 进行查看进程")])]),s._v(" "),t("p",[t("strong",[s._v("关闭进程 :")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查指定端口 (查8080)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -nlp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确定端口的 PID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("PID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"docker打包-群辉挂载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker打包-群辉挂载"}},[s._v("#")]),s._v(" Docker打包/群辉挂载")]),s._v(" "),t("ol",{attrs:{start:"0"}},[t("li",[t("p",[s._v("jar打包")])]),s._v(" "),t("li",[t("p",[s._v("创建 dorderfile.txt (编辑配置文件) , 保存后取出后缀 .txt")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Docker image for springboot file run")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VERSION 0.0.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基础镜像使用java")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" openjdk:8")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" Sans")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VOLUME 指定了临时文件目录为/tmp。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" /tmp ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将jar包添加到容器中并更名为xx.jar (demo.jar -> test.jar)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" demo.jar test.jar ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行jar包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" bash -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'touch /test.jar'")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Djava.security.egd=file:/dev/./urandom"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/test.jar"')]),s._v("]")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("执行镜像打包 (在含有 dockerfild 和 xx.jar 执行以下文件)")]),s._v(" "),t("div",{staticClass:"language-docker extra-class"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[s._v("sudo docker build . -t demo-name:v1.0\n")])])])]),s._v(" "),t("li",[t("p",[s._v("打开docker , 镜像加载即可 (配置按照默认)")])]),s._v(" "),t("li",[t("p",[s._v("反向代理 , 控制面板 -> 登录门户 -> 高级 -> 反向代理服务器\n新增 来源 *:端口 ; 目的 locakhost:本地端口")])]),s._v(" "),t("li",[t("p",[s._v("外部访问即可")])])]),s._v(" "),t("h2",{attrs:{id:"ssl域名认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl域名认证"}},[s._v("#")]),s._v(" SSL域名认证")]),s._v(" "),t("p",[s._v("SSL能够将该网站变为更安全的网站 , HTTPS独有的协议")]),s._v(" "),t("p",[s._v("阿里云申请后 : 下载"),t("code",[s._v("JKS")]),s._v(" 证书类型(里面有 key和password 两个文件)")]),s._v(" "),t("p",[s._v("key放到 "),t("code",[s._v("resources")]),s._v("目录 即可")]),s._v(" "),t("p",[t("strong",[s._v("application文件配置")])]),s._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 域名 SSL配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server.ssl.key-store")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("classpath:8840811_bozhu.free.svipss.top.jks")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server.ssl.key-store-password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("xxxx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("server.ssl.key-store-type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("JKS")]),s._v("\n")])])]),t("table",[t("thead",[t("tr",[t("th",[s._v("属性")]),s._v(" "),t("th",[s._v("值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("server.ssl.key-store")]),s._v(" "),t("td",[s._v("key文件的全名称")])]),s._v(" "),t("tr",[t("td",[s._v("server.ssl.key-store-password")]),s._v(" "),t("td",[s._v("第二个文件夹的内容粘贴出来")])]),s._v(" "),t("tr",[t("td",[s._v("server.ssl.key-store-type")]),s._v(" "),t("td",[s._v("认证类型 JKS")])])])]),s._v(" "),t("p",[s._v("直接访问https接口 , 也可以设置重定向为https")]),s._v(" "),t("h2",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" SSH")]),s._v(" "),t("p",[s._v("先连接OpenWrt 作为代理主机进行操作")]),s._v(" "),t("p",[s._v("OpenWrt SSH访问在")]),s._v(" "),t("p",[s._v("==系统 -> 管理权 -> Dropbear 实例== : 启动网关端口...")]),s._v(" "),t("p",[s._v("群辉SSH 先访问OpenWrt作为代理进行内网访问群辉SSHComponent")])])}),[],!1,null,null,null);t.default=r.exports}}]);