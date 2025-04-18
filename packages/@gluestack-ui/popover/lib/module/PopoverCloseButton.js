function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { usePress, useHover } from '@react-native-aria/interactions';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { usePopoverContent } from './PopoverContext';
const PopoverCloseButton = StyledPopoverCloseButton => /*#__PURE__*/forwardRef(({
  children,
  isDisabled,
  isHovered: isHoveredProp,
  isPressed: isPressedProp,
  isFocused: isFocusedProp,
  isFocusVisible: isFocusVisibleProp,
  ...props
}, ref) => {
  const {
    value
  } = usePopoverContent('PopoverContext');
  const {
    handleClose
  } = value;
  const {
    hoverProps,
    isHovered
  } = useHover();
  const {
    pressProps,
    isPressed
  } = usePress({
    isDisabled
  });
  const {
    focusProps,
    isFocused
  } = useFocus();
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = useFocusRing();
  const {
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = props;
  return /*#__PURE__*/React.createElement(StyledPopoverCloseButton, _extends({
    role: "button",
    states: {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible
    },
    dataSet: {
      hover: isHoveredProp || isHovered ? 'true' : 'false',
      focus: isFocusedProp || isFocused ? 'true' : 'false',
      active: isPressedProp || isPressed ? 'true' : 'false',
      disabled: isDisabled ? 'true' : 'false',
      focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false'
    },
    ref: ref,
    disabled: isDisabled,
    onPressIn: composeEventHandlers(onPressIn, pressProps.onPressIn),
    onPressOut: composeEventHandlers(onPressOut, pressProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: composeEventHandlers(onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: composeEventHandlers(onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: composeEventHandlers(composeEventHandlers(onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: composeEventHandlers(composeEventHandlers(onBlur, focusProps.onBlur), focusRingProps.onBlur),
    onPress: () => {
      handleClose();
    }
  }, resolvedProps), children);
});
export default PopoverCloseButton;
//# sourceMappingURL=PopoverCloseButton.js.map