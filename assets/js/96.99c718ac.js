(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{433:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux基本操作篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux基本操作篇"}},[s._v("#")]),s._v(" Linux基本操作篇")]),s._v(" "),t("h2",{attrs:{id:"用户命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户命令"}},[s._v("#")]),s._v(" 用户命令")]),s._v(" "),t("p",[t("strong",[s._v("用户查看")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询信息")]),s._v("\nroot:x:0:0:root:/root:/bin/bash\n\t- root 用户名\n\t- x 密码\n\t- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 账号ID\n\t- "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 组ID\n")])])]),t("p",[t("strong",[s._v("用户切换")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("用户创建")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("账号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#示例 useradd sans")]),s._v("\n")])])]),t("p",[t("strong",[s._v("用户删除")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r 选项 将用户连同主目录一起删除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("账号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("用户口令管理")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("账号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nOptions：\n\t"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" 锁定口令，即禁用账号\n\t"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" 口令解锁\n\t"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" 使账号无口令\n\t"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 强迫用户下次登录时修改口令\n")])])]),t("h2",{attrs:{id:"目录命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录命令"}},[s._v("#")]),s._v(" 目录命令")]),s._v(" "),t("p",[t("strong",[s._v("目录查看")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前目录文件名 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有文件 (包括隐藏文件)")]),s._v("\nll\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前目录路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n")])])]),t("p",[t("strong",[s._v("目录切换")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换指定目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回上级目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回根目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /\n")])])]),t("p",[t("strong",[s._v("目录创建")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("如果root用户创建，注意其他用户是不可用的需要！！")])]),s._v(" "),t("p",[t("strong",[s._v("目录移动")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将目录搬运指定路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目标路径"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("目录 打包&拆包")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cvf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录/文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".tar\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 压缩包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zcvf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录/文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拆包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".tar\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压 (需要指定路径)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("File"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".tar.gz "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("目录删除")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rmdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("删除目录不建议命令删除（容易翻车\n还是乖乖手动在Linux上删除吧")])]),s._v(" "),t("h2",{attrs:{id:"文件命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件命令"}},[s._v("#")]),s._v(" 文件命令")]),s._v(" "),t("p",[t("strong",[s._v("文件查看")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标准形式全部展现")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当行形式展现")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t- Enter键"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("回车"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 下行\n\t- :f 显示当前行\n\t- q 离开\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 翻页形式展现")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t- 空格键/pagedown键 下页\n\t- pageup键 上页\n\t- q 退出\n")])])]),t("p",[t("strong",[s._v("修改权限")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置所有权")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod [参数] [文件]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("r读 -- w写 -- x执行")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("操作符")]),s._v(" "),t("th",[s._v("r")]),s._v(" "),t("th",[s._v("w")]),s._v(" "),t("th",[s._v("x")]),s._v(" "),t("th",[s._v("r")]),s._v(" "),t("th",[s._v("w")]),s._v(" "),t("th",[s._v("x")]),s._v(" "),t("th",[s._v("r")]),s._v(" "),t("th",[s._v("w")]),s._v(" "),t("th",[s._v("x")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("权限值")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("2")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("2")]),s._v(" "),t("td",[s._v("1")]),s._v(" "),t("td",[s._v("4")]),s._v(" "),t("td",[s._v("2")]),s._v(" "),t("td",[s._v("1")])]),s._v(" "),t("tr",[t("td",[s._v("权限分配")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[s._v("|")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[s._v("|")]),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td",[s._v("|")])])])]),s._v(" "),t("p",[s._v("权限分配分类顺序：所有者 -> 文件分组 -> 其他用户")]),s._v(" "),t("blockquote",[t("p",[s._v("权限类型会根据权限值相加判断权限是否赋予！")])]),s._v(" "),t("p",[t("strong",[s._v("文件创建")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("文件编辑")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑器编辑")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\t- Esc键 切换模式\n\t- i 编辑模式\n\t- :q 退出\n\t- :wq 保存并退出\n\t- :wq"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("保存并退出"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("强制"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重定向文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 覆盖模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<内容>'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 追加模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<内容>'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("**文件 复制&拷贝 **")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("旧文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("新文件名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])])]),t("p",[t("strong",[s._v("文件移动")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("删除文件")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除大小为0的文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" ./ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-size")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("删除文件不建议代码形式进行递归删除")])]),s._v(" "),t("p",[t("a",{attrs:{href:"#%E6%9F%A5%E6%89%BE%E5%91%BD%E4%BB%A4"}},[t("strong",[s._v("文件查找")])])]),s._v(" "),t("h2",{attrs:{id:"查找命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找命令"}},[s._v("#")]),s._v(" 查找命令")]),s._v(" "),t("p",[t("strong",[s._v("进程查找")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查指定进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("进程名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-antpl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("端口"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("观察动态文件")])]),s._v(" "),t("p",[s._v("用于展示日志使用")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("文件名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("文件查找")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在当前路径 按 文件名/目录名 查 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("关键字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ls")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归查找所有后缀 .xml文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.xml"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归查找所有后缀 .xml文件，且内容包含有 hello world")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.xml"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找当前所有目录下的jar包文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.jar'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在当前路径 按 模糊文件名/目录名 查")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("关键字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[t("strong",[s._v("环境变量属性值 查找")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("属性名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查所有环境")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" * \n")])])]),t("p",[t("strong",[s._v("Vim查找关键字")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入模式后 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 输入/+关键字 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 回车 N/n 进行切换上下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 取消高亮 :noh")]),s._v("\n")])])]),t("h2",{attrs:{id:"其他命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他命令"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),t("p",[t("strong",[s._v("系统命令 防火墙相关")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙状态")]),s._v("\nsystemctl status firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动防火墙")]),s._v("\nsystemctl start firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\nsystemctl stop firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询防火墙服务是否开机启动")]),s._v("\nsystemctl is-enabled firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机时启用防火墙服务")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机时禁用防火墙服务")]),s._v("\nsystemctl disable firewalld\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询已经启动的服务列表")]),s._v("\nsystemctl list-unit-files"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" enabled\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询启动失败的服务列表")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--failed")]),s._v("\n")])])]),t("p",[t("strong",[s._v("系统命令 服务相关")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看IP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看网络服务状态")]),s._v("\nsystemctl status network\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动网络服务")]),s._v("\nsystemctl start network\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止网络服务")]),s._v("\nsystemctl stop network\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启网络服务")]),s._v("\nsystemctl restart network\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" network\n")])])]),t("p",[t("strong",[s._v("进程相关")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看tomcat程序进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" tomcat \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 高亮关键字")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--coloer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 终止进程 终止19979进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19979")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);