"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;
var _react = _interopRequireWildcard(require("react"));
var _RadioProvider = require("./RadioProvider");
var _visuallyHidden = require("@react-aria/visually-hidden");
var _focus = require("@react-native-aria/focus");
var _interactions = require("@react-native-aria/interactions");
var _radio = require("@react-native-aria/radio");
var _RadioGroupContext = require("./RadioGroupContext");
var _utils = require("@gluestack-ui/utils");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable @typescript-eslint/no-unused-vars */
const RadioComponent = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(({
  StyledRadio,
  inputProps,
  inputRef,
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
    disabled: isDisabled,
    checked: isChecked
  } = inputProps;
  const _ref = _react.default.useRef(null);
  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const {
    focusProps,
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const [isFocused, setFocused] = _react.default.useState(isFocusedProp);
  const [isPressed, setPressed] = _react.default.useState(isPressedProp);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    isFocusedProp ? setFocused(true) : setFocused(false);
  };
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    isPressedProp ? setPressed(true) : setPressed(false);
  };
  return /*#__PURE__*/_react.default.createElement(StyledRadio, _extends({}, props, restProps, {
    role: "label"
    // remove in future, role="label" is not supported in react-native-web, PR is open
    ,
    accessibilityRole: "label",
    ref: _ref,
    onMouseDown: handlePressIn,
    onMouseUp: handlePressOut,
    states: {
      readonly: isReadOnly,
      intermediate: isIndeterminate,
      checked: isChecked,
      focusVisible: isFocusVisible,
      disabled: isDisabled,
      invalid: isInvalid,
      hover: isHovered
    },
    dataSet: {
      readonly: isReadOnly ? 'true' : 'false',
      intermediate: isIndeterminate ? 'true' : 'false',
      checked: isChecked ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false',
      disabled: isDisabled ? 'true' : 'false',
      invalid: isInvalid ? 'true' : 'false',
      hover: isHovered ? 'true' : 'false'
    }
  }), /*#__PURE__*/_react.default.createElement(_RadioProvider.RadioProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocusVisible || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isFocused: isFocused || isFocusedProp,
    isPressed: isPressed || isPressedProp
  }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, focusProps, {
    ref: ref,
    onFocus: ((0, _utils.composeEventHandlers)(handleFocus), focusProps.onFocus),
    onBlur: ((0, _utils.composeEventHandlers)(handleBlur), focusProps.onBlur)
  }))), children));
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
  const radioState = (0, _radio.useRadio)({
    ...combinedProps,
    'aria-label': ariaLabel,
    children
  }, contextState.state.state ?? {}, inputRef);
  const inputProps = _react.default.useMemo(() => radioState.inputProps,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [radioState.inputProps.checked, radioState.inputProps.disabled]);
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
//# sourceMappingURL=Radio.web.js.map