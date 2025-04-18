"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actionsheet = Actionsheet;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _hooks = require("@gluestack-ui/hooks");
var _overlay = require("@gluestack-ui/overlay");
var _context = require("./context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Actionsheet(StyledActionsheet) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    children,
    isOpen,
    onClose,
    onOpen,
    defaultIsOpen = false,
    trapFocus = true,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    useRNModal,
    initialFocusRef,
    finalFocusRef,
    snapPoints,
    // @ts-ignore
    _experimentalOverlay = false,
    ...props
  }, ref) => {
    const overlayStyle = _reactNative.Platform.OS === 'web' ? {
      position: 'fixed'
    } : {};
    const [visible, setVisible] = (0, _hooks.useControllableState)({
      value: isOpen,
      defaultValue: defaultIsOpen,
      onChange: val => {
        if (val === false) {
          onClose && onClose();
        } else {
          onOpen && onOpen();
        }
      }
    });
    const [backdropVisible, setBackdropVisible] = (0, _hooks.useControllableState)({
      value: isOpen,
      defaultValue: defaultIsOpen
    });
    const handleClose = _react.default.useCallback(() => {
      setVisible(false);
    }, [setVisible]);
    const handleCloseBackdrop = _react.default.useCallback(() => {
      setBackdropVisible(false);
    }, [setBackdropVisible]);
    const contextValue = _react.default.useMemo(() => {
      return {
        handleClose,
        closeOnOverlayClick,
        visible,
        backdropVisible: backdropVisible,
        handleCloseBackdrop,
        trapFocus,
        initialFocusRef,
        finalFocusRef,
        snapPoints
      };
    }, [handleClose, handleCloseBackdrop, closeOnOverlayClick, visible, backdropVisible, trapFocus, initialFocusRef, finalFocusRef, snapPoints]);
    return /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
      isOpen: visible,
      onRequestClose: handleClose,
      isKeyboardDismissable: isKeyboardDismissable,
      useRNModal: useRNModal
      // @ts-ignore
      ,
      style: overlayStyle
    }, /*#__PURE__*/_react.default.createElement(_context.ActionsheetContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/_react.default.createElement(StyledActionsheet, _extends({
      ref: ref,
      style: [_reactNative.StyleSheet.absoluteFill]
    }, props), children)));
  });
}
//# sourceMappingURL=Actionsheet.js.map