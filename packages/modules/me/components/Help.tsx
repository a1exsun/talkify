"use client";
import React from "react";
import { Box } from "@app-launch-kit/components/primitives/box";
import { VStack } from "@app-launch-kit/components/primitives/vstack";
import { HStack } from "@app-launch-kit/components/primitives/hstack";
import { Text } from "@app-launch-kit/components/primitives/text";
import { Heading } from "@app-launch-kit/components/primitives/heading";
import { Icon } from "@app-launch-kit/components/primitives/icon";
import { ChevronLeftIcon } from "lucide-react-native";
import { Pressable } from "@app-launch-kit/components/primitives/pressable";
import { useRouter } from '@unitools/router';

export const Help = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Box className="flex-1 bg-background-0">
      <VStack className="w-full">
        <HStack className="w-full px-4 py-4 items-center">
          <Pressable onPress={handleBack}>
            <Icon as={ChevronLeftIcon} size="md" className="mr-2" />
          </Pressable>
          <Heading size="2xl" className="font-roboto flex-1">
            Help
          </Heading>
        </HStack>
        
        <VStack className="p-4" space="xl">
          <VStack className="border rounded-xl border-border-300 p-4" space="md">
            <Text size="lg" className="font-medium">
              About Us
            </Text>
            <Text className="text-typography-600">
              We are committed to providing the best learning experience for our users.
            </Text>
          </VStack>

          <VStack className="border rounded-xl border-border-300 p-4" space="md">
            <Text size="lg" className="font-medium">
              Contact Support
            </Text>
            <Text className="text-typography-600">
              Email: support@example.com
            </Text>
            <Text className="text-typography-600">
              Phone: +1 (123) 456-7890
            </Text>
          </VStack>

          <VStack className="border rounded-xl border-border-300 p-4" space="md">
            <Text size="lg" className="font-medium">
              FAQ
            </Text>
            <VStack space="sm">
              <Text className="font-medium">How do I reset my password?</Text>
              <Text className="text-typography-600">
                You can reset your password by clicking on the "Forgot Password" link on the login page.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Help;