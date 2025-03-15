/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 从URL查询参数中获取数据
const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search);
  console.log('URL参数:', Object.fromEntries(params.entries()));
  
  return {
    colorMode: params.get('colorMode') || 'light', // 默认为light
    type: params.get('type'),
    id: params.get('id'),
    token: params.get('token')
  };
};

// 获取URL参数
const urlParams = getUrlParams();

// 应用colorMode
const applyColorMode = (colorMode: string) => {
  console.log('正在应用颜色模式:', colorMode);

  // 将colorMode应用到文档根元素，用于CSS变量和全局样式
  document.documentElement.setAttribute('data-color-mode', colorMode);
  document.documentElement.setAttribute('data-theme', colorMode);
  
  // 设置<html>和<body>的类，这可以确保样式能全局应用
  document.documentElement.className = colorMode === 'dark' ? 'dark-theme' : 'light-theme';
  
  // 设置通用透明背景和文本颜色
  document.body.style.backgroundColor = 'transparent';
  
  // 仅设置合适的文本颜色
  if (colorMode === 'dark') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.body.style.color = '#e0e0e0';
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.body.style.color = '#333333';
  }
  
  // 设置一个全局变量，App内部可以通过window._appParams访问
  window._appParams = {
    colorMode,
    type: urlParams.type,
    id: urlParams.id,
    token: urlParams.token
  };
  
  console.log('应用设置颜色模式完成:', colorMode);
};

// 声明全局变量类型
declare global {
  interface Window {
    _appParams: {
      colorMode: string;
      type?: string | null;
      id?: string | null;
      token?: string | null;
    };
  }
}

// 应用颜色模式
applyColorMode(urlParams.colorMode);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
