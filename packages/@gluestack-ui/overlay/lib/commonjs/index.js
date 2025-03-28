"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = exports.ExitAnimationContext = void 0;
Object.defineProperty(exports, "OverlayProvider", {
  enumerable: true,
  get: function () {
    return _overlays.OverlayProvider;
  }
});
var _overlays = require("@react-native-aria/overlays");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _interactions = require("@react-native-aria/interactions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ExitAnimationContext = exports.ExitAnimationContext = /*#__PURE__*/_react.default.createContext({
  exited: true,
  setExited: _exited => {}
});
const Overlay = exports.Overlay = /*#__PURE__*/_react.default.forwardRef(({
  children,
  isOpen,
  useRNModal = false,
  useRNModalOnAndroid = false,
  isKeyboardDismissable = true,
  animationPreset = 'fade',
  onRequestClose,
  style
}, ref) => {
  const [exited, setExited] = _react.default.useState(!isOpen);
  (0, _interactions.useKeyboardDismissable)({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {}
  });
  let styleObj = {};
  if (_reactNative.Platform.OS === 'web') {
    styleObj.zIndex = 9999;
  }
  if (animationPreset === 'slide') {
    styleObj.overflow = 'hidden';
    styleObj.display = 'flex';
  } else {
    styleObj.display = exited && !isOpen ? 'none' : 'flex';
  }
  if (!isOpen && exited) {
    return null;
  }
  if (useRNModal || useRNModalOnAndroid && _reactNative.Platform.OS === 'android') {
    return /*#__PURE__*/_react.default.createElement(ExitAnimationContext.Provider, {
      value: {
        exited,
        setExited
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
      statusBarTranslucent: true,
      transparent: true,
      visible: isOpen,
      onRequestClose: onRequestClose,
      animationType: animationPreset,
      ref: ref
    }, children));
  }
  return /*#__PURE__*/_react.default.createElement(_overlays.OverlayContainer, {
    style: [style, styleObj]
  }, /*#__PURE__*/_react.default.createElement(ExitAnimationContext.Provider, {
    value: {
      exited,
      setExited
    }
  }, children));
});
Overlay.displayName = 'Overlay';
//# sourceMappingURL=index.js.map