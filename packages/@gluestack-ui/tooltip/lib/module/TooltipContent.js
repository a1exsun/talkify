function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useTooltipContext } from './context';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { Platform } from 'react-native';
export function TooltipContent(StyledTooltipContent, AnimatePresence) {
  return /*#__PURE__*/forwardRef(({
    children,
    style,
    ...props
  }, ref) => {
    const {
      value
    } = useTooltipContext('TooltipContext');
    const {
      isOpen,
      targetRef,
      placement,
      crossOffset,
      offset,
      shouldFlip,
      shouldOverlapWithTrigger
    } = value;
    const overlayRef = React.useRef(null);
    const {
      overlayProps,
      placement: calculatedPlacement
    } = useOverlayPosition({
      placement,
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
    const mergedRef = mergeRefs([ref, overlayRef]);
    const initialAnimatedStyles = {
      opacity: 0,
      scale: 0.9,
      y: calculatedPlacement === 'top' ? 6 : calculatedPlacement === 'bottom' ? -6 : 0,
      x: calculatedPlacement === 'right' ? -6 : calculatedPlacement === 'left' ? 6 : 0
    };
    const animatedStyles = {
      opacity: 1,
      y: 0,
      scale: 1,
      x: 0
    };
    const exitAnimatedStyles = {
      opacity: 0,
      x: 0,
      y: 0
    };
    return /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
      visible: isOpen,
      AnimatePresence: AnimatePresence
    }, /*#__PURE__*/React.createElement(StyledTooltipContent, _extends({
      initial: initialAnimatedStyles,
      animate: animatedStyles,
      exit: exitAnimatedStyles,
      transition: {
        type: 'timing',
        duration: 100
      }
    }, props, {
      ref: mergedRef,
      key: placement + calculatedPlacement,
      role: Platform.OS === 'web' ? 'tooltip' : undefined,
      style: [overlayProps.style, {
        position: 'absolute'
      }, style]
    }), children));
  });
}
//# sourceMappingURL=TooltipContent.js.map