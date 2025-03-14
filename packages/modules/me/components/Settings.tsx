"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@app-launch-kit/components/primitives/box";
import { HStack } from "@app-launch-kit/components/primitives/hstack";
import { VStack } from "@app-launch-kit/components/primitives/vstack";
import { Text } from "@app-launch-kit/components/primitives/text";
import { Pressable } from "@app-launch-kit/components/primitives/pressable";
import { Icon } from "@app-launch-kit/components/primitives/icon";
import { Divider } from "@app-launch-kit/components/primitives/divider";
import { Heading } from "@app-launch-kit/components/primitives/heading";
import { useRouter } from '@unitools/router';
import { SafeAreaView } from "@app-launch-kit/components/primitives/safe-area-view";
import { ScrollView } from "@app-launch-kit/components/primitives/scroll-view";
import { 
  ChevronRightIcon, 
  UserIcon,
  GlobeIcon,
  SettingsIcon,
  HelpCircleIcon,
  PaletteIcon,
  ArrowLeftIcon,
  type LucideIcon 
} from "lucide-react-native";
import { Switch } from "@app-launch-kit/components/primitives/switch";
import { useColorMode } from "@app-launch-kit/utils/contexts/ColorModeContext";
import { 
  Actionsheet, 
  ActionsheetContent, 
  ActionsheetItem, 
  ActionsheetItemText, 
  ActionsheetDragIndicator, 
  ActionsheetDragIndicatorWrapper, 
  ActionsheetBackdrop 
} from "@app-launch-kit/components/primitives/actionsheet";
import { useColorScheme as useDeviceColorScheme } from 'react-native';

// 定义设置项的类型
interface BaseSettingType {
  iconName: LucideIcon;
  title: string;
  subText?: string;
  type: "route" | "switch";
}

interface SettingItemType extends BaseSettingType {
  type: "route";
  endIcon: LucideIcon;
  route: string;
}

interface SwitchSettingType extends BaseSettingType {
  type: "switch";
  defaultValue: boolean;
  disabled?: boolean;
}

// 应用设置组
const appSettings: (SettingItemType | SwitchSettingType)[] = [
  {
    iconName: GlobeIcon,
    title: "Languages",
    type: "switch",
    defaultValue: true,
  },
  {
    iconName: SettingsIcon,
    title: "AutoPlay",
    type: "switch",
    defaultValue: true,
  },
  {
    iconName: PaletteIcon,
    title: "Darkmode",
    endIcon: ChevronRightIcon,
    route: "",
    type: "route",
  },
  {
    iconName: HelpCircleIcon,
    title: "Help",
    endIcon: ChevronRightIcon,
    route: "help",
    type: "route",
  },
];

// 设置项组件
const SettingsGroup = ({ title, items }: { title: string, items: (SettingItemType | SwitchSettingType)[] }) => {
  const router = useRouter();
  const { colorMode, toggleColorMode, colorSchemeSetting, setColorSchemeSetting } = useColorMode();
  const deviceColorScheme = useDeviceColorScheme();
  
  // ActionSheet state
  const [showDarkModeSheet, setShowDarkModeSheet] = useState(false);
  
  // 初始化开关状态
  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>({});
  
  // 同步当前颜色模式到开关状态
  useEffect(() => {
    // Initialize all switch states with their default values
    const initialStates: { [key: string]: boolean } = {};
    items.forEach(item => {
      if (item.type === "switch") {
        initialStates[item.title] = item.defaultValue;
      }
    });
    
    setSwitchStates(initialStates);
  }, [items]);
  
  // 处理开关状态变化
  const handleSwitchChange = (key: string, value: boolean) => {
    setSwitchStates(prev => ({ ...prev, [key]: value }));
  };
  
  const handleNavigation = (route: string, item: SettingItemType | SwitchSettingType) => {
    if (item.title === "Darkmode") {
      setShowDarkModeSheet(true);
    } else if (route) {
      router.push(route);
    }
  };

  // 处理暗黑模式选项
  const handleDarkModeSelect = (mode: 'system' | 'light' | 'dark') => {
    // 设置颜色模式偏好
    setColorSchemeSetting(mode);
    setShowDarkModeSheet(false);
  };

  // 获取当前暗黑模式显示文本
  const getDarkModeText = () => {
    switch (colorSchemeSetting) {
      case 'system':
        return 'System';
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      default:
        return 'System';
    }
  };

  return (
    <VStack space="md">
      <Heading size="sm" className="px-4 text-typography-600">
        {title}
      </Heading>
      <VStack className="py-2 px-4 border rounded-xl border-border-300">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Pressable 
              onPress={() => item.type === "route" && handleNavigation(item.route, item)} 
              className="w-full"
            >
              <HStack space="2xl" className="justify-between items-center w-full flex-1 py-3 px-2">
                <HStack className="items-center" space="md">
                  <Icon as={item.iconName} size="md" />
                  <Text size="lg">
                    {item.title}
                  </Text>
                </HStack>
                
                {item.type === "route" ? (
                  <HStack space="md" className="items-center">
                    {item.title === "Darkmode" && (
                      <Text size="sm" className="text-typography-600">
                        {getDarkModeText()}
                      </Text>
                    )}
                    <Icon as={item.endIcon} size="sm" />
                  </HStack>
                ) : (
                  <HStack space="md" className="items-center">
                    {item.title === "Languages" && (
                      <Text size="sm" className="text-typography-600">
                        {switchStates["Languages"] ? "中文" : "English"}
                      </Text>
                    )}
                    <Switch
                      value={switchStates[item.title] ?? item.defaultValue}
                      onValueChange={(value) => handleSwitchChange(item.title, value)}
                    />
                  </HStack>
                )}
              </HStack>
            </Pressable>
            {index < items.length - 1 && <Divider className="my-1" />}
          </React.Fragment>
        ))}
      </VStack>

      {/* Dark Mode ActionSheet */}
      <Actionsheet
        isOpen={showDarkModeSheet}
        onClose={() => setShowDarkModeSheet(false)}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <Heading className="pb-4 w-full text-center">Choose Appearance</Heading>
          <ActionsheetItem onPress={() => handleDarkModeSelect('system')}>
            <Icon as={GlobeIcon} size="md" />
            <ActionsheetItemText>System</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => handleDarkModeSelect('light')}>
            <Icon as={PaletteIcon} size="md" />
            <ActionsheetItemText>Light</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => handleDarkModeSelect('dark')}>
            <Icon as={UserIcon} size="md" />
            <ActionsheetItemText>Dark</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </VStack>
  );
};

// 主设置页面组件
export const Settings = () => {
  const router = useRouter();
  
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <VStack className="flex-1 p-4 pt-6" space="3xl">
        <HStack className="h-20 w-full items-center z-10" space="md">
          <Pressable
            onPress={() => {
              router.back();
            }}
            className="h-12 w-12 items-center justify-center"
          >
            <Icon as={ArrowLeftIcon} size="xl" />
          </Pressable>
          <Heading size="2xl" className="font-roboto flex-1">
            Settings
          </Heading>
        </HStack>
        
        <ScrollView 
          className="flex-1" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Box className="mt-2">
            <SettingsGroup title="" items={appSettings} />
          </Box>
        </ScrollView>          
      </VStack>
    </SafeAreaView>
  );
};

export default Settings;