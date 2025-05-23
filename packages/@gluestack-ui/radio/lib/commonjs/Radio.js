"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;
var _react = _interopRequireWildcard(require("react"));
var _focus = require("@react-native-aria/focus");
var _RadioProvider = require("./RadioProvider");
var _radio = require("@react-native-aria/radio");
var _RadioGroupContext = require("./RadioGroupContext");
var _interactions = require("@react-native-aria/interactions");
var _utils = require("@gluestack-ui/utils");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RadioComponent = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(({
  StyledRadio,
  inputProps,
  combinedProps,
  isChecked: isCheckedProp,
  isDisabled: isDisabledProp,
  isFocusVisible: isFocusVisibleProp,
  isHovered: isHoveredProp,
  isInvalid: isInvalidProp,
  isReadOnly: isReadOnlyProp,
  isIndeterminate: isIndeterminateProp,
  isFocused: isFocusedProp,
  isPressed: isPressedProp,
  _onPress,
  onPressIn,
  onPressOut,
  onHoverIn,
  onHoverOut,
  onFocus,
  onBlur,
  children,
  ...props
}, ref) => {
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...restProps
  } = combinedProps;
  const {
    hoverProps,
    isHovered
  } = (0, _interactions.useHover)();
  const {
    focusProps,
    isFocused
  } = (0, _focus.useFocus)();
  const {
    disabled: isDisabled,
    checked: isChecked
  } = inputProps;
  const {
    focusProps: focusRingProps,
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const {
    pressProps,
    isPressed
  } = (0, _interactions.usePress)({
    isDisabled: isDisabled || isDisabledProp
  });
  return /*#__PURE__*/_react.default.createElement(StyledRadio, _extends({
    disabled: isDisabled || isDisabledProp
  }, pressProps, restProps, inputProps, props, {
    ref: ref,
    role: "radio",
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
    states: {
      readonly: isReadOnly || isReadOnlyProp,
      intermediate: isIndeterminate || isIndeterminateProp,
      checked: isChecked || isCheckedProp,
      focusVisible: isFocusVisible || isFocusVisibleProp,
      disabled: isDisabled || isDisabledProp,
      invalid: isInvalid || isInvalidProp,
      hover: isHovered || isHoveredProp,
      focus: isFocused || isFocusedProp,
      active: isPressed || isPressedProp
    },
    dataSet: {
      readonly: isReadOnly || isReadOnlyProp ? 'true' : 'false',
      intermediate: isIndeterminate || isIndeterminateProp ? 'true' : 'false',
      checked: isChecked || isCheckedProp ? 'true' : 'false',
      focusVisible: isFocusVisible || isFocusVisibleProp ? 'true' : 'false',
      disabled: isDisabled || isDisabledProp ? 'true' : 'false',
      invalid: isInvalid || isInvalidProp ? 'true' : 'false',
      hover: isHovered || isHoveredProp ? 'true' : 'false',
      focus: isFocused || isFocusedProp ? 'true' : 'false',
      active: isPressed || isPressedProp ? 'true' : 'false'
    }
  }), /*#__PURE__*/_react.default.createElement(_RadioProvider.RadioProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocused || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isFocused: isFocused || isFocusedProp,
    isPressed: isPressed || isPressedProp
  }, children));
}));
const Radio = StyledRadio => /*#__PURE__*/(0, _react.forwardRef)(({
  isFocusVisible: isFocusVisibleProp,
  isHovered: isHoveredProp,
  isIndeterminate: isIndeterminateProp,
  isFocused: isFocusedProp,
  isPressed: isPressedProp,
  isInvalid: isInvalidProp,
  children,
  ...props
}, ref) => {
  var _contextCombinedProps;
  const formControlContext = (0, _formControl.useFormControlContext)();
  const contextState = (0, _RadioGroupContext.useRadioGroup)('RadioGroupContext');
  const combinedProps = {
    ...formControlContext,
    ...contextState,
    ...props
  };
  const inputRef = _react.default.useRef(null);
  const ariaLabel = props['aria-label'] || props.value || 'Radio';
  const {
    inputProps
  } = (0, _radio.useRadio)({
    ...combinedProps,
    'aria-label': ariaLabel,
    children
  }, contextState.state.state ?? {}, inputRef);
  const contextCombinedProps = _react.default.useMemo(() => {
    return {
      ...combinedProps
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(0, _utils.stableHash)(combinedProps)]);
  if (!contextState) {
    console.error('Error: Radio must be wrapped inside a Radio.Group');
  }
  const isInvalid = (contextCombinedProps === null || contextCombinedProps === void 0 || (_contextCombinedProps = contextCombinedProps.state) === null || _contextCombinedProps === void 0 ? void 0 : _contextCombinedProps.validationState) === 'invalid' ? true : false;
  return /*#__PURE__*/_react.default.createElement(RadioComponent, {
    StyledRadio: StyledRadio,
    inputProps: inputProps,
    combinedProps: contextCombinedProps,
    children: children,
    ref: ref,
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    isInvalid: isInvalid || isInvalidProp
  });
});
exports.Radio = Radio;
//# sourceMappingURL=Radio.js.map