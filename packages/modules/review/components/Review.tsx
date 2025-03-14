"use client";
import React, { useState } from 'react';
import { Button, ButtonText } from '@app-launch-kit/components/primitives/button';
import { useRouter } from '@unitools/router';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Text } from "@app-launch-kit/components/primitives/text"
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Box } from "@app-launch-kit/components/primitives/box";
import { ScrollView } from "@app-launch-kit/components/primitives/scroll-view";
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Grid } from '@app-launch-kit/components/primitives/grid';
import { Icon, StarIcon } from '@app-launch-kit/components/primitives/icon';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';

interface Word {
    id: number;
    word: string;
    translation: string;
    phonetic?: string;
    examples?: Array<{
        en: string;
        cn: string;
    }>;
    synonyms?: string[];
    notes?: string;
}

interface Sentence {
    id: number;
    sentence: string;
    translation: string;
    examples?: Array<{
        en: string;
        cn: string;
    }>;
    notes?: string;
}

interface Scenario {
    id: number;
    title: string;
    cover: string;
    type: 'video' | 'post';
    description?: string;
    duration?: string;
    tags?: string[];
}

const mockWords: Word[] = [
    { 
        id: 1, 
        word: 'Hello', 
        translation: '你好',
        phonetic: '/həˈləʊ/',
        examples: [
            { en: 'Hello, how are you?', cn: '你好，你好吗？' },
            { en: 'Hello, this is John speaking.', cn: '你好，我是约翰。' }
        ],
        synonyms: ['Hi', 'Greetings'],
        notes: '最常用的问候语之一，可用于正式和非正式场合。'
    },
    { 
        id: 2, 
        word: 'World', 
        translation: '世界',
        phonetic: '/wɜːld/',
        examples: [
            { en: 'The world is beautiful.', cn: '世界是美好的。' },
            { en: 'He traveled around the world.', cn: '他环游世界。' }
        ],
        synonyms: ['Earth', 'Globe'],
        notes: '指地球或整个世界，也可表示特定领域。'
    },
    { 
        id: 3, 
        word: 'Learning', 
        translation: '学习',
        phonetic: '/ˈlɜːnɪŋ/',
        examples: [
            { en: 'Learning English is fun.', cn: '学习英语很有趣。' },
            { en: 'I am learning to drive.', cn: '我正在学习开车。' }
        ],
        synonyms: ['Studying', 'Education'],
        notes: '表示获取知识或技能的过程，可用作名词或动词。'
    },
    { 
        id: 4, 
        word: 'Practice', 
        translation: '练习',
        phonetic: '/ˈpræktɪs/',
        examples: [
            { en: 'Practice makes perfect.', cn: '熟能生巧。' },
            { en: 'I need to practice my speaking.', cn: '我需要练习口语。' }
        ],
        synonyms: ['Exercise', 'Training'],
        notes: '既可作名词也可作动词，表示练习或实践。'
    },
    { 
        id: 5, 
        word: 'Communication', 
        translation: '交流',
        phonetic: '/kəˌmjuːnɪˈkeɪʃn/',
        examples: [
            { en: 'Good communication is important.', cn: '良好的交流很重要。' },
            { en: 'We need to improve our communication.', cn: '我们需要改善我们的交流。' }
        ],
        synonyms: ['Interaction', 'Exchange'],
        notes: '指信息、思想或感情的交流过程。'
    }
];

const mockSentences: Sentence[] = [
    { 
        id: 1, 
        sentence: 'How are you today?', 
        translation: '你今天怎么样？',
        examples: [
            { en: 'How are you today? I\'m doing great!', cn: '你今天怎么样？我很好！' },
            { en: 'How are you today? The weather is beautiful.', cn: '你今天怎么样？天气真好。' }
        ],
        notes: '这是最常用的问候语之一，用于询问对方的近况。'
    },
    { 
        id: 2, 
        sentence: 'I love learning English.', 
        translation: '我喜欢学习英语。',
        examples: [
            { en: 'I love learning English because it\'s fun.', cn: '我喜欢学习英语因为它很有趣。' },
            { en: 'I love learning English with my friends.', cn: '我喜欢和朋友们一起学习英语。' }
        ],
        notes: '表达对学习英语的热爱，可用于日常对话。'
    },
    { 
        id: 3, 
        sentence: 'The weather is beautiful today.', 
        translation: '今天天气真好。',
        examples: [
            { en: 'The weather is beautiful today, let\'s go for a walk.', cn: '今天天气真好，我们去散步吧。' },
            { en: 'The weather is beautiful today, perfect for a picnic.', cn: '今天天气真好，很适合野餐。' }
        ],
        notes: '描述天气状况的常用句子，可用于开启对话。'
    },
    { 
        id: 4, 
        sentence: 'Could you help me with this?', 
        translation: '你能帮我这个吗？',
        examples: [
            { en: 'Could you help me with this math problem?', cn: '你能帮我解决这个数学题吗？' },
            { en: 'Could you help me with this project?', cn: '你能帮我完成这个项目吗？' }
        ],
        notes: '礼貌地请求帮助的常用表达，适用于各种场合。'
    },
    { 
        id: 5, 
        sentence: 'Thank you very much.', 
        translation: '非常感谢。',
        examples: [
            { en: 'Thank you very much for your help.', cn: '非常感谢你的帮助。' },
            { en: 'Thank you very much for coming.', cn: '非常感谢你能来。' }
        ],
        notes: '表达感谢的正式用语，比简单的"Thank you"更正式。'
    }
];

const mockScenarios: Scenario[] = [
    { 
        id: 1, 
        title: 'Daily Conversation at Coffee Shop',
        cover: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=300&fit=crop',
        type: 'video',
        description: 'Learn common phrases and expressions used in coffee shops and cafes.',
        duration: '15:30',
        tags: ['Daily Life', 'Food & Drinks', 'Conversation']
    },
    { 
        id: 2, 
        title: 'Business Meeting English',
        cover: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop',
        type: 'post'
    },
    { 
        id: 3, 
        title: 'Travel English Guide',
        cover: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
        type: 'video'
    },
    { 
        id: 4, 
        title: 'English Idioms Collection',
        cover: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop',
        type: 'post'
    },
];

const Review = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('glossary');
    const [words, setWords] = useState<Word[]>(mockWords);
    const [sentences, setSentences] = useState<Sentence[]>(mockSentences);
    const [scenarios, setScenarios] = useState<Scenario[]>(mockScenarios);
    const [selectedWord, setSelectedWord] = useState<Word | null>(null);
    const [selectedSentence, setSelectedSentence] = useState<Sentence | null>(null);
    const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePress = (path: string) => {
        router.push(path);
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const handleWordClick = (word: Word) => {
        setSelectedWord(word);
        setSelectedSentence(null);
        setSelectedScenario(null);
        setIsModalOpen(true);
    };

    const handleSentenceClick = (sentence: Sentence) => {
        setSelectedSentence(sentence);
        setSelectedWord(null);
        setSelectedScenario(null);
        setIsModalOpen(true);
    };

    const handleScenarioClick = (scenarioId: number) => {
        router.push(`/chat?id=${scenarioId}&type=video`);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedWord(null);
        setSelectedSentence(null);
        setSelectedScenario(null);
    };

    const handleDeleteWord = (id: number) => {
        setWords(words.filter(word => word.id !== id));
    };

    const handleDeleteSentence = (id: number) => {
        setSentences(sentences.filter(sentence => sentence.id !== id));
    };

    const handleDeleteScenario = (id: number) => {
        setScenarios(scenarios.filter(scenario => scenario.id !== id));
    };

    const getTabIndex = (tab: string) => {
        const tabs = ['glossary', 'sentences', 'scenario'];
        return tabs.indexOf(tab);
    };

    const renderModal = () => {
        if (!isModalOpen) return null;

        const modalContent = () => {
            if (selectedWord) {
                return (
                    <Box className="p-6">
                        <HStack className="justify-between items-center mb-4">
                            <VStack space="xs">
                                <Text className="text-2xl font-bold">{selectedWord.word}</Text>
                                <Text className="text-lg text-typography-600">{selectedWord.translation}</Text>
                                {selectedWord.phonetic && (
                                    <Text className="text-sm text-typography-500">{selectedWord.phonetic}</Text>
                                )}
                            </VStack>
                            <HStack space="sm" className="items-center">
                                <Pressable 
                                    onPress={() => handleScenarioClick(1)}
                                    className="w-[120px] rounded-lg overflow-hidden hover:opacity-90"
                                >
                                    <Box className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                        <img 
                                            src={scenarios[0].cover} 
                                            alt={scenarios[0].title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </Box>
                                </Pressable>
                                <Pressable 
                                    onPress={handleCloseModal}
                                    className="p-2 rounded-full hover:bg-background-100"
                                >
                                    <Text className="text-2xl text-typography-600">×</Text>
                                </Pressable>
                            </HStack>
                        </HStack>

                        <VStack space="md" className="mt-6">
                            {selectedWord.examples && selectedWord.examples.length > 0 && (
                                <Box>
                                    <Text className="text-lg font-medium mb-2">例句</Text>
                                    <VStack space="sm">
                                        {selectedWord.examples.map((example, index) => (
                                            <Box key={index} className="p-3 bg-background-50 rounded-lg">
                                                <Text className="text-base">{example.en}</Text>
                                                <Text className="text-sm text-typography-600 mt-1">{example.cn}</Text>
                                            </Box>
                                        ))}
                                    </VStack>
                                </Box>
                            )}

                            {selectedWord.synonyms && selectedWord.synonyms.length > 0 && (
                                <Box>
                                    <Text className="text-lg font-medium mb-2">同义词</Text>
                                    <HStack space="sm">
                                        {selectedWord.synonyms.map((synonym, index) => (
                                            <Text key={index} className="text-sm text-primary-600">{synonym}</Text>
                                        ))}
                                    </HStack>
                                </Box>
                            )}

                            {selectedWord.notes && (
                                <Box>
                                    <Text className="text-lg font-medium mb-2">备注</Text>
                                    <Text className="text-sm text-typography-600">{selectedWord.notes}</Text>
                                </Box>
                            )}
                        </VStack>
                    </Box>
                );
            }

            if (selectedSentence) {
                return (
                    <Box className="p-6">
                        <HStack className="justify-between items-center mb-4">
                            <VStack space="xs">
                                <Text className="text-2xl font-bold">{selectedSentence.sentence}</Text>
                                <Text className="text-lg text-typography-600">{selectedSentence.translation}</Text>
                            </VStack>
                            <HStack space="sm" className="items-center">
                                <Pressable 
                                    onPress={() => handleScenarioClick(1)}
                                    className="w-[120px] rounded-lg overflow-hidden hover:opacity-90"
                                >
                                    <Box className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                        <img 
                                            src={scenarios[0].cover} 
                                            alt={scenarios[0].title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </Box>
                                </Pressable>
                                <Pressable 
                                    onPress={handleCloseModal}
                                    className="p-2 rounded-full hover:bg-background-100"
                                >
                                    <Text className="text-2xl text-typography-600">×</Text>
                                </Pressable>
                            </HStack>
                        </HStack>

                        <VStack space="md" className="mt-6">
                            {selectedSentence.examples && selectedSentence.examples.length > 0 && (
                                <Box>
                                    <Text className="text-lg font-medium mb-2">相关例句</Text>
                                    <VStack space="sm">
                                        {selectedSentence.examples.map((example, index) => (
                                            <Box key={index} className="p-3 bg-background-50 rounded-lg">
                                                <Text className="text-base">{example.en}</Text>
                                                <Text className="text-sm text-typography-600 mt-1">{example.cn}</Text>
                                            </Box>
                                        ))}
                                    </VStack>
                                </Box>
                            )}

                            {selectedSentence.notes && (
                                <Box>
                                    <Text className="text-lg font-medium mb-2">使用说明</Text>
                                    <Text className="text-sm text-typography-600">{selectedSentence.notes}</Text>
                                </Box>
                            )}
                        </VStack>
                    </Box>
                );
            }

            return null;
        };

        return (
            <Box className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <Box className="bg-background-0 rounded-lg w-full max-w-2xl mx-4 overflow-hidden">
                    {modalContent()}
                </Box>
            </Box>
        );
    };

    const renderContent = () => {
        if (activeTab === 'glossary') {
            return (
                <>
                    <ScrollView className="w-full">
                        <Box className="w-full md:h-[478px] h-[380px]">
                            <Grid 
                                className="w-full gap-4 p-4 md:px-6 lg:px-8" 
                                _extra={{
                                    className: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                }}
                            >
                                {words.map((word) => (
                                    <Pressable 
                                        key={word.id}
                                        onPress={() => handleWordClick(word)}
                                        className="p-4 bg-background-50 rounded-lg border border-border-200 hover:bg-background-100"
                                    >
                                        <HStack className="justify-between items-center">
                                            <VStack space="xs">
                                                <Text className="text-lg font-medium">{word.word}</Text>
                                                <Text className="text-sm text-typography-600">{word.translation}</Text>
                                            </VStack>
                                            <Pressable 
                                                onPress={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteWord(word.id);
                                                }}
                                                className="p-2 rounded-full hover:bg-background-200"
                                            >
                                                <Icon 
                                                    as={StarIcon} 
                                                    size="sm"  
                                                />
                                            </Pressable>
                                        </HStack>
                                    </Pressable>
                                ))}
                            </Grid>
                        </Box>
                    </ScrollView>
                    {renderModal()}
                </>
            );
        } else if (activeTab === 'sentences') {
            return (
                <>
                    <ScrollView className="w-full">
                        <Box className="w-full h-[478px]">
                            <VStack className="w-full gap-4 p-4 md:px-6 lg:px-8">
                                {sentences.map((sentence) => (
                                    <Pressable 
                                        key={sentence.id}
                                        onPress={() => handleSentenceClick(sentence)}
                                        className="w-full p-4 bg-background-50 rounded-lg border border-border-200 hover:bg-background-100"
                                    >
                                        <HStack className="justify-between items-center">
                                            <VStack space="xs" className="flex-1">
                                                <Text className="text-lg font-medium">{sentence.sentence}</Text>
                                                <Text className="text-sm text-typography-600">{sentence.translation}</Text>
                                            </VStack>
                                            <Pressable 
                                                onPress={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteSentence(sentence.id);
                                                }}
                                                className="p-2 rounded-full hover:bg-background-200"
                                            >
                                                <Icon 
                                                    as={StarIcon} 
                                                    size="sm"  
                                                />
                                            </Pressable>
                                        </HStack>
                                    </Pressable>
                                ))}
                            </VStack>
                        </Box>
                    </ScrollView>
                    {renderModal()}
                </>
            );
        } else if (activeTab === 'scenario') {
            return (
                <ScrollView className="w-full">
                    <Box className="w-full h-[478px]">
                        <Grid 
                            className="w-full gap-4 p-4 md:px-6 lg:px-8" 
                            _extra={{
                                className: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                            }}
                        >
                            {scenarios.map((scenario) => (
                                <Pressable 
                                    key={scenario.id} 
                                    onPress={() => handleScenarioClick(scenario.id)}
                                    className="bg-background-50 rounded-lg border border-border-200 overflow-hidden hover:bg-background-100"
                                >
                                    <Box className="relative">
                                        <img 
                                            src={scenario.cover} 
                                            alt={scenario.title}
                                            className="w-full h-[160px] object-cover"
                                        />
                                        <Pressable 
                                            onPress={(e) => {
                                                e.stopPropagation();
                                                handleDeleteScenario(scenario.id);
                                            }}
                                            className="absolute top-2 right-2 p-2 rounded-full bg-background-50/80 hover:bg-background-100"
                                        >
                                            <Icon 
                                                as={StarIcon} 
                                                size="sm"
                                                className="text-primary-600"
                                            />
                                        </Pressable>
                                    </Box>
                                    <Box className="p-4">
                                        <Text className="text-lg font-medium line-clamp-2">{scenario.title}</Text>
                                        <Text className="text-sm text-typography-600 mt-1">
                                            {scenario.type === 'video' ? 'Video' : 'Article'}
                                        </Text>
                                    </Box>
                                </Pressable>
                            ))}
                        </Grid>
                    </Box>
                </ScrollView>
            );
        }
        return null;
    };

    return (
        <Box className="flex-1 bg-background-0">
            <VStack className="w-full h-full">
                <Box className="w-full">
                    <HStack className="w-full max-w-3xl mx-auto p-4 md:px-6 lg:px-8 bg-background-0 relative" space="md">
                        <Box className="absolute bottom-0 left-0 h-0.5 bg-primary-600 transition-all duration-300" 
                            style={{
                                width: '33.33%',
                                transform: `translateX(${getTabIndex(activeTab) * 100}%)`
                            }}
                        />
                        <Pressable 
                            onPress={() => handleTabChange('glossary')} 
                            className="flex-1"
                        >
                            <Text 
                                className={`text-lg font-medium text-center pb-2 transition-colors duration-300 ${
                                    activeTab === 'glossary' 
                                        ? 'text-primary-600' 
                                        : 'text-typography-600 hover:text-primary-600'
                                }`}
                            >
                                Glossary
                            </Text>
                        </Pressable>
                        <Pressable 
                            onPress={() => handleTabChange('sentences')} 
                            className="flex-1"
                        >
                            <Text 
                                className={`text-lg font-medium text-center pb-2 transition-colors duration-300 ${
                                    activeTab === 'sentences' 
                                        ? 'text-primary-600' 
                                        : 'text-typography-600 hover:text-primary-600'
                                }`}
                            >
                                Sentences
                            </Text>
                        </Pressable>
                        <Pressable 
                            onPress={() => handleTabChange('scenario')} 
                            className="flex-1"
                        >
                            <Text 
                                className={`text-lg font-medium text-center pb-2 transition-colors duration-300 ${
                                    activeTab === 'scenario' 
                                        ? 'text-primary-600' 
                                        : 'text-typography-600 hover:text-primary-600'
                                }`}
                            >
                                Scenario
                            </Text>
                        </Pressable>
                    </HStack>
                </Box>
                {renderContent()}
            </VStack>
        </Box>
    );
};

export default Review;