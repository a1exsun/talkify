"use client";
import React from 'react';
import { Button, ButtonText } from '@app-launch-kit/components/primitives/button';
import { useRouter } from '@unitools/router';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Text } from "@app-launch-kit/components/primitives/text"

const Vocabulary = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <VStack space="md" className="items-center w-full">
          <Text>Vocabulary</Text>
          <Button onPress={() => {router.back()}} size="md" variant="solid" action="primary" className="w-full">
            <ButtonText>Back</ButtonText>
          </Button>
        </VStack>
      </div>
    </div>
  );
};

export default Vocabulary;