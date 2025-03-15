/**
 * useAppParams 钩子
 * 用于获取应用程序URL参数
 */

export interface AppParams {
  colorMode: string;
  type?: string | null;
  id?: string | null;
  token?: string | null;
}

/**
 * 获取从iframe/WebView传递过来的应用参数
 * @returns AppParams 应用参数对象
 */
export const useAppParams = (): AppParams => {
  // 如果window._appParams不存在，返回默认值
  if (!window._appParams) {
    return {
      colorMode: 'light'
    };
  }
  
  return window._appParams;
};

export default useAppParams; 