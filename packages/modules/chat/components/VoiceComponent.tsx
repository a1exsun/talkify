'use client';
import { Box } from "@app-launch-kit/components/primitives/box";
import { WebView } from 'react-native-webview';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { useColorMode } from '@app-launch-kit/utils/contexts/ColorModeContext';


interface VoiceComponentProps {
  url?: string; // 显示的URL
  type?: 'scenario' | 'video'; // 类型
  id?: string; // 场景或视频的id
  token?: string; // 用户验证token
  className?: string; // 额外的样式类
}

/**
 * 直接显示AI语音组件
 */
export const VoiceComponent = ({
  url = "http://localhost:3001",
  type,
  id,
  token,
  className = ""
}: VoiceComponentProps) => {
  const { colorMode } = useColorMode();


  const getUrlWithParams = () => {
    const urlObj = new URL(url);
    urlObj.searchParams.append('colorMode', colorMode);
    if (type) urlObj.searchParams.append('type', type);
    if (id) urlObj.searchParams.append('id', id);
    if (token) urlObj.searchParams.append('token', token);
    
    return urlObj.toString();
  };

  const fullUrl = getUrlWithParams();

  return (
    <Box 
      className={`w-[500px] h-[150px] ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {isWeb ? (
        <iframe
          src={fullUrl}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%',
            display: 'block'
          }}
          allow="microphone; camera"
          allowTransparency={true}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-microphone"
        />
      ) : (
        <WebView 
          source={{ uri: fullUrl }} 
          style={{ flex: 1, width: '100%', height: '100%' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mediaPlaybackRequiresUserAction={false}
        />
      )}
    </Box>
  );
};

// 为了保持向后兼容性，我们保留原来的名称
export default VoiceComponent; 