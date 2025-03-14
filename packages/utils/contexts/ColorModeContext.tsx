'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const COLOR_SCHEME_STORAGE_KEY = 'app_color_scheme_setting';

type ColorSchemeSettings = 'system' | 'light' | 'dark';

type ContextType = {
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
  colorSchemeSetting: ColorSchemeSettings;
  setColorSchemeSetting: (setting: ColorSchemeSettings) => void;
};

export const ColorContext = createContext<ContextType>({
  colorMode: 'dark',
  toggleColorMode: () => {},
  colorSchemeSetting: 'system',
  setColorSchemeSetting: () => {},
});

export const ColorModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 设备颜色模式
  const deviceColorScheme = useDeviceColorScheme();
  // 用户设置
  const [colorSchemeSetting, setColorSchemeSettingState] = useState<ColorSchemeSettings>('system');
  // 实际显示的颜色模式
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');

  // 从存储加载用户设置
  useEffect(() => {
    const loadColorScheme = async () => {
      try {
        const savedColorScheme = await AsyncStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
        if (savedColorScheme) {
          setColorSchemeSettingState(savedColorScheme as ColorSchemeSettings);
        }
      } catch (error) {
        console.error('Failed to load color scheme setting:', error);
      }
    };

    loadColorScheme();
  }, []);

  // 保存用户设置的函数
  const setColorSchemeSetting = async (setting: ColorSchemeSettings) => {
    setColorSchemeSettingState(setting);
    try {
      await AsyncStorage.setItem(COLOR_SCHEME_STORAGE_KEY, setting);
    } catch (error) {
      console.error('Failed to save color scheme setting:', error);
    }
  };

  // 监听设备颜色模式和用户设置的变化
  useEffect(() => {
    if (colorSchemeSetting === 'system') {
      // 跟随系统
      setColorMode(deviceColorScheme === 'dark' ? 'dark' : 'light');
    } else {
      // 使用用户设置
      setColorMode(colorSchemeSetting);
    }
  }, [deviceColorScheme, colorSchemeSetting]);

  // 切换模式
  const toggleColorMode = () => {
    setColorMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ColorContext.Provider value={{ 
      colorMode, 
      toggleColorMode, 
      colorSchemeSetting, 
      setColorSchemeSetting 
    }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorMode = () => {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }

  return context;
};
