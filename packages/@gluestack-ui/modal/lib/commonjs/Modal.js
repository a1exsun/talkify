"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _hooks = require("@gluestack-ui/hooks");
var _Context = require("./Context");
var _overlay = require("@gluestack-ui/overlay");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
const Modal = StyledModal => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  isOpen,
  onClose,
  defaultIsOpen,
  initialFocusRef,
  finalFocusRef,
  avoidKeyboard,
  closeOnOverlayClick = true,
  isKeyboardDismissable = true,
  _experimentalOverlay = false,
  ...props
}, ref) => {
  const bottomInset = (0, _hooks.useKeyboardBottomInset)();
  const {
    useRNModal,
    ...remainingProps
  } = props;
  const [visible, setVisible] = (0, _hooks.useControllableState)({
    value: defaultIsOpen ?? isOpen,
    onChange: val => {
      if (!val) onClose && onClose();
    }
  });
  const handleClose = _react.default.useCallback(() => {
    setVisible(false);
  }, [setVisible]);
  const avoidKeyboardSpacer = /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      // @ts-ignore
      pointerEvents: 'box-none',
      width: '100%',
      height: avoidKeyboard ? bottomInset : undefined
    }
  });
  const contextValue = _react.default.useMemo(() => {
    return {
      handleClose,
      initialFocusRef,
      finalFocusRef,
      closeOnOverlayClick,
      visible,
      avoidKeyboard,
      bottomInset
    };
  }, [handleClose, initialFocusRef, closeOnOverlayClick, finalFocusRef, avoidKeyboard, bottomInset, visible]);
  if (_experimentalOverlay) {
    return /*#__PURE__*/_react.default.createElement(_Context.ModalContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/_react.default.createElement(StyledModal, _extends({}, remainingProps, {
      ref: ref
    }), children, avoidKeyboard ? avoidKeyboardSpacer : null));
  }
  return /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
    isOpen: visible,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    useRNModal: useRNModal
  }, /*#__PURE__*/_react.default.createElement(_Context.ModalContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(StyledModal, _extends({}, remainingProps, {
    ref: ref
  }), children, avoidKeyboard ? avoidKeyboardSpacer : null)));
});
var _default = exports.default = Modal;
//# sourceMappingURL=Modal.js.map