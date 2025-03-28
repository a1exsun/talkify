"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectTrigger = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SelectContext = require("./SelectContext");
var _utils = require("@gluestack-ui/utils");
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectTrigger = StyledSelectTrigger => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const {
    isDisabled,
    hoverRef,
    setIsOpen,
    onOpen,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isReadOnly
  } = _react.default.useContext(_SelectContext.SelectContext);
  return /*#__PURE__*/_react.default.createElement(StyledSelectTrigger, _extends({
    onPress: () => {
      if (!isReadOnly) {
        _reactNative.Keyboard.dismiss();
        setIsOpen(true);
        onOpen && onOpen();
      }
    },
    states: {
      focus: isFocused,
      focusVisible: isFocusVisible,
      hover: isHovered,
      disabled: isDisabled,
      invalid: isInvalid
    },
    dataSet: {
      focus: isFocused ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false',
      hover: isHovered ? 'true' : 'false',
      disabled: isDisabled ? 'true' : 'false',
      invalid: isInvalid ? 'true' : 'false'
    },
    disabled: isDisabled,
    role: "button",
    ref: (0, _utils.mergeRefs)([ref, hoverRef]),
    tabIndex: -1
  }, props), children);
});
exports.SelectTrigger = SelectTrigger;
//# sourceMappingURL=SelectTrigger.js.map