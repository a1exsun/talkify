function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react-native/no-inline-styles */
import { useKeyboardBottomInset } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { ToastContext } from './ToastContext';
const initialAnimationOffset = 24;
const transitionConfig = {
  'bottom': initialAnimationOffset,
  'top': -initialAnimationOffset,
  'top right': -initialAnimationOffset,
  'top left': -initialAnimationOffset,
  'bottom left': initialAnimationOffset,
  'bottom right': initialAnimationOffset
};
const toastPositionStyle = Platform.OS === 'web' ? 'fixed' : 'absolute';
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
export const ToastList = () => {
  const {
    toastInfo,
    visibleToasts,
    removeToast,
    AnimationWrapper,
    AnimatePresence: ContextAnimatePresence
  } = React.useContext(ToastContext);
  const AnimationView = AnimationWrapper === null || AnimationWrapper === void 0 ? void 0 : AnimationWrapper.current;
  const AnimatePresence = ContextAnimatePresence === null || ContextAnimatePresence === void 0 ? void 0 : ContextAnimatePresence.current;
  const bottomInset = useKeyboardBottomInset() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };
  let hasToastOnOverlay = false;
  getPositions().map(position => {
    var _toastInfo$position;
    if (((_toastInfo$position = toastInfo[position]) === null || _toastInfo$position === void 0 ? void 0 : _toastInfo$position.length) > 0) hasToastOnOverlay = true;
  });
  return getPositions().length > 0 ? /*#__PURE__*/React.createElement(Overlay, {
    isOpen: hasToastOnOverlay,
    isKeyboardDismissable: false
  }, getPositions().map(position => {
    if (Object.keys(POSITIONS).includes(position)) return /*#__PURE__*/React.createElement(View, {
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
      return /*#__PURE__*/React.createElement(SafeAreaView, {
        style: {
          pointerEvents: 'box-none'
        },
        key: toast.id
      }, /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
        visible: visibleToasts[toast.id],
        AnimatePresence: AnimatePresence,
        onExit: () => {
          var _toast$config, _toast$config2;
          removeToast(toast.id);
          ((_toast$config = toast.config) === null || _toast$config === void 0 ? void 0 : _toast$config.onCloseComplete) && ((_toast$config2 = toast.config) === null || _toast$config2 === void 0 ? void 0 : _toast$config2.onCloseComplete());
        }
      }, /*#__PURE__*/React.createElement(AnimationView, _extends({
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
      }), /*#__PURE__*/React.createElement(View, {
        style: {
          bottom: ['bottom', 'bottom-left', 'bottom-right'].includes(position) && (_toast$config4 = toast.config) !== null && _toast$config4 !== void 0 && _toast$config4.avoidKeyboard ? bottomInset : undefined
        }
      }, toast.component))));
    }));else return null;
  })) : null;
};
//# sourceMappingURL=ToastList.js.map