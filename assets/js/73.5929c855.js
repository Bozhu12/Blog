(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{411:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hystrix-熔断器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-熔断器"}},[t._v("#")]),t._v(" Hystrix 熔断器")]),t._v(" "),s("p",[t._v("Hystrix 是一个用于分布式系统的 ==延迟==、==容错== 的开源库。在分布式系统里，许多依赖不可避免的调用失败，比如超时、异常等。==Hystrix能够保证在一个依赖出问题的情况下，不会导致整个服务失败==，避免级联故障，以提高分布式系统的弹性。")]),t._v(" "),s("p",[t._v("Hystrix 能为系统做：")]),t._v(" "),s("ul",[s("li",[t._v("保护并控制通过第三方客户库访问的 延迟 和 故障（通常是通过网络访问的依赖关系）")]),t._v(" "),s("li",[t._v("停止复杂分布式系统中的级联故障")]),t._v(" "),s("li",[t._v("失败快速和快速恢复")]),t._v(" "),s("li",[t._v("回退，并尽可能优雅地降级")]),t._v(" "),s("li",[t._v("实现近实时监控、警报和操作控制")])]),t._v(" "),s("h2",{attrs:{id:"雪崩效应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雪崩效应"}},[t._v("#")]),t._v(" 雪崩效应")]),t._v(" "),s("p",[t._v("在 分布式系统 中通常有多个服务进行调用，这一高并发的过程难免会有故障的时候，消费者一旦请求出现故障，请求会被堵塞，tomcat不会释放该线程，于是请求越来越多，最终导致服务器资源耗尽，形成了雪崩效应")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud10.gif",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("提供者E 突然发生故障，导致线程堵塞")])]),t._v(" "),s("h2",{attrs:{id:"线程隔离-服务降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程隔离-服务降级"}},[t._v("#")]),t._v(" 线程隔离&服务降级")]),t._v(" "),s("p",[s("strong",[t._v("线程隔离")]),t._v("：将请求资源用 ==线程池== 进行隔离，如果线程池已满，将不进行排队，直接判定为失败")]),t._v(" "),s("p",[s("strong",[t._v("服务降级")]),t._v("：请求失败，会返回失败的提示（如 ：对不起，网络太拥堵了\n请求服务降级有以下两种的情况")]),t._v(" "),s("ol",[s("li",[t._v("被分配到已满的线程池")]),t._v(" "),s("li",[t._v("请求超时（超时时长自行配置")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud11.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("代码在上篇文章的基础上进行添加编辑："),s("a",{attrs:{href:"https://blog.csdn.net/weixin_45963193/article/details/120810100?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java学习记录 03Spring Cloud 负载均衡Ribbon"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[s("p",[t._v("消费者 添加依赖")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-netflix-hystrix"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("消费者 启动类 ，添加注解  "),s("code",[t._v("@EnableCircuitBreaker")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @EnableDiscoveryClient // Eureka客户端")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @EnableCircuitBreaker  // 熔断器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @SpringBootApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该注解组合以上3个注解")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringCloudApplication")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumerApplication")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("@SpringCloudApplication")]),t._v(" 注解整合了 Eureka、Hystrix、启动器 注解")])])]),t._v(" "),s("li",[s("p",[t._v("消费者 服务降级处理 ，controller")]),t._v(" "),s("p",[s("strong",[t._v("降级处理有两种方式：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方式")]),t._v(" "),s("th",[t._v("注解")]),t._v(" "),s("th",[t._v("用于")]),t._v(" "),s("th",[t._v("优点")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[s("code",[t._v('@HystrixCommand(fallbackMethod = "{降级服务的方法名}")')])]),t._v(" "),s("td",[t._v("方法")]),t._v(" "),s("td",[t._v("降级服务的方法可获取方法的参数")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[s("code",[t._v('@DefaultProperties(defaultFallback = "{降级服务的方法名}")')])]),t._v(" "),s("td",[t._v("类、接口、枚举、Annotation类型")]),t._v(" "),s("td",[t._v("可统一降级服务，降低维护成本")])])])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"consumer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Slf4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式2.1 多接口响应")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@DefaultProperties")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultFallback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"defaultFallback"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsumerController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RestTemplate")]),t._v(" restTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{id}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式1.1 单个接口响应")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// @HystrixCommand(fallbackMethod = "queryByIdFallback")')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式2.2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@HystrixCommand")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP://user-service/user/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" restTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getForObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式1.2（方式1有参数接收，因 方式1 写在方法里！")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryByIdFallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"查询信息失败1，id : {}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"对不起，网络太拥堵了！(Test1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式2.3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultFallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"查询信息失败2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"对不起，网络太拥挤了！(Test2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("修改了 findById()方法 的返回值，从 提供者 那获取也是json格式，为了也方便降级数据的返回，因此返回值为String")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("测试")])]),t._v(" "),s("ol",[s("li",[t._v("依次打开 Eureka、server、consumer 三个服务")]),t._v(" "),s("li",[t._v("访问 http://localhost:8080/consumer/1 （返回 数据")]),t._v(" "),s("li",[t._v("关闭 server 再次访问以上请求")]),t._v(" "),s("li",[t._v('页面返回："对不起，网络太拥挤了！(Test2 " （成功降级服务处理')])])])]),t._v(" "),s("h3",{attrs:{id:"超时设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超时设置"}},[t._v("#")]),t._v(" 超时设置")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("消费者 "),s("code",[t._v("application.yml")]),t._v(" ，添加超时配置")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求超过2s回返回错误，默认1s（测试用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2000")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("提供者 controller 休眠 （只为触发超时\n休眠写 被调用服务的方法里")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{id}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n       测试 : 超时请求延迟 \n       识别判断：保留1为小数\n    */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Thread.sleep(1900);")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("测试")]),t._v(" "),s("ol",[s("li",[t._v("依次打开 Eureka、server、consumer 三个服务")]),t._v(" "),s("li",[t._v("打开浏览器F12 检查请求的时长，访问 http://localhost:8080/consumer/1 （返回 数据")]),t._v(" "),s("li",[t._v('休眠2s返回结果："对不起，网络太拥挤了！(Test2 " （成功降级服务处理')]),t._v(" "),s("li",[t._v("休眠1.9s返回结果：数据")])])])]),t._v(" "),s("h2",{attrs:{id:"熔断器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#熔断器"}},[t._v("#")]),t._v(" 熔断器")]),t._v(" "),s("p",[t._v("熔断器它会在一段时间内检测请求异常，如果末段时间内异常超出一定比例时，则迫使请求进行 降级服务 ，并非 调用提供者，从而防止更多请求发生同样的失败操作。一旦触发熔断器打开，需要等待休眠，休眠结束后会释放少部分请求进行测试，如果还是出现问题，则继续打开熔断器，否则关闭熔断器")]),t._v(" "),s("blockquote",[s("p",[t._v("日常例子：")]),t._v(" "),s("p",[t._v("好比家用的漏电开关，一旦电压不稳定，就打开电闸，断开电源")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/Spring/SpringCloud12.png",alt:""}})]),t._v(" "),s("p",[t._v("熔断器计算 出来的状态分别有：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Closed")]),t._v(" (关闭)：所有请求正常访问")]),t._v(" "),s("li",[s("strong",[t._v("Open")]),t._v(" (打开)：所有请求降级服务")]),t._v(" "),s("li",[s("strong",[t._v("Half-Open")]),t._v(" (半打开)：当打开的熔断器休眠结束后，会释放部分请求，如果都是健康，就关闭熔断器，否则保持打开熔断器")])]),t._v(" "),s("p",[t._v("熔断器的 默认配置&触发条件：")]),t._v(" "),s("ul",[s("li",[t._v("最小请求次数 20次")]),t._v(" "),s("li",[t._v("异常比例阈值 50%")]),t._v(" "),s("li",[t._v("熔断休眠时长 5s")])]),t._v(" "),s("blockquote",[s("p",[t._v("解释：5s内访问次数20次，如果超过10次的是异常，则打开熔断器 休眠5s")])]),t._v(" "),s("h3",{attrs:{id:"示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("在以上代码的基础上进行编辑")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("消费者 controller 制造异常 （上面的 Hystrix依赖 也要有！！！）")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{id}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@HystrixCommand")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PathVariable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试 ：异常制造 （实现熔断器报错预期")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"忙碌"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n   \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//..")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP://user-service/user/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" restTemplate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getForObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("注意")]),t._v("：上面测试代码，如果打开有休眠，先清空添加的休眠代码")])])]),t._v(" "),s("li",[s("p",[t._v("测试\n流程：先访问 ==请求1== 20+次 (制造异常触发熔断器)，然后在访问 ==请求2== (访问失败)")]),t._v(" "),s("ol",[s("li",[t._v("触发阈值的请求：http://localhost:8080/consumer/1 （注定失败")]),t._v(" "),s("li",[t._v("测试熔断的请求：http://localhost:8080/consumer/2 （测试熔断")])]),t._v(" "),s("blockquote",[s("p",[t._v("熔断器的触发条件上面说有，就不赘述了")])])])]),t._v(" "),s("h3",{attrs:{id:"配置熔断策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置熔断策略"}},[t._v("#")]),t._v(" 配置熔断策略")]),t._v(" "),s("p",[t._v("修改熔断器的 默认配置：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 熔断触发最小请求次数，默认值是20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("hystrix.command.default.circuitBreaker.requestVolumeThreshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 熔断后休眠时长，默认值5000ms")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("hystrix.command.default.circuitBreaker.sleepWindowInMilliseconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 触发熔断错误比例阈值，默认值50%")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("hystrix.command.default.circuitBreaker.errorThresholdPercentage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("50")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求超过2s回返回错误，默认1000ms")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2000")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("以上配置可自行尝试调用")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("仓库代码 : "),s("a",{attrs:{href:"https://gitee.com/Sanscan12/spring-cloud-examples.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/Sanscan12/spring-cloud-examples.git"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);