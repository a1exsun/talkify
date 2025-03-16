import { cssInterop } from 'nativewind';
import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import Image from "@unitools/image";

cssInterop(Svg, {
  className: {
    target: 'style',
    // @ts-ignore
    nativeStyleToProp: { width: true, height: true, fill: true },
  },
});

const FullLogoDark = (props: any) => (
    <Image
        alt="full-logo"
        source={require("@app-launch-kit/assets/icons/Logo/IMG_1094.png")}
        style={{aspectRatio: 1, width: '100%', borderRadius: 8}} />
);
export default FullLogoDark;
