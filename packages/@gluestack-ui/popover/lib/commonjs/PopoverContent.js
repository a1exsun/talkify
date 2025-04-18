"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _PopoverContext = require("./PopoverContext");
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
var _overlays = require("@react-native-aria/overlays");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
var _focus = require("@react-native-aria/focus");
var _dialog = require("@react-native-aria/dialog");
var _utils2 = require("./utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable react-native/no-inline-styles */
const DEFAULT_ARROW_HEIGHT = 14,
  DEFAULT_ARROW_WIDTH = 14;
const PopoverContent = (StyledPopoverContent, AnimatePresence) => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  style,
  ...props
}, ref) => {
  const {
    value
  } = (0, _PopoverContext.usePopover)('PopoverContext');
  const [arrowHeight, setArrowHeight] = (0, _react.useState)(DEFAULT_ARROW_HEIGHT);
  const [arrowWidth, setArrowWidth] = (0, _react.useState)(DEFAULT_ARROW_WIDTH);
  const [arrowElement, setArrowElement] = (0, _react.useState)(null);
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
  const contentRef = _react.default.useRef(null);
  _react.default.useEffect(() => {
    if (contentRef) {
      const reactTag = (0, _reactNative.findNodeHandle)(contentRef.current);
      if (reactTag) {
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [isOpen, contentRef]);
  const {
    dialogProps
  } = (0, _dialog.useDialog)({
    initialFocusRef,
    ...props
  }, contentRef);
  _react.default.useEffect(() => {
    if (isOpen) {
      var _initialFocusRef$curr;
      if (focusScope) {
        _reactNative.Keyboard.dismiss();
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
  (0, _hooks.useKeyboardDismissable)({
    enabled: true,
    callback: handleClose
  });
  const accessibilityProps = _reactNative.Platform.OS === 'web' ? {
    'role': 'dialog',
    'aria-labelledby': headerMounted ? headerId : undefined,
    'aria-describedby': bodyMounted ? bodyId : undefined
  } : {};
  const overlayRef = _react.default.useRef(null);
  const {
    overlayProps,
    arrowProps,
    placement: calculatedPlacement,
    isFlipped
  } = (0, _overlays.useOverlayPosition)({
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
  const mergedRef = (0, _utils.mergeRefs)([ref, contentRef]);
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
  const providerValues = _react.default.useMemo(() => {
    return {
      arrowProps: arrowProps,
      arrowHeight,
      arrowWidth,
      updateArrowSize,
      updateArrowElement,
      actualPlacement: calculatedPlacement
    };
  }, [calculatedPlacement, arrowProps, arrowHeight, arrowWidth]);
  const popoverContentStyle = _react.default.useMemo(() => {
    const arrayConvertedStyles = Array.isArray(style) ? style : [style];
    const containerStyle = arrowElement ? (0, _utils2.getContainerStyle)({
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
  return /*#__PURE__*/_react.default.createElement(_PopoverContext.PopoverContentProvider, {
    value: {
      ...value,
      ...providerValues,
      isFlipped
    }
  }, /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
    visible: isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      position: 'absolute',
      // To align items inside wrapper View
      alignItems: calculatedPlacement === 'right' ? 'flex-start' : calculatedPlacement === 'left' ? 'flex-end' : 'center',
      ...(overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style)
    },
    ref: overlayRef
  }, arrowElement, /*#__PURE__*/_react.default.createElement(FocusScopeComponent, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, /*#__PURE__*/_react.default.createElement(StyledPopoverContent, _extends({
    id: popoverContentId
  }, accessibilityProps, props, {
    isOpen: isOpen,
    collapsable: false
  }, dialogProps, {
    tabIndex: _reactNative.Platform.OS === 'web' ? -1 : undefined,
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
  if (focusScope) return /*#__PURE__*/_react.default.createElement(_focus.FocusScope, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, children);
  return children;
};
var _default = exports.default = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map