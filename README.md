# Talkify

## 项目简介
Talkify是一个基于Expo + React Native和Next.js的跨平台应用，支持Web、iOS和Android平台。项目采用Monorepo结构，使用npm workspaces管理多个包。

## 项目结构
```
├── apps/                # 应用目录
│   ├── app/             # React Native应用
│   ├── web/             # Next.js Web应用
│   └── desktop/         # Electron桌面应用
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

### 桌面应用
```bash
# 开发模式运行桌面应用
npm run desktop:dev

# 构建桌面应用
npm run desktop:build

# 启动桌面应用
npm run desktop:start
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

## 将Next.js应用封装为Electron桌面应用

本节介绍如何将项目中的Next.js Web应用封装为Electron桌面应用，使其能够在Windows、macOS和Linux平台上运行。我们将所有Electron相关的代码和配置放在独立的`apps/desktop`目录中，保持`apps/web`的纯净。

### 1. 创建桌面应用目录结构

首先，创建桌面应用的目录结构：

```bash
# 创建桌面应用目录
mkdir -p apps/desktop/src
```

### 2. 初始化桌面应用

```bash
# 进入桌面应用目录
cd apps/desktop

# 初始化package.json
npm init -y

# 安装Electron相关依赖
npm install --save-dev electron electron-builder concurrently wait-on cross-env
npm install electron-serve electron-store
```

### 3. 创建Electron主进程文件

在`apps/desktop/src`目录下创建以下文件：

#### main.js

```javascript
// apps/desktop/src/main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const serve = require('electron-serve');
const path = require('path');
const Store = require('electron-store');

// 初始化存储
const store = new Store();

// 判断是否为开发环境
const isDev = process.env.NODE_ENV === 'development';
// Web应用的URL或路径
const webAppPath = path.join(__dirname, '../web-build');
const loadURL = isDev
  ? () => mainWindow.loadURL('http://localhost:3000')
  : serve({ directory: webAppPath });

// 保持对window对象的全局引用，避免JavaScript对象被垃圾回收时，窗口自动关闭
let mainWindow;

function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // 加载应用
  if (isDev) {
    loadURL();
    // 打开开发者工具
    mainWindow.webContents.openDevTools();
  } else {
    loadURL(mainWindow);
  }

  // 当窗口关闭时触发
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 当Electron完成初始化并准备创建浏览器窗口时调用此方法
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // 在macOS上，当点击dock图标并且没有其他窗口打开时，通常会在应用程序中重新创建一个窗口
    if (mainWindow === null) createWindow();
  });
});

// 当所有窗口关闭时退出应用
app.on('window-all-closed', () => {
  // 在macOS上，除非用户用Cmd + Q确定地退出，否则应用和菜单栏会保持活动状态
  if (process.platform !== 'darwin') app.quit();
});

// 在这里可以添加与渲染进程的通信逻辑
ipcMain.on('message-from-renderer', (event, arg) => {
  console.log('从渲染进程收到消息:', arg);
  // 回复渲染进程
  event.reply('message-from-main', '主进程已收到消息');
});
```

#### preload.js

```javascript
// apps/desktop/src/preload.js
const { contextBridge, ipcRenderer } = require('electron');

// 暴露安全的API给渲染进程
contextBridge.exposeInMainWorld('electron', {
  // 发送消息到主进程
  sendMessage: (message) => {
    ipcRenderer.send('message-from-renderer', message);
  },
  // 接收来自主进程的消息
  onMessage: (callback) => {
    ipcRenderer.on('message-from-main', (event, ...args) => callback(...args));
  },
  // 其他需要的API...
});
```

### 4. 配置桌面应用的package.json

修改`apps/desktop/package.json`文件，添加以下配置：

```json
{
  "name": "talkify-desktop",
  "version": "1.0.0",
  "description": "Talkify Desktop Application",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "start": "electron .",
    "dev": "concurrently \"cd ../web && npm run dev\" \"wait-on http://localhost:3000 && cross-env NODE_ENV=development electron .\"",
    "build:web": "cd ../web && npm run build",
    "copy:web": "mkdir -p web-build && cp -r ../web/out/* web-build/",
    "build": "npm run build:web && npm run copy:web && electron-builder",
    "pack": "electron-builder --dir"
  },
  "build": {
    "appId": "com.talkify.app",
    "productName": "Talkify",
    "files": [
      "src/**/*",
      "web-build/**/*",
      "package.json"
    ],
    "directories": {
      "buildResources": "resources",
      "output": "dist"
    },
    "mac": {
      "category": "public.app-category.productivity"
    },
    "win": {
      "target": ["nsis"]
    },
    "linux": {
      "target": ["AppImage", "deb"]
    }
  }
}
```

### 5. 修改根目录package.json

在项目根目录的`package.json`中添加桌面应用相关的脚本：

```json
{
  "scripts": {
    // 其他脚本...
    
    "desktop:dev": "cd apps/desktop && npm run dev",
    "desktop:build": "cd apps/desktop && npm run build",
    "desktop:start": "cd apps/desktop && npm run start"
  }
}
```

### 6. 修改Next.js配置

修改`apps/web/next.config.js`文件，添加以下配置以支持静态导出：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 其他配置...
  
  // 为Electron构建添加配置
  output: 'export', // 静态导出
  distDir: 'out', // 输出目录
  images: {
    unoptimized: true, // 在静态导出时不优化图片
  },
};

module.exports = nextConfig;
```

### 7. 在Next.js应用中与Electron通信

在Next.js组件中，可以使用以下方式与Electron通信：

```jsx
// 示例组件 apps/web/components/ElectronCommunication.jsx
import { useEffect } from 'react';

export default function ElectronCommunication() {
  useEffect(() => {
    // 检查是否在Electron环境中
    if (window.electron) {
      // 监听来自主进程的消息
      window.electron.onMessage((message) => {
        console.log('收到来自主进程的消息:', message);
      });
      
      // 发送消息到主进程
      window.electron.sendMessage('Hello from Next.js!');
    }
  }, []);
  
  return (
    <div>
      <h1>Electron与Next.js通信示例</h1>
      <button onClick={() => window.electron?.sendMessage('按钮被点击')}>
        发送消息到Electron
      </button>
    </div>
  );
}
```

### 8. 运行和构建桌面应用

```bash
# 开发模式运行
npm run desktop:dev

# 构建桌面应用
npm run desktop:build
```

构建完成后，可以在`apps/desktop/dist`目录下找到打包好的桌面应用安装文件。

### 9. 注意事项

1. **目录结构**：将Electron应用与Web应用分离，使项目结构更加清晰。

2. **构建流程**：桌面应用的构建流程包括先构建Web应用，然后将构建结果复制到桌面应用目录，最后打包Electron应用。

3. **API路由处理**：在Electron环境中，Next.js的API路由需要特殊处理，可以考虑使用Electron的IPC通信代替。

4. **环境变量**：确保在Electron环境中正确设置和访问环境变量。

5. **路径问题**：在Electron中，文件路径处理与Web环境不同，需要使用Node.js的path模块处理路径。

6. **安全考虑**：使用contextIsolation和preload脚本确保渲染进程和主进程之间的安全通信。

7. **自动更新**：可以使用electron-updater实现应用的自动更新功能。

通过以上步骤，您可以将Next.js应用成功封装为独立的Electron桌面应用，实现跨平台的桌面应用体验，同时保持代码结构的清晰和模块化。
