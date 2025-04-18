"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = Tooltip;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _interactions = require("@react-native-aria/interactions");
var _context = require("./context");
var _utils = require("@react-native-aria/utils");
var _reactNative = require("react-native");
var _overlay = require("@gluestack-ui/overlay");
var _utils2 = require("@gluestack-ui/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Tooltip(StyledTooltip) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    isOpen: isOpenProp,
    isDisabled,
    defaultIsOpen = false,
    onClose,
    onOpen,
    openDelay = 350,
    closeDelay = 0,
    placement = 'bottom',
    children,
    closeOnClick = true,
    trigger,
    crossOffset,
    offset = 10,
    shouldOverlapWithTrigger = false,
    shouldFlip = true,
    // @ts-ignore
    _experimentalOverlay = false,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = (0, _hooks.useControllableState)({
      value: isOpenProp,
      defaultValue: defaultIsOpen,
      onChange: value => {
        value ? onOpen && onOpen() : onClose && onClose();
      }
    });
    const handleOpen = _react.default.useCallback(() => {
      setIsOpen(true);
    }, [setIsOpen]);
    const handleClose = _react.default.useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);
    const enterTimeout = _react.default.useRef();
    const exitTimeout = _react.default.useRef();
    const openWithDelay = _react.default.useCallback(() => {
      if (!isDisabled) {
        enterTimeout.current = setTimeout(handleOpen, openDelay);
      }
    }, [isDisabled, handleOpen, openDelay]);
    const closeWithDelay = _react.default.useCallback(() => {
      if (enterTimeout.current) {
        clearTimeout(enterTimeout.current);
      }
      exitTimeout.current = setTimeout(handleClose, closeDelay);
    }, [closeDelay, handleClose]);
    const tooltipID = (0, _utils.useId)();
    _react.default.useEffect(() => () => {
      clearTimeout(enterTimeout.current);
      clearTimeout(exitTimeout.current);
    }, []);
    const updatedTrigger = reference => {
      return trigger({
        'ref': reference,
        'collapsable': false,
        'onPress': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onPress,
        () => {
          if (closeOnClick) {
            closeWithDelay();
          }
        }),
        'onFocus': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onFocus,
        openWithDelay),
        'onBlur': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onBlur,
        closeWithDelay),
        'onMouseEnter': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onMouseEnter,
        openWithDelay),
        'onMouseLeave': (0, _utils2.composeEventHandlers)(
        // newChildren.props.onMouseLeave,
        closeWithDelay),
        // 'ref': mergeRefs([newChildren.ref, targetRef]),
        'aria-describedby': isOpen ? tooltipID : undefined
      }, {
        open: isOpen
      });
    };
    const targetRef = _react.default.useRef(null);
    (0, _interactions.useKeyboardDismissable)({
      enabled: isOpen,
      callback: () => setIsOpen(false)
    });
    if (_experimentalOverlay) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/_react.default.createElement(_context.TooltipProvider, {
        value: {
          placement,
          targetRef,
          handleClose: handleClose,
          isOpen,
          crossOffset,
          offset,
          shouldOverlapWithTrigger,
          shouldFlip
        }
      }, /*#__PURE__*/_react.default.createElement(StyledTooltip, _extends({}, props, {
        ref: ref,
        role: _reactNative.Platform.OS === 'web' ? 'tooltip' : undefined,
        tabIndex: -1,
        id: tooltipID
      }), children)));
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
      isOpen: isOpen,
      onRequestClose: handleClose
    }, /*#__PURE__*/_react.default.createElement(_context.TooltipProvider, {
      value: {
        placement,
        targetRef,
        handleClose: handleClose,
        isOpen,
        crossOffset,
        offset,
        shouldOverlapWithTrigger,
        shouldFlip
      }
    }, /*#__PURE__*/_react.default.createElement(StyledTooltip, _extends({}, props, {
      ref: ref,
      role: _reactNative.Platform.OS === 'web' ? 'tooltip' : undefined,
      focussable: false,
      id: tooltipID
    }), children))));
  });
}
//# sourceMappingURL=Tooltip.js.map