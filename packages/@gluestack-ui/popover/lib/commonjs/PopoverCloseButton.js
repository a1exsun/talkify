"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _interactions = require("@react-native-aria/interactions");
var _focus = require("@react-native-aria/focus");
var _utils = require("@gluestack-ui/utils");
var _PopoverContext = require("./PopoverContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PopoverCloseButton = StyledPopoverCloseButton => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  isDisabled,
  isHovered: isHoveredProp,
  isPressed: isPressedProp,
  isFocused: isFocusedProp,
  isFocusVisible: isFocusVisibleProp,
  ...props
}, ref) => {
  const {
    value
  } = (0, _PopoverContext.usePopoverContent)('PopoverContext');
  const {
    handleClose
  } = value;
  const {
    hoverProps,
    isHovered
  } = (0, _interactions.useHover)();
  const {
    pressProps,
    isPressed
  } = (0, _interactions.usePress)({
    isDisabled
  });
  const {
    focusProps,
    isFocused
  } = (0, _focus.useFocus)();
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = (0, _focus.useFocusRing)();
  const {
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(StyledPopoverCloseButton, _extends({
    role: "button",
    states: {
      hover: isHoveredProp || isHovered,
      focus: isFocusedProp || isFocused,
      active: isPressedProp || isPressed,
      disabled: isDisabled,
      focusVisible: isFocusVisibleProp || isFocusVisible
    },
    dataSet: {
      hover: isHoveredProp || isHovered ? 'true' : 'false',
      focus: isFocusedProp || isFocused ? 'true' : 'false',
      active: isPressedProp || isPressed ? 'true' : 'false',
      disabled: isDisabled ? 'true' : 'false',
      focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false'
    },
    ref: ref,
    disabled: isDisabled,
    onPressIn: (0, _utils.composeEventHandlers)(onPressIn, pressProps.onPressIn),
    onPressOut: (0, _utils.composeEventHandlers)(onPressOut, pressProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: (0, _utils.composeEventHandlers)(onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: (0, _utils.composeEventHandlers)(onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(onBlur, focusProps.onBlur), focusRingProps.onBlur),
    onPress: () => {
      handleClose();
    }
  }, resolvedProps), children);
});
var _default = exports.default = PopoverCloseButton;
//# sourceMappingURL=PopoverCloseButton.js.map