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
import { VoiceComponent } from './VoiceComponent';

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

// 示例单词数据
const sampleVocabulary: Word[] = [
  {
    id: 'v1',
    word: 'museum',
    explanation: '博物馆',
    isFavorited: false
  },
  {
    id: 'v2',
    word: 'history',
    explanation: '历史',
    isFavorited: true
  },
  {
    id: 'v3',
    word: 'antique',
    explanation: '古董',
    isFavorited: false
  },
  {
    id: 'v4',
    word: 'rayless',
    explanation: '昏暗的',
    isFavorited: false
  },
  {
    id: 'v5',
    word: 'archaeology',
    explanation: '考古学',
    isFavorited: false
  },
  {
    id: 'v6',
    word: 'sculpture',
    explanation: '雕塑',
    isFavorited: false
  },
  {
    id: 'v7',
    word: 'visit',
    explanation: '参观',
    isFavorited: true
  },
  {
    id: 'v8',
    word: 'ancient',
    explanation: '古代的',
    isFavorited: false
  },
  {
    id: 'v9',
    word: 'bronze ware',
    explanation: '青铜器',
    isFavorited: false
  },
  {
    id: 'v10',
    word: 'be participated in',
    explanation: '参与了',
    isFavorited: false
  },
  {
    id: 'v11',
    word: 'culture',
    explanation: '文化',
    isFavorited: false
  },
  {
    id: 'v12',
    word: 'exhibition',
    explanation: '展览',
    isFavorited: false
  }
  
];

const sampleMessages: Message[] = [
  {
    id: '1',
    text: "Hello! Let's practice a job interview scenario. Imagine you're applying for a software engineer position. Why are you interested in this role?",
    sender: 'ai',
    timestamp: new Date(Date.now() - 1000 * 60 * 5)
  },
  {
    id: '2',
    text: "I'm interested in this software engineer position because I enjoy solving complex problems and building applications that can impact users positively.",
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 4)
  },
  {
    id: '3',
    text: "That's a good start. Can you tell me about a challenging technical problem you've solved recently?",
    sender: 'ai',
    timestamp: new Date(Date.now() - 1000 * 60 * 3)
  },
  {
    id: '4',
    text: "Recently, I worked on optimizing database queries in our application that were causing slow load times. I refactored the query structure and implemented proper indexing which reduced load times by 70%.",
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 2)
  },
  {
    id: '5',
    text: "Excellent example! How do you stay updated with the latest technologies and trends in software development?",
    sender: 'ai',
    timestamp: new Date(Date.now() - 1000 * 60 * 1)
  }
];

const WordCard = ({ word, isLast, onToggleFavorite }: { 
  word: Word, 
  isLast: boolean,
  onToggleFavorite: (id: string) => void 
}) => {
  return (
    <VStack>
      <HStack className="justify-between py-4 px-2 2xl:py-6 items-center">
        <HStack className="w-full flex-1 md:flex-col 2xl:flex-row">
          <Text className="w-3/5 md:w-full 2xl:w-3/5" style={{ fontWeight: 'bold' }}>{word.word}</Text>
          <Text className="text-background-500 flex-1">{word.explanation}</Text>
        </HStack>
        <Pressable 
          onPress={() => onToggleFavorite(word.id)}
          className="p-1 ml-2"
        >
          <Icon
            as={StarIcon} 
            size="sm" 
          />
        </Pressable>
      </HStack>
      {!isLast && (
        <Divider className="my-1" />
      )}
    </VStack>
  );
};

const VocabularySection = ({ vocabulary, onToggleFavorite }: {
  vocabulary: Word[],
  onToggleFavorite: (wordId: string) => void
}) => {
  return (
    <Box className="mt-4 md:mt-0 py-2 px-4 w-full border rounded-xl border-border-300">
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
          {vocabulary.map((word, index) => (
            <WordCard 
              key={word.id}
              word={word}
              isLast={index === vocabulary.length - 1}
              onToggleFavorite={onToggleFavorite} 
            />

          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export const ScenarioChat = ({ id }: { id?: string }) => {
  const [vocabulary, setVocabulary] = useState<Word[]>(sampleVocabulary);
  const [inputText, setInputText] = useState('');
  const router = useRouter();
  const { setLastChat, resetLastChat } = useChatContext();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const imageUrl = require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00015.webp");
  
  useEffect(() => {
    if (id) {
      // 设置全局状态
      setLastChat('scenario', id);
      
      // 模拟加载场景数据
      // ... existing code ...
    }
  }, [id, setLastChat]);

  const handleSend = () => {
    if (inputText.trim()) {
      // 发送文本消息逻辑
      setInputText('');
      
      // 添加新的单词到词汇表
      setTimeout(() => {
        const newWord: Word = {
          id: `v${Date.now()}`,
          word: 'elaborate',
          explanation: '详细说明；阐述',
          isFavorited: false
        };
        setVocabulary(prev => [...prev, newWord]);
      }, 1000);
    }
  };

  const handleToggleFavorite = (wordId: string) => {
    setVocabulary(prevVocabulary => 
      prevVocabulary.map(word => 
        word.id === wordId 
          ? { ...word, isFavorited: !word.isFavorited } 
          : word
      )
    );
  };
  
  const handleExit = () => {
    // 退出时清空全局状态
    resetLastChat();
    router.push('/chat');
  };

  return (
    <Box className="flex-1 bg-background-0">
      <VStack className="w-full max-w-[550px] md:max-w-none h-full md:flex-row p-4 md:pb-4 md:px-10 md:pt-5 lg:pt-7 mx-auto">
        <Box className="bg-custom-0 h-full w-full border-2 border-background-100 rounded-xl flex items-center justify-center overflow-hidden">
          <Box 
            className="overflow-hidden"
            style={{
              aspectRatio: 1
            }}
          >
            <Image
              source={imageUrl}
              style={{ width: '100vw', height: '100%', objectFit: 'cover' }} 
              alt="Scenario image"
            />
          </Box>
        </Box>
        
        {/* Chat section - right on desktop, bottom on mobile */}
        <Box className="h-1/3 md:h-full md:min-w-[200px] xl:min-w-[300px] 2xl:min-w-[420px] md:ml-4 flex md:flex-1 flex-col relative">
          <VocabularySection vocabulary={vocabulary} onToggleFavorite={handleToggleFavorite} />
          <Box className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <VoiceComponent 
              url="https://talkify-affix.vercel.app"
              type="scenario"
              id={id}
            />
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default ScenarioChat;