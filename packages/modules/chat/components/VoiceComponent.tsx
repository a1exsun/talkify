'use client';
import { Box } from "@app-launch-kit/components/primitives/box";
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { useColorMode } from '@app-launch-kit/utils/contexts/ColorModeContext';
import { useEffect, useState } from 'react';
import { 
  Popover, 
  PopoverBackdrop, 
  PopoverContent, 
  PopoverBody, 
  PopoverArrow 
} from "@app-launch-kit/components/primitives/popover";
import { Text } from "@app-launch-kit/components/primitives/text";

// 为 spline-viewer 添加类型声明
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        url: string;
      }, HTMLElement>;
    }
  }
}

interface VoiceComponentProps {
  url?: string; // 显示的URL
  type?: 'scenario' | 'video'; // 类型
  id?: string; // 场景或视频的id
  token?: string; // 用户验证token
  className?: string; // 额外的样式类
  popoverText?: string; // Popover 显示的文本
}

/**
 * 直接显示AI语音组件
 */
export const VoiceComponent = ({
  url = "http://talkify-affix.vercel.app",
  type,
  id,
  token,
  className = "",
  popoverText = "[ The dialogue text is presented here. ]"
}: VoiceComponentProps) => {
  const { colorMode } = useColorMode();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  useEffect(() => {
    if (isWeb) {
      // 动态加载 Spline Viewer 脚本
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://cdn.jsdelivr.net/gh/a1exsun/file@main/talkify/spline-viewer.js';
      document.head.appendChild(script);
      
      return () => {
        // 清理脚本
        document.head.removeChild(script);
      };
    }
  }, []);

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
    <Popover
      isOpen={isPopoverOpen}
      onClose={handlePopoverClose}
      onOpen={handlePopoverOpen}
      placement="top"
      size="md"
      trigger={(triggerProps) => {
        return (
          <Pressable
            {...triggerProps}
            style={{ width: '100%', height: '100%' }}
          >
            <Box
              className="w-[140px] h-[140px]"
              style={{ position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Box className="w-[500px] h-[140px]">
                <spline-viewer
                  url="https://prod.spline.design/1MEc0Gv-ZNJrjjfq/scene.splinecode"
                  events-target="global"
                />
              </Box>
            </Box>
          </Pressable>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverBody>
          <Text size="md" className="text-typography-900">
            {popoverText}
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

// 为了保持向后兼容性，我们保留原来的名称
export default VoiceComponent; 