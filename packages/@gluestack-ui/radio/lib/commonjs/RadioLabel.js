"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioLabel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _RadioProvider = require("./RadioProvider");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RadioLabel = StyledRadioLabel => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const {
    isHovered,
    isChecked,
    isDisabled,
    isFocusVisible,
    isInvalid,
    isReadOnly,
    isIndeterminate,
    isFocused,
    isPressed
  } = (0, _RadioProvider.useRadio)('RadioContext');
  return /*#__PURE__*/_react.default.createElement(StyledRadioLabel, _extends({
    states: {
      checked: isChecked,
      disabled: isDisabled,
      focusVisible: isFocused || isFocusVisible,
      hover: isHovered,
      invalid: isInvalid,
      readonly: isReadOnly,
      indeterminate: isIndeterminate,
      focus: isFocused,
      active: isPressed
    },
    dataSet: {
      checked: isChecked ? 'true' : 'false',
      disabled: isDisabled ? 'true' : 'false',
      focusVisible: isFocused || isFocusVisible ? 'true' : 'false',
      hover: isHovered ? 'true' : 'false',
      invalid: isInvalid ? 'true' : 'false',
      readonly: isReadOnly ? 'true' : 'false',
      indeterminate: isIndeterminate ? 'true' : 'false',
      focus: isFocused ? 'true' : 'false',
      active: isPressed ? 'true' : 'false'
    }
  }, props, {
    ref: ref
  }), children);
});
exports.RadioLabel = RadioLabel;
//# sourceMappingURL=RadioLabel.js.map