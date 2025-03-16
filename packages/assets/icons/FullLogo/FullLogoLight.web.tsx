import * as React from 'react';
import Image from "@unitools/image";
import {Heading} from '@app-launch-kit/components/primitives/heading';
import {HStack} from '@app-launch-kit/components/primitives/hstack';
import {VStack} from "@app-launch-kit/components/primitives";

const FullLogoLight = (props: any) => (
    <VStack>
        <Image
            alt="full-logo"
            source={require("@app-launch-kit/assets/icons/Logo/IMG_1094.png")}
            style={{aspectRatio: 1, width: '100%', borderRadius: 8}} />
        <Heading size="2xl" className="justify-center items-center flex ml-2">
            Talkify
        </Heading>
    </VStack>
);
export default FullLogoLight;
