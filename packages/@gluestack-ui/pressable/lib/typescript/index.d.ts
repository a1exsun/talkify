/// <reference types="react" />
export declare function createPressable<PressableProps>({ Root, }: {
    Root: React.ComponentType<PressableProps>;
}): import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<PressableProps & Omit<import("react-native/types").PressableProps, "children"> & {
    tabIndex?: 0 | -1 | undefined;
} & {
    children?: import("react").ReactNode | (({ hovered, pressed, focused, focusVisible, disabled, }: {
        hovered?: boolean | undefined;
        pressed?: boolean | undefined;
        focused?: boolean | undefined;
        focusVisible?: boolean | undefined;
        disabled?: boolean | undefined;
    }) => import("react").ReactNode);
}> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=index.d.ts.map