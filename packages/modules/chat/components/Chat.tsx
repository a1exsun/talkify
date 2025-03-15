'use client';
import React, { useState } from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import { Icon } from "@app-launch-kit/components/primitives/icon";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@app-launch-kit/components/primitives/modal";
import { Text } from "@app-launch-kit/components/primitives/text";
import { Pressable } from "@app-launch-kit/components/primitives/pressable";
import { MicIcon } from "lucide-react-native";
import { WebView } from 'react-native-webview';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
// 圆形按钮组件
const CircleButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
    setShowModal(true);
    // 这里可以添加点击逻辑
  };

  return (
    <>
      <Pressable
        onPress={handlePress}
        className="flex items-center justify-center"
      >
        <Box
          className={`rounded-full flex items-center justify-center ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`}
          style={{ width: 50, height: 50 }}
        >
          <Icon as={MicIcon as any} size="md" color={isActive ? "white" : "gray.500"} />
        </Box>
        {isActive && (
          <Text className="mt-2 text-sm">
            已激活
          </Text>
        )}
      </Pressable>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <ModalBackdrop />
        <ModalContent className="w-4/5 h-2/3 max-w-4xl">
          <ModalHeader>
            <Text className="text-lg font-medium">Google 搜索</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody className="flex-1">
            <Box className="flex-1 w-full h-full" style={{ position: 'relative', height: '100%', minHeight: 400 }}>
              {isWeb ? (
                <iframe 
                  src="http://localhost:3001" 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%', 
                    height: '100%', 
                    border: 'none',
                    display: 'block'
                  }}
                  title="Google"
                  sandbox="allow-same-origin allow-scripts allow-forms"
                />
              ) : (
                <WebView 
                  source={{ uri: 'http://localhost:3001' }} 
                  style={{ flex: 1, width: '100%', height: '100%' }}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                />
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const Chat = ({ id }: { id?: string }) => {
  return (
    <Box className="flex-1 bg-background-0 justify-center items-center">
      <CircleButton />
    </Box>
  );
};

export default Chat;