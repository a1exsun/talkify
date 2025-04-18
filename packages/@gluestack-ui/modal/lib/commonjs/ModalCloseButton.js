"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Context = require("./Context");
var _interactions = require("@react-native-aria/interactions");
var _utils = require("@gluestack-ui/utils");
var _focus = require("@react-native-aria/focus");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ModalCloseButton = StyledModalCloseButton => /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    hoverProps,
    isHovered
  } = (0, _interactions.useHover)();
  const {
    pressProps,
    isPressed
  } = (0, _interactions.usePress)({
    isDisabled: props.isDisabled
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
    // _icon,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    ...resolvedProps
  } = props;
  const {
    handleClose
  } = _react.default.useContext(_Context.ModalContext);
  return /*#__PURE__*/_react.default.createElement(StyledModalCloseButton, _extends({
    role: "button",
    ref: ref,
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
    onPress: handleClose,
    states: {
      hover: isHovered,
      focus: isFocused,
      active: isPressed,
      focusVisible: isFocusVisible
    },
    dataSet: {
      hover: isHovered ? 'true' : 'false',
      focus: isFocused ? 'true' : 'false',
      active: isPressed ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false'
    }
  }, resolvedProps), children);
});
var _default = exports.default = ModalCloseButton;
//# sourceMappingURL=ModalCloseButton.js.map