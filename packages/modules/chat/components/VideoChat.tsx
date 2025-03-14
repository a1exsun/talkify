'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import { HStack } from "@app-launch-kit/components/primitives/hstack";
import {
  ChevronLeftIcon,
  Icon,
  SettingsIcon,
  ArrowRightIcon,
  StarIcon,
} from "@app-launch-kit/components/primitives/icon";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";
import { Text } from "@app-launch-kit/components/primitives/text";
import { VStack } from "@app-launch-kit/components/primitives/vstack";
import { Pressable } from "@app-launch-kit/components/primitives/pressable";
import { Button, ButtonText } from "@app-launch-kit/components/primitives/button";
import { Heading } from "@app-launch-kit/components/primitives/heading";
import Image from "@unitools/image";
import { ScrollView } from "@app-launch-kit/components/primitives/scroll-view";
import { Input, InputField, InputIcon, InputSlot } from "@app-launch-kit/components/primitives/input";
import { useRouter } from "@unitools/router";
import { Platform, useWindowDimensions } from "react-native";
import { Grid, GridItem } from "@app-launch-kit/components/primitives/grid";
import { MicIcon } from "lucide-react-native";
import { Divider } from "@app-launch-kit/components/primitives/divider";
import { useChatContext } from '../context/ChatContext';

interface Word {
  id: string;
  word: string;
  explanation: string;
  isFavorited: boolean;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface Subtitle {
  id: number;
  startTime: number; // 毫秒
  endTime: number;   // 毫秒
  text: string;
  isFavorited: boolean;
}

// 解析 SRT 时间戳为毫秒
const parseTimestamp = (timestamp: string): number => {
  const [hours, minutes, seconds] = timestamp.split(':');
  const [secs, millis] = seconds.split(',');
  
  return (
    parseInt(hours) * 3600000 +
    parseInt(minutes) * 60000 +
    parseInt(secs) * 1000 +
    parseInt(millis)
  );
};

// 解析 SRT 文件内容
const parseSRT = (content: string): Subtitle[] => {
  const subtitles: Subtitle[] = [];
  const blocks = content.trim().split('\n\n');
  
  blocks.forEach(block => {
    const lines = block.split('\n');
    if (lines.length >= 3) {
      const id = parseInt(lines[0]);
      const [startTime, endTime] = lines[1].split(' --> ').map(parseTimestamp);
      const text = lines.slice(2).join(' ').trim();
      
      subtitles.push({
        id,
        startTime,
        endTime,
        text,
        isFavorited: false
      });
    }
  });
  
  return subtitles;
};

const SubtitleCard = ({ subtitle, isLast, onToggleFavorite, isActive }: { 
  subtitle: Subtitle, 
  isLast: boolean,
  onToggleFavorite: (id: number) => void,
  isActive: boolean
}) => {
  return (
    <VStack>
      <HStack className={`justify-between py-4 px-2 2xl:py-6 items-center rounded-xl ${isActive ? 'bg-background-100' : ''}`}>
        <Text 
          className={`flex-1 ${isActive ? 'text-typography-900' : 'text-typography-500'}`} 
          style={{ 
            fontWeight: isActive ? 'bold' : 'normal',
          }}
        >
          {subtitle.text}
        </Text>
        <Pressable 
          onPress={() => onToggleFavorite(subtitle.id)}
          className="p-1 ml-2"
        >
          <Icon
            as={StarIcon} 
            size="sm"
          />
        </Pressable>
      </HStack>
      {/* {!isLast && (
        <Divider className="my-1" />
      )} */}
    </VStack>
  );
};

const SubtitleSection = ({ subtitles, currentTime, onToggleFavorite }: {
  subtitles: Subtitle[],
  currentTime: number,
  onToggleFavorite: (subtitleId: number) => void
}) => {
  const scrollViewRef = useRef<any>(null);

  // 找到当前应该显示的字幕
  const activeSubtitle = subtitles.find(
    sub => currentTime >= sub.startTime && currentTime <= sub.endTime
  );

  // 当活动字幕改变时，自动滚动到该字幕
  useEffect(() => {
    if (activeSubtitle && scrollViewRef.current) {
      const index = subtitles.findIndex(sub => sub.id === activeSubtitle.id);
      if (index > 0) {
        scrollViewRef.current.scrollTo({ y: index * 40, animated: true });
      }
    }
  }, [activeSubtitle?.id]);

  return (
    <Box className="mt-4 xl:mt-0 py-2 px-4 w-full border rounded-xl border-border-300">
      <ScrollView 
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
      >
        <VStack>
          {subtitles.map((subtitle, index) => (
            <SubtitleCard 
              key={subtitle.id}
              subtitle={subtitle}
              isLast={index === subtitles.length - 1}
              onToggleFavorite={onToggleFavorite}
              isActive={activeSubtitle?.id === subtitle.id}
            />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

// 语音波纹动画组件
const AudioWaveCircle = ({ isActive }: { isActive: boolean }) => {
  const [waveSize, setWaveSize] = useState(1);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (isActive) {
      // 模拟随机波纹大小变化
      animationRef.current = setInterval(() => {
        // 随机生成1到1.4之间的波纹大小，模拟音频输入变化
        setWaveSize(1 + Math.random() * 0.4);
      }, 150);
    } else {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        setWaveSize(1);
      }
    }
    
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [isActive]);
  
  return (
    <Box className="relative flex items-center justify-center">
      {/* 外圈动画波纹 */}
      {isActive && (
        <>
          <Box 
            className="absolute rounded-full bg-blue-100 opacity-30"
            style={{ 
              width: 80 * waveSize, 
              height: 80 * waveSize,
              transform: [{ scale: waveSize }] 
            }} 
          />
          <Box 
            className="absolute rounded-full bg-blue-200 opacity-40"
            style={{ 
              width: 60 * (waveSize * 0.9), 
              height: 60 * (waveSize * 0.9) 
            }} 
          />
        </>
      )}
      {/* 中心圆形 */}
      <Box 
        className={`rounded-full flex items-center justify-center ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`}
        style={{ width: 50, height: 50 }}
      >
        <Icon as={MicIcon as any} size="md" color={isActive ? "white" : "gray.500"} />
      </Box>
    </Box>
  );
};

const ChatMessage = () => {
  const [isRecording, setIsRecording] = useState(false);
  
  const handlePress = () => {
    setIsRecording(!isRecording);
    // 这里可以添加实际的录音启动/停止逻辑
  };
  
  return (
    <Pressable 
      onPress={handlePress}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 shadow-lg"
    >
      <Box className="flex items-center justify-center">
        <AudioWaveCircle isActive={isRecording} />
        {isRecording && (
          <Text className="absolute -top-10 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
            点击停止
          </Text>
        )}
      </Box>
    </Pressable>
  );
};

export const VideoChat = ({ id }: { id?: string }) => {
  const [inputText, setInputText] = useState('');
  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeSubtitle, setActiveSubtitle] = useState<Subtitle | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const { setLastChat, resetLastChat } = useChatContext();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const imageUrl = require("@app-launch-kit/assets/images/temporary/longvideo/playing.png");
  
  useEffect(() => {
    if (id) {
      // 设置全局状态
      setLastChat('video', id);
      
      // 加载字幕数据
      loadSubtitles();
    }
  }, [id, setLastChat]);

  const loadSubtitles = async () => {
    try {
      const response = await fetch('https://cdn.jsdelivr.net/gh/a1exsun/file@main/talkify/Trump argues with Zelenskyy in Oval Office.srt');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const srtContent = await response.text();
      const parsedSubtitles = parseSRT(srtContent);
      // TODO 只取前10段字幕
      const limitedSubtitles = parsedSubtitles.slice(0, 10);
      setSubtitles(limitedSubtitles);
    } catch (error) {
      console.error('Error loading subtitles:', error);
    }
  };

  // 模拟视频播放时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(prev => prev + 100); // 每100ms更新一次
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleToggleFavorite = (subtitleId: number) => {
    setSubtitles(prevSubtitles => 
      prevSubtitles.map(subtitle => 
        subtitle.id === subtitleId 
          ? { ...subtitle, isFavorited: !subtitle.isFavorited } 
          : subtitle
      )
    );
  };
  
  const handleExit = () => {
    // 退出时清空全局状态
    resetLastChat();
    router.push('/chat');
  };

  // 处理视频时间更新
  const handleTimeUpdate = () => {
    // ... existing code ...
  };

  return (
    <Box className="flex-1 bg-background-0">
      <VStack className="w-full h-full md:max-w-none xl:flex-row p-4 md:pb-4 md:px-10 md:pt-5 lg:pt-7 mx-auto">
        <Box className="bg-custom-0 w-full border-2 border-background-100 rounded-xl flex items-center justify-center overflow-hidden">
          <Box
            className="overflow-hidden"
            style={{
              aspectRatio: 1.7
            }}
          >
            <Image
              source={imageUrl}
              style={{ width: '100vw', height: '100%', objectFit: 'cover' }}
              alt="Scenario image"
            />
          </Box>
        </Box>

        <Box className="xl:h-full xl:min-w-[300px] 2xl:min-w-[420px] xl:ml-4 flex flex-1 flex-col relative">
          <SubtitleSection
            subtitles={subtitles}
            currentTime={currentTime}
            onToggleFavorite={handleToggleFavorite}
          />
          <ChatMessage />
        </Box>
      </VStack>
    </Box>
  );
};

export default VideoChat;