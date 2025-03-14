import * as React from 'react';
import Image from "@unitools/image";

const LogoLight = (props: any) => (
    <Image
        alt="full-logo"
        source={require("@app-launch-kit/assets/icons/Logo/IMG_1094.PNG")}
        style={{aspectRatio: 1, width: 48, borderRadius: 8}} />
);
export default LogoLight;
