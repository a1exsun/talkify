import React from 'react';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
let keyboardDismissHandlers = [];
export const keyboardDismissHandlerManager = {
  push: handler => {
    keyboardDismissHandlers.push(handler);
    return () => {
      keyboardDismissHandlers = keyboardDismissHandlers.filter(h => h !== handler);
    };
  },
  length: () => keyboardDismissHandlers.length,
  pop: () => {
    return keyboardDismissHandlers.pop();
  }
};

/**
 * Handles attaching callback for Escape key listener on web and Back button listener on Android
 */
export const useKeyboardDismissable = ({
  enabled,
  callback
}) => {
  React.useEffect(() => {
    let cleanupFn = () => {};
    if (enabled) {
      cleanupFn = keyboardDismissHandlerManager.push(callback);
    } else {
      cleanupFn();
    }
    return () => {
      cleanupFn();
    };
  }, [enabled, callback]);
  useBackHandler({
    enabled,
    callback
  });
};
export function useBackHandler({
  enabled,
  callback
}) {
  useEffect(() => {
    let backHandler = () => {
      callback();
      return true;
    };
    if (enabled) {
      BackHandler.addEventListener('hardwareBackPress', backHandler);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    }
    return () => BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [enabled, callback]);
}
//# sourceMappingURL=index.js.map