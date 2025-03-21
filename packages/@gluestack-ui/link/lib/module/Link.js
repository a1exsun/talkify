function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useMemo } from 'react';
import { useLink } from './useLink';
import { mergeRefs } from '@gluestack-ui/utils';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { useHover, usePress } from '@react-native-aria/interactions';
import { LinkContext } from './Context';
export const Link = StyledLink => /*#__PURE__*/forwardRef(({
  children,
  isDisabled,
  isHovered: isHoveredProp,
  isPressed: isPressedProp,
  isFocused: isFocusedProp,
  isFocusVisible: isFocusVisibleProp,
  isExternal,
  href,
  onPress,
  ...props
}, ref) => {
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = useFocusRing();
  const {
    pressProps,
    isPressed
  } = usePress({
    isDisabled
  });
  const {
    isFocused,
    focusProps
  } = useFocus();
  const {
    isHovered,
    hoverProps
  } = useHover();
  const _ref = React.useRef(null);
  const {
    linkProps
  } = useLink({
    isExternal,
    href,
    onPress,
    _ref,
    isDisabled
  });
  const contextValue = useMemo(() => {
    return {
      isHovered: isHoveredProp || isHovered,
      isFocused: isFocusedProp || isFocused,
      isPressed: isPressedProp || isPressed,
      isDisabled: isDisabled,
      isFocusVisible: isFocusVisibleProp || isFocusVisible
    };
  }, [isHoveredProp, isHovered, isFocusedProp, isFocused, isPressedProp, isPressed, isDisabled, isFocusVisibleProp, isFocusVisible]);
  return /*#__PURE__*/React.createElement(LinkContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(StyledLink, _extends({
    ref: mergeRefs([_ref, ref]),
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
    disabled: isDisabled
  }, linkProps, props, {
    onPressIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressIn, pressProps.onPressIn),
    onPressOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onPressOut, pressProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: composeEventHandlers(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)
  }), children));
});
//# sourceMappingURL=Link.js.map