"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CheckboxProvider = require("./CheckboxProvider");
var _interactions = require("@react-native-aria/interactions");
var _focus = require("@react-native-aria/focus");
var _toggle = require("@react-stately/toggle");
var _checkbox = require("@react-native-aria/checkbox");
var _CheckboxGroup = require("./CheckboxGroup");
var _utils = require("@gluestack-ui/utils");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Checkbox = StyledCheckbox => /*#__PURE__*/(0, _react.forwardRef)(({
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
    isHovered: isHoveredProp,
    isChecked: isCheckedProp,
    isDisabled: isDisabledProp,
    isInvalid: isInvalidProp,
    isReadOnly: isReadOnlyProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isIndeterminate: isIndeterminateProp,
    isFocusVisible
  } = props;
  const formControlContext = (0, _formControl.useFormControlContext)();
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...combinedProps
  } = (0, _utils.combineContextAndProps)(formControlContext, props);
  const checkboxGroupContext = (0, _react.useContext)(_CheckboxGroup.CheckboxGroupContext);
  const state = (0, _toggle.useToggleState)({
    ...combinedProps,
    defaultSelected: props.defaultIsChecked,
    isSelected: isCheckedProp
  });
  const _ref = _react.default.useRef(null);
  const mergedRef = (0, _utils.mergeRefs)([ref, _ref]);
  const ariaLabel = combinedProps['aria-label'] || combinedProps.value || 'Checkbox';
  const {
    inputProps: groupItemInputProps
  } = checkboxGroupContext ?
  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _checkbox.useCheckboxGroupItem)({
    ...combinedProps,
    'aria-label': ariaLabel,
    'value': combinedProps.value
  }, checkboxGroupContext.state,
  //@ts-ignore
  mergedRef) :
  // eslint-disable-next-line react-hooks/rules-of-hooks
  (0, _checkbox.useCheckbox)({
    ...combinedProps,
    'aria-label': ariaLabel
  }, state,
  //@ts-ignore
  mergedRef);
  const inputProps = _react.default.useMemo(() => groupItemInputProps,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [groupItemInputProps.checked, groupItemInputProps.disabled, groupItemInputProps]);
  const contextCombinedProps = _react.default.useMemo(() => {
    return {
      ...checkboxGroupContext,
      ...combinedProps
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(0, _utils.stableHash)(combinedProps)]);
  const {
    hoverProps,
    isHovered
  } = (0, _interactions.useHover)(isHoveredProp, _ref);
  const {
    focusProps,
    isFocused
  } = (0, _focus.useFocus)();
  const {
    checked: isChecked,
    disabled: isDisabled
  } = inputProps;
  const {
    pressProps,
    isPressed
  } = (0, _interactions.usePress)({
    isDisabled: isDisabled || isDisabledProp
  });
  return /*#__PURE__*/_react.default.createElement(StyledCheckbox, _extends({
    disabled: isDisabled || isDisabledProp
  }, pressProps, contextCombinedProps, inputProps, {
    ref: mergedRef,
    role: "checkbox",
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
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(onFocus, focusProps.onFocus)
    // focusRingProps.onFocu
    )
    // @ts-ignore - web only
    ,
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(onBlur, focusProps.onBlur)
    // focusRingProps.onBlur
    ),
    states: {
      checked: isChecked || isCheckedProp,
      disabled: isDisabled || isDisabledProp,
      hover: isHovered || isHoveredProp,
      invalid: isInvalid || isInvalidProp,
      readonly: isReadOnly || isReadOnlyProp,
      active: isPressed,
      focus: isFocused,
      indeterminate: isIndeterminate || isIndeterminateProp,
      focusVisible: isFocusVisible
    },
    dataSet: {
      checked: isChecked || isCheckedProp ? 'true' : 'false',
      disabled: isDisabled || isDisabledProp ? 'true' : 'false',
      hover: isHovered || isHoveredProp ? 'true' : 'false',
      invalid: isInvalid || isInvalidProp ? 'true' : 'false',
      readonly: isReadOnly || isReadOnlyProp ? 'true' : 'false',
      active: isPressed ? 'true' : 'false',
      focus: isFocused ? 'true' : 'false',
      indeterminate: isIndeterminate || isIndeterminateProp ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false'
    }
  }), /*#__PURE__*/_react.default.createElement(_CheckboxProvider.CheckboxProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isPressed: isPressed || isPressedProp,
    isFocused: isFocused || isFocusedProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isFocusVisible: isFocusVisible
  }, children));
});
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map