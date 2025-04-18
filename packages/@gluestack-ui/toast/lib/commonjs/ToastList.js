"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastList = void 0;
var _hooks = require("@gluestack-ui/hooks");
var _overlay = require("@gluestack-ui/overlay");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
var _ToastContext = require("./ToastContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
const initialAnimationOffset = 24;
const transitionConfig = {
  'bottom': initialAnimationOffset,
  'top': -initialAnimationOffset,
  'top right': -initialAnimationOffset,
  'top left': -initialAnimationOffset,
  'bottom left': initialAnimationOffset,
  'bottom right': initialAnimationOffset
};
const toastPositionStyle = _reactNative.Platform.OS === 'web' ? 'fixed' : 'absolute';
const POSITIONS = {
  'top': {
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  'top right': {
    top: 0,
    right: 0,
    alignItems: 'flex-end'
  },
  'top left': {
    top: 0,
    left: 0,
    alignItems: 'flex-start'
  },
  'bottom': {
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  'bottom left': {
    bottom: 0,
    left: 0,
    alignItems: 'flex-start'
  },
  'bottom right': {
    bottom: 0,
    right: 0,
    alignItems: 'flex-end'
  }
};
const ToastList = () => {
  const {
    toastInfo,
    visibleToasts,
    removeToast,
    AnimationWrapper,
    AnimatePresence: ContextAnimatePresence
  } = _react.default.useContext(_ToastContext.ToastContext);
  const AnimationView = AnimationWrapper === null || AnimationWrapper === void 0 ? void 0 : AnimationWrapper.current;
  const AnimatePresence = ContextAnimatePresence === null || ContextAnimatePresence === void 0 ? void 0 : ContextAnimatePresence.current;
  const bottomInset = (0, _hooks.useKeyboardBottomInset)() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };
  let hasToastOnOverlay = false;
  getPositions().map(position => {
    var _toastInfo$position;
    if (((_toastInfo$position = toastInfo[position]) === null || _toastInfo$position === void 0 ? void 0 : _toastInfo$position.length) > 0) hasToastOnOverlay = true;
  });
  return getPositions().length > 0 ? /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
    isOpen: hasToastOnOverlay,
    isKeyboardDismissable: false
  }, getPositions().map(position => {
    if (Object.keys(POSITIONS).includes(position)) return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: position,
      style: {
        justifyContent: 'center',
        margin: 'auto',
        //@ts-expect-error it is properly defined above per-platform
        position: toastPositionStyle,
        pointerEvents: 'box-none',
        ...POSITIONS[position]
      }
    }, toastInfo[position].map(toast => {
      var _toast$config3, _toast$config4;
      return /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
        style: {
          pointerEvents: 'box-none'
        },
        key: toast.id
      }, /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
        visible: visibleToasts[toast.id],
        AnimatePresence: AnimatePresence,
        onExit: () => {
          var _toast$config, _toast$config2;
          removeToast(toast.id);
          ((_toast$config = toast.config) === null || _toast$config === void 0 ? void 0 : _toast$config.onCloseComplete) && ((_toast$config2 = toast.config) === null || _toast$config2 === void 0 ? void 0 : _toast$config2.onCloseComplete());
        }
      }, /*#__PURE__*/_react.default.createElement(AnimationView, _extends({
        initial: {
          opacity: 0,
          y: transitionConfig[position]
        },
        animate: {
          opacity: 1,
          y: 0
        },
        exit: {
          opacity: 0,
          y: transitionConfig[position]
        },
        transition: {
          type: 'timing',
          duration: 150
        },
        key: toast.id
      }, (_toast$config3 = toast.config) === null || _toast$config3 === void 0 ? void 0 : _toast$config3.containerStyle, {
        style: {
          pointerEvents: 'box-none'
        }
      }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: {
          bottom: ['bottom', 'bottom-left', 'bottom-right'].includes(position) && (_toast$config4 = toast.config) !== null && _toast$config4 !== void 0 && _toast$config4.avoidKeyboard ? bottomInset : undefined
        }
      }, toast.component))));
    }));else return null;
  })) : null;
};
exports.ToastList = ToastList;
//# sourceMappingURL=ToastList.js.map