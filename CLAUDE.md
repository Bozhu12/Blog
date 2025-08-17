# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 项目概述

这是一个基于 VuePress + Vdoing 主题的个人技术博客。它作为知识管理系统，包含结构化的技术文档，涵盖后端开发、前端技术和各种技术主题。内容主要用中文编写，涵盖 Java、Spring、数据库、前端框架和开发工具等。

## 常用命令

**开发调试:**
```bash
npm run dev          # 启动开发服务器
```

**构建和部署:**
```bash
npm run build        # 构建静态文件
npm run deploy       # 使用 deploy.sh 部署到 GitHub Pages
```

**内容管理:**
```bash
npm run editFm       # 批量编辑 markdown 文件的 frontmatter
npm run baiduPush    # 推送到百度搜索引擎
```

**依赖管理:**
```bash
npm run updateTheme  # 更新 vdoing 主题到最新版本
```

## 架构和结构

**核心框架:**
- VuePress 1.9.5 配合 Vdoing 主题
- TypeScript 配置位于 `docs/.vuepress/config.ts`
- 自定义主题位于 `vdoing/` 目录

**内容组织:**
- `docs/` 包含所有 markdown 内容
- 结构化分类: 01.后端/, 02.前端/, 03.更多/
- 基于文件夹结构自动生成导航
- 基于 frontmatter 的元数据管理

**关键配置文件:**
- `docs/.vuepress/config.ts` - VuePress 主配置文件
- `docs/.vuepress/config/baiduCode.ts` - 百度统计配置  
- `docs/.vuepress/config/htmlModules.ts` - 自定义 HTML 模块
- `utils/config.yml` - frontmatter 批量编辑配置

**部署策略:**
- `deploy.sh` 构建并推送到 GitHub Pages
- 在 `docs/.vuepress/gitTemp/` 中进行临时 git 操作
- 自定义域名: 通过 CNAME 配置 www.bozhu12.cc

**内容管理工具:**
- `utils/editFrontmatter.js` - 批量修改文件的 frontmatter
- `utils/baiduPush.js` - SEO 推送到百度搜索
- 基于文件结构自动生成侧边栏

**插件生态:**
- 全文搜索、评论系统 (Artalk)、图片缩放
- 百度统计、站点地图生成、代码复制功能
- 演示块用于交互式代码示例

## 开发注意事项

**内存分配:**
构建过程使用了增加的 Node.js 内存限制:
- 开发: `--max_old_space_size=4096`
- 构建: `--max_old_space_size=16384`

**文件监控:**
配置文件会监控 `.vuepress/config.ts` 和 `htmlModules.ts` 以便开发时热重载。

**内容规范:**
- 所有 markdown 文件都应有正确的 frontmatter
- 使用结构化的文件夹命名约定 (01., 02., 等)
- 中文内容，技术重点关注 Java 生态系统和 Web 开发
- 当前工作区项目禁止 全局上下文 工作流 中 plan构建 , 禁止在 ./dosc/plan 目录下构建plan