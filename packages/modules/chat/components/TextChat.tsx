'use client';
import { Button, ButtonText } from "@app-launch-kit/components/primitives/button";
import { useRouter } from '@unitools/router';
import { Text } from "@app-launch-kit/components/primitives/text";
import { VStack } from "@app-launch-kit/components/primitives/vstack";
import { Input, InputField } from "@app-launch-kit/components/primitives/input";
import { HStack } from "@app-launch-kit/components/primitives/hstack";
import { useState, useEffect } from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import { Heading } from "@app-launch-kit/components/primitives/heading";
import { ScrollView } from "@app-launch-kit/components/primitives/scroll-view";
import { ChevronLeftIcon, Icon, StarIcon, ClockIcon, CloseIcon } from "@app-launch-kit/components/primitives/icon";
import { Pressable } from "@app-launch-kit/components/primitives/pressable";
import { useColorMode } from '@app-launch-kit/utils/contexts/ColorModeContext';

const TextChat = () => {
    const router = useRouter();
    const [inputText, setInputText] = useState('');
    const { colorMode } = useColorMode();
    const [messages, setMessages] = useState<Array<{
        text: string;
        timestamp: string;
        type: 'user' | 'ai';
        isSaved?: boolean;
    }>>([]);

    // 从 localStorage 加载对话记录
    useEffect(() => {
        const savedMessages = localStorage.getItem('chatHistory');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    // 保存对话记录到 localStorage
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('chatHistory', JSON.stringify(messages));
        }
    }, [messages]);

    // 清除对话记录
    const handleClearHistory = () => {
        setMessages([]);
        localStorage.removeItem('chatHistory');
    };

    // 保存句子到收藏
    const handleSaveSentence = (index: number) => {
        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages];
            updatedMessages[index] = {
                ...updatedMessages[index],
                isSaved: !updatedMessages[index].isSaved
            };
            
            const sentence = updatedMessages[index].text;
            const action = updatedMessages[index].isSaved ? 'Saved' : 'Unsaved';
            console.log(`${action} sentence:`, sentence);
            
            return updatedMessages;
        });
    };

    // 模拟AI回复
    const simulateAIResponse = (userMessage: string) => {
        const responses = [
            "I understand what you're saying. Could you tell me more about that?",
            "That's interesting! Let me help you practice your English.",
            "I see. Would you like to try expressing that in a different way?",
            "Great! Let's work on improving your pronunciation of those words.",
            "I noticed you used that phrase well. Here's another way to express it..."
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        // 模拟延迟回复
        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, {
                text: randomResponse,
                timestamp: new Date().toLocaleTimeString(),
                type: 'ai'
            }]);
        }, 1000);
    };

    const handleSend = () => {
        if (inputText.trim()) {
            const newMessage = {
                text: inputText.trim(),
                timestamp: new Date().toLocaleTimeString(),
                type: 'user' as const
            };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInputText('');

            // 触发AI回复
            simulateAIResponse(inputText.trim());
        }
    };

    return (
        <Box className="flex-1 h-screen bg-background-0">
            <VStack className="h-[calc(100vh-150px)] md:h-full p-4 md:pb-4 md:px-10 md:pt-5 lg:pt-7" space="2xl">
                <HStack className="w-full items-center" space="md">
                    <Pressable
                        onPress={() => {
                            router.back();
                        }}
                        className="h-12 w-12 items-center justify-center"
                    >
                        <Icon as={ChevronLeftIcon} size="xl" className="scale-150" />
                    </Pressable>
                    <Heading size="2xl" className="font-roboto flex-1">
                        TextChat
                    </Heading>
                    <HStack space="md">
                        <Pressable
                            onPress={handleClearHistory}
                            className={`h-12 w-12 items-center justify-center rounded-full border ${
                                colorMode === 'dark'
                                    ? 'bg-[#1a1a1a] border-[#333333] text-[#FFFFFF]'
                                    : 'bg-[#f0f0f0] border-[#cccccc] text-[#000000]'
                            }`}
                        >
                            <Icon
                                as={CloseIcon}
                                size="xl"
                                className={colorMode === 'dark' ? 'text-[#FFFFFF]' : 'text-[#000000]'}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => { router.push('/glossary') }}
                            className={`h-12 w-12 items-center justify-center rounded-full border ${
                                colorMode === 'dark'
                                    ? 'bg-[#1a1a1a] border-[#333333] text-[#FFFFFF]'
                                    : 'bg-[#f0f0f0] border-[#cccccc] text-[#000000]'
                            }`}
                        >
                            <Icon
                                as={StarIcon}
                                size="xl"
                                className={colorMode === 'dark' ? 'text-[#FFFFFF]' : 'text-[#000000]'}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => { router.push('/sentences') }}
                            className={`h-12 w-12 items-center justify-center rounded-full border ${
                                colorMode === 'dark'
                                    ? 'bg-[#1a1a1a] border-[#333333] text-[#FFFFFF]'
                                    : 'bg-[#f0f0f0] border-[#cccccc] text-[#000000]'
                            }`}
                        >
                            <Icon
                                as={ClockIcon}
                                size="xl"
                                className={colorMode === 'dark' ? 'text-[#FFFFFF]' : 'text-[#000000]'}
                            />
                        </Pressable>
                    </HStack>
                </HStack>

                <Box className="flex-1 flex flex-col min-h-0">
                    {/* 聊天记录区域 */}
                    <Box
                        className={`flex-1 p-4 overflow-y-auto rounded-lg border ${colorMode === 'dark'
                                ? 'bg-[#000000] border-[#666666] text-[#666666]'
                                : 'bg-[#FFFFFF] border-[#000000] text-[#000000]'
                            }`}
                    >
                        <VStack space="md">
                            {messages.length === 0 ? (
                                <Text className={colorMode === 'dark' ? 'text-[#777777]' : 'text-[#000000]'}>
                                    Start a conversation...
                                </Text>
                            ) : (
                                messages.map((message, index) => (
                                    <Box key={index} className="w-full">
                                        <VStack className={`${message.type === 'user' ? 'items-end' : 'items-start'}`} space="xs">
                                            <HStack className={`space-x-2 items-center`}>
                                                <Text
                                                    className={`px-4 py-2 rounded-lg ${message.type === 'user'
                                                            ? (colorMode === 'dark'
                                                                ? 'bg-[#333333] text-[#FFFFFF]'
                                                                : 'bg-[#E5E5E5] text-[#000000]')
                                                            : (colorMode === 'dark'
                                                                ? 'bg-[#1a1a1a] text-[#FFFFFF] border border-[#333333]'
                                                                : 'bg-[#f0f0f0] text-[#000000] border border-[#cccccc]')
                                                        }`}
                                                >
                                                    {message.text}
                                                </Text>
                                                {message.type === 'ai' && (
                                                    <Pressable
                                                        onPress={() => handleSaveSentence(index)}
                                                        className={`h-8 w-8 items-center justify-center rounded-full ${message.isSaved
                                                                ? 'bg-primary-500'
                                                                : colorMode === 'dark'
                                                                    ? 'bg-[#1a1a1a] border-[#333333]'
                                                                    : 'bg-[#f0f0f0] border-[#cccccc]'
                                                            } border`}
                                                    >
                                                        <Icon
                                                            as={StarIcon}
                                                            size="sm"
                                                            className={message.isSaved
                                                                ? 'text-[#FFFFFF]'
                                                                : colorMode === 'dark'
                                                                    ? 'text-[#FFFFFF]'
                                                                    : 'text-[#000000]'
                                                            }
                                                        />
                                                    </Pressable>
                                                )}
                                            </HStack>
                                            <Text className="text-xs text-[#777777]">
                                                {message.timestamp}
                                            </Text>
                                        </VStack>
                                    </Box>
                                ))
                            )}
                        </VStack>
                    </Box>

                    {/* 输入区域 */}
                    <HStack space="sm" className="w-full mt-4">
                        <Input
                            size="md"
                            variant="outline"
                            className="flex-1"
                        >
                            <InputField
                                value={inputText}
                                onChangeText={setInputText}
                                placeholder="Type your message..."
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSend();
                                    }
                                }}
                            />
                        </Input>
                        <Button
                            onPress={handleSend}
                            size="md"
                            variant="solid"
                            action="primary"
                        >
                            <ButtonText>Send</ButtonText>
                        </Button>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default TextChat;