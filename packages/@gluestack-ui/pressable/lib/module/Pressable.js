function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import React, { forwardRef } from 'react';
import { useHover, usePress } from '@react-native-aria/interactions';
import { composeEventHandlers } from '@gluestack-ui/utils';
function Pressable(StyledPressable) {
  return /*#__PURE__*/forwardRef(({
    children,
    ...props
  }, ref) => {
    const {
      focusProps: focusRingProps,
      isFocusVisible
    } = useFocusRing();
    const {
      pressProps,
      isPressed
    } = usePress({
      isDisabled: props.disabled ?? undefined
    });
    const {
      isFocused,
      focusProps
    } = useFocus();
    const {
      isHovered,
      hoverProps
    } = useHover();
    return /*#__PURE__*/React.createElement(StyledPressable, _extends({
      ref: ref,
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        disabled: props.disabled,
        focusVisible: isFocusVisible
      },
      dataSet: {
        hover: isHovered ? 'true' : 'false',
        focus: isFocused ? 'true' : 'false',
        active: isPressed ? 'true' : 'false',
        disabled: props.disabled ? 'true' : 'false',
        focusVisible: isFocusVisible ? 'true' : 'false'
      }
    }, props, {
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
    }), typeof children === 'function' ? children({
      hovered: isHovered,
      focused: isFocused,
      pressed: isPressed,
      disabled: props.disabled ?? undefined,
      focusVisible: isFocusVisible
    }) : children);
  });
}
export default Pressable;
//# sourceMappingURL=Pressable.js.map