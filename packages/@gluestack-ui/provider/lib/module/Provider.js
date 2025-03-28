import React from 'react';
import { Platform } from 'react-native';
import { keyboardDismissHandlerManager } from '@react-native-aria/interactions';
export const Provider = ({
  StyledProvider
}) => {
  const ProviderImpl = ({
    children,
    ...props
  }) => {
    React.useEffect(() => {
      let escapeKeyListener = null;
      if (Platform.OS === 'web') {
        escapeKeyListener = e => {
          if (e.key === 'Escape') {
            if (keyboardDismissHandlerManager.length() > 0) {
              const lastHandler = keyboardDismissHandlerManager.pop();
              lastHandler();
            }
          }
        };
        document.addEventListener('keydown', escapeKeyListener);
      }
      return () => {
        if (Platform.OS === 'web') {
          document.removeEventListener('keydown', escapeKeyListener);
        }
      };
    }, []);
    return /*#__PURE__*/React.createElement(StyledProvider, props, children);
  };
  return ProviderImpl;
};
//# sourceMappingURL=Provider.js.map