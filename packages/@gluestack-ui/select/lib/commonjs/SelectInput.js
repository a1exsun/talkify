"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SelectContext = require("./SelectContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectInput = StyledSelectInput => /*#__PURE__*/(0, _react.forwardRef)(({
  placeholder: placeholderProp,
  ...props
}, ref) => {
  const {
    setValue,
    value,
    label,
    isDisabled,
    placeholder,
    setPlaceholder
  } = _react.default.useContext(_SelectContext.SelectContext);
  (0, _react.useEffect)(() => {
    setPlaceholder && setPlaceholder(placeholderProp);
  }, [placeholderProp, setPlaceholder]);
  return /*#__PURE__*/_react.default.createElement(StyledSelectInput, _extends({
    ref: ref,
    states: {
      disabled: isDisabled
    },
    dataSet: {
      disabled: isDisabled ? 'true' : 'false'
    },
    disabled: isDisabled,
    "aria-hidden": true,
    editable: false,
    tabIndex: -1,
    pointerEvents: "none"
    // android
    ,
    importantForAccessibility: "no",
    placeholder: placeholder,
    value: label ? label : value ? value : '',
    onChangeText: text => setValue(text)
  }, props));
});
exports.SelectInput = SelectInput;
//# sourceMappingURL=SelectInput.js.map