"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipContent = TooltipContent;
var _react = _interopRequireWildcard(require("react"));
var _context = require("./context");
var _utils = require("@gluestack-ui/utils");
var _overlays = require("@react-native-aria/overlays");
var _OverlayAnimatePresence = require("./OverlayAnimatePresence");
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function TooltipContent(StyledTooltipContent, AnimatePresence) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    children,
    style,
    ...props
  }, ref) => {
    const {
      value
    } = (0, _context.useTooltipContext)('TooltipContext');
    const {
      isOpen,
      targetRef,
      placement,
      crossOffset,
      offset,
      shouldFlip,
      shouldOverlapWithTrigger
    } = value;
    const overlayRef = _react.default.useRef(null);
    const {
      overlayProps,
      placement: calculatedPlacement
    } = (0, _overlays.useOverlayPosition)({
      placement,
      targetRef,
      overlayRef,
      crossOffset,
      offset,
      shouldOverlapWithTrigger,
      shouldFlip
    });
    if (Object.keys(overlayProps.style).length === 0) {
      overlayProps.style = {
        top: -1000,
        left: -1000
      };
    }
    const mergedRef = (0, _utils.mergeRefs)([ref, overlayRef]);
    const initialAnimatedStyles = {
      opacity: 0,
      scale: 0.9,
      y: calculatedPlacement === 'top' ? 6 : calculatedPlacement === 'bottom' ? -6 : 0,
      x: calculatedPlacement === 'right' ? -6 : calculatedPlacement === 'left' ? 6 : 0
    };
    const animatedStyles = {
      opacity: 1,
      y: 0,
      scale: 1,
      x: 0
    };
    const exitAnimatedStyles = {
      opacity: 0,
      x: 0,
      y: 0
    };
    return /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
      visible: isOpen,
      AnimatePresence: AnimatePresence
    }, /*#__PURE__*/_react.default.createElement(StyledTooltipContent, _extends({
      initial: initialAnimatedStyles,
      animate: animatedStyles,
      exit: exitAnimatedStyles,
      transition: {
        type: 'timing',
        duration: 100
      }
    }, props, {
      ref: mergedRef,
      key: placement + calculatedPlacement,
      role: _reactNative.Platform.OS === 'web' ? 'tooltip' : undefined,
      style: [overlayProps.style, {
        position: 'absolute'
      }, style]
    }), children));
  });
}
//# sourceMappingURL=TooltipContent.js.map