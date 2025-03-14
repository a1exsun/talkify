# Talkify

## 项目简介
Talkify是一个基于Expo + React Native和Next.js的跨平台应用，支持Web、iOS和Android平台。项目采用Monorepo结构，使用npm workspaces管理多个包。

## 项目结构
```
├── apps/                # 应用目录
│   ├── app/             # React Native应用
│   └── web/             # Next.js Web应用
├── packages/            # 共享包目录
│   ├── @gluestack-ui/   # UI组件库
│   ├── assets/          # 共享资源
│   ├── components/      # 共享组件
│   ├── config/          # 共享配置
│   ├── hooks/           # 共享钩子
│   ├── modules/         # 共享模块
│   └── utils/           # 共享工具函数
```

## 环境要求
- Node.js >= 20
- npm

## 安装与设置

### 1. 安装依赖
```bash
npm install
```

### 2. .npmrc配置
确认项目根目录下的`.npmrc`文件包含以下配置：
```
legacy-peer-deps=true
```

这主要解决以下依赖冲突问题（2025.02.08）：
```
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: 
npm error Found: expo@51.0.39
npm error peer expo@"^49.0.7 || ^50.0.0-0" from @expo/webpack-config@19.0.1
```

## 常用命令

### Web应用
```bash
# 开发模式启动Web应用
npm run web:dev

# 构建Web应用
npm run web:build

# 启动Web应用（生产模式）
npm run web:start

# 启动Web应用的Storybook
npm run web:storybook
```

### 移动应用
```bash
# 启动iOS应用
npm run app:ios

# 启动Android应用
npm run app:android

# 构建iOS开发版本
npm run app:ios-dev-build

# 构建Android开发版本
npm run app:android-dev-build
```

### 其他命令
```bash
# 代码格式化
npm run format

# 代码检查
npm run lint

# 清理项目
npm run clean-project
```

## Docker支持
```bash
# 构建Docker镜像
npm run web:docker-build

# 运行Docker容器
npm run web:docker-run
```
