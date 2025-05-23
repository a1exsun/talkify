"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Context = require("./Context");
var _overlay = require("@gluestack-ui/overlay");
var _hooks = require("@gluestack-ui/hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
const AlertDialog = StyledAlertDialog => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  isOpen,
  onClose,
  defaultIsOpen = false,
  initialFocusRef,
  finalFocusRef,
  avoidKeyboard = false,
  closeOnOverlayClick = true,
  isKeyboardDismissable = true,
  animationPreset = 'fade',
  // @ts-ignore
  _experimentalOverlay = false,
  ...props
}, ref) => {
  const bottomInset = (0, _hooks.useKeyboardBottomInset)();
  const [visible, setVisible] = (0, _hooks.useControllableState)({
    value: isOpen,
    defaultValue: defaultIsOpen,
    onChange: val => {
      if (!val) onClose && onClose();
    }
  });
  const avoidKeyboardSpacer = /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      // @ts-ignore
      pointerEvents: 'box-none',
      width: '100%',
      height: avoidKeyboard ? bottomInset : undefined
    }
  });
  const handleClose = _react.default.useCallback(() => setVisible(false), [setVisible]);
  const contextValue = _react.default.useMemo(() => {
    return {
      handleClose,
      initialFocusRef,
      finalFocusRef,
      closeOnOverlayClick,
      avoidKeyboard,
      bottomInset,
      visible
    };
  }, [handleClose, initialFocusRef, closeOnOverlayClick, finalFocusRef, avoidKeyboard, bottomInset, visible]);
  if (_experimentalOverlay) {
    return /*#__PURE__*/_react.default.createElement(_Context.AlertDialogContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/_react.default.createElement(StyledAlertDialog, _extends({}, props, {
      ref: ref
    }), children, avoidKeyboard ? avoidKeyboardSpacer : null));
  }
  return /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
    isOpen: visible,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    animationPreset: animationPreset
  }, /*#__PURE__*/_react.default.createElement(_Context.AlertDialogContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(StyledAlertDialog, _extends({}, props, {
    ref: ref
  }), children, avoidKeyboard ? avoidKeyboardSpacer : null)));
});
exports.AlertDialog = AlertDialog;
//# sourceMappingURL=AlertDialog.js.map