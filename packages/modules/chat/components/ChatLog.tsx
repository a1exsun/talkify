'use client';
import { Button, ButtonText } from "@app-launch-kit/components/primitives/button";
import { useRouter } from '@unitools/router';
import { Text } from "@app-launch-kit/components/primitives/text";
import { VStack } from "@app-launch-kit/components/primitives/vstack";

const ChatLog = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-full max-w-md px-4">
                <VStack space="md" className="items-center w-full">
                    <Text>Chat Log</Text>
                    <Button onPress={() => { router.back() }} size="md" variant="solid" action="primary" className="w-full">
                        <ButtonText>Back</ButtonText>
                    </Button>
                    <Button onPress={() => { router.back() }} size="md" variant="solid" action="primary" className="w-full">
                        <ButtonText>CollectWord</ButtonText>
                    </Button>
                    <Button onPress={() => { router.push('/review') }} size="md" variant="solid" action="primary" className="w-full">
                        <ButtonText>Review</ButtonText>
                    </Button>
                    <Button onPress={() => { router.push('/video') }} size="md" variant="solid" action="primary" className="w-full">
                        <ButtonText>VideoHistory</ButtonText>
                    </Button>
                </VStack>
            </div>
        </div>
    );
};

export default ChatLog;
