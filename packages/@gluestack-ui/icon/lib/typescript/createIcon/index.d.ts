import React from 'react';
import { ColorValue, ViewProps } from 'react-native';
interface CreateIconOptions {
    /**
     * The icon `svg` viewBox
     * @default "0 0 24 24"
     */
    viewBox?: string;
    /**
     * The `svg` path or group element
     * @type React.ReactElement | React.ReactElement[]
     */
    path?: React.ReactElement | React.ReactElement[];
    /**
     * If the `svg` has a single path, simply copy the path's `d` attribute
     */
    d?: string;
    /**
     * The display name useful in the dev tools
     */
    displayName?: string;
    /**
     * Default props automatically passed to the component; overwritable
     */
    defaultProps?: any;
    type?: any;
}
export interface IIconProps extends ViewProps {
}
export type IIconComponentType<IconProps> = React.ForwardRefExoticComponent<IIconProps & IconProps>;
export declare function createIcon<IconProps>({ Root, path, d, ...initialProps }: {
    Root: React.ComponentType<IconProps>;
} & CreateIconOptions): IIconComponentType<IconProps | {
    fill?: ColorValue | undefined;
    stroke?: ColorValue | undefined;
}>;
export {};
//# sourceMappingURL=index.d.ts.map