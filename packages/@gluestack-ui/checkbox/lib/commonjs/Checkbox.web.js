"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CheckboxProvider = require("./CheckboxProvider");
var _focus = require("@react-native-aria/focus");
var _interactions = require("@react-native-aria/interactions");
var _toggle = require("@react-stately/toggle");
var _checkbox = require("@react-native-aria/checkbox");
var _CheckboxGroup = require("./CheckboxGroup");
var _utils = require("@gluestack-ui/utils");
var _formControl = require("@gluestack-ui/form-control");
var _visuallyHidden = require("@react-aria/visually-hidden");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Checkbox = StyledCheckbox => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const {
    isHovered: isHoveredProp,
    isFocusVisible: isFocusVisibleProp,
    isChecked: isCheckedProp,
    isDisabled: isDisabledProp,
    isInvalid: isInvalidProp,
    isReadOnly: isReadOnlyProp,
    isIndeterminate: isIndeterminateProp,
    isFocused,
    isPressed
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
  //aria-state-hook
  const _ref = _react.default.useRef(null);
  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const {
    focusProps,
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const ariaLabel = combinedProps['aria-label'] || combinedProps.value || 'Checkbox';
  const mergedRef = (0, _utils.mergeRefs)([ref, _ref]);
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
    checked: isChecked,
    disabled: isDisabled
  } = inputProps;
  return /*#__PURE__*/_react.default.createElement(StyledCheckbox, _extends({}, contextCombinedProps, {
    role: "label"
    // remove in future, role="label" is not supported in react-native-web, PR is open
    ,
    accessibilityRole: "label",
    ref: mergedRef,
    states: {
      checked: isChecked || isCheckedProp,
      disabled: isDisabled || isDisabledProp,
      hover: isHovered || isHoveredProp,
      invalid: isInvalid || isInvalidProp,
      readonly: isReadOnly || isReadOnlyProp,
      active: isPressed,
      focus: isFocused,
      indeterminate: isIndeterminate || isIndeterminateProp,
      focusVisible: isFocusVisible || isFocusVisibleProp
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
      focusVisible: isFocusVisible || isFocusVisibleProp ? 'true' : 'false'
    }
  }), /*#__PURE__*/_react.default.createElement(_CheckboxProvider.CheckboxProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocusVisible || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isPressed: isPressed
  }, /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, /*#__PURE__*/_react.default.createElement("input", _extends({}, inputProps, focusProps, {
    ref: mergedRef
  }))), children));
});
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.web.js.map