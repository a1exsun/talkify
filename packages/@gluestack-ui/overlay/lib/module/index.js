import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { Modal, Platform } from 'react-native';
import { useKeyboardDismissable } from '@react-native-aria/interactions';
export const ExitAnimationContext = /*#__PURE__*/React.createContext({
  exited: true,
  setExited: _exited => {}
});
export { OverlayProvider } from '@react-native-aria/overlays';
const Overlay = /*#__PURE__*/React.forwardRef(({
  children,
  isOpen,
  useRNModal = false,
  useRNModalOnAndroid = false,
  isKeyboardDismissable = true,
  animationPreset = 'fade',
  onRequestClose,
  style
}, ref) => {
  const [exited, setExited] = React.useState(!isOpen);
  useKeyboardDismissable({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {}
  });
  let styleObj = {};
  if (Platform.OS === 'web') {
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
  if (useRNModal || useRNModalOnAndroid && Platform.OS === 'android') {
    return /*#__PURE__*/React.createElement(ExitAnimationContext.Provider, {
      value: {
        exited,
        setExited
      }
    }, /*#__PURE__*/React.createElement(Modal, {
      statusBarTranslucent: true,
      transparent: true,
      visible: isOpen,
      onRequestClose: onRequestClose,
      animationType: animationPreset,
      ref: ref
    }, children));
  }
  return /*#__PURE__*/React.createElement(OverlayContainer, {
    style: [style, styleObj]
  }, /*#__PURE__*/React.createElement(ExitAnimationContext.Provider, {
    value: {
      exited,
      setExited
    }
  }, children));
});
Overlay.displayName = 'Overlay';
export { Overlay };
//# sourceMappingURL=index.js.map