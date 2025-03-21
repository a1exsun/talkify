import React from 'react';
export interface InterfacePopoverProps {
    /**
     * If true, the popover will be opened by default.
     */
    defaultIsOpen?: boolean;
    /**
     * Whether the popover is opened. Useful for controlling the open state.
     */
    isOpen?: boolean;
    /**
     * Whether popover should trap focus.
     * @default true
     */
    trapFocus?: boolean;
    /**
     * Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.
     * @default true
     */
    shouldFlip?: boolean;
    /**
     * The ref of element to receive focus when the popover opens.
     */
    initialFocusRef?: React.RefObject<any>;
    /**
     * The ref of element to receive focus when the modal closes.
     */
    finalFocusRef?: React.RefObject<any>;
    /**
     * Function that returns a React Element. This element will be used as a Trigger for the popover.
     */
    trigger: (_props: any, state: {
        open: boolean;
    }) => JSX.Element;
    /**
     * The additional offset applied along the cross axis between the element and its trigger element.
     */
    crossOffset?: number;
    /**
     * The additional offset applied along the main axis between the element and its trigger element.
     */
    offset?: number;
    /**
     * Determines whether menu content should overlap with the trigger.
     * @default false
     */
    shouldOverlapWithTrigger?: boolean;
    /**
     * Popover children.
     */
    children: React.ReactNode;
    /**
     * If true, the modal will close when Escape key is pressed.
     * @default true
     */
    isKeyboardDismissable?: boolean;
    /**
     * Popover placement
     * @default bottom
     */
    placement?: 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right' | 'right' | 'right top' | 'right bottom' | 'left' | 'left top' | 'left bottom';
    /**
     * This function will be invoked when popover is closed. It'll also be called when user attempts to close the popover via Escape key or backdrop press.
     */
    onClose?: () => void;
    /**
     * This function will be invoked when popover is opened.
     */
    onOpen?: () => void;
    useRNModal?: boolean;
    focusScope?: boolean;
}
export type IPopoverComponentType<PopoverProps, ArrowProps, ContentProps, HeaderProps, FooterProps, BodyProps, BackdropProps, CloseButtonProps> = React.ForwardRefExoticComponent<IPopoverProps & React.PropsWithoutRef<PopoverProps> & React.RefAttributes<PopoverProps>> & {
    Body: React.ForwardRefExoticComponent<React.PropsWithoutRef<BodyProps> & React.RefAttributes<BodyProps>>;
    CloseButton: React.ForwardRefExoticComponent<React.PropsWithoutRef<CloseButtonProps> & React.RefAttributes<CloseButtonProps>>;
    Content: React.ForwardRefExoticComponent<React.PropsWithoutRef<ContentProps> & React.RefAttributes<ContentProps>>;
    Footer: React.ForwardRefExoticComponent<React.PropsWithoutRef<FooterProps> & React.RefAttributes<FooterProps>>;
    Header: React.ForwardRefExoticComponent<React.PropsWithoutRef<HeaderProps> & React.RefAttributes<HeaderProps>>;
    Arrow: React.ForwardRefExoticComponent<React.PropsWithoutRef<ArrowProps> & React.RefAttributes<ArrowProps>>;
    Backdrop: React.ForwardRefExoticComponent<React.PropsWithoutRef<BackdropProps> & React.RefAttributes<BackdropProps>>;
};
export type IPopoverProps = InterfacePopoverProps;
//# sourceMappingURL=types.d.ts.map