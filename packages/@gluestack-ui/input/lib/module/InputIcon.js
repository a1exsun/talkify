function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
export const InputIcon = StyledInputIcon => /*#__PURE__*/forwardRef(({
  children,
  ...props
}, ref) => {
  return /*#__PURE__*/React.createElement(StyledInputIcon, _extends({
    ref: ref
  }, props), children);
});
//# sourceMappingURL=InputIcon.js.map