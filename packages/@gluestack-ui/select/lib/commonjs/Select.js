"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SelectContext = require("./SelectContext");
var _interactions = require("@react-native-aria/interactions");
var _hooks = require("@gluestack-ui/hooks");
var _formControl = require("@gluestack-ui/form-control");
var _focus = require("@react-native-aria/focus");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Select = StyledSelect => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  isDisabled,
  isInvalid,
  isReadOnly,
  isRequired,
  isHovered: isHoveredProp,
  isFocused: isFocusedProp,
  isFocusVisible: isFocusVisibleProp,
  selectedValue,
  selectedLabel: selectedLabel,
  onValueChange,
  defaultValue,
  initialLabel,
  onClose,
  onOpen,
  closeOnOverlayClick,
  ...props
}, ref) => {
  const [placeholderState, setPlaceholderState] = _react.default.useState('');
  const [isFocused, setIsFocused] = _react.default.useState(false);
  const {
    isFocusVisible,
    focusProps
  } = (0, _focus.useFocusRing)();
  const hoverRef = _react.default.useRef(null);
  const {
    hoverProps,
    isHovered
  } = (0, _interactions.useHover)({
    isDisabled
  }, hoverRef);
  const [label, setLabel] = _react.default.useState(initialLabel ?? selectedLabel);
  const [isOpen, setIsOpen] = _react.default.useState(false);
  const [value, setValue] = (0, _hooks.useControllableState)({
    value: selectedValue,
    defaultValue,
    onChange: newValue => {
      onValueChange && onValueChange(newValue);
    }
  });
  _react.default.useEffect(() => {
    if (selectedValue === null) {
      setLabel(initialLabel);
    }
  }, [selectedValue, initialLabel]);
  const handleClose = _react.default.useCallback(() => {
    setIsOpen(false);
    onClose && onClose();
  }, [onClose, setIsOpen]);
  const inputProps = (0, _formControl.useFormControlContext)();
  const contextValue = _react.default.useMemo(() => {
    return {
      isHovered: isHovered || isHoveredProp,
      isFocused: isFocused || isFocusedProp,
      isDisabled: isDisabled || inputProps.isDisabled,
      isInvalid: isInvalid || inputProps.isInvalid,
      isRequired: isRequired || inputProps.isRequired,
      isReadOnly: isReadOnly || inputProps.isReadOnly,
      hoverRef: hoverRef,
      hoverProps: hoverProps,
      isFocusVisible: isFocusVisibleProp || isFocusVisible,
      setIsOpen: setIsOpen,
      onOpen: onOpen,
      isOpen: isOpen,
      onValueChange: setValue,
      handleClose: handleClose,
      closeOnOverlayClick: closeOnOverlayClick,
      value: value,
      label: label,
      setLabel: setLabel,
      placeholder: placeholderState,
      setPlaceholder: setPlaceholderState,
      setFocused: setIsFocused,
      focusProps: focusProps
    };
  }, [closeOnOverlayClick, handleClose, hoverProps, isDisabled, isFocusVisible, isFocusVisibleProp, isFocused, isFocusedProp, isHovered, isHoveredProp, isInvalid, isOpen, onOpen, setValue, value, setLabel, label, setIsFocused, focusProps, isRequired, inputProps, isReadOnly, setPlaceholderState, placeholderState]);
  return /*#__PURE__*/_react.default.createElement(StyledSelect, _extends({
    ref: ref,
    tabIndex: -1
  }, props), /*#__PURE__*/_react.default.createElement(_SelectContext.SelectContext.Provider, {
    value: contextValue
  }, children));
});
exports.Select = Select;
//# sourceMappingURL=Select.js.map