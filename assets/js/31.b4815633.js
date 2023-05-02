(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{368:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"过滤器-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤器-filter"}},[t._v("#")]),t._v(" 过滤器 filter")]),t._v(" "),s("p",[t._v("过滤器是对web资源进行拦截，做⼀些处理后再交给下⼀个过滤器或servlet处理，通常都是用来拦截request进行处理的，也可以对返回的response进行拦截处理")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://sanscan12.gitee.io/blogimg/Content/JavaWeb/18.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"应用步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用步骤"}},[t._v("#")]),t._v(" 应用步骤")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("添加 "),s("code",[t._v("servlet")]),t._v(" jar依赖包")])]),t._v(" "),s("li",[s("p",[t._v("创建对象类 应用 "),s("code",[t._v("javax.servlet.Filter接口")]),t._v(" ，并重写里面所有方法")])]),t._v(" "),s("li",[s("p",[t._v("配置 url 的访问入口，有两种方式 "),s("code",[t._v("web.xml")]),t._v(" / "),s("code",[t._v("@WebFilter")])]),t._v(" "),s("p",[s("code",[t._v("web.xml")]),t._v(" 文件配置")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("过滤器映射名"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("类路径"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("过滤器映射名"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("请求url"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("@WebFilter")]),t._v(" 注解配置")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@WebFiler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyFilter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("自定义过滤 约束 配置")])]),t._v(" "),s("li",[s("p",[t._v("回调servlet/转接过滤器 ，在 "),s("code",[t._v("doFileter()")]),t._v(" 添加以下代码")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("filterChain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFilter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Request")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"过滤器注解说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤器注解说明"}},[t._v("#")]),t._v(" 过滤器注解说明")]),t._v(" "),s("p",[s("code",[t._v("@WebFilter")]),t._v(" 注解配置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("值 [默认值]")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("description")])]),t._v(" "),s("td",[t._v('String [""]')]),t._v(" "),s("td",[t._v("描述")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("displayName")])]),t._v(" "),s("td",[t._v('String [""]')]),t._v(" "),s("td",[t._v("显示名称")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("initParams")])]),t._v(" "),s("td",[t._v("WebInitParam[] [{}]")]),t._v(" "),s("td",[t._v("初始化参数")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("filterName")])]),t._v(" "),s("td",[t._v('String [""]')]),t._v(" "),s("td",[t._v("过滤器名称")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("value")])]),t._v(" "),s("td",[t._v("String[] [{}]")]),t._v(" "),s("td",[t._v("过滤地址url")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("urlPatterns")])]),t._v(" "),s("td",[t._v("String[] [{}]")]),t._v(" "),s("td",[t._v("网址模式")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("dispatcherTypes")])]),t._v(" "),s("td",[t._v("DispatcherType[] [REQUEST]")]),t._v(" "),s("td",[t._v("拦截形式")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("asyncSupported")])]),t._v(" "),s("td",[t._v("Boolean [false]")]),t._v(" "),s("td",[t._v("异步支持")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("拦截形式")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("FORWARD")])]),t._v(" "),s("td",[t._v("转发访问资源")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("INCLUDE")])]),t._v(" "),s("td",[t._v("包含访问资源")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("REQUEST")])]),t._v(" "),s("td",[t._v("请求资源")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ASYNC")])]),t._v(" "),s("td",[t._v("异步访问资源")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("ERROR")])]),t._v(" "),s("td",[t._v("错误跳转资源")])])])]),t._v(" "),s("h3",{attrs:{id:"过滤器执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤器执行过程"}},[t._v("#")]),t._v(" 过滤器执行过程")]),t._v(" "),s("ol",[s("li",[t._v("客户端发出Web请求，如果 过滤器与此地址匹配，则会优先进入过滤器")]),t._v(" "),s("li",[t._v("请求会进入到 doFilter()方法，进行代码逻辑处理")]),t._v(" "),s("li",[t._v("调用 chain.doFilter()方法 放行请求，否则会拦截请求")]),t._v(" "),s("li",[t._v("请求通过后，响应回来依旧需要经过 过滤器")])]),t._v(" "),s("div",{staticStyle:{background:"rgba(64, 158, 255,0.8)",border:"1px solid rgba(1, 1, 1,0.2)","border-radius":"8px",padding:"1px 12px"}},[s("p",{staticStyle:{"font-size":"20px"}}),s("p",{staticStyle:{"font-size":"20px"}},[s("b",[t._v("注意: ")]),t._v(" "),s("ul",[s("li",[t._v("过滤器执行是同步的，因此 chain.doFilter()方法 之前是 请求处理的范围 ，则之后为 响应处理的范围")]),t._v(" "),s("li",[t._v("如果过滤器有多个，会依次执行所有匹配url的过滤器才能获取Web资源")])])])]),t._v(" "),s("h3",{attrs:{id:"过滤器声明周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤器声明周期"}},[t._v("#")]),t._v(" 过滤器声明周期")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("init()")]),t._v(" ：在服务器启动后，会创建 Filter对象 ，然后 调用 init()方法 ，只会执行一次")]),t._v(" "),s("li",[s("code",[t._v("doFilter()")]),t._v(" ：每次请求地址匹配都会拦截请求")]),t._v(" "),s("li",[s("code",[t._v("destroy()")]),t._v(" ：在服务器关闭后，Filter对象被销毁 ，然后执行 destroy()方法 （前提需要在正常关闭情况下")])]),t._v(" "),s("div",{staticStyle:{background:"rgba(245, 108, 108,0.8)",border:"1px solid rgba(1, 1, 1,0.2)","border-radius":"8px",padding:"1px 12px"}},[s("p",{staticStyle:{"font-size":"20px"}}),s("p",{staticStyle:{"font-size":"20px"}},[s("b",[t._v("注意: ")]),t._v(" \n        init() / destroy() 方法 一般用于 初次加载/释放资源 的情况\n    ")])]),t._v(" "),s("h3",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("ul",[s("li",[t._v("防止用户未登陆访问资源")]),t._v(" "),s("li",[t._v("设置统一编码类型")]),t._v(" "),s("li",[t._v("加密、解密")]),t._v(" "),s("li",[t._v("过滤非法文字")]),t._v(" "),s("li",[t._v("下载资源的限制")]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("h2",{attrs:{id:"监听器-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听器-listener"}},[t._v("#")]),t._v(" 监听器 Listener")]),t._v(" "),s("p",[t._v("监听器是监听某个域对象的的状态变化的组件")]),t._v(" "),s("p",[s("strong",[t._v("事件源对象：")]),s("code",[t._v("request")]),t._v("、 "),s("code",[t._v("session")]),t._v("、"),s("code",[t._v("servletContext")]),t._v(" "),s("strong",[t._v("监听状态：")]),t._v(" 创建、变化、销毁\n"),s("strong",[t._v("配置监听：")]),t._v(" 绑定与事件源的监听\n"),s("strong",[t._v("监听响应：")]),t._v(" 监听状态发生变化进行响应")]),t._v(" "),s("p",[s("strong",[t._v("监听器类型")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("接口")]),t._v(" "),s("th",[t._v("ServletContext")]),t._v(" "),s("th",[t._v("HttpSession")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("ServletRequest")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("监听对象 创建/销毁")])]),t._v(" "),s("td",[t._v("ServletContextListener")]),t._v(" "),s("td",[t._v("HttpSessionListener")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ServlerRequestListener")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("监听对象属性变化")])]),t._v(" "),s("td",[t._v("ServletContextAttributeListener")]),t._v(" "),s("td",[t._v("HttpSessionAttributeListener")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ServletRequestAttributeListener")])])])]),t._v(" "),s("p",[s("strong",[t._v("对象周期和用意")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("strong",[t._v("ServletContext：")]),t._v(" 服务器启动  ->  服务器关闭\n初始化对象、初始化数据（配置加载等信息）")]),t._v(" "),s("li",[s("strong",[t._v("Session：")]),t._v(" "),s("code",[t._v("request.getSession")]),t._v("创建  ->  服务器关闭、超时销毁、手动销毁\n数据存取重要信息、网站记录数器 等。。。")]),t._v(" "),s("li",[s("strong",[t._v("Request：")]),t._v(" 请求开始  ->  请求结束\n信息交互的存取")])])]),t._v(" "),s("p",[s("strong",[t._v("应用步骤：")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("添加 "),s("code",[t._v("servlet")]),t._v(" jar依赖包")])]),t._v(" "),s("li",[s("p",[t._v("创建对象类 应用 监听的接口 并重写事件处理的方法")])]),t._v(" "),s("li",[s("p",[t._v("配置 "),s("code",[t._v("web.xml")]),t._v(" 文件/添加注释 "),s("code",[t._v("@WebListener")]),t._v("（以下配置用于监听器使用）")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("listener-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("类路径"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("listener-class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://tomcat.apache.org/tomcat-5.5-doc/servletapi/javax/servlet/http/package-summary.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击了解监听器"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"应用测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用测试"}},[t._v("#")]),t._v(" 应用测试")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://download.csdn.net/download/weixin_45963193/16766966",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击个人项目应用测试"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);