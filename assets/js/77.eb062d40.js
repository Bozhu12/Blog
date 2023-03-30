(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{413:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"config-配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-配置中心"}},[t._v("#")]),t._v(" Config 配置中心")]),t._v(" "),a("p",[t._v("Spring Cloud Config 为微服务提供了集中式的配置方案，它主要通过远端仓库进行获取相关配置文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud16.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("配置中心也是微服务，需要注册到 Eureka 服务注册中心")])]),t._v(" "),a("p",[a("strong",[t._v("主要功能：")])]),t._v(" "),a("ul",[a("li",[t._v("提供 配置服务支持")]),t._v(" "),a("li",[t._v("集中管理各个环境的配置文件")]),t._v(" "),a("li",[t._v("仓库 版本管理模式")])]),t._v(" "),a("h2",{attrs:{id:"搭建远端仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建远端仓库"}},[t._v("#")]),t._v(" 搭建远端仓库")]),t._v(" "),a("p",[t._v("远端仓库搭建于 gitee，把之前配置好的 "),a("code",[t._v("application.yml")]),t._v(" 文件信息，推送到远端仓库中，进行服务！")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("由于GitHub国内访问较慢，因此应用 gitee 示例")]),t._v(" "),a("li",[t._v("对 Git 不了解？ "),a("a",{attrs:{href:"https://blog.csdn.net/weixin_45963193/article/details/116350522",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击 Git 应用 了解"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建仓库\n"),a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud17.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("如果创建仓库为 公开 ，配置中心 无需配置密码")])])]),t._v(" "),a("li",[a("p",[t._v("创建两个文件夹 "),a("code",[t._v("API")]),t._v("、"),a("code",[t._v("config")]),t._v(" "),a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud18.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("待会测试不同子目录访问")])])]),t._v(" "),a("li",[a("p",[t._v("根据以往配置有 "),a("code",[t._v("user-server")]),t._v("、"),a("code",[t._v("consumer")]),t._v("、"),a("code",[t._v("gateway")]),t._v(" 。分别将这些服务的配置存储到仓库的不同目录中，并重新命名 (命名很重要)")]),t._v(" "),a("ul",[a("li",[t._v("==/user-dev.yml== （仓库根目录）")]),t._v(" "),a("li",[t._v("==API/gateway-dev.yml==")]),t._v(" "),a("li",[t._v("==config/consumer-dev.yml==")])])])]),t._v(" "),a("h3",{attrs:{id:"配置文件命名规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件命名规则"}},[t._v("#")]),t._v(" 配置文件命名规则")]),t._v(" "),a("p",[t._v("一般情况配置中心会通过远端的配置文件名称进行锁定应用，正因如此 配置文件的命名会直接关系到 服务的配置是否生效")]),t._v(" "),a("p",[a("strong",[t._v("命名方式：")])]),t._v(" "),a("ul",[a("li",[t._v("=={application}-{profile}.yml==")]),t._v(" "),a("li",[t._v("=={application}-{profile}.properties==")])]),t._v(" "),a("p",[a("code",[t._v("application")]),t._v(" ：服务名称")]),t._v(" "),a("p",[a("code",[t._v("profile")]),t._v(" ：区分 环境 。分别有 "),a("code",[t._v("dev")]),t._v(" (开发环境) ; "),a("code",[t._v("test")]),t._v(" (测试环境) ; "),a("code",[t._v("pro")]),t._v(" (生产环境)")]),t._v(" "),a("p",[t._v("这是 "),a("code",[t._v("user-server")]),t._v(" 服务的配置 重命为 "),a("code",[t._v("user-dev.yml")]),t._v(" ，其他服务也如此")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud19.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("其实命名参数的内容可以自定义，后面会根据这些参数 "),a("code",[t._v("application")]),t._v(" ; "),a("code",[t._v("profile")]),t._v(" ; "),a("code",[t._v("分支")]),t._v(" 进行锁定配置文件 (它们之间要有 "),a("code",[t._v("-")]),t._v(" 分割，且顺序严格)")])]),t._v(" "),a("h2",{attrs:{id:"搭建配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建配置中心"}},[t._v("#")]),t._v(" 搭建配置中心")]),t._v(" "),a("p",[t._v("Config 配置中心 是与远端仓库交互的微服务（由上图可以看到），前提也需注册到Eureka上进行服务 。主要用于配置 连接远端仓库、访问目录、账号密码 等相关 连接远端的配置")]),t._v(" "),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("p",[t._v("基于以上篇章的基础进行测试")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建 新Maven工程(无骨架)\n我创建的工程名称 "),a("code",[t._v("config-server")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("config-server")]),t._v(" 配置依赖  "),a("code",[t._v("pom.xml")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- eureka --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-netflix-eureka-client"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- config --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-config-server"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("config-server")]),t._v(" 启动类")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Eureka客户端")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableDiscoveryClient")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用配置服务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableConfigServer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConfigApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("config-server")]),t._v(" 配置文件 "),a("code",[t._v("application.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultZone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10086/eureka\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仓库 url")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//gitee.com/xxxx/my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test.git\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要访问目录 (默认根路径开始) ")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("search-paths")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'API,config'")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下配置在 仓库为私有的前提配置；公开无需配置")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户名")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("gitee账号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 密码")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("gitee密码"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读取分支 (默认master)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#            label : test")]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("ul",[a("li",[t._v("公开仓库无需配置账号密码")]),t._v(" "),a("li",[t._v("指定子目录的配置需要 "),a("code",[t._v("'")]),t._v(" 符号括住；多个子目录需要 "),a("code",[t._v(",")]),t._v(" 分隔符进行分隔")])])])]),t._v(" "),a("li",[a("p",[t._v("测试")]),t._v(" "),a("p",[t._v("依次启动 "),a("code",[t._v("Eureka")]),t._v(" 、"),a("code",[t._v("config-server")]),t._v(" 两个服务，分别访问一下地址：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://localhost:14000/user-dev.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:14000/user-dev.yml"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://localhost:14000/gateway-dev.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:14000/gateway-dev.yml"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://localhost:14000/consumer-dev.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:14000/consumer-dev.yml"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("不用指定子路径可直接访问到 远端仓库的配置资源")]),t._v(" "),a("li",[t._v("访问 gateway 的资源时可能会出现被过滤器过滤的问题，因此需要 关闭跨域相关配置 或 赋予地址权限（不过 不关闭跨域也不会影响配置信息的读取，也就浏览器看不到而已）")])])])])]),t._v(" "),a("h2",{attrs:{id:"服务获取配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务获取配置"}},[t._v("#")]),t._v(" 服务获取配置")]),t._v(" "),a("p",[t._v("上面已经 搭建了 仓库、配置中心 ，因此可直接舍弃  "),a("code",[t._v("user-server")]),t._v("、"),a("code",[t._v("consumer")]),t._v("、"),a("code",[t._v("gateway")]),t._v(" 三个微服务的配置，重新配置，主要访问远端的配置信息")]),t._v(" "),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("说明：")]),t._v(" 有三个微服务，我围绕 "),a("code",[t._v("user-server")]),t._v(" 微服务进行配置，其他也如此，就不赘述了")])]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("user-server")]),t._v(" 添加依赖")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- config --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-config"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("user-server")]),t._v(" 删除 原有的 "),a("code",[t._v("application.yml")]),t._v(" , 替换成 "),a("code",[t._v("bootstrap.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultZone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10086/eureka\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下 指定 命名格式 进行查找")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与仓库中配置文件的 application 保持一致")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与仓库中的配置文件的 profile 保持一致")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("profile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dev\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定配置所属分支")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("label")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用配置中心")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置中心服务名")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n")])])])]),t._v(" "),a("li",[a("p",[t._v("测试")]),t._v(" "),a("ol",[a("li",[t._v("依次启动 "),a("code",[t._v("Eureka")]),t._v(" 、"),a("code",[t._v("config-server")]),t._v(" 、"),a("code",[t._v("user-server")]),t._v(" 三个服务")]),t._v(" "),a("li",[t._v("访问 "),a("a",{attrs:{href:"http://localhost:9091/user/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9091/user/1"),a("OutboundLink")],1),t._v(" (返回数据表示成功)")])])])]),t._v(" "),a("p",[a("strong",[t._v("说明：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bootstrap.yml")]),t._v(" 也是默认配置文件 且比 "),a("code",[t._v("application.yml")]),t._v(" 加载早")]),t._v(" "),a("li",[t._v("锁定仓库中的配置有："),a("code",[t._v("name")]),t._v(" (服务名称) ; "),a("code",[t._v("profile")]),t._v(" (环境) ; "),a("code",[t._v("label")]),t._v(" (分支)")]),t._v(" "),a("li",[a("code",[t._v("bootstrap.yml")]),t._v(" 相当于项目启动的引导文件")])]),t._v(" "),a("p",[a("strong",[t._v("bootstrap.yml 与 application.yml 的区别")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("bootstrap.yml")]),t._v(" "),a("th",[t._v("application.yml")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("配置级别")])]),t._v(" "),a("td",[t._v("系统")]),t._v(" "),a("td",[t._v("应用")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("加载时段")])]),t._v(" "),a("td",[t._v("较早")]),t._v(" "),a("td",[t._v("较迟")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("配置参数")])]),t._v(" "),a("td",[t._v("较少变动")]),t._v(" "),a("td",[t._v("较多变动")])])])]),t._v(" "),a("hr"),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("仓库代码 : "),a("a",{attrs:{href:"https://gitee.com/Sanscan12/spring-cloud-examples.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/Sanscan12/spring-cloud-examples.git"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("官方文档 : "),a("a",{attrs:{href:"https://cloud.spring.io/spring-cloud-config/reference/html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Cloud Config"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);