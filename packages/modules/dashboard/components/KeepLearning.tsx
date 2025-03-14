import React, {useRef, useState, useContext} from "react";
import {
  Box,
  HStack,
  Center,
  Image,
  Icon,
  Pressable,
} from "@app-launch-kit/components/primitives";
import {ScrollView} from "react-native";
import {ChevronLeft, ChevronRight} from "lucide-react-native";
import {useColorMode} from '@app-launch-kit/utils/contexts/ColorModeContext';
import { useRouter } from "@unitools/router";

const data = [
  {
    src: require("@app-launch-kit/assets/images/template/display/image1.png"),
    route: "/chat?id=1&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image2.png"),
    route: "/chat?id=2&type=video",
  },

  {
    src: require("@app-launch-kit/assets/images/template/display/image4.png"),
    route: "/chat?id=3&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image6.png"),
    route: "/chat?id=4&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image8.png"),
    route: "/chat?id=5&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image10.png"),
    route: "/chat?id=6&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image3.png"),
    route: "/chat?id=7&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image11.png"),
    route: "/chat?id=8&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image12.png"),
    route: "/chat?id=9&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image13.png"),
    route: "/chat?id=10&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image14.png"),
    route: "/chat?id=11&type=video",
  },
  {
    src: require("@app-launch-kit/assets/images/template/display/image15.png"),
    route: "/chat?id=12&type=video",
  },
];

const KeepLearning = () => {
  const router = useRouter();
  const scrollViewRef = useRef(null);
  const scrollAmount = 332;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isContentAtRight, setIsContentAtRight] = useState(true);
  const [progressWidths] = useState(() => {
    return data.map(() => Math.floor(Math.random() * 80) + 20);
  });


  const handleScrollLeft = () => {
    const newScrollPosition = scrollPosition - scrollAmount;
    if (scrollViewRef.current) {
      // @ts-ignore
      scrollViewRef?.current?.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScrollRight = () => {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (scrollViewRef.current)
        // @ts-ignore
      scrollViewRef?.current?.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
    setScrollPosition(newScrollPosition);
  };

  const checkContentAtLeft = () => {
    if (scrollPosition > 0) {
      return true;
    }
    return false;
  };

  const isCloseToRight = (event: any) => {
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isScrollAtEnd =
        contentOffset.x + layoutMeasurement.width >= contentSize.width;
    if (isScrollAtEnd) {
      return true;
    }
    return false;
  };

  const onHorizontalScroll = () => {
    console.log('User scrolled horizontally');
  };

  return (
      <Box className="w-full">
        <ScrollView
            horizontal
            style={{width: "100%"}}
            showsHorizontalScrollIndicator={false}
            ref={scrollViewRef}
            scrollEventThrottle={50}
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center'
            }}
            onScroll={(event) => {
              console.log('onScroll', event);
              onHorizontalScroll();
              if (isCloseToRight(event)) {
                setIsContentAtRight(false);
              } else {
                setIsContentAtRight(true);
              }
              setScrollPosition(event.nativeEvent.contentOffset.x);
            }}
        >
          <HStack space="md" className="w-full px-4 md:px-0">
            {data.map((image, index) => {
              return (
                <Pressable key={index} onPress={() => { router.push(image.route) }}>
                  <Box key={index} className="flex-1 rounded-md border-2 border-background-100 rounded-xl" style={{ overflow:"hidden" }}>
                    <Image source={image.src} alt={`place${index}`}
                           className="w-32 h-18 md:w-48 lg:w-56 xl:w-64 2xl:w-64 "/>
                    <Box
                        style={{ width: `${progressWidths[index]}%` }}
                        className="absolute bottom-0 left-0 h-1 bg-red-500"
                    />
                  </Box>
                </Pressable>
              );
            })}
          </HStack>
        </ScrollView>
        <ScrollLeft
            handleScrollLeft={handleScrollLeft}
            disabled={!checkContentAtLeft()}
        />
        <ScrollRight
            handleScrollRight={handleScrollRight}
            disabled={!isContentAtRight}
        />
      </Box>
  );
};

const ScrollLeft = ({handleScrollLeft, disabled}: any) => {
  const {colorMode} = useColorMode();
  return (
      <Center className="absolute left-0 h-full flex">
        <Pressable
            className={`p-1 ml-3 rounded-full border-outline-300 border bg-background-50 sm:-ml-[8px] md:-ml-[16px] hover:bg-background-100 ${
                disabled
                    ? "data-[disabled=true]:opacity-0"
                    : "data-[disabled=true]:opacity-100"
            }`}
            disabled={disabled}
            onPress={handleScrollLeft}
        >
          <Icon
              as={ChevronLeft}
              size="lg"
              color={colorMode === "light" ? "#535252" : "#DCDBDB"}
          />
        </Pressable>
      </Center>
  );
};

const ScrollRight = ({handleScrollRight, disabled}: any) => {
  const {colorMode} = useColorMode();
  return (
      <Center className="absolute right-0 h-full flex">
        <Pressable
            className={`p-1 ml-3 rounded-full border-outline-300 border bg-background-50 sm:-mr-2 md:-mr-4 hover:bg-background-100 ${
                disabled
                    ? "data-[disabled=true]:opacity-0"
                    : "data-[disabled=true]:opacity-100"
            }`}
            onPress={handleScrollRight}
            disabled={disabled}
        >
          <Icon
              as={ChevronRight}
              size="lg"
              color={colorMode === "light" ? "#535252" : "#DCDBDB"}
          />
        </Pressable>
      </Center>
  );
};

export default KeepLearning;
