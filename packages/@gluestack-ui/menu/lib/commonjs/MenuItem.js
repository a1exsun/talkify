"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = MenuItem;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
var _interactions = require("@react-native-aria/interactions");
var _focus = require("@react-native-aria/focus");
var _menu = require("@react-native-aria/menu");
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const usePressed = (onPressIn, onPressOut, onPress, isDisabled) => {
  if (isDisabled) return {};
  return {
    pressEvents: {
      onPressIn,
      onPressOut,
      onPress
    }
  };
};
function MenuItem({
  StyledMenuItem,
  item,
  state,
  onAction,
  onClose,
  closeOnSelect
}) {
  const itemProps = {
    ...item.props
  };
  // Get props for the menu item element
  const ref = _react.default.useRef(null);
  const {
    menuItemProps: {
      focusable,
      ...restMenuProps
    }
  } = (0, _menu.useMenuItem)({
    'key': item.key,
    onAction,
    onClose,
    closeOnSelect,
    'aria-label': itemProps.textValue,
    ...itemProps
  }, state, ref);

  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  const toggleSelection = (0, _react.useCallback)(() => {
    if (_reactNative.Platform.OS === 'web') {
      state.selectionManager.toggleSelection(item.key);
    }
  }, [state.selectionManager, item.key]);
  const {
    focusProps: focusRingProps,
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const {
    pressProps,
    isPressed
  } = (0, _interactions.usePress)({});
  const {
    isHovered,
    hoverProps
  } = (0, _interactions.useHover)();
  const isFocused = state.selectionManager.focusedKey === item.key;
  const {
    children,
    ...rest
  } = item.props;
  const {
    pressEvents
  } = usePressed(
  // @ts-ignore
  (0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onPressIn, (0, _utils.composeEventHandlers)(restMenuProps.onPressIn, toggleSelection)), (0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onPressOut, restMenuProps.onPressOut), (0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onPress, restMenuProps.onPress), state.selectionManager.isDisabled(item.key));
  return /*#__PURE__*/_react.default.createElement(StyledMenuItem, _extends({
    ref: ref,
    tabIndex: focusable === undefined ? -1 : focusable
  }, restMenuProps, {
    states: {
      hover: isHovered,
      focus: isFocused,
      active: isPressed,
      focusVisible: isFocusVisible,
      selected: state.selectionManager.isSelected(item.key),
      disabled: state.selectionManager.isDisabled(item.key)
    },
    dataSet: {
      hover: isHovered ? 'true' : 'false',
      focus: isFocused ? 'true' : 'false',
      active: isPressed ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false',
      selected: state.selectionManager.isSelected(item.key) ? 'true' : 'false',
      disabled: state.selectionManager.isDisabled(item.key) ? 'true' : 'false'
    }
  }, rest, {
    // @ts-ignore - web only
    onHoverIn: (0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: (0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onFocus, focusRingProps.onFocus), restMenuProps === null || restMenuProps === void 0 ? void 0 : restMenuProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onBlur, focusRingProps.onBlur), restMenuProps === null || restMenuProps === void 0 ? void 0 : restMenuProps.onBlur),
    onPressIn: (0, _utils.composeEventHandlers)(pressProps.onPressIn, pressEvents === null || pressEvents === void 0 ? void 0 : pressEvents.onPressIn),
    onPress: (0, _utils.composeEventHandlers)(pressProps.onPress, pressEvents === null || pressEvents === void 0 ? void 0 : pressEvents.onPress),
    onPressOut: (0, _utils.composeEventHandlers)(pressProps.onPressOut, pressEvents === null || pressEvents === void 0 ? void 0 : pressEvents.onPressOut)
  }), children);
}
//# sourceMappingURL=MenuItem.js.map