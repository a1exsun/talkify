"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectPortal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SelectContext = require("./SelectContext");
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PLACEHOLDER_OPTION = '__GluestackPlaceholder__';
const SelectPortal = StyledSelectPortal => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const {
    isOpen,
    handleClose,
    closeOnOverlayClick,
    isDisabled,
    hoverRef,
    hoverProps,
    focusProps,
    onValueChange,
    value,
    setFocused,
    setValue,
    label,
    setLabel,
    onOpen,
    placeholder,
    isReadOnly,
    ...portalProps
  } = _react.default.useContext(_SelectContext.SelectContext);
  if (_reactNative.Platform.OS !== 'web') {
    return /*#__PURE__*/_react.default.createElement(StyledSelectPortal, _extends({
      isOpen: isOpen,
      onClose: handleClose,
      closeOnOverlayClick: closeOnOverlayClick
    }, props, {
      ref: ref
    }), /*#__PURE__*/_react.default.createElement(_SelectContext.SelectPortalContext.Provider, {
      value: {
        isOpen,
        handleClose,
        closeOnOverlayClick,
        isDisabled,
        hoverRef,
        hoverProps,
        focusProps,
        setValue,
        value: !value ? PLACEHOLDER_OPTION : value,
        setLabel,
        label,
        isReadOnly,
        setFocused,
        onValueChange,
        placeholder,
        ...portalProps
      }
    }, children));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("select", _extends({
    disabled: isDisabled || isReadOnly
  }, focusProps, {
    onMouseEnter: hoverProps.onHoverIn,
    onMouseLeave: hoverProps.onHoverOut,
    onChange: e => {
      onValueChange(e.target.value);
      setLabel(e.target.options[e.target.selectedIndex].text);
      handleClose();
    },
    onKeyDown: e => {
      if (e.code === 'Space') {
        onOpen && onOpen();
      }
    },
    ref: (0, _utils.mergeRefs)([ref, hoverRef]),
    value: !value ? PLACEHOLDER_OPTION : value,
    "aria-label": placeholder,
    "aria-readonly": isReadOnly,
    style: _reactNative.StyleSheet.flatten([{
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0,
      zIndex: 1,
      cursor: isDisabled ? 'not-allowed' : 'pointer'
    }]),
    onClick: onOpen,
    onFocus: () => {
      setFocused(true);
    },
    onBlur: () => {
      setFocused(false);
    }
  }), /*#__PURE__*/_react.default.createElement("option", {
    disabled: true,
    value: PLACEHOLDER_OPTION
  }, placeholder), children));
});
exports.SelectPortal = SelectPortal;
//# sourceMappingURL=SelectPortal.js.map