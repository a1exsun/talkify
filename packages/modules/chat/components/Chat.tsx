'use client';
import React from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import { MicIcon } from "lucide-react-native";
import { VoiceComponent } from './VoiceComponent';

export const Chat = ({ id }: { id?: string }) => {
  return (
    <Box className="flex-1 bg-background-0 justify-center items-center">
      <VoiceComponent 
        url="https://talkify-affix.vercel.app"
        type="video"
        id={id}
      />
    </Box>
  );
};

export default Chat;