(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{419:function(t,a,e){"use strict";e.r(a);var s=e(4),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eureka-注册中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eureka-注册中心"}},[t._v("#")]),t._v(" Eureka 注册中心")]),t._v(" "),a("p",[t._v("Eureka 是 微服务的套件，基于 REST服务 。用于定位服务，以实现云端中间层服务发现 和 故障转移等功能")]),t._v(" "),a("h2",{attrs:{id:"eureka-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eureka-组件"}},[t._v("#")]),t._v(" Eureka 组件")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Eureka Server")]),t._v(" 服务注册中心（服务方）\n提供 服务注册 和 发现 功能")]),t._v(" "),a("li",[a("strong",[t._v("Service Provider")]),t._v(" 服务器 （提供方）\n将自身服务注册到 Eureka ，使 客户端 可业务服务功能")]),t._v(" "),a("li",[a("strong",[t._v("Service Consumer")]),t._v(" 客户端（应用方）\n从 Eureka 获取注册服务列表，实现 业务服务 功能")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.bozhu12.cc/myblog/Spring/SpringCloud01.png",alt:""}})]),t._v(" "),a("p",[t._v("Eureka Serve 也可是一个集群。如果Eureka Serve是个集群，当 提供者在集群的某个节点注册时，该节点会把服务的信息同步到每一个集群节点中，从而实现任意节点都可获取完整的服务列表！")]),t._v(" "),a("p",[a("strong",[t._v("Eureka Serve集群示例")])]),t._v(" "),a("p",[t._v("以下示范用三个 Eureka Server ，每个都需要注册其他 Eureka 服务中")]),t._v(" "),a("p",[t._v("例如：分别有 8000、8001、8002，则他们分别注册的有：")]),t._v(" "),a("ul",[a("li",[t._v("8000 注册到 8001、8002上")]),t._v(" "),a("li",[t._v("8001 注册到 8000、8002上")]),t._v(" "),a("li",[t._v("8002 注册到 8000、8001上")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8000 配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eureka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultZone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8001/eureka/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8002/eureka/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8001 配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eureka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8001")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultZone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8000/eureka/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8002/eureka/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8002 配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eureka"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8002")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultZone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8000/eureka/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8001/eureka/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("p",[t._v("随意访问一个 Eureka Server 的节点。效果图如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.bozhu12.cc/myblog/Spring/SpringCloud02.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"eureka-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eureka-配置"}},[t._v("#")]),t._v(" Eureka 配置")]),t._v(" "),a("p",[t._v("主要说明 Eureka有关组件的配置：")]),t._v(" "),a("ul",[a("li",[t._v("Eureka客户端\n"),a("ul",[a("li",[t._v("服务提供\n"),a("ul",[a("li",[t._v("服务地址ip")]),t._v(" "),a("li",[t._v("续约（心跳")])])]),t._v(" "),a("li",[t._v("消费服务\n"),a("ul",[a("li",[t._v("获取服务频率")])])])])]),t._v(" "),a("li",[t._v("Eureka-server 工程\n"),a("ul",[a("li",[t._v("失效剔除")]),t._v(" "),a("li",[t._v("自我保护")])])])]),t._v(" "),a("p",[a("strong",[t._v("善用 Ctrl+F")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置属性")]),t._v(" "),a("th",[t._v("值 (默认)")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("eureka.client.register-with-erueka")])]),t._v(" "),a("td",[t._v("boolean (true)")]),t._v(" "),a("td",[t._v("注册自己")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.client.fetch-registry")])]),t._v(" "),a("td",[t._v("boolean (true)")]),t._v(" "),a("td",[t._v("读取服务列表")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.client.registry-fetch-interval-seconds")])]),t._v(" "),a("td",[t._v("int (30s)")]),t._v(" "),a("td",[t._v("获取注册列表的频率")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.instance.ip-address")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("指定ip地址")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.instance.prefer-ip-address")])]),t._v(" "),a("td",[t._v("boolean (false)")]),t._v(" "),a("td",[t._v("获取ip优先于host")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.instance.lease-expiration-duration-in-seconds")])]),t._v(" "),a("td",[t._v("int (90s)")]),t._v(" "),a("td",[t._v("续约等待时长")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.instance.lease-renewal-interval-in-seconds")])]),t._v(" "),a("td",[t._v("int (30s)")]),t._v(" "),a("td",[t._v("服务续约间隔")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.client.service-url.defaultZone")])]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("服务注册地址")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.server.enable-self-preservation")])]),t._v(" "),a("td",[t._v("boolean (true)")]),t._v(" "),a("td",[t._v("自我保护模式")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("eureka.server.eviction-interval-timer-in-ms")])]),t._v(" "),a("td",[t._v("int (60000ms)")]),t._v(" "),a("td",[t._v("扫描失效服务间隔")])])])]),t._v(" "),a("h3",{attrs:{id:"服务注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务注册"}},[t._v("#")]),t._v(" 服务注册")]),t._v(" "),a("p",[a("code",[t._v("eureka.lient.register-with-erueka")]),t._v(" 注册信息允许他人发现（包括自己，该配置如果为true，会向 Eureka Server 发起Rest请求，携带本身元数据信息，Eureka Server 会把这些信息 以双层Map结构进行保存")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Map层级")]),t._v(" "),a("th",[t._v("key")]),t._v(" "),a("th",[t._v("value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("第一层")]),t._v(" "),a("td",[t._v("服务名称")]),t._v(" "),a("td",[t._v("第二层Map")])]),t._v(" "),a("tr",[a("td",[t._v("第二层")]),t._v(" "),a("td",[t._v("IP + 服务名 + 端口号")]),t._v(" "),a("td",[t._v("服务的实例对象")])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("例如：")]),t._v("\nmap<String1 , map<String2 , ServiceInstance>>")]),t._v(" "),a("p",[a("strong",[t._v("String1")]),t._v(" : user-service")]),t._v(" "),a("p",[a("strong",[t._v("String2")]),t._v(" : 127.0.0.1:user-service:8082")])]),t._v(" "),a("p",[t._v("涉及 服务注册 的配置属性")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定ip地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.instance.ip-address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("127.0.0.1 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 优先应用ip，并非 host")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.instance.prefer-ip-address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向 Eureka Server 注册其信息以供其他人发现")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.client.register-with-eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 Eureka Server 获取注册服务的频率 ，默认30s")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.client.registry-fetch-interval-seconds")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("30")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 消费者向注册服务的地址。Eureka Server 地址,多个地址以','隔开（提高成功率")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.client.service-url.defaultZone")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("url")]),t._v("\n")])])]),a("h3",{attrs:{id:"服务续约"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务续约"}},[t._v("#")]),t._v(" 服务续约")]),t._v(" "),a("p",[t._v("在服务注册完成后，提供者会维持一个心跳，定时向Eureka Server发起Rest请求。以心跳的形式表明它仍然活着就（可称为服务的续约")]),t._v(" "),a("p",[t._v("涉及 服务续约 的配置属性")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指示 Eureka Server 等待时长接收心跳，一旦超出等待时间且没有心跳信号，则移出服务列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.instance.lease-expiration-duration-in-seconds")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("90 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提供者发送心跳的频率，默认30s")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.instance.lease-renewal-interval-in-seconds")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("30 ")]),t._v("\n")])])]),a("h3",{attrs:{id:"失效剔除-自我保护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#失效剔除-自我保护"}},[t._v("#")]),t._v(" 失效剔除&自我保护")]),t._v(" "),a("p",[t._v("涉及 Eureka Server 的配置")]),t._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自我保护模式 关闭 （默认打开")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.server.enable-self-preservation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 扫描失效服务的间隔时间 (默认: 60000ms")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("eureka.server.eviction-interval-timer-in-ms")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("60000")]),t._v("\n")])])]),a("p",[a("strong",[t._v("失效剔除")])]),t._v(" "),a("p",[t._v("当 Eureka Server 在启动完成后 ，"),a("code",[t._v("eureka.server.eviction-interval-timer-in-ms : 60000")]),t._v(" 会每隔60000ms检查服务失效情况，如果某个服务节点超过90秒未收到心跳信号，那么 Eureka Server 会视为故障，将该服务剔除 （默认情况下 最长的剔除周期：90s+60s")]),t._v(" "),a("p",[a("strong",[t._v("自我保护")])]),t._v(" "),a("p",[t._v("Eureka Server 统计最近15min心跳失败的提供者比例，比例一旦到达85%，则触发自我保护机制，Eureka Server 视为网络故障等问题，Eureka Server 会锁定服务列表（以防失效剔除），这一过程保证了服务仍然可用，但不能保证访问的成功率")]),t._v(" "),a("h3",{attrs:{id:"开发者配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发者配置"}},[t._v("#")]),t._v(" 开发者配置")]),t._v(" "),a("p",[t._v("为了开发环境下，能够快速得到服务的最新状态，我们可以将其设置小一点")]),t._v(" "),a("p",[a("strong",[t._v("提供者")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lease-expiration-duration-in-seconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10秒即过期")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lease-renewal-interval-in-seconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5秒一次心跳")]),t._v("\n")])])]),a("p",[a("strong",[t._v("消费者")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("registry-fetch-interval-seconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取注册列表间隔")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Eureka Server")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable-self-preservation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭自我保护模式")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eviction-interval-timer-in-ms")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 扫描失效服务的间隔")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[t._v("仓库代码 : "),a("a",{attrs:{href:"https://gitee.com/Sanscan12/spring-cloud-examples.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/Sanscan12/spring-cloud-examples.git"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);