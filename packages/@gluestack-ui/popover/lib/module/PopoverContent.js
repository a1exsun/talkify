function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useState } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import { Platform, findNodeHandle, AccessibilityInfo, Keyboard, View } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope as FocusScopeAria } from '@react-native-aria/focus';
import { useDialog } from '@react-native-aria/dialog';
import { PopoverContentProvider } from './PopoverContext';
import { getContainerStyle } from './utils';
const DEFAULT_ARROW_HEIGHT = 14,
  DEFAULT_ARROW_WIDTH = 14;
const PopoverContent = (StyledPopoverContent, AnimatePresence) => /*#__PURE__*/forwardRef(({
  children,
  style,
  ...props
}, ref) => {
  const {
    value
  } = usePopover('PopoverContext');
  const [arrowHeight, setArrowHeight] = useState(DEFAULT_ARROW_HEIGHT);
  const [arrowWidth, setArrowWidth] = useState(DEFAULT_ARROW_WIDTH);
  const [arrowElement, setArrowElement] = useState(null);
  const {
    targetRef,
    initialFocusRef,
    finalFocusRef,
    popoverContentId,
    headerMounted,
    bodyMounted,
    bodyId,
    headerId,
    isOpen,
    placement,
    shouldOverlapWithTrigger,
    crossOffset,
    offset,
    trapFocus,
    handleClose,
    shouldFlip,
    focusScope
  } = value;
  const contentRef = React.useRef(null);
  React.useEffect(() => {
    if (contentRef) {
      const reactTag = findNodeHandle(contentRef.current);
      if (reactTag) {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [isOpen, contentRef]);
  const {
    dialogProps
  } = useDialog({
    initialFocusRef,
    ...props
  }, contentRef);
  React.useEffect(() => {
    if (isOpen) {
      var _initialFocusRef$curr;
      if (focusScope) {
        Keyboard.dismiss();
      }
      if (initialFocusRef && initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current && initialFocusRef !== null && initialFocusRef !== void 0 && (_initialFocusRef$curr = initialFocusRef.current) !== null && _initialFocusRef$curr !== void 0 && _initialFocusRef$curr.focus) {
        var _initialFocusRef$curr2;
        initialFocusRef === null || initialFocusRef === void 0 || (_initialFocusRef$curr2 = initialFocusRef.current) === null || _initialFocusRef$curr2 === void 0 || _initialFocusRef$curr2.focus();
      }
    } else {
      var _finalFocusRef$curren;
      if (finalFocusRef && finalFocusRef !== null && finalFocusRef !== void 0 && finalFocusRef.current && finalFocusRef !== null && finalFocusRef !== void 0 && (_finalFocusRef$curren = finalFocusRef.current) !== null && _finalFocusRef$curren !== void 0 && _finalFocusRef$curren.focus) {
        var _finalFocusRef$curren2;
        finalFocusRef === null || finalFocusRef === void 0 || (_finalFocusRef$curren2 = finalFocusRef.current) === null || _finalFocusRef$curren2 === void 0 || _finalFocusRef$curren2.focus();
      }
    }
  }, [initialFocusRef, finalFocusRef, isOpen, focusScope]);
  useKeyboardDismissable({
    enabled: true,
    callback: handleClose
  });
  const accessibilityProps = Platform.OS === 'web' ? {
    'role': 'dialog',
    'aria-labelledby': headerMounted ? headerId : undefined,
    'aria-describedby': bodyMounted ? bodyId : undefined
  } : {};
  const overlayRef = React.useRef(null);
  const {
    overlayProps,
    arrowProps,
    placement: calculatedPlacement,
    isFlipped
  } = useOverlayPosition({
    placement: placement,
    targetRef,
    overlayRef,
    crossOffset,
    offset,
    shouldOverlapWithTrigger,
    shouldFlip
  });
  if (Object.keys(overlayProps.style).length === 0) {
    overlayProps.style = {
      top: -1000,
      left: -1000
    };
  }
  const mergedRef = mergeRefs([ref, contentRef]);
  const updateArrowSize = ({
    height,
    width
  }) => {
    setArrowHeight(height);
    setArrowWidth(width);
  };
  const updateArrowElement = element => {
    setArrowElement(element);
  };
  const providerValues = React.useMemo(() => {
    return {
      arrowProps: arrowProps,
      arrowHeight,
      arrowWidth,
      updateArrowSize,
      updateArrowElement,
      actualPlacement: calculatedPlacement
    };
  }, [calculatedPlacement, arrowProps, arrowHeight, arrowWidth]);
  const popoverContentStyle = React.useMemo(() => {
    const arrayConvertedStyles = Array.isArray(style) ? style : [style];
    const containerStyle = arrowElement ? getContainerStyle({
      placement: calculatedPlacement,
      arrowHeight: arrowHeight
    }) : {};
    return [containerStyle, arrayConvertedStyles];
  }, [calculatedPlacement, arrowHeight, style, arrowElement]);
  const initialAnimatedStyles = {
    opacity: 0,
    y: calculatedPlacement === 'top' ? 6 : calculatedPlacement === 'bottom' ? -6 : 0,
    x: calculatedPlacement === 'right' ? -6 : calculatedPlacement === 'left' ? 6 : 0
  };
  const animatedStyles = {
    opacity: 1,
    y: 0,
    x: 0
  };
  const exitAnimatedStyles = {
    opacity: 0
  };
  return /*#__PURE__*/React.createElement(PopoverContentProvider, {
    value: {
      ...value,
      ...providerValues,
      isFlipped
    }
  }, /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
    visible: isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      position: 'absolute',
      // To align items inside wrapper View
      alignItems: calculatedPlacement === 'right' ? 'flex-start' : calculatedPlacement === 'left' ? 'flex-end' : 'center',
      ...(overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style)
    },
    ref: overlayRef
  }, arrowElement, /*#__PURE__*/React.createElement(FocusScopeComponent, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, /*#__PURE__*/React.createElement(StyledPopoverContent, _extends({
    id: popoverContentId
  }, accessibilityProps, props, {
    isOpen: isOpen,
    collapsable: false
  }, dialogProps, {
    tabIndex: Platform.OS === 'web' ? -1 : undefined,
    key: placement + calculatedPlacement,
    initial: initialAnimatedStyles,
    animate: animatedStyles,
    exit: exitAnimatedStyles,
    style: popoverContentStyle,
    ref: mergedRef,
    dataSet: {
      flip: isFlipped
    },
    states: {
      flip: isFlipped
    }
  }), children)))));
});
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
export default PopoverContent;
//# sourceMappingURL=PopoverContent.js.map