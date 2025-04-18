function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useContext } from 'react';
import { AccordionItemContext } from './Context';
import { useHover, usePress } from '@react-native-aria/interactions';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { Platform } from 'react-native';
export const AccordionTrigger = StyledAccordionTrigger => /*#__PURE__*/forwardRef(({
  children,
  isHovered: isHoveredProp,
  isFocused: isFocusedProp,
  isPressed: isPressedProp,
  isFocusVisible: isFocusVisibleProp,
  ...props
}, ref) => {
  const {
    titleText
  } = useContext(AccordionItemContext);
  const {
    isDisabled,
    buttonProps,
    isExpanded
  } = useContext(AccordionItemContext);
  const {
    pressProps,
    isPressed
  } = usePress({
    isDisabled: isDisabled
  });
  const {
    isHovered,
    hoverProps
  } = useHover();
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = useFocusRing();
  const {
    isFocused,
    focusProps
  } = useFocus();
  return /*#__PURE__*/React.createElement(StyledAccordionTrigger, _extends({
    accessible: true,
    "aria-label": Platform.OS === 'android' ? titleText : undefined,
    ref: ref
  }, props, buttonProps, {
    states: {
      disabled: isDisabled,
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      focusVisible: isFocusVisibleProp || isFocusVisible,
      active: isPressedProp || isPressed
    },
    dataSet: {
      disabled: isDisabled ? 'true' : 'false',
      hover: isHoveredProp || isHovered ? 'true' : 'false',
      focus: isFocusedProp || isFocused ? 'true' : 'false',
      focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
      active: isPressedProp || isPressed ? 'true' : 'false'
    },
    disabled: isDisabled,
    onPressIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressProps.onPressIn),
    onPressOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressProps.onPressOut),
    onPress: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPress, buttonProps.onPress)
    // @ts-ignore - web only
    ,
    onHoverIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut),
    onFocus: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus),
    onBlur: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)
  }), typeof children === 'function' ? children({
    hovered: isHovered,
    focused: isFocused,
    pressed: isPressed,
    disabled: isDisabled,
    focusVisible: isFocusVisible,
    isExpanded: isExpanded
  }) : children);
});
//# sourceMappingURL=AccordionTrigger.js.map