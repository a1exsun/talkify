'use client';
import {Box} from '@app-launch-kit/components/primitives/box';
import {Text} from '@app-launch-kit/components/primitives/text';
import {Heading} from '@app-launch-kit/components/primitives/heading';
import {ScrollView} from '@app-launch-kit/components/primitives/scroll-view';
import {VStack} from '@app-launch-kit/components/primitives/vstack';
import {Service} from '@app-launch-kit/modules/user-profile';
import React, {useEffect, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useAuth} from '@app-launch-kit/modules/auth';
import KeepLearning from "./KeepLearning";
import {XsunCarousel} from "@app-launch-kit/components/common/Carousel";
import {Button} from '@app-launch-kit/components/primitives/button';
import {useRouter} from '@unitools/router';
import {HStack} from '@app-launch-kit/components/primitives/hstack';
import {Input, InputField, InputSlot, InputIcon} from '@app-launch-kit/components/primitives/input';
import {Icon} from '@app-launch-kit/components/primitives/icon';
import {SearchIcon, FavouriteIcon} from '@app-launch-kit/components/primitives/icon';
import Image from "@unitools/image";
import { useColorMode } from '@app-launch-kit/utils/contexts/ColorModeContext';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';

const data = [
    {
        src: require("@app-launch-kit/assets/images/temporary/longvideo/deepseek.jpg"),
        id: "1",
        route: "/chat?id=1&type=video",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/longvideo/JD.jpg"),
        id: "2",
        route: "/chat?id=2&type=video",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/longvideo/chump-musk.jpg"),
        id: "3",
        route: "/chat?id=3&type=video",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/longvideo/YR4 striking Earth.jpg"),
        id: "4",
        route: "/chat?id=4&type=video",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/longvideo/The Age of AI.jpg"),
        id: "5",
        route: "/chat?id=5&type=video",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/longvideo/openai.jpg"),
        id: "6",
        route: "/chat?id=6&type=video",
    },
];
const cardDataMock = [
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00001.webp"),
        title: "古建筑小径",
        category: "生活场景",
        route: "/chat?id=1&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/speakingvideo/speakingvideo_00001.webp"),
        title: "美丽中国-熊猫篇",
        category: "口语练习",
        route: "/chat?id=2&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/lifevideo/lifevideo_00001.jpg"),
        title: "商务会议常用词汇",
        category: "场景词汇",
        route: "/chat?id=3&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00005.webp"),
        title: "置办年货常用词汇",
        category: "生活场景",
        route: "/chat?id=4&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/speakingvideo/speakingvideo_00007.webp"),
        title: "面试对话范例",
        category: "口语练习",
        route: "/chat?id=5&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/lifevideo/lifevideo_00008.jpg"),
        title: "身体状况自述表达",
        category: "场景词汇",
        route: "/chat?id=6&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00010.webp"),
        title: "圣诞节高频词汇",
        category: "生活场景",
        route: "/chat?id=7&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/speakingvideo/speakingvideo_00013.webp"),
        title: "电影院场景对话",
        category: "口语练习",
        route: "/chat?id=8&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/lifevideo/lifevideo_00015.jpg"),
        title: "团队讨论常用词汇",
        category: "场景词汇",
        route: "/chat?id=9&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00015.webp"),
        title: "博物馆场景高频词汇",
        category: "生活场景",
        route: "/chat?id=10&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/speakingvideo/speakingvideo_00019.webp"),
        title: "冷却系统论文1-1",
        category: "口语练习",
        route: "/chat?id=11&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/lifevideo/lifevideo_00022.jpg"),
        title: "预约培训常用词汇",
        category: "场景词汇",
        route: "/chat?id=12&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00020.jpg"),
        title: "花店场景惯用词汇",
        category: "生活场景",
        route: "/chat?id=13&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/speakingvideo/speakingvideo_00016.webp"),
        title: "冷却系统论文范例1-5",
        category: "口语练习",
        route: "/chat?id=14&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/lifevideo/lifevideo_00017.jpg"),
        title: "态度相关描述词汇",
        category: "场景词汇",
        route: "/chat?id=15&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00018.webp"),
        title: "电动车相关词汇",
        category: "生活场景",
        route: "/chat?id=16&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/speakingvideo/speakingvideo_00020.webp"),
        title: "评论反馈相关论文3-3",
        category: "口语练习",
        route: "/chat?id=17&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/lifevideo/lifevideo_00019.jpg"),
        title: "对其他人的形容",
        category: "场景词汇",
        route: "/chat?id=18&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00004.webp"),
        title: "卧室场景物品",
        category: "生活场景",
        route: "/chat?id=19&type=scenario",
    },
    {
        src: require("@app-launch-kit/assets/images/temporary/formatvideo/dialogvidio/dialogvideo_00003.webp"),
        title: "卧室场景物品",
        category: "生活场景",
        route: "/chat?id=20&type=scenario",
    },

];

const Home = () => {
    const { colorMode } = useColorMode();
    const {session} = useAuth();
    const [userName, setUserName] = useState('');
    const [error, setError] = useState<string | null>(null); // Error state
    const [isLoading, setIsLoading] = useState(true); // 添加这行
    const parentContainerWidth = useWindowDimensions();
    const router = useRouter();

    const borderWidth = (() => {
        const width = parentContainerWidth.width;
        if (width >= 1920) return (width - 1920) + 360; // 3xl
        if (width >= 1536) return 360; // 2xl
        if (width >= 1280) return 360; // xl
        if (width >= 1024) return 254+40+40; // lg
        if (width >= 992) return 254+40+40; // 收起边栏
        if (width >= 768) return 66+40+40; // md
        return 32; // sm
    })();

    useEffect(() => {
        // 模拟1秒后加载真实内容
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        const fetchProfile = async () => {
            if (session?.user?.id) {
                try {
                    const profileResponse = await Service.fetchUserProfile(
                        session.user.id
                    );

                    if (profileResponse.error) {
                        // Handle error in response
                        setError(
                            profileResponse.error.message ||
                            'An error occurred while fetching profile.'
                        );
                    } else if (profileResponse.data) {
                        // Handle successful profile fetch
                        const {data} = profileResponse;
                        if (data?.first_name) {
                            setUserName(`${data.first_name} ${data?.last_name}`);
                        }
                    } else {
                        // Handle case where no data is returned but no error is present
                        setError('Profile data is not available.');
                    }
                } catch (error: any) {
                    // Handle unexpected errors
                    setError(error.message || 'An unexpected error occurred.');
                }
            } else {
                // Handle case where session or user ID is not available
                setError('User ID is missing in the session.');
            }
        };

        fetchProfile();
        return () => clearTimeout(timer);
    }, [session?.user?.id]);


    // 骨架屏渲染
    // if (isLoading) {
    //     return (
    //         <ScrollView>
    //             <HStack className="flex flex-wrap" space="md">
    //                 {Array.from({length: 40}).map((_, index) => (
    //                     <React.Fragment key={index}>
    //                         <Box
    //                             className="flex-1 min-w-[160px] sm:min-w-[180px] md:min-w-[170px] lg:min-w-[180px] xl:min-w-[220px] 2xl:min-w-[240px] max-w-[500px] gap-4 p-3 rounded-md bg-background-100"
    //                         >
    //                             <Skeleton style={{aspectRatio: 1}} variant="sharp" className="h-full"/>
    //                             <SkeletonText _lines={2} className="h-3"/>
    //                             <HStack className="gap-2 items-center w-full">
    //                                 <Skeleton variant="circular" className="h-full w-[40px] mr-2" />
    //                                 <SkeletonText _lines={2} gap={1} className="h-2 w-3/5" />
    //                                 <Skeleton variant="circular" className="h-full w-[40px] mr-2" />
    //                             </HStack>
    //                         </Box>
    //                     </React.Fragment>
    //                 ))}
    //             </HStack>
    //         </ScrollView>
    //     );
    // }

    const handlePress = (link: string) => {
        router.push(link);
    };

    return (
        <Box className="flex-1 bg-background-0">
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1 max-w-[1640px] mx-auto">
                <VStack
                    className="p-4 md:pb-4 md:px-10 md:pt-5 lg:pt-7 w-full"
                    space="md"
                >
                    {/* explore page main content header */}
                    {/*<MainContentHeader*/}
                    {/*    modalVisible={modalVisible}*/}
                    {/*    setModalVisible={setModalVisible}*/}
                    {/*    setActiveTab={setActiveTab}*/}
                    {/*    activeTab={activeTab}*/}
                    {/*/>*/}
                    {/* explore page new this week fold 1 */}
                    <XsunCarousel 
                        data={data} 
                        borderWidth={borderWidth}
                        aspectRatio={parentContainerWidth.width > 500 ? 1.78 : 1}
                        onPress={handlePress}/>
                    <Heading size="xl" className="flex">
                        Keep Learning
                    </Heading>
                    <KeepLearning/>

                    {/* explore page homestay info fold 2 */}
                    {/*<HomestayInformationFold />*/}
                    {/*<Heading className="hidden md:flex text-3xl text-typography-900 font-bold">*/}
                    {/*    AI_Chat*/}
                    {/*</Heading>*/}

                    <Heading size="xl" className="flex" style={{marginTop: 20}}>
                        Random Scenario
                    </Heading>

                    <Input size="md" className="w-full h-10">
                        <InputField placeholder="Search for a scenario..."/>
                        <InputSlot className="h-6 w-6 m-1.5">
                            <InputIcon
                                as={SearchIcon}
                            />
                        </InputSlot>
                    </Input>

                    <HStack className="flex flex-wrap gap-4 mt-2" space="md">
                        {cardDataMock.map((cardData, index) => (
                            <React.Fragment key={index}>
                                <Box
                                    className={`
                                    min-w-[160px] sm:min-w-[180px] md:min-w-[170px] lg:min-w-[180px] xl:min-w-[218px] 1440p:min-w-[250px] 2xl:min-w-[280px] 1800p:min-w-[320px]
                                    max-w-[500px] 2xl:max-w-[800px]
                                    gap-0 p-0 flex-1 rounded-md ${colorMode === 'dark' ? 'bg-background-50' : 'bg-background-100'}
                                    `}
                                >
                                    <Pressable onPress={() => handlePress(cardData.route)}>
                                        <Image
                                            //@ts-ignore
                                            className="border-2 border-background-100 rounded-xl"
                                            alt={`image${index}`}
                                            source={cardData.src}
                                            style={{aspectRatio: 1, width: '100%'}}
                                        />
                                    </Pressable>
                                    <VStack space="sm" className="mt-2">
                                        <Heading size="sm" className="text-typography-900 ml-3">
                                            {cardData.title}
                                        </Heading>
                                    </VStack>
                                    <HStack className="flex-1 gap-2 items-center justify-end w-500 mt-2 mb-2">
                                        <Button variant="outline" className="ml-3 w-24 h-6 border rounded-md">
                                            <Text size="xs" className="">
                                                {cardData.category}
                                            </Text>
                                        </Button>
                                        <Box className="flex-1"/>
                                        <Icon as={FavouriteIcon} className="w-4 h-4"/>
                                        <Text size="xs" className="text-typography-800 w-5 mr-3 text-right">
                                            {Math.floor(Math.random() * 1000) + 1}
                                        </Text>
                                    </HStack>
                                </Box>
                            </React.Fragment>
                        ))}
                    </HStack>
                </VStack>
            </ScrollView>
        </Box>
    );
};

export default Home;
