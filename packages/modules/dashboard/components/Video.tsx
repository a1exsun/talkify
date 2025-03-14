'use client';
import { Button, ButtonIcon, ButtonText } from "@app-launch-kit/components/primitives/button";
import { EditIcon } from "@app-launch-kit/components/primitives/icon";
import { VStack } from "@app-launch-kit/components/primitives/vstack";
import { useRouter } from '@unitools/router';
import { Text } from "@app-launch-kit/components/primitives/text";

const Video = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-full max-w-md px-4">
                <VStack space="md" className="items-center w-full">
                    <Text>Video</Text>
                    <Button onPress={() => { router.back() }} size="md" variant="solid" action="primary" className="w-full">
                        <ButtonText>Back</ButtonText>
                    </Button>
                    <Button onPress={() => { router.push("/chat") }} size="md" variant="solid" action="primary" className="w-full">
                        <ButtonText>GoChat</ButtonText>
                    </Button>
                </VStack>
            </div>
        </div>
    );
};

export default Video;
