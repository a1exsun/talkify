import * as React from "react";
import {Dimensions, Text, View} from "react-native";
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import {useSharedValue} from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import Image from "@unitools/image";
import { Box, Center, Icon } from "@app-launch-kit/components/primitives";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useColorMode } from '@app-launch-kit/utils/contexts/ColorModeContext';

type CarouselData = {
    src: string;
};

export const XsunCarousel = ({data, borderWidth, aspectRatio, onPress}: { data: CarouselData[], borderWidth?: number, aspectRatio?: number, onPress?: (link: string) => void }) => {
    const bWidth = borderWidth ?? 0
    const aRatio = aspectRatio ?? 1
    const width = Dimensions.get('window').width - bWidth;
    const ref = React.useRef<ICarouselInstance>(null);
    const { colorMode } = useColorMode();

    const renderItem = ({item, index}: { item: CarouselData & { route?: string }, index: number }) => {
        return (
            <Pressable onPress={() => { if(onPress && item.route) { onPress(item.route); } }} style={{flex:1}}>
                <Image
                    // @ts-ignore
                    className="border-2 border-background-100 rounded-xl"
                    source={item.src}
                    height={'100%'}
                    width={'100%'}
                    alt="Banner Image"
                    contentFit="cover"
                />
            </Pressable>
        );
    };

    const handleScrollLeft = () => {
        ref.current?.prev();
    };

    const handleScrollRight = () => {
        ref.current?.next();
    };

    return (
        <View style={{flex: 1}}>
            <Carousel
                ref={ref}
                data={data}
                renderItem={renderItem}
                width={width}
                height={width / aRatio}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 300,
                }}
            />
            <Center className="absolute left-0 h-full flex">
                <Pressable
                    className="p-1 ml-3 rounded-full border-outline-300 border bg-background-50 sm:-ml-[8px] md:-ml-[16px] hover:bg-background-100"
                    onPress={handleScrollLeft}
                >
                    <Icon
                        as={ChevronLeft}
                        size="lg"
                        color={colorMode === "light" ? "#535252" : "#DCDBDB"}
                    />
                </Pressable>
            </Center>
            <Center className="absolute right-0 h-full flex">
                <Pressable
                    className="p-1 ml-3 rounded-full border-outline-300 border bg-background-50 sm:-mr-2 md:-mr-4 hover:bg-background-100"
                    onPress={handleScrollRight}
                >
                    <Icon
                        as={ChevronRight}
                        size="lg"
                        color={colorMode === "light" ? "#535252" : "#DCDBDB"}
                    />
                </Pressable>
            </Center>
        </View>
    );
};
