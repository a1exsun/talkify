import React from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import { PopoverProvider } from './PopoverContext';
import { FocusScope as FocusScopeAria } from '@react-native-aria/focus';
import { PopoverContent } from './PopoverContent';
import { MenuContext } from '../MenuContext';
export const Popover = ({
  state,
  onOpen,
  trigger,
  children,
  defaultIsOpen = false,
  initialFocusRef,
  finalFocusRef,
  useRNModal,
  trapFocus = true,
  placement = 'bottom',
  shouldOverlapWithTrigger = false,
  crossOffset,
  offset,
  triggerRef,
  shouldFlip,
  focusScope = true,
  StyledBackdrop
}) => {
  const [isOpen, setIsOpen] = useControllableState({
    value: state === null || state === void 0 ? void 0 : state.isOpen,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : state.close && state.close();
    }
  });
  const {
    onClose
  } = React.useContext(MenuContext);
  const [bodyMounted, setBodyMounted] = React.useState(false);
  const [headerMounted, setHeaderMounted] = React.useState(false);
  let idCounter = 0;
  function uniqueId(prefix = '') {
    const id = ++idCounter;
    return prefix + id;
  }
  const id = uniqueId();
  const popoverContentId = `${id}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;
  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const updatedTrigger = reference => {
    if (trigger) {
      return trigger({
        'ref': reference,
        'onPress': handleOpen,
        'aria-expanded': isOpen ? true : false,
        'aria-controls': isOpen ? popoverContentId : undefined,
        'aria-haspopup': true
      }, {
        open: isOpen
      });
    }
    return null;
  };
  const targetRefTemp = React.useRef(null);
  const targetRef = triggerRef || targetRefTemp;
  return /*#__PURE__*/React.createElement(React.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/React.createElement(Overlay, {
    isOpen: isOpen,
    onRequestClose: handleClose,
    isKeyboardDismissable: true,
    useRNModal: useRNModal
  }, /*#__PURE__*/React.createElement(PopoverProvider, {
    value: {
      onClose: handleClose,
      targetRef,
      strategy: 'absolute',
      handleClose: handleClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      bodyId,
      headerId,
      headerMounted,
      bodyMounted,
      setBodyMounted,
      setHeaderMounted,
      isOpen,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      shouldFlip
    }
  }, /*#__PURE__*/React.createElement(StyledBackdrop, {
    onPress: onClose,
    tabIndex: -1
    // for ios
    ,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement(FocusScopeComponent, {
    trapFocus: trapFocus,
    focusScope: focusScope
  }, /*#__PURE__*/React.createElement(PopoverContent, null, children)))));
};
const FocusScopeComponent = ({
  trapFocus,
  focusScope,
  children
}) => {
  if (focusScope) return /*#__PURE__*/React.createElement(FocusScopeAria, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, children);
  return children;
};
//# sourceMappingURL=Popover.js.map