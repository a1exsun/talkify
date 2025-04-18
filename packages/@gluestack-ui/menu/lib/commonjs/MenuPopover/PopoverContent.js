"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _PopoverContext = require("./PopoverContext");
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
var _overlays = require("@react-native-aria/overlays");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PopoverContent = exports.PopoverContent = /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  style,
  ...props
}, ref) => {
  const {
    value
  } = (0, _PopoverContext.usePopover)('PopoverContext');
  const {
    targetRef,
    onClose,
    initialFocusRef,
    finalFocusRef,
    popoverContentId,
    placement,
    shouldOverlapWithTrigger,
    crossOffset,
    offset,
    shouldFlip,
    isOpen
  } = value;
  const contentRef = _react.default.useRef(null);
  _react.default.useEffect(() => {
    if (contentRef) {
      const reactTag = (0, _reactNative.findNodeHandle)(contentRef.current);
      if (reactTag) {
        _reactNative.AccessibilityInfo.isScreenReaderEnabled().then(enabled => {
          if (enabled) {
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
            _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
          }
        });
      }
    }
  }, [isOpen, contentRef]);
  _react.default.useEffect(() => {
    const finalFocusRefCurrentVal = finalFocusRef === null || finalFocusRef === void 0 ? void 0 : finalFocusRef.current;
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
    return () => {
      if (finalFocusRefCurrentVal) {
        finalFocusRefCurrentVal.focus();
      }
    };
  }, [finalFocusRef, initialFocusRef]);
  (0, _hooks.useKeyboardDismissable)({
    enabled: true,
    callback: onClose
  });
  const overlayRef = _react.default.useRef(null);
  const {
    overlayProps
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
  const mergedRef = (0, _utils.mergeRefs)([ref, overlayRef, contentRef]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    id: popoverContentId
  }, props, {
    ref: mergedRef,
    collapsable: false
    // eslint-disable-next-line react-native/no-inline-styles
    ,
    style: {
      position: 'absolute',
      ...(overlayProps === null || overlayProps === void 0 ? void 0 : overlayProps.style),
      ...style
    },
    accessible: true
  }), children);
});
//# sourceMappingURL=PopoverContent.js.map