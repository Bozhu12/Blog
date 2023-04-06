(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{394:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("非常感谢虎哥给我带来这篇Redis基础原理知识的讲解 , 让我更深刻地理解了Redis的设计思想和数据结构 . 从最基本概念到高级特性，虎哥逐层讲解，让我们受益匪浅")]),t._v(" "),e("p",[e("strong",[t._v("视频 :")]),t._v(" "),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1cr4y1671t/?p=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bilibili.com"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),e("h3",{attrs:{id:"sds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sds"}},[t._v("#")]),t._v(" SDS")]),t._v(" "),e("p",[t._v("Redis构建了一种新的字符串结构 , 称为简单动态字符串(SDS)")]),t._v(" "),e("p",[t._v("C语言中的字符串 , 是通过数组形式拼接字符 , 因此没有直接使用语言中的字符串 , 并且当中也存在很多问题 :")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("获取字符串长度的需要通过运算")])]),t._v(" "),e("li",[e("strong",[t._v("非二进制安全")])]),t._v(" "),e("li",[e("strong",[t._v("不可修改")])])]),t._v(" "),e("p",[e("strong",[t._v("优点 :")])]),t._v(" "),e("ul",[e("li",[t._v("操作快 , 简单 , 灵活 (有标识记录长度等相关信息 , 用于检索数组操作)")]),t._v(" "),e("li",[t._v("动态扩容 (含有扩容相关机制)")]),t._v(" "),e("li",[t._v("二进制形式 , 相对安全")])]),t._v(" "),e("p",[e("strong",[t._v("缺点 :")])]),t._v(" "),e("ul",[e("li",[t._v("占用内存 (结构体包含的元数据过多)")]),t._v(" "),e("li",[t._v("功能有限 (仅限于读写操作 , 没有其他相关拓展功能)")])]),t._v(" "),e("p",[e("strong",[t._v("SDS结构体")])]),t._v(" "),e("div",{staticClass:"language-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 控制SDS的头类型大小 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("SDS_TYPE_5")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("SDS_TYPE_8")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("SDS_TYPE_16")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("SDS_TYPE_32")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("SDS_TYPE_64")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* sdshdr8 结构体名称 . 有很多个相同结构 如上面... */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("_attribute_")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_packed_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" sdshdr8 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* uint8_t : 无符号8个bit位 */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* buf已保存的字符串字节数 , 不包含结束标识 */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8_t")]),t._v(" len"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* buf申请的总字节数 , 不包含结束标识 */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8_t")]),t._v(" alloc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不同SDS的头类型 , 用来控制SDS的头大小 */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" flags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" buf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("flags意图")]),t._v(" "),e("p",[t._v("uint8_t 定义的是 无符号8个bit位 , 8bit位长度就仅限于 0 - 255 的大小 , 那么通过 len 和 alloc 控制的长度不可能仅限于 0 - 255 , 因此 通过 flags 控制字节大小 , 尽可能将 8bit 压缩在 0 - 255 数值范围")]),t._v(" "),e("p",[e("strong",[t._v("PS :")]),t._v(" 1字节 = 8位")])]),t._v(" "),e("p",[t._v("假如我Redis执行该命令 "),e("code",[t._v("set name Sans")]),t._v(' . 那么Redis将在底层创建两个SDS , 分别是 "name" 和 "Sans"')]),t._v(" "),e("p",[t._v('"'),e("strong",[t._v('name" SDS结构分析')])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("标识")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("变量")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("字节")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("lan")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("alloc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("flags")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("buf[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("['n','a','m','e']")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4(1*4)")])])])]),t._v(" "),e("p",[e("strong",[t._v('"Sans" SDS结构分析')])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("标识")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("变量")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("字节")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("lan")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("alloc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("flags")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("buf[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("['S','a','n','s']")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4(1*4)")])])])]),t._v(" "),e("p",[t._v('假如 往"Sans" SDS追加一段字符 ",Any" , 那么会执行内存拓展申请 : (申请有两种可能)')]),t._v(" "),e("ul",[e("li",[t._v("如果新字符串小于1M , 则 增加后的长度两倍 + 1")]),t._v(" "),e("li",[t._v("如果新字符串大于1M , 则 增加后的长度两倍 + 1M +1 (内存预分配)")])]),t._v(" "),e("p",[t._v('那么 "Sans" 这变为 "Sans,Any" , SDS结构分析')]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("标识")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("变量")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("字节")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("lan")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("alloc")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("flags")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("buf[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("['S', 'a', 'n', 's', ',', 'A', 'n', 'y']")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("8(1*8)")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("C语言字符串结尾必须有 "),e("code",[t._v("\\0")]),t._v(" 作为结束 , 因此 计算后的长度需要+1 , 就是为结束标示而腾出的位置")])]),t._v(" "),e("h3",{attrs:{id:"intset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intset"}},[t._v("#")]),t._v(" IntSet")]),t._v(" "),e("p",[t._v("IntSet是Redis中set集合的一种实现方式 , 基于 整数数组 来实现 , 并且具备 长度可变/有序 等特征")]),t._v(" "),e("p",[t._v("为了方便查找 , Redis会将intset中所有的整数按照升序依次保存在contents数组中")]),t._v(" "),e("p",[e("strong",[t._v("优点 :")])]),t._v(" "),e("ul",[e("li",[t._v("IntSet 确保元素 唯一 , 有序")]),t._v(" "),e("li",[t._v("类型升级机制 , 节省内存")]),t._v(" "),e("li",[t._v("快速查找 (内部采用二分查找算法)")]),t._v(" "),e("li",[t._v("内存连续 (存储是连续形式 , 充分利用资源)")])]),t._v(" "),e("p",[e("strong",[t._v("缺点 :")])]),t._v(" "),e("ul",[e("li",[t._v("只能用于整型")]),t._v(" "),e("li",[t._v("内存浪费 (当数组中有一个元素大数字 , 且其他都是小元素)")]),t._v(" "),e("li",[t._v("不能范围查找 (指定范围查元素)")])]),t._v(" "),e("p",[e("strong",[t._v("IntSet结构体")])]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 存放 encoding , 表示不同整型大小 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 2字节 整数 , 类以java的short */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("INTSET_ENC16")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("nt16t_t")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 4字节 整数 , 类以java的int */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("INTSET_ENC32")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("nt32t_t")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 8字节 整数 , 类以java的long */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("INTSET_ENC64")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("int64_t")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("intset")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 编码方式 , 支特存放16位、32位、64位整数 */")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" encoding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 元素个数 */")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 整数数组 , 保存集合数据 */")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("int8_t")]),t._v(" contents"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("intset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("假如 使用intset存了 {20, 5, 10} 3个元素 , 采取编码 INTSET_ENC16(2字节) , "),e("strong",[t._v("IntSet结构分析 :")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("标识")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("变量")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("字节")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("encoding")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("INTSET_ENC16")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("length")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("contents[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("[5,10,20]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("6(2*3)")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("上面定义了采用的类型因此存储的字节是不一样的! 采用了 INTSET_ENC16 类型 2字节")])]),t._v(" "),e("p",[t._v("假如 数组添加了一个 5000 , 大于 INTSET_ENC16(2字节) 的范围 , IntSet会自动升级编码方式找到合适大小 , 升级流程 :")]),t._v(" "),e("ol",[e("li",[t._v("升级编码 INTSET_ENC_INT32(4字节) , 并按照新的编码方式及元素个数扩容数组")]),t._v(" "),e("li",[t._v("倒序依次将数组中的元素拷贝到扩容后的正确位置")]),t._v(" "),e("li",[t._v("将 5000元素 添加放入数组末尾")]),t._v(" "),e("li",[t._v("IntSet的 encoding属性改为INTSET_ENC_INT32 ; length属性改为4")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("步骤2 倒序扩容是为了防止前面的数在扩容时覆盖其他数据 . 一号元素占用2字节改为4字节  , 会占用到第二元素位置的2字节 .")]),t._v(" "),e("p",[t._v("为了防止这一现象 , 采用倒序扩容 , 从最后元素开始扩容 !")])]),t._v(" "),e("p",[e("strong",[t._v("结构分析 :")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("标识")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("变量")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("值")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("字节")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("encoding")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("INTSET_ENC32")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Header")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("length")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("contents[]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("[5,10,20,5000]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("16(4*4)")])])])]),t._v(" "),e("h3",{attrs:{id:"dict"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dict"}},[t._v("#")]),t._v(" Dict")]),t._v(" "),e("h3",{attrs:{id:"ziplist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ziplist"}},[t._v("#")]),t._v(" ZipList")]),t._v(" "),e("h3",{attrs:{id:"quicklist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quicklist"}},[t._v("#")]),t._v(" QuickList")]),t._v(" "),e("h3",{attrs:{id:"redisobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redisobject"}},[t._v("#")]),t._v(" RedisObject")]),t._v(" "),e("h3",{attrs:{id:"string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),e("h3",{attrs:{id:"list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" List")]),t._v(" "),e("h3",{attrs:{id:"set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" Set")]),t._v(" "),e("h3",{attrs:{id:"zset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zset"}},[t._v("#")]),t._v(" ZSet")]),t._v(" "),e("h3",{attrs:{id:"hash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" Hash")]),t._v(" "),e("h2",{attrs:{id:"网络模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络模型"}},[t._v("#")]),t._v(" 网络模型")]),t._v(" "),e("h2",{attrs:{id:"通信协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通信协议"}},[t._v("#")]),t._v(" 通信协议")])])}),[],!1,null,null,null);e.default=n.exports}}]);