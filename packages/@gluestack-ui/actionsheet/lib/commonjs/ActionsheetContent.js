"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _context = require("./context");
var _ActionsheetContentContext = require("./ActionsheetContentContext");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
var _focus = require("@react-native-aria/focus");
var _utils = require("@gluestack-ui/utils");
var _dialog = require("@react-native-aria/dialog");
var _overlays = require("@react-native-aria/overlays");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-native/no-inline-styles */
const windowHeight = _reactNative.Dimensions.get('screen').height;
function ActionsheetContent(StyledActionsheetContent, AnimatePresence) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    children,
    _experimentalContent = false,
    focusScope = true,
    ...props
  }, ref) => {
    const {
      visible,
      handleClose,
      trapFocus,
      initialFocusRef,
      handleCloseBackdrop,
      finalFocusRef,
      snapPoints
    } = _react.default.useContext(_context.ActionsheetContext);
    (0, _overlays.usePreventScroll)();
    const pan = _react.default.useRef(new _reactNative.Animated.ValueXY()).current;
    const contentSheetHeight = _react.default.useRef(0);
    const [contentSheetHeightState, setContentSheetHeightState] = _react.default.useState(0);
    const [animatedViewSheetHeight, setAnimatedViewSheetHeight] = _react.default.useState(0);
    const animationDefaultConfig = {
      type: 'timing',
      duration: 200
    };
    const handleCloseCallback = _react.default.useCallback(handleClose, [_context.ActionsheetContext, handleClose]);
    const contentSheetAnimatePosition = _react.default.useMemo(() => {
      if (!snapPoints) {
        return animatedViewSheetHeight - contentSheetHeightState;
      }
      return windowHeight - snapPoints[0] * windowHeight * 0.01;
    }, [snapPoints, animatedViewSheetHeight, contentSheetHeightState]);
    const contentRef = _react.default.useRef(null);
    _react.default.useEffect(() => {
      if (contentRef) {
        const reactTag = (0, _reactNative.findNodeHandle)(contentRef.current);
        if (reactTag) {
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
        }
      }
    }, [visible, contentRef]);
    _react.default.useEffect(() => {
      if (visible) {
        _reactNative.Keyboard.dismiss();
        if (initialFocusRef && initialFocusRef.current) {
          initialFocusRef.current.focus();
        }
      } else {
        if (finalFocusRef && finalFocusRef.current) {
          finalFocusRef.current.focus();
        }
      }
    }, [initialFocusRef, finalFocusRef, visible]);
    const {
      dialogProps
    } = (0, _dialog.useDialog)({
      ...props
    }, contentRef);
    const mergedRef = (0, _utils.mergeRefs)([ref, contentRef]);
    if (_experimentalContent) {
      return /*#__PURE__*/_react.default.createElement(StyledActionsheetContent, _extends({
        transition: animationDefaultConfig
      }, props, {
        ref: mergedRef
      }, dialogProps, {
        onLayout: event => {
          const {
            height
          } = event.nativeEvent.layout;
          contentSheetHeight.current = height;
        }
      }), /*#__PURE__*/_react.default.createElement(_ActionsheetContentContext.ActionsheetContentProvider, {
        contentSheetHeight: contentSheetHeight,
        pan: pan,
        handleClose: handleCloseCallback,
        handleCloseBackdrop: handleCloseBackdrop
      }, children));
    }
    return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
      style: {
        transform: [{
          translateY: pan.y
        }],
        width: '100%',
        height: '100%'
      },
      onLayout: event => {
        const {
          height
        } = event.nativeEvent.layout;
        setAnimatedViewSheetHeight(height);
      },
      pointerEvents: "box-none"
    }, /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
      visible: visible,
      AnimatePresence: AnimatePresence
    }, /*#__PURE__*/_react.default.createElement(StyledActionsheetContent, _extends({
      initial: {
        y: windowHeight
      },
      animate: {
        y: contentSheetAnimatePosition
      },
      exit: {
        y: windowHeight
      },
      transition: animationDefaultConfig
    }, props, {
      style: [props.style, {
        height: snapPoints ? snapPoints[0] * windowHeight * 0.01 : undefined
      }],
      ref: mergedRef,
      tabIndex: _reactNative.Platform.OS === 'web' ? 0 : undefined
    }, dialogProps, {
      onLayout: event => {
        const {
          height
        } = event.nativeEvent.layout;
        contentSheetHeight.current = height;
        setContentSheetHeightState(height);
      }
    }), /*#__PURE__*/_react.default.createElement(_ActionsheetContentContext.ActionsheetContentProvider, {
      contentSheetHeight: contentSheetHeight,
      pan: pan,
      handleClose: handleCloseCallback,
      handleCloseBackdrop: handleCloseBackdrop,
      snapPoints: snapPoints
    }, focusScope ? /*#__PURE__*/_react.default.createElement(_focus.FocusScope, {
      contain: trapFocus,
      autoFocus: visible && !initialFocusRef,
      restoreFocus: visible && !finalFocusRef
    }, children) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children)))));
  });
}
var _default = exports.default = ActionsheetContent;
//# sourceMappingURL=ActionsheetContent.js.map