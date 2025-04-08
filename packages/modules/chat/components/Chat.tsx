'use client';
import React from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import { MicIcon } from "lucide-react-native";
import { VoiceComponent } from './VoiceComponent';

export interface ChatProps {
  id?: string;
  startRTC?: () => void;
  closeRTC?: () => void;
  isRTCStarted?: boolean;
}

export const Chat = ({ id, startRTC, closeRTC, isRTCStarted }: ChatProps) => {
  return (
    <Box className="flex-1 bg-background-0 justify-center items-center">
      <VoiceComponent 
        url="https://talkify-affix.vercel.app"
        type="video"
        id={id}
        onStartRTC={startRTC}
        onCloseRTC={closeRTC}
        isRTCStarted={isRTCStarted}
      />
    </Box>
  );
};

export default Chat;