function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useControllableState } from '@gluestack-ui/hooks';
import { useKeyboardDismissable } from '@react-native-aria/interactions';
import { TooltipProvider } from './context';
import { useId } from '@react-native-aria/utils';
import { Platform } from 'react-native';
import { Overlay } from '@gluestack-ui/overlay';
import { composeEventHandlers } from '@gluestack-ui/utils';
function Tooltip(StyledTooltip) {
  return /*#__PURE__*/forwardRef(({
    isOpen: isOpenProp,
    isDisabled,
    defaultIsOpen = false,
    onClose,
    onOpen,
    openDelay = 350,
    closeDelay = 0,
    placement = 'bottom',
    children,
    closeOnClick = true,
    trigger,
    crossOffset,
    offset = 10,
    shouldOverlapWithTrigger = false,
    shouldFlip = true,
    // @ts-ignore
    _experimentalOverlay = false,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = useControllableState({
      value: isOpenProp,
      defaultValue: defaultIsOpen,
      onChange: value => {
        value ? onOpen && onOpen() : onClose && onClose();
      }
    });
    const handleOpen = React.useCallback(() => {
      setIsOpen(true);
    }, [setIsOpen]);
    const handleClose = React.useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);
    const enterTimeout = React.useRef();
    const exitTimeout = React.useRef();
    const openWithDelay = React.useCallback(() => {
      if (!isDisabled) {
        enterTimeout.current = setTimeout(handleOpen, openDelay);
      }
    }, [isDisabled, handleOpen, openDelay]);
    const closeWithDelay = React.useCallback(() => {
      if (enterTimeout.current) {
        clearTimeout(enterTimeout.current);
      }
      exitTimeout.current = setTimeout(handleClose, closeDelay);
    }, [closeDelay, handleClose]);
    const tooltipID = useId();
    React.useEffect(() => () => {
      clearTimeout(enterTimeout.current);
      clearTimeout(exitTimeout.current);
    }, []);
    const updatedTrigger = reference => {
      return trigger({
        'ref': reference,
        'collapsable': false,
        'onPress': composeEventHandlers(
        // newChildren.props.onPress,
        () => {
          if (closeOnClick) {
            closeWithDelay();
          }
        }),
        'onFocus': composeEventHandlers(
        // newChildren.props.onFocus,
        openWithDelay),
        'onBlur': composeEventHandlers(
        // newChildren.props.onBlur,
        closeWithDelay),
        'onMouseEnter': composeEventHandlers(
        // newChildren.props.onMouseEnter,
        openWithDelay),
        'onMouseLeave': composeEventHandlers(
        // newChildren.props.onMouseLeave,
        closeWithDelay),
        // 'ref': mergeRefs([newChildren.ref, targetRef]),
        'aria-describedby': isOpen ? tooltipID : undefined
      }, {
        open: isOpen
      });
    };
    const targetRef = React.useRef(null);
    useKeyboardDismissable({
      enabled: isOpen,
      callback: () => setIsOpen(false)
    });
    if (_experimentalOverlay) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/React.createElement(TooltipProvider, {
        value: {
          placement,
          targetRef,
          handleClose: handleClose,
          isOpen,
          crossOffset,
          offset,
          shouldOverlapWithTrigger,
          shouldFlip
        }
      }, /*#__PURE__*/React.createElement(StyledTooltip, _extends({}, props, {
        ref: ref,
        role: Platform.OS === 'web' ? 'tooltip' : undefined,
        tabIndex: -1,
        id: tooltipID
      }), children)));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/React.createElement(Overlay, {
      isOpen: isOpen,
      onRequestClose: handleClose
    }, /*#__PURE__*/React.createElement(TooltipProvider, {
      value: {
        placement,
        targetRef,
        handleClose: handleClose,
        isOpen,
        crossOffset,
        offset,
        shouldOverlapWithTrigger,
        shouldFlip
      }
    }, /*#__PURE__*/React.createElement(StyledTooltip, _extends({}, props, {
      ref: ref,
      role: Platform.OS === 'web' ? 'tooltip' : undefined,
      focussable: false,
      id: tooltipID
    }), children))));
  });
}
export { Tooltip };
//# sourceMappingURL=Tooltip.js.map