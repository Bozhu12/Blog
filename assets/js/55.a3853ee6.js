(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{392:function(a,t,s){"use strict";s.r(t);var n=s(4),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("Canal 是个开源的消息队列系统 , 基于 数据库增量 日志解析 进行同步 , 提供增量 增量数据 订阅/消费 . 用于 异步消息传递 和 事件驱动 应用程序")]),a._v(" "),t("p",[t("strong",[a._v("GitHub :")]),a._v(" "),t("a",{attrs:{href:"https://github.com/alibaba/canal",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/alibaba/canal"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("strong",[a._v("Canal核心 :")])]),a._v(" "),t("ul",[t("li",[a._v("数据同步")]),a._v(" "),t("li",[a._v("分布式架构")]),a._v(" "),t("li",[a._v("多协议支持")]),a._v(" "),t("li",[a._v("权限管理")])]),a._v(" "),t("h2",{attrs:{id:"运作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运作原理"}},[a._v("#")]),a._v(" 运作原理")]),a._v(" "),t("p",[a._v("Canal 同步原理 , 基于主从同步实现 , 运作原理 :")]),a._v(" "),t("ol",[t("li",[a._v("Canal 提供 MySQL 二进制文件(binary_log) , 用于记录 增 删 改 命令的事件")]),a._v(" "),t("li",[a._v("master 将 增 删 改 事件 写入 binary_log , 写入前会根据 Canal 配置过滤规则 ,  过滤binary_log")]),a._v(" "),t("li",[a._v("slave 异步线程不断读取 master 写入的 binary_log 拷贝到 中继日志(realy_log)")]),a._v(" "),t("li",[a._v("slave 根据 realy_log 中的事件 , 将数据再次加载一次 , 到达数据同步目的")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Canal_slave")]),a._v(" "),t("p",[a._v("你可以把它看做是 伪装成MySQL的部分 , 去监听MySQL")])]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("以下安装基于 MySQL 数据库 , 实现同步")]),a._v(" "),t("p",[t("strong",[a._v("准备 :")])]),a._v(" "),t("ul",[t("li",[a._v("Java环境")]),a._v(" "),t("li",[a._v("Canal安装包 , 并上传主机")]),a._v(" "),t("li",[a._v("MySQL")])]),a._v(" "),t("p",[a._v("MySQL授权用户")]),a._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 创建用户 canal\ncreate user canal@'%' IDENTIFIED by 'canal';\n# 授权用户\nGRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT,SUPER ON *.* TO 'canal'@'%' identified by 'canal';\n# 刷新生效\nFLUSH PRIVILEGES;\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),t("p",[a._v("账号密码都是 canal , 后续自行更改即可!")])]),a._v(" "),t("p",[t("strong",[a._v("Canal的 conf配置")])]),a._v(" "),t("ol",[t("li",[a._v("进入 conf目录 , 拷贝一份 "),t("code",[a._v("example")]),a._v("文件夹 , 并更改为你实例的名称")]),a._v(" "),t("li",[a._v("进入 刚刚拷贝的文件夹 , 配置 "),t("code",[a._v("instance.properties")]),a._v("文件")])]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sql IP:Port")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.master.address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("127.0.0.1:3306")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sql账号")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.dbUsername")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("canal")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sql密码")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.dbPassword")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("canal")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sql字符集")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.connectionCharset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("UTF-8")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动同步日志")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.tsdb.enable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sql库名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.defaultDatabaseName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("<库名>")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 监听 指定表名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("canal.instance.filter.regex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("<库名>\\\\..*")]),a._v("\n")])])]),t("p",[t("strong",[a._v("监听表名支持写法 :")])]),a._v(" "),t("p",[a._v("Perl正则表达式 , 多个正则需要 "),t("code",[a._v(",")]),a._v(" 分割 , 转义符需要 "),t("code",[a._v("\\\\")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[a._v("格式")]),a._v(" "),t("th",{staticStyle:{"text-align":"center"}},[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[a._v(".*")]),a._v(" / "),t("code",[a._v(".*\\\\..")])]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("所有库表")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[a._v("canal\\\\..*")])]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("canal库下的 所有表")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[a._v("canal\\\\.canal.*")])]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("canal库下的 以canal开头的表")])]),a._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[t("code",[a._v("canal.test1")])]),a._v(" "),t("td",{staticStyle:{"text-align":"center"}},[a._v("canal库的test1表")])])])]),a._v(" "),t("p",[t("strong",[a._v("启动验证")])]),a._v(" "),t("p",[a._v("进入bin执行以下命令 :")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" startup.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建实例")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" canal.sh start\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看日志 (但SQL 增 改 时..)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" ./bin/logview.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/conf/example/instance.properties\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 后面加 -s 选项 代表 包含删除操作")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" ./bin/logview.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/conf/example/instance.properties "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v("\n")])])]),t("h3",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" docker")]),a._v(" "),t("p",[t("strong",[a._v("MySQL配置")])]),a._v(" "),t("p",[a._v("MySQL根据目录下的 "),t("code",[a._v("/conf/my.cnf")]),a._v("配置")]),a._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置文件路径")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("log-bin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/var/lib/mysql/mysql-bin")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定数据库")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("binlog-do-db")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("<你的数据库>")]),a._v("\n")])])]),t("p",[t("strong",[a._v("验证配置生效")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# shell 重启容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入sql指定以下命令")]),a._v("\nshow master status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("docker容器 通信")])]),a._v(" "),t("p",[a._v("容器与容器之间的独立的 , 因此需要建立网络通信")]),a._v(" "),t("p",[t("strong",[a._v("创建网络")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network create "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("网络名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("MySQL连接网络")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network connect "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("网络名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器name/id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# MySQL容器连接")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" network connect "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("网络名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器name/id"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Canal配置")])]),a._v(" "),t("p",[a._v("载入Canal镜像 , 从外部下载的")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("文件名"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".tar\n")])])]),t("p",[t("strong",[a._v("运行 Canal容器")])]),a._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[a._v("docker run -p 11111:11111 --name canal \\\n-e canal.destinations=<库名> \\\n-e canal.instance.master.address=mysql:3306  \\\n-e canal.instance.dbUsername=canal  \\\n-e canal.instance.dbPassword=canal  \\\n-e canal.instance.connectionCharset=UTF-8 \\\n-e canal.instance.tsdb.enable=true \\\n-e canal.instance.gtidon=false  \\\n-e canal.instance.filter.regex=<库名>\\\\..* \\\n--network <网络名称> \\\n-d canal/canal-server:v1.1.5\n")])])]),t("p",[t("strong",[a._v("验证")])]),a._v(" "),t("p",[a._v("进入容器日志查看")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" canal "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看日志")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" canal-server/logs/canal/canal.log\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看实例日志")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" canal-server/logs/sans/sans.log\n")])])]),t("h2",{attrs:{id:"sprinboot监听同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sprinboot监听同步"}},[a._v("#")]),a._v(" SprinBoot监听同步")]),a._v(" "),t("p",[t("strong",[a._v("引入依赖")])]),a._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("top.javatool"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("canal-spring-boot-starter"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.2.1-RELEASE"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[t("strong",[a._v("配置")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("canal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("destination")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# canal的集群名字，要与安装canal时设置的名称一致")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11111")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# canal服务地址")]),a._v("\n")])])]),t("p",[t("strong",[a._v("修改实体类")])]),a._v(" "),t("p",[a._v("通过 @Id/@Column /@Transient/@TableField 等注解完善 对库表的映射")]),a._v(" "),t("p",[a._v("在逆向工程生成中 , 可以生成这些注解 , 如果如果没有需要手动配置")]),a._v(" "),t("p",[t("strong",[a._v("监听器类")])]),a._v(" "),t("p",[a._v("通过实现 "),t("code",[a._v("EntryHandler<T>")]),a._v("接口 编写监听器 , 里面包含有 增 删 改 触发的方法 , 我们需要重写他们")]),a._v(" "),t("p",[a._v("应用前我们需要注意 :")]),a._v(" "),t("ul",[t("li",[a._v("监听类需要 "),t("code",[a._v('@CanalTable("<表名>")')]),a._v("注解 指定监听的表")]),a._v(" "),t("li",[t("code",[a._v("EntryHandler<T>")]),a._v("接口 泛型 需要些表中对应的 实体类")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("heima"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pojo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Item")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stereotype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Component")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("top"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("javatool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("canal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CanalTable")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("top"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("javatool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("canal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EntryHandler")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("javax"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Resource")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@CanalTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tb_item"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Component")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ItemHandler")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EntryHandler")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Item")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 封装的 RedisTeamp操作类(并非重点)")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Resource")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RedisHandler")]),a._v(" redisHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 监控消息 增 删 改")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("insert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Item")]),a._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"item:"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        redisHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("save")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * 可根据 之后/之前 的数据差异进行控制更新缓存\n     * @param before 变化前对象\n     * @param after 变化后对象\n     */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Item")]),a._v(" before"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Item")]),a._v(" after"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"item:"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" after"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        redisHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("save")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" after"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("delete")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Item")]),a._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"item:"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        redisHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("deleteByKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("strong",[a._v("运行测试")])]),a._v(" "),t("ol",[t("li",[a._v("查看Redis数据")]),a._v(" "),t("li",[a._v("更改MySQL数据")]),a._v(" "),t("li",[a._v("查看Redis数据")])]),a._v(" "),t("p",[a._v("可以发现 Reids 和 MySQL数据是同步的")]),a._v(" "),t("hr"),a._v(" "),t("p",[a._v("目前学习 Canal 简单应用 , 发现这个的确挺好用的 , 后续学到其他知识点尝试拓展下~")])])}),[],!1,null,null,null);t.default=e.exports}}]);