function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { ActionsheetContext } from './context';
import { StyleSheet } from 'react-native';
export function Actionsheet(StyledActionsheet) {
  return /*#__PURE__*/forwardRef(({
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
    const overlayStyle = Platform.OS === 'web' ? {
      position: 'fixed'
    } : {};
    const [visible, setVisible] = useControllableState({
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
    const [backdropVisible, setBackdropVisible] = useControllableState({
      value: isOpen,
      defaultValue: defaultIsOpen
    });
    const handleClose = React.useCallback(() => {
      setVisible(false);
    }, [setVisible]);
    const handleCloseBackdrop = React.useCallback(() => {
      setBackdropVisible(false);
    }, [setBackdropVisible]);
    const contextValue = React.useMemo(() => {
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
    return /*#__PURE__*/React.createElement(Overlay, {
      isOpen: visible,
      onRequestClose: handleClose,
      isKeyboardDismissable: isKeyboardDismissable,
      useRNModal: useRNModal
      // @ts-ignore
      ,
      style: overlayStyle
    }, /*#__PURE__*/React.createElement(ActionsheetContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(StyledActionsheet, _extends({
      ref: ref,
      style: [StyleSheet.absoluteFill]
    }, props), children)));
  });
}
//# sourceMappingURL=Actionsheet.js.map