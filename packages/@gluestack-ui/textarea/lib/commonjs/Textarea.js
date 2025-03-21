"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _formControl = require("@gluestack-ui/form-control");
var _TextareaContext = require("./TextareaContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Textarea = StyledTextarea => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  multiline = true,
  onKeyPress,
  'aria-label': ariaLabel = 'Input Field',
  ...props
}, ref) => {
  const {
    isDisabled,
    isReadOnly,
    isFocused,
    isInvalid,
    isHovered,
    isFocusVisible,
    isRequired,
    handleFocus
  } = (0, _TextareaContext.useTextarea)('TextareaContext');
  const textareaProps = (0, _formControl.useFormControl)({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    id: props.id
  });
  return /*#__PURE__*/_react.default.createElement(StyledTextarea, _extends({
    ref: ref
  }, props, {
    states: {
      focus: isFocused,
      invalid: isInvalid,
      readonly: isReadOnly,
      required: isRequired,
      hover: isHovered,
      focusVisible: isFocusVisible,
      disabled: isDisabled || textareaProps.isDisabled
    },
    dataSet: {
      focus: isFocused ? 'true' : 'false',
      invalid: isInvalid ? 'true' : 'false',
      readonly: isReadOnly ? 'true' : 'false',
      required: isRequired ? 'true' : 'false',
      hover: isHovered ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false',
      disabled: isDisabled || textareaProps.isDisabled ? 'true' : 'false'
    },
    accessible: true,
    "aria-label": ariaLabel,
    "aria-required": isRequired || textareaProps.isRequired,
    "aria-invalid": isInvalid || textareaProps.isInvalid,
    "aria-disabled": isDisabled || textareaProps.isDisabled,
    "aria-selected": _reactNative.Platform.OS !== 'web' ? isFocused : undefined,
    "aria-hidden": isDisabled,
    editable: isDisabled || isReadOnly ? false : true,
    disabled: isDisabled || textareaProps.isDisabled,
    multiline: multiline,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, props !== null && props !== void 0 && props.onFocus ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, props !== null && props !== void 0 && props.onBlur ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => {});
    }
  }), children);
});
exports.Textarea = Textarea;
//# sourceMappingURL=Textarea.js.map