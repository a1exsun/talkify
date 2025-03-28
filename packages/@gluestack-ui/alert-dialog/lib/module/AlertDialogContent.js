function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';
import { Platform, AccessibilityInfo, findNodeHandle, Keyboard } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { useDialog } from '@react-native-aria/dialog';
import { mergeRefs } from '@gluestack-ui/utils';
const AlertDialogContent = (StyledAlertDialogContent, AnimatePresence) => /*#__PURE__*/forwardRef(({
  children,
  focusScope = true,
  ...props
}, ref) => {
  const {
    initialFocusRef,
    finalFocusRef,
    handleClose,
    visible
  } = React.useContext(AlertDialogContext);
  const contentRef = React.useRef(null);
  const mergedRef = mergeRefs([contentRef, ref]);

  // @ts-ignore
  const {
    dialogProps
  } = useDialog({
    ...props
  }, mergedRef);
  React.useEffect(() => {
    if (contentRef) {
      const reactTag = findNodeHandle(contentRef.current);
      if (reactTag) {
        // Issue from react-native side
        // Hack for now, will fix this later
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [visible, contentRef]);
  React.useEffect(() => {
    if (visible) {
      Keyboard.dismiss();
      if (initialFocusRef && initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        var _initialFocusRef$curr;
        initialFocusRef === null || initialFocusRef === void 0 || (_initialFocusRef$curr = initialFocusRef.current) === null || _initialFocusRef$curr === void 0 || _initialFocusRef$curr.focus();
      }
    } else {
      if (finalFocusRef && finalFocusRef !== null && finalFocusRef !== void 0 && finalFocusRef.current) {
        var _finalFocusRef$curren;
        finalFocusRef === null || finalFocusRef === void 0 || (_finalFocusRef$curren = finalFocusRef.current) === null || _finalFocusRef$curren === void 0 || _finalFocusRef$curren.focus();
      }
    }
  }, [initialFocusRef, finalFocusRef, visible]);
  const content = /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
    visible: visible,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/React.createElement(StyledAlertDialogContent, _extends({}, props, {
    ref: mergedRef,
    onAccessibilityEscape: handleClose,
    exit: true,
    "aria-modal": "true",
    role: Platform.OS === 'web' ? 'alertdialog' : undefined,
    accessibilityViewIsModal: true,
    tabIndex: Platform.OS === 'web' ? -1 : undefined
  }, dialogProps), children));
  return focusScope ? /*#__PURE__*/React.createElement(FocusScope, {
    contain: visible,
    autoFocus: visible && !initialFocusRef,
    restoreFocus: visible && !finalFocusRef
  }, content) : /*#__PURE__*/React.createElement(React.Fragment, null, content);
});
export default AlertDialogContent;
//# sourceMappingURL=AlertDialogContent.js.map