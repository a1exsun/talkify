'use client';
import React, { ReactNode } from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import { Icon } from "@app-launch-kit/components/primitives/icon";
import { Pressable } from "@app-launch-kit/components/primitives/pressable";
import { Text } from "@app-launch-kit/components/primitives/text";

interface CircleIconButtonProps {
  icon: any; // 图标组件
  onPress: () => void; // 点击处理函数
  size?: number; // 按钮大小，默认为50
  bgColor?: string; // 背景颜色，默认为gray-200
  iconColor?: string; // 图标颜色，默认为gray.500
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl"; // 图标大小，默认为md
  isActive?: boolean; // 是否处于激活状态
  activeColor?: string; // 激活状态的背景颜色
  activeIconColor?: string; // 激活状态的图标颜色
  label?: string; // 可选的按钮标签
  labelPosition?: 'top' | 'bottom'; // 标签位置
  children?: ReactNode; // 可能的额外子组件
}

/**
 * 通用圆形图标按钮组件
 */
export const CircleIconButton = ({
  icon,
  onPress,
  size = 50,
  bgColor = "bg-gray-200",
  iconColor = "gray.500",
  iconSize = "md",
  isActive = false,
  activeColor = "bg-blue-500",
  activeIconColor = "white",
  label,
  labelPosition = 'top',
  children
}: CircleIconButtonProps) => {
  
  const buttonBgColor = isActive ? activeColor : bgColor;
  const buttonIconColor = isActive ? activeIconColor : iconColor;
  
  return (
    <Box className="relative flex items-center justify-center">
      {label && labelPosition === 'top' && (
        <Text className="absolute -top-10 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
          {label}
        </Text>
      )}
      
      <Pressable
        onPress={onPress}
        className="flex items-center justify-center"
      >
        <Box
          className={`rounded-full flex items-center justify-center ${buttonBgColor}`}
          style={{ width: size, height: size }}
        >
          <Icon as={icon} size={iconSize} color={buttonIconColor} />
        </Box>
      </Pressable>
      
      {label && labelPosition === 'bottom' && (
        <Text className="absolute -bottom-10 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
          {label}
        </Text>
      )}
      
      {children}
    </Box>
  );
};

export default CircleIconButton; 