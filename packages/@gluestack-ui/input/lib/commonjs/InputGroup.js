"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _InputContext = require("./InputContext");
var _interactions = require("@react-native-aria/interactions");
var _formControl = require("@gluestack-ui/form-control");
var _utils = require("@gluestack-ui/utils");
var _focus = require("@react-native-aria/focus");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputGroup = StyledInputRoot => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  isReadOnly,
  isDisabled,
  isInvalid,
  isRequired,
  isHovered: isHoveredProp,
  isFocused: isFocusedProp,
  isFocusVisible: isFocusVisibleProp,
  ...props
}, ref) => {
  const inputRef = _react.default.useRef();
  const inputFieldRef = _react.default.useRef(null);
  const [isFocused, setIsFocused] = _react.default.useState(false);
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const inputProps = (0, _formControl.useFormControlContext)();
  const {
    isHovered
  } = (0, _interactions.useHover)({}, inputRef);
  const {
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const style = {};
  return /*#__PURE__*/_react.default.createElement(StyledInputRoot, _extends({
    states: {
      hover: isHovered ? isHovered : isHoveredProp,
      focus: isFocusedProp ? isFocusedProp : isFocused,
      disabled: isDisabled || inputProps.isDisabled,
      invalid: isInvalid || inputProps.isInvalid,
      readonly: isReadOnly || inputProps.isReadOnly,
      required: isRequired || inputProps.isRequired,
      focusVisible: isFocusVisibleProp || isFocusVisible
    },
    dataSet: {
      hover: isHovered ? isHovered : isHoveredProp ? 'true' : 'false',
      focus: isFocusedProp ? isFocusedProp : isFocused ? 'true' : 'false',
      disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
      invalid: isInvalid || inputProps.isInvalid ? 'true' : 'false',
      readonly: isReadOnly || inputProps.isReadOnly ? 'true' : 'false',
      required: isRequired || inputProps.isRequired ? 'true' : 'false',
      focusVisible: isFocusVisibleProp || isFocusVisible ? 'true' : 'false'
    }
  }, props, style, {
    ref: (0, _utils.mergeRefs)([inputRef, ref])
  }), /*#__PURE__*/_react.default.createElement(_InputContext.InputProvider, {
    isDisabled: isDisabled || inputProps.isDisabled,
    isInvalid: isInvalid || inputProps.isInvalid,
    isHovered: isHovered ? isHovered : isHoveredProp,
    isFocused: isFocusedProp ? isFocusedProp : isFocused,
    isFocusVisible: isFocusVisibleProp || isFocusVisible,
    isReadOnly: isReadOnly || inputProps.isReadOnly,
    isRequired: isRequired || inputProps.isRequired,
    inputRef: inputRef,
    handleFocus: handleFocus,
    setIsFocused: setIsFocused,
    inputFieldRef: inputFieldRef
  }, children));
});
exports.InputGroup = InputGroup;
//# sourceMappingURL=InputGroup.js.map