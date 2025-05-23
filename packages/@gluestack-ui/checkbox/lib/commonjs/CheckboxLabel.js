"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CheckboxProvider = require("./CheckboxProvider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CheckboxLabel = StyledCheckboxLabel => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const {
    isChecked,
    isDisabled,
    isHovered,
    isInvalid,
    isReadOnly,
    isPressed,
    isFocused,
    isIndeterminate,
    isFocusVisible
  } = (0, _CheckboxProvider.useCheckbox)('CheckboxContext');
  return /*#__PURE__*/_react.default.createElement(StyledCheckboxLabel, _extends({
    states: {
      hover: isHovered,
      checked: isChecked,
      disabled: isDisabled,
      focusVisible: isFocusVisible,
      invalid: isInvalid,
      readOnly: isReadOnly,
      pressed: isPressed,
      focused: isFocused,
      indeterminate: isIndeterminate
    },
    dataSet: {
      hover: isHovered ? 'true' : 'false',
      checked: isChecked ? 'true' : 'false',
      disabled: isDisabled ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false',
      invalid: isInvalid ? 'true' : 'false',
      readOnly: isReadOnly ? 'true' : 'false',
      pressed: isPressed ? 'true' : 'false',
      focused: isFocused ? 'true' : 'false',
      indeterminate: isIndeterminate ? 'true' : 'false'
    }
  }, props, {
    ref: ref
  }), children);
});
var _default = exports.default = CheckboxLabel;
//# sourceMappingURL=CheckboxLabel.js.map