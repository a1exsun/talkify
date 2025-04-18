"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSlot = void 0;
var _react = _interopRequireWildcard(require("react"));
var _InputContext = require("./InputContext");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputSlot = StyledInputSlot => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  onPress,
  focusOnPress = true,
  ...props
}, ref) => {
  const {
    inputFieldRef,
    isDisabled
  } = (0, _InputContext.useInput)('InputContext');
  const handleFocus = () => {
    var _inputFieldRef$curren;
    focusOnPress && ((_inputFieldRef$curren = inputFieldRef.current) === null || _inputFieldRef$curren === void 0 ? void 0 : _inputFieldRef$curren.focus());
  };
  const inputProps = (0, _formControl.useFormControl)({
    isDisabled: props.isDisabled
  });
  return /*#__PURE__*/_react.default.createElement(StyledInputSlot, _extends({
    states: {
      disabled: isDisabled || inputProps.isDisabled
    },
    dataSet: {
      disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false'
    },
    onPress: () => {
      if (onPress) onPress();
      handleFocus();
    },
    accessibilityElementsHidden: true,
    tabIndex: -1,
    ref: ref
  }, props), children);
});
exports.InputSlot = InputSlot;
//# sourceMappingURL=InputSlot.js.map