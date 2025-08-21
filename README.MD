# Vuepress Theme Vdoing

基于 VuePress + Vdoing 主题构建的个人技术知识库和博客网站。

## 项目介绍

这是一个结构化的技术知识管理系统，专注于后端开发、前端技术和各种编程技术的文档整理。项目采用 VuePress 框架配合 Vdoing 主题，实现了知识的结构化组织和博客功能的完美结合。

**在线访问:** [www.bozhu12.cc](https://www.bozhu12.cc)

## 技术栈

- **框架:** VuePress 1.9.5
- **主题:** vuepress-theme-vdoing 1.12.8
- **构建工具:** Node.js, npm
- **部署:** GitHub Pages
- **域名:** 自定义域名配置

## 内容结构

### 后端技术
- **Java基础:** 类和对象、集合、多线程、反射、IO流等
- **JavaWeb:** Servlet、JSP、Ajax、MVC模式等
- **框架技术:** Spring全家桶、MyBatis、Dubbo、RabbitMQ等
- **数据库:** MySQL、Redis、JDBC、Hibernate等
- **项目实战:** Ruoyi-Vue-Plus框架详解

### 前端技术
- **基础技术:** HTML、CSS、JavaScript、ES6
- **框架工具:** Vue.js、TypeScript、Bootstrap、JQuery
- **工程化:** Vue CLI、Nginx、Sass预处理器
- **开发技巧:** JavaScript进阶、Vue实用技巧

### 扩展内容
- **服务器运维:** Linux常用命令、Docker容器化
- **博客建设:** VuePress配置、主题定制、HTTPS配置
- **工具使用:** Git版本控制、Maven项目管理

## 快速开始

### 环境要求
- Node.js >= 12.x
- npm >= 6.x

### 本地运行

```bash
# 克隆项目
git clone <项目地址>

# 进入项目目录
cd Blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建部署

```bash
# 构建静态文件
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 (localhost:8080) |
| `npm run build` | 构建生产版本 |
| `npm run deploy` | 部署到 GitHub Pages |
| `npm run editFm` | 批量编辑文档 frontmatter |
| `npm run baiduPush` | 推送到百度搜索引擎 |
| `npm run updateTheme` | 更新 Vdoing 主题版本 |

## 项目特色

### 知识管理
- **结构化组织:** 基于目录结构的知识分类
- **多维索引:** 分类、标签、时间线多种浏览方式  
- **全文搜索:** 支持站内全文搜索功能
- **自动化工具:** 批量管理文档元数据

### 博客功能
- **响应式设计:** 适配各种设备屏幕
- **评论系统:** 集成 Artalk 评论功能
- **SEO优化:** 自动生成站点地图，百度收录推送
- **统计分析:** 集成百度统计和访问分析

### 开发体验
- **热重载:** 开发时实时预览更新
- **内存优化:** 针对大型项目优化的内存配置
- **代码演示:** 支持交互式代码示例块
- **图片处理:** 自动图片缩放和优化

## 配置说明

核心配置文件位于 `docs/.vuepress/config.ts`，包含：
- 站点基本信息配置
- 导航菜单和侧边栏设置
- 插件功能配置
- 主题个性化设置

详细配置说明请参考项目中的 `CLAUDE.md` 文件。

## 致谢

本项目基于优秀的开源主题构建，特此感谢：

### 主题作者
- **Vdoing主题:** [xugaoyi/vuepress-theme-vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing)
- **作者:** Evan Xu
- **主题文档:** [https://doc.xugaoyi.com/](https://doc.xugaoyi.com/)

### 相关链接
- [VuePress官方文档](https://vuepress.vuejs.org/)
- [Vdoing主题使用指南](https://doc.xugaoyi.com/)
- [主题GitHub仓库](https://github.com/xugaoyi/vuepress-theme-vdoing)

## 许可证

本项目遵循 MIT 许可证开源。

主题版权归原作者所有：
```
Copyright (c) 2019-present Evan Xu (vuepress-theme-vdoing)
```

## 更新日志

项目采用语义化版本管理，详细更新记录请查看 [Releases](../../releases) 页面。

## 相关资源

### AI 工具分享
- **AI Code Mirror:** [https://www.aicodemirror.com/register?invitecode=NKCDMW](https://www.aicodemirror.com/register?invitecode=NKCDMW)
  - 优质的 AI 编程工具资源分享平台
  - 使用邀请码 `NKCDMW` 注册

---

> 如果觉得这个项目对您有帮助，欢迎给个 ⭐ Star 支持一下！