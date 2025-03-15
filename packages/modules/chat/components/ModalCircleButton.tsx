'use client';
import React, { ReactNode, useState } from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
} from "@app-launch-kit/components/primitives/modal";
import { WebView } from 'react-native-webview';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import CircleIconButton from './CircleIconButton';

interface ModalCircleButtonProps {
  icon: any; // 图标组件
  modalUrl?: string; // 模态框中显示的URL
  size?: number; // 按钮大小
  bgColor?: string; // 背景颜色
  iconColor?: string; // 图标颜色
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl"; // 图标大小
  modalContent?: ReactNode; // 可选的自定义模态框内容
  modalWidth?: string; // 模态框宽度
  modalHeight?: string; // 模态框高度
}

/**
 * 带有模态框功能的圆形按钮组件
 */
export const ModalCircleButton = ({
  icon,
  modalUrl = "http://localhost:3001",
  size = 50,
  bgColor = "bg-gray-200",
  iconColor = "gray.500",
  iconSize = "md",
  modalContent,
  modalWidth = "w-4/5",
  modalHeight = "h-2/3"
}: ModalCircleButtonProps) => {
  const [showModal, setShowModal] = useState(false);

  const handlePress = () => {
    setShowModal(true);
  };

  return (
    <>
      <CircleIconButton
        icon={icon}
        onPress={handlePress}
        size={size}
        bgColor={bgColor}
        iconColor={iconColor}
        iconSize={iconSize}
      />

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <ModalBackdrop />
        <ModalContent className={`${modalWidth} ${modalHeight} max-w-4xl`}>
          <ModalBody className="flex-1">
            {modalContent ? (
              modalContent
            ) : (
              <Box className="flex-1 w-full h-full" style={{ position: 'relative', height: '100%', minHeight: 400 }}>
                {isWeb ? (
                  <iframe 
                    src={modalUrl} 
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%', 
                      height: '100%', 
                      border: 'none',
                      display: 'block'
                    }}
                    title="Modal Content"
                    allow="microphone; camera"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-microphone"
                  />
                ) : (
                  <WebView 
                    source={{ uri: modalUrl }} 
                    style={{ flex: 1, width: '100%', height: '100%' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    mediaPlaybackRequiresUserAction={false}
                  />
                )}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCircleButton; 