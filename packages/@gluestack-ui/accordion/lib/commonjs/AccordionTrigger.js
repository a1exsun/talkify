"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionTrigger = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Context = require("./Context");
var _interactions = require("@react-native-aria/interactions");
var _focus = require("@react-native-aria/focus");
var _utils = require("@gluestack-ui/utils");
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const AccordionTrigger = StyledAccordionTrigger => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  isHovered: isHoveredProp,
  isFocused: isFocusedProp,
  isPressed: isPressedProp,
  isFocusVisible: isFocusVisibleProp,
  ...props
}, ref) => {
  const {
    titleText
  } = (0, _react.useContext)(_Context.AccordionItemContext);
  const {
    isDisabled,
    buttonProps,
    isExpanded
  } = (0, _react.useContext)(_Context.AccordionItemContext);
  const {
    pressProps,
    isPressed
  } = (0, _interactions.usePress)({
    isDisabled: isDisabled
  });
  const {
    isHovered,
    hoverProps
  } = (0, _interactions.useHover)();
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = (0, _focus.useFocusRing)();
  const {
    isFocused,
    focusProps
  } = (0, _focus.useFocus)();
  return /*#__PURE__*/_react.default.createElement(StyledAccordionTrigger, _extends({
    accessible: true,
    "aria-label": _reactNative.Platform.OS === 'android' ? titleText : undefined,
    ref: ref
  }, props, buttonProps, {
    states: {
      disabled: isDisabled,
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      focusVisible: isFocusVisibleProp || isFocusVisible,
      active: isPressedProp || isPressed
    },
    dataSet: {
      disabled: isDisabled ? 'true' : 'false',
      hover: isHoveredProp || isHovered ? 'true' : 'false',
      focus: isFocusedProp || isFocused ? 'true' : 'false',
      focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false',
      active: isPressedProp || isPressed ? 'true' : 'false'
    },
    disabled: isDisabled,
    onPressIn: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPressIn, pressProps.onPressIn),
    onPressOut: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPressOut, pressProps.onPressOut),
    onPress: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onPress, buttonProps.onPress)
    // @ts-ignore - web only
    ,
    onHoverIn: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: (0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onHoverOut, hoverProps.onHoverOut),
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus),
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur)
  }), typeof children === 'function' ? children({
    hovered: isHovered,
    focused: isFocused,
    pressed: isPressed,
    disabled: isDisabled,
    focusVisible: isFocusVisible,
    isExpanded: isExpanded
  }) : children);
});
exports.AccordionTrigger = AccordionTrigger;
//# sourceMappingURL=AccordionTrigger.js.map