function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
export function ActionsheetSectionList(StyledActionsheetSectionList) {
  return /*#__PURE__*/forwardRef(({
    ...props
  }, ref) => {
    return /*#__PURE__*/React.createElement(StyledActionsheetSectionList, _extends({
      ref: ref
    }, props));
  });
}
//# sourceMappingURL=ActionsheetSectionList.js.map