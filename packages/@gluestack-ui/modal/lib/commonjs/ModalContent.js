"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Context = require("./Context");
var _reactNative = require("react-native");
var _focus = require("@react-native-aria/focus");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
var _dialog = require("@react-native-aria/dialog");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
const ModalContent = (StyledModalContent, AnimatePresence) => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  focusScope = true,
  ...props
}, ref) => {
  const {
    initialFocusRef,
    finalFocusRef,
    handleClose,
    visible
  } = _react.default.useContext(_Context.ModalContext);
  const contentRef = _react.default.useRef(null);
  const mergedRef = (0, _utils.mergeRefs)([contentRef, ref]);

  // @ts-ignore
  const {
    dialogProps
  } = (0, _dialog.useDialog)({
    ...props
  }, mergedRef);
  _react.default.useEffect(() => {
    if (contentRef) {
      const reactTag = (0, _reactNative.findNodeHandle)(contentRef.current);
      if (reactTag) {
        // Issue from react-native side
        // Hack for now, will fix this later
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [visible, contentRef]);
  _react.default.useEffect(() => {
    if (visible) {
      var _initialFocusRef$curr;
      _reactNative.Keyboard.dismiss();
      if (initialFocusRef && initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current && initialFocusRef !== null && initialFocusRef !== void 0 && (_initialFocusRef$curr = initialFocusRef.current) !== null && _initialFocusRef$curr !== void 0 && _initialFocusRef$curr.focus) {
        var _initialFocusRef$curr2;
        initialFocusRef === null || initialFocusRef === void 0 || (_initialFocusRef$curr2 = initialFocusRef.current) === null || _initialFocusRef$curr2 === void 0 || _initialFocusRef$curr2.focus();
      }
    } else {
      var _finalFocusRef$curren;
      if (finalFocusRef && finalFocusRef !== null && finalFocusRef !== void 0 && finalFocusRef.current && finalFocusRef !== null && finalFocusRef !== void 0 && (_finalFocusRef$curren = finalFocusRef.current) !== null && _finalFocusRef$curren !== void 0 && _finalFocusRef$curren.focus) {
        var _finalFocusRef$curren2;
        finalFocusRef === null || finalFocusRef === void 0 || (_finalFocusRef$curren2 = finalFocusRef.current) === null || _finalFocusRef$curren2 === void 0 || _finalFocusRef$curren2.focus();
      }
    }
  }, [initialFocusRef, finalFocusRef, visible]);
  const content = /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
    visible: visible,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/_react.default.createElement(StyledModalContent, _extends({}, props, {
    ref: mergedRef,
    onAccessibilityEscape: handleClose,
    "aria-modal": "true",
    role: _reactNative.Platform.OS === 'web' ? 'dialog' : undefined,
    accessibilityViewIsModal: true,
    tabIndex: _reactNative.Platform.OS === 'web' ? -1 : undefined
  }, dialogProps), children));
  return focusScope ? /*#__PURE__*/_react.default.createElement(_focus.FocusScope, {
    contain: visible,
    autoFocus: visible && !initialFocusRef,
    restoreFocus: visible && !finalFocusRef
  }, content) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, content);
});
var _default = exports.default = ModalContent;
//# sourceMappingURL=ModalContent.js.map