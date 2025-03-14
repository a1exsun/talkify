import { cssInterop } from 'nativewind';
import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import Image from "@unitools/image";

cssInterop(Svg, {
  className: {
    target: 'style',
    // @ts-ignore
    nativeStyleToProp: { width: true, height: true, fill: true },
  },
});

const FullLogoLight = (props: any) => (
  <Image
      alt="full-logo"
      source={require("@app-launch-kit/assets/icons/Logo/IMG_1095.PNG")}
      style={{aspectRatio: 1, width: '100%', borderRadius: 8}} />
);
export default FullLogoLight;
