'use client';
import React from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import { MicIcon } from "lucide-react-native";
import ModalCircleButton from './ModalCircleButton';

export const Chat = ({ id }: { id?: string }) => {
  return (
    <Box className="flex-1 bg-background-0 justify-center items-center">
      <ModalCircleButton 
        icon={MicIcon as any}
        modalUrl="http://localhost:3001"
      />
    </Box>
  );
};

export default Chat;