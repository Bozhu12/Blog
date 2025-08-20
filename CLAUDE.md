# CLAUDE.md

该文件为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 项目概述

这是一个基于 VuePress + Vdoing 主题的技术知识库和博客系统。它是一个结构化的文档管理系统，专注于后端开发、前端技术和编程知识管理。

**在线地址：** https://www.bozhu12.cc

## 架构说明

### 核心结构
- **框架：** VuePress 1.9.5 静态站点生成器
- **主题：** 自定义 Vdoing 主题（位于 `/vdoing/` 目录的本地副本）
- **内容：** `/docs/` 目录下结构化的 Markdown 文件
- **构建系统：** Node.js 配合自定义内存优化
- **部署方式：** GitHub Pages 配合自定义域名

### 内容组织
网站使用层次化的内容结构：
```
docs/
├── 01.后端/     # 后端技术 (Java, Spring, 数据库)
├── 02.前端/     # 前端技术 (Vue, JS, CSS)
├── 03.更多/     # 其他内容 (Linux, 工具, 博客配置)
└── @pages/     # 特殊页面 (归档, 分类, 标签)
```

### 主题架构
- **自定义主题位置：** `/vdoing/`（vuepress-theme-vdoing 的本地副本）
- **自动侧边栏生成：** 基于目录层次结构生成结构化侧边栏
- **Front Matter 处理：** 自动管理文章元数据
- **SEO 功能：** 站点地图生成、百度搜索集成

## 开发命令

### 核心命令
```bash
# 启动开发服务器（内存优化）
npm run dev

# 构建生产版本（高内存限制）
npm run build

# 部署到 GitHub Pages
npm run deploy
```

### 工具命令
```bash
# 批量编辑文档 Front Matter 元数据
npm run editFm

# 生成百度搜索推送链接
npm run baiduPush https://www.bozhu12.cc

# 更新 Vdoing 主题到最新版本
npm run updateTheme
```

## 关键配置文件

### VuePress 配置
- **主配置：** `docs/.vuepress/config.ts`
- **域名：** `www.bozhu12.cc`（在配置中定义）
- **主题模式：** 使用 `/vdoing/` 目录下的本地主题

### Front Matter 管理
- **工具：** `utils/editFrontmatter.js`
- **配置：** `utils/config.yml`
- **用途：** 批量操作文档元数据

### SEO 和分析
- **百度集成：** `utils/baiduPush.js` 生成链接推送文件
- **统计分析：** 通过主题配置集成百度统计

## 内存优化

由于文档集较大，项目需要大量内存分配：
- **开发环境：** `--max_old_space_size=4096`（4GB）
- **生产构建：** `--max_old_space_size=16384`（16GB）

## 主题定制

### Vdoing 主题功能
- **自动侧边栏：** 根据目录结构生成结构化导航
- **Front Matter 自动处理：** 自动管理元数据
- **多种内容类型：** 常规文章、碎片化文章和特殊页面
- **SEO 优化：** 内置搜索引擎优化功能

### 本地主题开发
主题在 `/vdoing/` 目录中维护为本地副本，定制功能包括：
- 结构化内容组织
- 中文语言支持
- 自定义样式和组件
- 增强的 Markdown 处理

## 内容管理

### 目录结构规则
- **数字前缀目录：** 使用数字前缀（01., 02.）实现有序导航
- **嵌套分类：** 支持多级分类结构
- **特殊目录：** `_posts/` 用于碎片化文章，`@pages/` 用于特殊页面

### Front Matter 标准
- **自动管理字段：** 标题、日期、永久链接、分类
- **自定义字段：** 标签、作者信息、文章元数据
- **批量操作：** 使用 `npm run editFm` 配合 `utils/config.yml` 进行批量更改

## 构建流程

### 开发工作流
1. 使用带有 Front Matter 的 Markdown 编写内容
2. 主题根据目录结构自动生成侧边栏
3. VuePress 处理并构建静态站点
4. 本地开发服务器提供热重载

### 生产部署
1. 构建过程优化并生成静态文件
2. SEO 功能生成站点地图和搜索集成
3. 部署脚本处理 GitHub Pages 部署
4. 自定义域名配置维护品牌形象

## 测试与验证

作为文档站点，测试重点关注：
- **构建验证：** 确保 `npm run build` 成功完成
- **链接检查：** 验证内部链接和导航正常工作
- **SEO 验证：** 确认搜索集成和元数据生成
- **内容结构：** 验证基于目录的导航生成正确