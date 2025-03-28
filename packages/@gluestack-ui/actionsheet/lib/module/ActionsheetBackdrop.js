function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { ActionsheetContext } from './context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
function ActionsheetBackdrop(StyledActionsheetBackdrop, AnimatePresence) {
  return /*#__PURE__*/forwardRef(({
    children,
    ...props
  }, ref) => {
    const {
      closeOnOverlayClick,
      handleClose,
      backdropVisible
    } = React.useContext(ActionsheetContext);
    return /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
      visible: backdropVisible,
      AnimatePresence: AnimatePresence
    }, /*#__PURE__*/React.createElement(StyledActionsheetBackdrop, _extends({
      ref: ref,
      onPress: () => {
        closeOnOverlayClick && handleClose();
      }
      // ios
      ,
      accessibilityElementsHidden: true
      // android
      ,
      importantForAccessibility: "no-hide-descendants",
      "aria-hidden": true
    }, props), children));
  });
}
export default ActionsheetBackdrop;
//# sourceMappingURL=ActionsheetBackdrop.js.map