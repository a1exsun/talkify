"use client";
import React, { useRef, useState } from "react";
import { Box } from "@app-launch-kit/components/primitives/box";
import { HStack } from "@app-launch-kit/components/primitives/hstack";
import {
  AlertCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  EditIcon,
  Icon,
  MenuIcon,
  PhoneIcon,
  SettingsIcon,
  CheckIcon,
} from "@app-launch-kit/components/primitives/icon";
import { Text } from "@app-launch-kit/components/primitives/text";
import { VStack } from "@app-launch-kit/components/primitives/vstack";
import { Pressable } from "@app-launch-kit/components/primitives/pressable";
import { AlertCircle, type LucideIcon, KeyIcon, ShieldIcon } from "lucide-react-native";
import { Button, ButtonIcon, ButtonText } from "@app-launch-kit/components/primitives/button";
import { Heading } from "@app-launch-kit/components/primitives/heading";
import Image from "@unitools/image";
import { ScrollView } from "@app-launch-kit/components/primitives/scroll-view";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@app-launch-kit/components/primitives/modal";
import { Input, InputField } from "@app-launch-kit/components/primitives/input";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@app-launch-kit/components/primitives/avatar";
import { useRouter } from '@unitools/router';
import { ProfileIcon } from "./assets/icons/profile";
import { SafeAreaView } from "@app-launch-kit/components/primitives/safe-area-view";
import { Center } from "@app-launch-kit/components/primitives/center";
import { cn } from "@gluestack-ui/nativewind-utils/cn";
import { Keyboard, Platform } from "react-native";
import { SubscriptionIcon } from "./assets/icons/subscription";
import { DownloadIcon } from "./assets/icons/download";
import { FaqIcon } from "./assets/icons/faq";
import { NewsBlogIcon } from "./assets/icons/news-blog";
import { HomeIcon } from "./assets/icons/home";
import { GlobeIcon } from "./assets/icons/globe";
import { InboxIcon } from "./assets/icons/inbox";
import { HeartIcon } from "./assets/icons/heart";
import { Divider } from "@app-launch-kit/components/primitives/divider";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@app-launch-kit/components/primitives/form-control";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@app-launch-kit/components/primitives/select";
import { CameraSparklesIcon } from "./assets/icons/camera-sparkles";
import { EditPhotoIcon } from "./assets/icons/edit-photo";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";
import config from "@app-launch-kit/config";
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
} from "@app-launch-kit/components/primitives/actionsheet";
import { useColorMode } from '@app-launch-kit/utils/contexts/ColorModeContext';

type MobileHeaderProps = {
  title: string;
};

type HeaderProps = {
  title: string;
  toggleSidebar: () => void;
};

type Icons = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
const SettingsList: Icons[] = [
  {
    iconName: ProfileIcon,
    iconText: "Profile",
  },
  {
    iconName: SettingsIcon,
    iconText: "Preferences",
  },
  {
    iconName: SubscriptionIcon,
    iconText: "Subscription",
  },
];
const ResourcesList: Icons[] = [
  {
    iconName: DownloadIcon,
    iconText: "Downloads",
  },
  {
    iconName: FaqIcon,
    iconText: "FAQs",
  },
  {
    iconName: NewsBlogIcon,
    iconText: "News & Blogs",
  },
];
type BottomTabs = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
const bottomTabsList: BottomTabs[] = [
  {
    iconName: HomeIcon,
    iconText: "Home",
  },

  {
    iconName: GlobeIcon,
    iconText: "Community",
  },
  {
    iconName: InboxIcon,
    iconText: "Inbox",
  },
  {
    iconName: HeartIcon,
    iconText: "Favourite",
  },
  {
    iconName: ProfileIcon,
    iconText: "Profile",
  },
];
interface UserStats {
  Study_Time: string;
  Study_TimeText: string;
  Conversations: string;
  ConversationsText: string;
  Favorites: string;
  FavoritesText: string;
  Mastered: string;
  MasteredText: string;
}
const userData: UserStats[] = [
  {
    Study_Time: "152H",
    Study_TimeText: "Study Time",
    Conversations: "6.72k",
    ConversationsText: "Conversations",
    Favorites: "1334",
    FavoritesText: "Favorites",
    Mastered: "217",
    MasteredText: "Mastered",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { routes } = config;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedIndexResources, setSelectedIndexResources] =
    useState<number>(0);
  const handlePress = (index: number) => {
    setSelectedIndex(index);
    // router.push("/profile/profile");
  };
  const handlePressResources = (index: number) => {
    setSelectedIndexResources(index);
    // router.push("/profile/profile");
  };
  return (
    <ScrollView className=" h-full" contentContainerStyle={{ flexGrow: 1 }}>
      <VStack
        className="h-full flex-1 w-[280px] py-4 pr-4 pl-8 items-center border-r border-border-300"
        space="xl"
      >
        <VStack className="w-full px-2 pt-3 pb-4" space="xs">
          <Text className="text-typography-600 px-4 py-2">SETTINGS</Text>
          {SettingsList.map((item, index) => {
            return (
              <Pressable
                onPress={() => handlePress(index)}
                key={index}
                className={`flex-row px-4 py-3 items-center gap-2 rounded
              ${
                index === selectedIndex
                  ? "bg-background-950 "
                  : "bg-background-0"
              }
              `}
              >
                <Icon
                  as={item.iconName}
                  className={`
              ${
                index === selectedIndex
                  ? "stroke-background-0 fill-background-800"
                  : "stroke-background-800 fill-none"
              }
              `}
                />
                <Text
                  className={`
              ${
                index === selectedIndex
                  ? "text-typography-0"
                  : "text-typography-700"
              }

              `}
                >
                  {item.iconText}
                </Text>
              </Pressable>
            );
          })}
        </VStack>
        <VStack className="w-full px-2 pt-3 pb-4" space="xs">
          <Text className="text-typography-600 px-4 py-2">RESOURCES</Text>
          {ResourcesList.map((item, index) => {
            return (
              <Pressable
                onPress={() => handlePressResources(index)}
                key={index}
                className={`flex-row px-4 py-3 items-center gap-2 rounded
              ${
                index === selectedIndexResources
                  ? "bg-background-950 "
                  : "bg-background-0"
              }
              `}
              >
                <Icon
                  as={item.iconName}
                  className={`
              ${
                index === selectedIndexResources
                  ? "stroke-background-0"
                  : "stroke-background-800"
              }
              
              h-10 w-10
              `}
                />
                <Text
                  className={`
              ${
                index === selectedIndexResources
                  ? "text-typography-0"
                  : "text-typography-700"
              }

              `}
                >
                  {item.iconText}
                </Text>
              </Pressable>
            );
          })}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

const DashboardLayout = (props: any) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    props.isSidebarVisible
  );
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <VStack className="h-full w-full bg-background-0">
      <Box className="md:hidden">
        <MobileHeader title={props.title} />
      </Box>
      <Box className="hidden md:flex">
        <WebHeader toggleSidebar={toggleSidebar} title={props.title} />
      </Box>
      <VStack className="h-full w-full">
        <HStack className="h-full w-full">
          <Box className="hidden md:flex h-full">
            {isSidebarVisible && <Sidebar />}
          </Box>
          <VStack className="w-full flex-1">{props.children}</VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};

function MobileFooter({ footerIcons }: { footerIcons: any }) {
  const router = useRouter();
  const { routes } = config;
  return (
    <HStack
      className={cn(
        "bg-background-0 justify-between w-full absolute left-0 bottom-0 right-0 p-3 overflow-hidden items-center  border-t-border-300  md:hidden border-t",
        { "pb-5": Platform.OS === "ios" },
        { "pb-5": Platform.OS === "android" }
      )}
    >
      {footerIcons.map(
        (
          item: { iconText: string; iconName: any },
          index: React.Key | null | undefined
        ) => {
          return (
            <Pressable
              className="px-0.5 flex-1 flex-col items-center"
              key={index}
              onPress={() => router.push(`${routes.signIn.path}`)}
            >
              <Icon
                as={item.iconName}
                size="md"
                className="h-[32px] w-[65px]"
              />
              <Text className="text-xs text-center text-typography-600">
                {item.iconText}
              </Text>
            </Pressable>
          );
        }
      )}
    </HStack>
  );
}

function WebHeader(props: HeaderProps) {
  return (
    <HStack className="pt-4 pr-10 pb-3 bg-background-0 items-center justify-between border-b border-border-300">
      <HStack className="items-center">
        <Pressable
          onPress={() => {
            props.toggleSidebar();
          }}
        >
          <Icon as={MenuIcon} size="lg" className="mx-5" />
        </Pressable>
        <Text className="text-2xl">{props.title}</Text>
      </HStack>

      <Avatar className="h-9 w-9">
        <AvatarFallbackText className="font-light">A</AvatarFallbackText>
      </Avatar>
    </HStack>
  );
}

function MobileHeader(props: MobileHeaderProps) {
  const router = useRouter();
  const { routes } = config;
  return (
    <HStack
      className="py-6 px-4 border-b border-border-300 bg-background-0 items-center justify-between"
      space="md"
    >
      <HStack className="items-center" space="sm">
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Icon as={ChevronLeftIcon} />
        </Pressable>
        <Text className="text-xl">{props.title}</Text>
      </HStack>
      <Icon as={HeartIcon} className="h-8 w-20" />
    </HStack>
  );
}
type userSchemaDetails = z.infer<typeof userSchema>;

// Define the Zod schema
const userSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  gender: z.enum(["male", "female", "other"]),
  phoneNumber: z
    .string()
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      "Phone number must be a valid international phone number"
    ),
  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City must be less than 100 characters"),
  state: z
    .string()
    .min(1, "State is required")
    .max(100, "State must be less than 100 characters"),
  country: z
    .string()
    .min(1, "Country is required")
    .max(100, "Country must be less than 100 characters"),
  zipcode: z
    .string()
    .min(1, "Zipcode is required")
    .max(20, "Zipcode must be less than 20 characters"),
});

interface AccountCardType {
  iconName: LucideIcon;
  subText: string;
  endIcon: LucideIcon;
  route: string;
}

interface OtherCardType {
  iconName: LucideIcon;
  subText: string;
  endIcon: LucideIcon;
  route: string;
}

const accountData: AccountCardType[] = [
  {
    iconName: InboxIcon as LucideIcon,
    subText: "Personal name",
    endIcon: ChevronRightIcon as LucideIcon,
    route: "",
  },
  {
    iconName: InboxIcon as LucideIcon,
    subText: "Edit-Profile",
    endIcon: ChevronRightIcon as LucideIcon,
    route: "",
  },
  {
    iconName: GlobeIcon as LucideIcon,
    subText: "Notifications",
    endIcon: ChevronRightIcon as LucideIcon,
    route: "",
  },
  {
    iconName: GlobeIcon as LucideIcon,
    subText: "Security",
    endIcon: ChevronRightIcon as LucideIcon,
    route: "",
  },
];
const MainContent = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  
  // Add states for the personal profile fields
  const [personalName, setPersonalName] = useState("John Doe");
  const [englishLevel, setEnglishLevel] = useState("Intermediate");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("+1 234 567 8900");
  const [password, setPassword] = useState("••••••••");
  const [sex, setSex] = useState("Male");
  const [age, setAge] = useState("28");
  const [ageError, setAgeError] = useState(""); // 添加年龄错误信息状态
  
  // Add states to track which fields are in edit mode
  const [editingPersonalName, setEditingPersonalName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPhoneNumber, setEditingPhoneNumber] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [editingAge, setEditingAge] = useState(false);
  
  // Add state for the English level actionsheet
  const [showEnglishLevelActionsheet, setShowEnglishLevelActionsheet] = useState(false);
  // Add state for the Sex actionsheet
  const [showSexActionsheet, setShowSexActionsheet] = useState(false);

  // State for SMS verification
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [tempPassword, setTempPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0); // 0-3: weak, medium, strong, very strong

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  // Validate password strength and return a score
  const checkPasswordStrength = (password: string): number => {
    let score = 0;
    
    // Length check
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    
    // Complexity checks
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    // Calculate final score (0-3)
    return Math.min(3, Math.floor(score / 2));
  };

  // Update password strength when password changes
  const handlePasswordChange = (text: string) => {
    setTempPassword(text);
    setPasswordStrength(checkPasswordStrength(text));
    setPasswordError("");
  };

  // Handle password edit request
  const handlePasswordEdit = () => {
    // Show verification modal instead of directly editing
    setTempPassword("");
    setVerificationCode("");
    setPasswordError("");
    setPasswordStrength(0);
    setShowVerification(true);
  };

  // Verify SMS code and allow password change
  const verifyCode = () => {
    setIsVerifying(true);
    
    // Simulate verification delay
    setTimeout(() => {
      setIsVerifying(false);
      // Simulate successful verification (in production, this would check against a real SMS code)
      if (verificationCode.length === 6) {
        setShowVerification(false);
        setEditingPassword(true);
      } else {
        // Show error for invalid code
        alert("Invalid verification code. Please try again.");
      }
    }, 1500);
  };

  // Save password after editing
  const savePassword = () => {
    // Check password requirements
    if (tempPassword.length < 8) {
      setPasswordError("密码长度必须至少为8个字符");
      return;
    }
    
    if (!/[A-Z]/.test(tempPassword)) {
      setPasswordError("密码必须包含至少一个大写字母");
      return;
    }
    
    if (!/[a-z]/.test(tempPassword)) {
      setPasswordError("密码必须包含至少一个小写字母");
      return;
    }
    
    if (!/[0-9]/.test(tempPassword)) {
      setPasswordError("密码必须包含至少一个数字");
      return;
    }
    
    if (!/[^A-Za-z0-9]/.test(tempPassword)) {
      setPasswordError("密码必须包含至少一个特殊字符");
      return;
    }
    
    if (passwordStrength < 2) {
      setPasswordError("密码强度不够，请创建更强的密码");
      return;
    }

    // All checks passed
    setPassword("••••••••"); // Always show dots for security
    setEditingPassword(false);
  };

  // English Level Field handler
  const handleEnglishLevelSelect = (value: string) => {
    setEnglishLevel(value);
    setShowEnglishLevelActionsheet(false);
  };

  // Sex Field handler
  const handleSexSelect = (value: string) => {
    setSex(value);
    setShowSexActionsheet(false);
  };

  // 添加年龄验证函数
  const validateAge = (value: string) => {
    // 检查输入是否为空
    if (!value.trim()) {
      setAgeError("年龄不能为空");
      return false;
    }
    
    // 检查输入是否为数字
    const ageNum = Number(value);
    if (isNaN(ageNum)) {
      setAgeError("请输入有效年龄");
      return false;
    }
    
    // 检查年龄是否在0到100之间
    if (ageNum < 0 || ageNum > 100) {
      setAgeError("请输入有效年龄");
      return false;
    }
    
    setAgeError("");
    return true;
  };
  
  // 处理年龄值变更
  const handleAgeChange = (text: string) => {
    // 只允许输入数字
    if (text === '' || /^\d+$/.test(text)) {
      setAge(text);
      setAgeError("");
    }
  };
  
  // 处理年龄保存
  const saveAge = () => {
    if (validateAge(age)) {
      setEditingAge(false);
    }
  };

  const { colorMode } = useColorMode();

  return (
    <>
      <Box className="flex-1 bg-background-0">
        <VStack className="">
          <ModalComponent showModal={showModal} setShowModal={setShowModal} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: isWeb ? 0 : 160,
              flexGrow: 1,
            }}
          >
            <VStack className="h-full w-full pb-8" space="2xl">
              <Box className="relative w-full md:h-[478px] h-[380px]">
                <Image
                  source={require("@app-launch-kit/assets/images/profile-screens/profile/image2.png")}
                  height={"100%"}
                  width={"100%"}
                  alt="Banner Image"
                  contentFit="cover"
                />
                <Box className={`absolute inset-0 ${colorMode === 'light' ? 'hidden' : 'bg-typography-0/70'}`} />
              </Box>
              <HStack className="absolute pt-6 px-10 hidden md:flex">
                <Text className="text-typography-900 font-roboto">
                  home &gt; {` `}
                </Text>
                <Text className="font-semibold text-typography-900 ">profile</Text>
              </HStack>
              <Center className="absolute md:mt-14 mt-6 w-full md:px-10 md:pt-6 pb-4">
                <VStack space="lg" className="items-center">
                  <Avatar size="2xl" className="bg-primary-600">
                    <Image
                      source={require("@app-launch-kit/assets/images/profile-screens/profile/image.png")}
                      height={"100%"}
                      width={"100%"}
                      alt="Avatar Image"
                      contentFit="cover"
                      style={{ borderRadius: "100%" }}
                    />
                    <AvatarBadge />
                  </Avatar>
                  <VStack className="gap-1 w-full items-center">
                    <Text size="2xl" className="font-roboto text-typography-900">
                      Alexander Leslie
                    </Text>
                  </VStack>
                  <>
                    {userData.map((item, index) => {
                      return (
                        <HStack className="items-center gap-1" key={index}>
                          <VStack className="py-3 px-4 items-center" space="xs">
                            <Text className="text-typography-900 font-roboto font-semibold justify-center items-center">
                              {item.Study_Time}
                            </Text>
                            <Text className="text-typography-900 text-xs font-roboto">
                              {item.Study_TimeText}
                            </Text>
                          </VStack>
                          <Divider orientation="vertical" className="h-10" />
                          <VStack className="py-3 px-4 items-center" space="xs">
                            <Text className="text-typography-900 font-roboto font-semibold">
                              {item.Conversations}
                            </Text>
                            <Text className="text-typography-900 text-xs font-roboto">
                              {item.ConversationsText}
                            </Text>
                          </VStack>
                          <Divider orientation="vertical" className="h-10" />
                          <VStack className="py-3 px-4 items-center" space="xs">
                            <Text className="text-typography-900 font-roboto font-semibold">
                              {item.Favorites}
                            </Text>
                            <Text className="text-typography-900 text-xs font-roboto">
                              {item.FavoritesText}
                            </Text>
                          </VStack>
                          <Divider orientation="vertical" className="h-10" />
                          <VStack className="py-3 px-4 items-center" space="xs">
                            <Text className="text-typography-900 font-roboto font-semibold">
                              {item.Mastered}
                            </Text>
                            <Text className="text-typography-900 text-xs font-roboto">
                              {item.MasteredText}
                            </Text>
                          </VStack>
                        </HStack>
                      );
                    })}
                  </>
              
                </VStack>
              </Center>
              <VStack className="mx-6" space="2xl">
                <HStack
                  className="py-5 px-6 border rounded-xl border-border-300 justify-between items-center"
                  space="2xl"
                >
                  <HStack space="2xl" className="items-center">
                    <Box className="md:h-20 md:w-20 h-10 w-10">
                      <Image
                        source={require("@app-launch-kit/assets/images/profile-screens/profile/image1.png")}
                        height={"100%"}
                        width={"100%"}
                        alt="Promo Image"
                      />
                    </Box>
                    <VStack>
                      <Text className="text-typography-900 text-lg" size="lg">
                        Invite & get rewards
                      </Text>
                      <Text className="font-roboto text-sm md:text-[16px]">
                        Your code r45dAsdeK8
                      </Text>
                    </VStack>
                  </HStack>
                  <Button className="p-0 md:py-2 md:px-4 bg-background-0 active:bg-background-0 md:bg-background-900 ">
                    <ButtonText className="md:text-typography-0 text-typography-800 text-sm">
                      Invite
                    </ButtonText>
                  </Button>
                </HStack>
                <Heading className="font-roboto" size="lg">
                  Personal Profile
                </Heading>
                <VStack className="py-2 px-4 border rounded-xl border-border-300 justify-between items-center">
                  {/* Personal Name Field */}
                  <HStack 
                    space="2xl" 
                    className="justify-between items-center w-full flex-1 py-3 px-2"
                  >
                    <HStack className="items-center" space="md">
                      <Icon as={InboxIcon} />
                      <Text size="lg">Personal Name</Text>
                    </HStack>
                    <HStack space="md">
                      {editingPersonalName ? (
                        <>
                          <Input className="w-32 md:w-48">
                            <InputField
                              value={personalName}
                              onChangeText={setPersonalName}
                            />
                          </Input>
                          <Pressable
                            className="p-2"
                            onPress={() => setEditingPersonalName(false)}
                          >
                            <Icon as={CheckIcon} className="h-5 w-5 text-primary-600" />
                          </Pressable>
                        </>
                      ) : (
                        <>
                          <Text>{personalName}</Text>
                          <Pressable onPress={() => setEditingPersonalName(true)}>
                            <Icon as={EditIcon} />
                          </Pressable>
                        </>
                      )}
                    </HStack>
                  </HStack>
                  <Divider className="my-1" />
                  
                  {/* English Level */}
                  <HStack 
                    space="2xl" 
                    className="justify-between items-center w-full flex-1 py-3 px-2"
                  >
                    <HStack className="items-center" space="md">
                      <Icon as={InboxIcon} />
                      <Text size="lg">English Level</Text>
                    </HStack>
                    <HStack space="md">
                      <Text>{englishLevel}</Text>
                      <Pressable onPress={() => setShowEnglishLevelActionsheet(true)}>
                        <Icon as={ChevronDownIcon} />
                      </Pressable>
                    </HStack>
                  </HStack>
                  <Divider className="my-1" />
                  
                  {/* Sex */}
                  <HStack 
                    space="2xl" 
                    className="justify-between items-center w-full flex-1 py-3 px-2"
                  >
                    <HStack className="items-center" space="md">
                      <Icon as={InboxIcon} />
                      <Text size="lg">Sex</Text>
                    </HStack>
                    <HStack space="md">
                      <Text>{sex}</Text>
                      <Pressable onPress={() => setShowSexActionsheet(true)}>
                        <Icon as={ChevronDownIcon} />
                      </Pressable>
                    </HStack>
                  </HStack>
                  <Divider className="my-1" />
                  
                  {/* Age */}
                  <HStack 
                    space="2xl" 
                    className="justify-between items-center w-full flex-1 py-3 px-2"
                  >
                    <HStack className="items-center" space="md">
                      <Icon as={InboxIcon} />
                      <Text size="lg">Age</Text>
                    </HStack>
                    <HStack space="md">
                      {editingAge ? (
                        <>
                          <FormControl isInvalid={!!ageError} className="w-32 md:w-48">
                            <Input>
                              <InputField
                                value={age}
                                onChangeText={handleAgeChange}
                                keyboardType="number-pad"
                                placeholder="0-100"
                              />
                            </Input>
                            {ageError && (
                              <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon} />
                                <FormControlErrorText>
                                  {ageError}
                                </FormControlErrorText>
                              </FormControlError>
                            )}
                          </FormControl>
                          <Pressable
                            className="p-2"
                            onPress={saveAge}
                          >
                            <Icon as={CheckIcon} className="h-5 w-5 text-primary-600" />
                          </Pressable>
                        </>
                      ) : (
                        <>
                          <Text>{age}</Text>
                          <Pressable onPress={() => setEditingAge(true)}>
                            <Icon as={EditIcon} />
                          </Pressable>
                        </>
                      )}
                    </HStack>
                  </HStack>
                </VStack>
                
                <Heading className="font-roboto" size="lg">
                  Security
                </Heading>
                <VStack className="py-2 px-4 border rounded-xl border-border-300 justify-between items-center">
                  {/* Email */}
                  <HStack 
                    space="2xl" 
                    className="justify-between items-center w-full flex-1 py-3 px-2"
                  >
                    <HStack className="items-center" space="md">
                      <Icon as={GlobeIcon} />
                      <Text size="lg">Email</Text>
                    </HStack>
                    <HStack space="md">
                      {editingEmail ? (
                        <>
                          <Input className="w-32 md:w-48">
                            <InputField
                              value={email}
                              onChangeText={setEmail}
                            />
                          </Input>
                          <Pressable
                            className="p-2"
                            onPress={() => setEditingEmail(false)}
                          >
                            <Icon as={CheckIcon} className="h-5 w-5 text-primary-600" />
                          </Pressable>
                        </>
                      ) : (
                        <>
                          <Text>{email}</Text>
                          <Pressable onPress={() => setEditingEmail(true)}>
                            <Icon as={EditIcon} />
                          </Pressable>
                        </>
                      )}
                    </HStack>
                  </HStack>
                  <Divider className="my-1" />
                  
                  {/* Phone Number Field */}
                  <HStack 
                    space="2xl" 
                    className="justify-between items-center w-full flex-1 py-3 px-2"
                  >
                    <HStack className="items-center" space="md">
                      <Icon as={GlobeIcon} />
                      <Text size="lg">Phone Number</Text>
                    </HStack>
                    <HStack space="md">
                      {editingPhoneNumber ? (
                        <>
                          <Input className="w-32 md:w-48">
                            <InputField
                              value={phoneNumber}
                              onChangeText={setPhoneNumber}
                            />
                          </Input>
                          <Pressable
                            className="p-2"
                            onPress={() => setEditingPhoneNumber(false)}
                          >
                            <Icon as={CheckIcon} className="h-5 w-5 text-primary-600" />
                          </Pressable>
                        </>
                      ) : (
                        <>
                          <Text>{phoneNumber}</Text>
                          <Pressable onPress={() => setEditingPhoneNumber(true)}>
                            <Icon as={EditIcon} />
                          </Pressable>
                        </>
                      )}
                    </HStack>
                  </HStack>
                  <Divider className="my-1" />
                  
                  {/* Password Field */}
                  <HStack 
                    space="2xl" 
                    className="justify-between items-center w-full flex-1 py-3 px-2"
                  >
                    <HStack className="items-center" space="md">
                      <Icon as={KeyIcon} />
                      <Text size="lg">Password</Text>
                    </HStack>
                    <HStack space="md">
                      {editingPassword ? (
                        <>
                          <VStack className="w-32 md:w-48">
                            <Input>
                              <InputField
                                value={tempPassword}
                                onChangeText={handlePasswordChange}
                                secureTextEntry
                                placeholder="New password"
                              />
                            </Input>
                            {passwordError ? (
                              <Text className="text-xs text-red-500 mt-1">{passwordError}</Text>
                            ) : tempPassword.length > 0 ? (
                              <HStack className="mt-1 space-x-1">
                                <Box 
                                  className={`h-1 flex-1 rounded-full ${
                                    passwordStrength >= 1 ? "bg-red-500" : "bg-gray-200"
                                  }`}
                                />
                                <Box 
                                  className={`h-1 flex-1 rounded-full ${
                                    passwordStrength >= 2 ? "bg-yellow-500" : "bg-gray-200"
                                  }`}
                                />
                                <Box 
                                  className={`h-1 flex-1 rounded-full ${
                                    passwordStrength >= 3 ? "bg-green-500" : "bg-gray-200"
                                  }`}
                                />
                                <Text className="text-xs ml-1">
                                  {passwordStrength === 0 && "弱"}
                                  {passwordStrength === 1 && "中"}
                                  {passwordStrength === 2 && "强"}
                                  {passwordStrength === 3 && "非常强"}
                                </Text>
                              </HStack>
                            ) : null}
                          </VStack>
                          <Pressable
                            className="p-2"
                            onPress={savePassword}
                          >
                            <Icon as={CheckIcon} className="h-5 w-5 text-primary-600" />
                          </Pressable>
                        </>
                      ) : (
                        <>
                          <Text>{password}</Text>
                          <Pressable onPress={handlePasswordEdit}>
                            <Icon as={EditIcon} />
                          </Pressable>
                        </>
                      )}
                    </HStack>
                  </HStack>
                </VStack>
              </VStack>
              <Heading className="font-roboto mx-6" size="lg">
                Others
              </Heading>
              <VStack className="py-2 px-4 mx-6 border rounded-xl border-border-300 justify-between items-center">
                <Pressable onPress={() => router.push('/settings')} className="w-full">
                  <HStack space="2xl" className="justify-between items-center w-full flex-1 py-3 px-2">
                    <HStack className="items-center" space="md">
                      <Icon as={SettingsIcon} />
                      <Text size="lg">Settings</Text>
                    </HStack>
                    <Icon as={ChevronRightIcon} />
                  </HStack>
                </Pressable>
                <Divider className="my-1" />
                <Pressable onPress={() => {/* handle logout */}} className="w-full">
                  <HStack space="2xl" className="justify-between items-center w-full flex-1 py-3 px-2">
                    <HStack className="items-center" space="md">
                      <Icon as={MenuIcon} />
                      <Text size="lg">Logout</Text>
                    </HStack>
                    <Icon as={ChevronRightIcon} />
                  </HStack>
                </Pressable>
              </VStack>

            </VStack>
          </ScrollView>
        </VStack>
      </Box>
      
      {/* Sex Actionsheet */}
      <Actionsheet 
        isOpen={showSexActionsheet} 
        onClose={() => setShowSexActionsheet(false)}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <HStack className="w-full p-4 justify-between">
            <Text size="lg" className="font-semibold">选择性别</Text>
            <Pressable onPress={() => setShowSexActionsheet(false)}>
              <Icon as={CloseIcon} />
            </Pressable>
          </HStack>
          <ActionsheetItem onPress={() => handleSexSelect("Male")}>
            <ActionsheetItemText>Male</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => handleSexSelect("Female")}>
            <ActionsheetItemText>Female</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => handleSexSelect("Other")}>
            <ActionsheetItemText>Other</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
      
      {/* English Level Actionsheet */}
      <Actionsheet 
        isOpen={showEnglishLevelActionsheet} 
        onClose={() => setShowEnglishLevelActionsheet(false)}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <HStack className="w-full p-4 justify-between">
            <Text size="lg" className="font-semibold">选择英语水平</Text>
            <Pressable onPress={() => setShowEnglishLevelActionsheet(false)}>
              <Icon as={CloseIcon} />
            </Pressable>
          </HStack>
          <ActionsheetItem onPress={() => handleEnglishLevelSelect("Beginner")}>
            <ActionsheetItemText>Beginner</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => handleEnglishLevelSelect("Intermediate")}>
            <ActionsheetItemText>Intermediate</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => handleEnglishLevelSelect("Advanced")}>
            <ActionsheetItemText>Advanced</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={() => handleEnglishLevelSelect("Proficient")}>
            <ActionsheetItemText>Proficient</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
      
      {/* SMS Verification Modal */}
      <Modal isOpen={showVerification} onClose={() => setShowVerification(false)}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">安全验证</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody className="p-6">
            <VStack space="md">
              <Text>
                为了保障您的账户安全，我们已向您的手机号码 {phoneNumber} 发送了一条验证短信
              </Text>
              <Input className="mt-4">
                <InputField
                  placeholder="请输入6位验证码"
                  value={verificationCode}
                  onChangeText={setVerificationCode}
                  keyboardType="number-pad"
                  maxLength={6}
                />
              </Input>
              <Button 
                className="mt-4" 
                onPress={verifyCode}
                disabled={verificationCode.length !== 6 || isVerifying}
              >
                <ButtonText>{isVerifying ? "验证中..." : "验证"}</ButtonText>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
const MobileScreen = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<userSchemaDetails>({
    resolver: zodResolver(userSchema),
  });

  const handleKeyPress = () => {
    Keyboard.dismiss();
  };
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const onSubmit = (_data: userSchemaDetails) => {
    reset();
  };

  return (
    <VStack className="md:hidden mb-5">
      <Box className="w-full h-[188px]">
        <Image
          source={require("@app-launch-kit/assets/images/profile-screens/profile/image2.png")}
          height={"100%"}
          width={"100%"}
          alt="Banner Image"
        />
      </Box>
      <Pressable className="absolute bg-background-950 rounded-full items-center justify-center h-8 w-8 right-6 top-[172px]">
        <Icon as={CameraSparklesIcon} />
      </Pressable>
      <Center className="w-full absolute top-10">
        <Avatar size="2xl">
          <Image
            source={require("@app-launch-kit/assets/images/profile-screens/profile/image.png")}
            height={"100%"}
            width={"100%"}
            alt="Avatar Image"
            contentFit="cover"
            style={{ borderRadius: "100%" }}
          />
          <AvatarBadge className="justify-center items-center bg-background-950">
            <Icon as={EditPhotoIcon} />
          </AvatarBadge>
        </Avatar>
      </Center>
      <VStack space="lg" className="mx-4 mt-4">
        <Heading className="font-roboto" size="sm">
          General Information
        </Heading>
        <VStack space="md">
          <FormControl isInvalid={!!errors.firstName || isNameFocused}>
            <FormControlLabel className="mb-2">
              <FormControlLabelText>First Name</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="firstName"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await userSchema.parseAsync({
                      firstName: value,
                    });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="First Name"
                    type="text"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} size="md" />
              <FormControlErrorText>
                {errors?.firstName?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.lastName || isNameFocused}>
            <FormControlLabel className="mb-2">
              <FormControlLabelText>Last Name</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="lastName"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await userSchema.parseAsync({
                      lastName: value,
                    });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="Last Name"
                    type="text"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} size="md" />
              <FormControlErrorText>
                {errors?.lastName?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.gender}>
            <FormControlLabel className="mb-2">
              <FormControlLabelText>Gender</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="gender"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await userSchema.parseAsync({ city: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Select onValueChange={onChange} selectedValue={value}>
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Select" />
                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Male" value="male" />
                      <SelectItem label="Female" value="female" />
                      <SelectItem label="Others" value="others" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.gender?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.phoneNumber}>
            <FormControlLabel className="mb-2">
              <FormControlLabelText>Phone number</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await userSchema.parseAsync({ phoneNumber: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <HStack className="gap-1">
                  <Select className="w-[28%]">
                    <SelectTrigger variant="outline" size="md">
                      <SelectInput placeholder="+91" />
                      <SelectIcon className="mr-1" as={ChevronDownIcon} />
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent>
                        <SelectDragIndicatorWrapper>
                          <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <SelectItem label="93" value="93" />
                        <SelectItem label="155" value="155" />
                        <SelectItem label="1-684" value="-1684" />
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                  <Input className="flex-1">
                    <InputField
                      placeholder="89867292632"
                      type="text"
                      value={value}
                      onChangeText={onChange}
                      keyboardType="number-pad"
                      onBlur={onBlur}
                      onSubmitEditing={handleKeyPress}
                      returnKeyType="done"
                    />
                  </Input>
                </HStack>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.phoneNumber?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </VStack>
        <Heading className="font-roboto" size="sm">
          Address
        </Heading>
        <VStack space="md">
          <FormControl
            isInvalid={(!!errors.city || isEmailFocused) && !!errors.city}
          >
            <FormControlLabel className="mb-2">
              <FormControlLabelText>City</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="city"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await userSchema.parseAsync({ city: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Select onValueChange={onChange} selectedValue={value}>
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Select" />
                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Bengaluru" value="Bengaluru" />
                      <SelectItem label="Udupi" value="Udupi" />
                      <SelectItem label="Others" value="Others" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.city?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            isInvalid={(!!errors.state || isEmailFocused) && !!errors.state}
          >
            <FormControlLabel className="mb-2">
              <FormControlLabelText>State</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="state"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await userSchema.parseAsync({ state: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Select onValueChange={onChange} selectedValue={value}>
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Select" />
                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Karnataka" value="Karnataka" />
                      <SelectItem label="Haryana" value="Haryana" />
                      <SelectItem label="Others" value="Others" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.state?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            isInvalid={(!!errors.country || isEmailFocused) && !!errors.country}
          >
            <FormControlLabel className="mb-2">
              <FormControlLabelText>Country</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="country"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await userSchema.parseAsync({ country: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Select onValueChange={onChange} selectedValue={value}>
                  <SelectTrigger variant="outline" size="md">
                    <SelectInput placeholder="Select" />
                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="India" value="India" />
                      <SelectItem label="Sri Lanka" value="Sri Lanka" />
                      <SelectItem label="Others" value="Others" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.country?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.zipcode || isEmailFocused}>
            <FormControlLabel className="mb-2">
              <FormControlLabelText>Zipcode</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="zipcode"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await userSchema.parseAsync({
                      zipCode: value,
                    });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
                  <InputField
                    placeholder="Enter 6 - digit zip code"
                    type="text"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.zipcode?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </VStack>
        <Button
          onPress={() => {
            handleSubmit(onSubmit)();
          }}
          className="flex-1 p-2"
        >
          <ButtonText>Save Changes</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};
const ModalComponent = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: any;
}) => {
  const ref = useRef(null);
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<userSchemaDetails>({
    resolver: zodResolver(userSchema),
  });

  const handleKeyPress = () => {
    Keyboard.dismiss();
  };
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const onSubmit = (_data: userSchemaDetails) => {
    setShowModal(false);
    reset();
  };

  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
      finalFocusRef={ref}
      size="lg"
    >
      <ModalBackdrop />
      <ModalContent>
        <Box className={"w-full h-[215px] "}>
          <Image
            source={require("@app-launch-kit/assets/images/profile-screens/profile/image2.png")}
            height={"100%"}
            width={"100%"}
            alt="Banner Image"
          />
        </Box>
        <Pressable className="absolute bg-background-500 rounded-full items-center justify-center h-8 w-8 right-6 top-44">
          <Icon as={CameraSparklesIcon} />
        </Pressable>
        <ModalHeader className="absolute w-full">
          <Heading size="2xl" className="text-typography-800 pt-4 pl-4">
            Edit Profile
          </Heading>
          <ModalCloseButton>
            <Icon
              as={CloseIcon}
              size="md"
              className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
            />
          </ModalCloseButton>
        </ModalHeader>
        <Center className="w-full absolute top-16">
          <Avatar size="2xl">
            <Image
              source={require("@app-launch-kit/assets/images/profile-screens/profile/image.png")}
              height={"100%"}
              width={"100%"}
              alt="Avatar Image"
              contentFit="cover"
              style={{ borderRadius: "100%" }}
            />
            <AvatarBadge className="justify-center items-center bg-background-500">
              <Icon as={EditPhotoIcon} />
            </AvatarBadge>
          </Avatar>
        </Center>
        <ModalBody className="px-10 py-6">
          <VStack space="2xl">
            <HStack className="items-center justify-between">
              <FormControl
                isInvalid={!!errors.firstName || isNameFocused}
                className="w-[47%]"
              >
                <FormControlLabel className="mb-2">
                  <FormControlLabelText>First Name</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{
                    validate: async (value) => {
                      try {
                        await userSchema.parseAsync({
                          firstName: value,
                        });
                        return true;
                      } catch (error: any) {
                        return error.message;
                      }
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        placeholder="First Name"
                        type="text"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} size="md" />
                  <FormControlErrorText>
                    {errors?.firstName?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
              <FormControl
                isInvalid={!!errors.lastName || isNameFocused}
                className="w-[47%]"
              >
                <FormControlLabel className="mb-2">
                  <FormControlLabelText>Last Name</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{
                    validate: async (value) => {
                      try {
                        await userSchema.parseAsync({
                          lastName: value,
                        });
                        return true;
                      } catch (error: any) {
                        return error.message;
                      }
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        placeholder="Last Name"
                        type="text"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} size="md" />
                  <FormControlErrorText>
                    {errors?.lastName?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </HStack>
            <HStack className="items-center justify-between">
              <FormControl className="w-[47%]" isInvalid={!!errors.gender}>
                <FormControlLabel className="mb-2">
                  <FormControlLabelText>Gender</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="gender"
                  control={control}
                  rules={{
                    validate: async (value) => {
                      try {
                        await userSchema.parseAsync({ city: value });
                        return true;
                      } catch (error: any) {
                        return error.message;
                      }
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Select onValueChange={onChange} selectedValue={value}>
                      <SelectTrigger variant="outline" size="md">
                        <SelectInput placeholder="Select" />
                        <SelectIcon className="mr-3" as={ChevronDownIcon} />
                      </SelectTrigger>
                      <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                          <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                          </SelectDragIndicatorWrapper>
                          <SelectItem label="Male" value="male" />
                          <SelectItem label="Female" value="female" />
                          <SelectItem label="Others" value="others" />
                        </SelectContent>
                      </SelectPortal>
                    </Select>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircle} size="md" />
                  <FormControlErrorText>
                    {errors?.gender?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>

              <FormControl className="w-[47%]" isInvalid={!!errors.phoneNumber}>
                <FormControlLabel className="mb-2">
                  <FormControlLabelText>Phone number</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    validate: async (value) => {
                      try {
                        await userSchema.parseAsync({ phoneNumber: value });
                        return true;
                      } catch (error: any) {
                        return error.message;
                      }
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <HStack className="gap-1">
                      <Select className="w-[28%]">
                        <SelectTrigger variant="outline" size="md">
                          <SelectInput placeholder="+91" />
                          <SelectIcon className="mr-1" as={ChevronDownIcon} />
                        </SelectTrigger>
                        <SelectPortal>
                          <SelectBackdrop />
                          <SelectContent>
                            <SelectDragIndicatorWrapper>
                              <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="93" value="93" />
                            <SelectItem label="155" value="155" />
                            <SelectItem label="1-684" value="-1684" />
                          </SelectContent>
                        </SelectPortal>
                      </Select>
                      <Input className="flex-1">
                        <InputField
                          placeholder="89867292632"
                          type="text"
                          value={value}
                          onChangeText={onChange}
                          keyboardType="number-pad"
                          onBlur={onBlur}
                          onSubmitEditing={handleKeyPress}
                          returnKeyType="done"
                        />
                      </Input>
                    </HStack>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircle} size="md" />
                  <FormControlErrorText>
                    {errors?.phoneNumber?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </HStack>
            <HStack className="items-center justify-between">
              <FormControl
                className="w-[47%]"
                isInvalid={(!!errors.city || isEmailFocused) && !!errors.city}
              >
                <FormControlLabel className="mb-2">
                  <FormControlLabelText>City</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="city"
                  control={control}
                  rules={{
                    validate: async (value) => {
                      try {
                        await userSchema.parseAsync({ city: value });
                        return true;
                      } catch (error: any) {
                        return error.message;
                      }
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select onValueChange={onChange} selectedValue={value}>
                      <SelectTrigger variant="outline" size="md">
                        <SelectInput placeholder="Select" />
                        <SelectIcon className="mr-3" as={ChevronDownIcon} />
                      </SelectTrigger>
                      <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                          <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                          </SelectDragIndicatorWrapper>
                          <SelectItem label="Bengaluru" value="Bengaluru" />
                          <SelectItem label="Udupi" value="Udupi" />
                          <SelectItem label="Others" value="Others" />
                        </SelectContent>
                      </SelectPortal>
                    </Select>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircle} size="md" />
                  <FormControlErrorText>
                    {errors?.city?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>

              <FormControl
                className="w-[47%]"
                isInvalid={(!!errors.state || isEmailFocused) && !!errors.state}
              >
                <FormControlLabel className="mb-2">
                  <FormControlLabelText>State</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="state"
                  control={control}
                  rules={{
                    validate: async (value) => {
                      try {
                        await userSchema.parseAsync({ state: value });
                        return true;
                      } catch (error: any) {
                        return error.message;
                      }
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select onValueChange={onChange} selectedValue={value}>
                      <SelectTrigger variant="outline" size="md">
                        <SelectInput placeholder="Select" />
                        <SelectIcon className="mr-3" as={ChevronDownIcon} />
                      </SelectTrigger>
                      <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                          <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                          </SelectDragIndicatorWrapper>
                          <SelectItem label="Karnataka" value="Karnataka" />
                          <SelectItem label="Haryana" value="Haryana" />
                          <SelectItem label="Others" value="Others" />
                        </SelectContent>
                      </SelectPortal>
                    </Select>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircle} size="md" />
                  <FormControlErrorText>
                    {errors?.state?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </HStack>
            <HStack className="items-center justify-between">
              <FormControl
                className="w-[47%]"
                isInvalid={
                  (!!errors.country || isEmailFocused) && !!errors.country
                }
              >
                <FormControlLabel className="mb-2">
                  <FormControlLabelText>Country</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="country"
                  control={control}
                  rules={{
                    validate: async (value) => {
                      try {
                        await userSchema.parseAsync({ country: value });
                        return true;
                      } catch (error: any) {
                        return error.message;
                      }
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Select onValueChange={onChange} selectedValue={value}>
                      <SelectTrigger variant="outline" size="md">
                        <SelectInput placeholder="Select" />
                        <SelectIcon className="mr-3" as={ChevronDownIcon} />
                      </SelectTrigger>
                      <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                          <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                          </SelectDragIndicatorWrapper>
                          <SelectItem label="India" value="India" />
                          <SelectItem label="Sri Lanka" value="Sri Lanka" />
                          <SelectItem label="Others" value="Others" />
                        </SelectContent>
                      </SelectPortal>
                    </Select>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircle} size="md" />
                  <FormControlErrorText>
                    {errors?.country?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
              <FormControl
                className="w-[47%]"
                isInvalid={!!errors.zipcode || isEmailFocused}
              >
                <FormControlLabel className="mb-2">
                  <FormControlLabelText>Zipcode</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="zipcode"
                  control={control}
                  rules={{
                    validate: async (value) => {
                      try {
                        await userSchema.parseAsync({
                          zipCode: value,
                        });
                        return true;
                      } catch (error: any) {
                        return error.message;
                      }
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        placeholder="Enter 6 - digit zip code"
                        type="text"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircle} size="md" />
                  <FormControlErrorText>
                    {errors?.zipcode?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </HStack>
            <Button
              onPress={() => {
                handleSubmit(onSubmit)();
              }}
              className="flex-1 p-2"
            >
              <ButtonText>Save Changes</ButtonText>
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export const Me = () => {
  return (
        <MainContent />
  );
};

export default Me;