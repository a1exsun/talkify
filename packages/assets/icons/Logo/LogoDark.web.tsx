import * as React from 'react';
import Image from "@unitools/image";

const LogoDark = (props: any) => (
      <Image
          alt="full-logo"
          source={require("@app-launch-kit/assets/icons/Logo/IMG_1095.PNG")}
          style={{aspectRatio: 1, width: 48, borderRadius: 8}} />
);
export default LogoDark;
