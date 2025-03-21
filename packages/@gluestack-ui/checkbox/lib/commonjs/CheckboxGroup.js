"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CheckboxGroupContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _checkbox = require("@react-native-aria/checkbox");
var _checkbox2 = require("@react-stately/checkbox");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CheckboxGroupContext = exports.CheckboxGroupContext = /*#__PURE__*/(0, _react.createContext)(null);
const CheckboxGroup = StyledCheckboxGroup => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const state = (0, _checkbox2.useCheckboxGroupState)({
    ...props,
    validationState: props.isInvalid ? 'invalid' : 'valid'
  });
  const {
    groupProps
  } = (0, _checkbox.useCheckboxGroup)({
    ...props,
    'aria-label': props['aria-label']
  },
  //@ts-ignore
  state);
  const formControlContext = (0, _formControl.useFormControlContext)();
  return /*#__PURE__*/_react.default.createElement(CheckboxGroupContext.Provider, {
    value: {
      state: {
        ...formControlContext,
        ...state
      }
    }
  }, /*#__PURE__*/_react.default.createElement(StyledCheckboxGroup, _extends({}, groupProps, props, {
    ref: ref
  }), children));
});
var _default = exports.default = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map