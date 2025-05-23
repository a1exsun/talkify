function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useLinkContext } from './Context';
export const LinkText = StyledButtonText => /*#__PURE__*/forwardRef(({
  children,
  ...props
}, ref) => {
  const {
    isHovered,
    isFocused,
    isPressed,
    isDisabled,
    isFocusVisible
  } = useLinkContext();
  return /*#__PURE__*/React.createElement(StyledButtonText, _extends({
    ref: ref
  }, props, {
    states: {
      hover: isHovered,
      focus: isFocused,
      active: isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisible
    },
    dataSet: {
      hover: isHovered,
      focus: isFocused,
      active: isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisible
    }
  }), children);
});
//# sourceMappingURL=LinkText.js.map