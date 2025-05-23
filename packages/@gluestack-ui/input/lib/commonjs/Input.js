"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _formControl = require("@gluestack-ui/form-control");
var _InputContext = require("./InputContext");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Input = StyledInput => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  onKeyPress,
  type = 'text',
  'aria-label': ariaLabel = 'Input Field',
  secureTextEntry,
  editable,
  disabled,
  ...props
}, ref) => {
  const {
    isDisabled,
    isReadOnly,
    isFocused,
    isInvalid,
    setIsFocused,
    isHovered,
    isFocusVisible,
    inputFieldRef,
    isRequired
  } = (0, _InputContext.useInput)('InputContext');
  const inputProps = (0, _formControl.useFormControl)({
    isDisabled: props.isDisabled || disabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    id: props.id
  });
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const mergedRef = (0, _utils.mergeRefs)([ref, inputFieldRef]);
  const editableProp = (0, _react.useMemo)(() => {
    if (editable !== undefined) {
      return editable;
    } else {
      return isDisabled || inputProps.isDisabled || isReadOnly ? false : true;
    }
  }, [isDisabled, inputProps.isDisabled, isReadOnly, editable]);
  return /*#__PURE__*/_react.default.createElement(StyledInput, _extends({}, props, {
    type: type,
    states: {
      focus: isFocused,
      invalid: isInvalid,
      readonly: isReadOnly,
      required: isRequired,
      hover: isHovered,
      focusVisible: isFocusVisible,
      disabled: isDisabled || inputProps.isDisabled
    },
    dataSet: {
      focus: isFocused ? 'true' : 'false',
      invalid: isInvalid ? 'true' : 'false',
      readonly: isReadOnly ? 'true' : 'false',
      required: isRequired ? 'true' : 'false',
      hover: isHovered ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false',
      disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false'
    },
    disabled: isDisabled || inputProps.isDisabled,
    secureTextEntry: secureTextEntry || type === 'password',
    accessible: true,
    "aria-label": ariaLabel,
    "aria-required": isRequired || inputProps.isRequired,
    "aria-invalid": isInvalid || inputProps.isInvalid,
    "aria-disabled": isDisabled || inputProps.isDisabled,
    "aria-selected": _reactNative.Platform.OS !== 'web' ? isFocused : undefined
    // ios accessibility
    ,
    accessibilityElementsHidden: isDisabled || inputProps.isDisabled,
    readOnly: !editableProp,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, props !== null && props !== void 0 && props.onFocus ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, props !== null && props !== void 0 && props.onBlur ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => {});
    },
    ref: mergedRef
  }), children);
});
exports.Input = Input;
//# sourceMappingURL=Input.js.map