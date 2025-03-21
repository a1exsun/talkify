"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _radio = require("@react-native-aria/radio");
var _radio2 = require("@react-stately/radio");
var _RadioGroupContext = require("./RadioGroupContext");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RadioGroup = StyledRadioGroup => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  isInvalid,
  ...props
}, ref) => {
  const formControlContext = (0, _formControl.useFormControlContext)();
  const state = (0, _radio2.useRadioGroupState)({
    ...props,
    validationState: isInvalid ? 'invalid' : 'valid'
  });
  const radioGroupState = (0, _radio.useRadioGroup)({
    ...formControlContext,
    ...props,
    'aria-label': props['aria-label'] || 'RadioGroup'
  }, state);
  const contextValue = _react.default.useMemo(() => {
    return {
      ...formControlContext,
      state
    };
  }, [formControlContext, state]);
  return /*#__PURE__*/_react.default.createElement(_RadioGroupContext.RadioGroupProvider, {
    state: contextValue
  }, /*#__PURE__*/_react.default.createElement(StyledRadioGroup, _extends({}, radioGroupState.radioGroupProps, props, {
    ref: ref
  }), children));
});
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map