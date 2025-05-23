"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PopoverContext = require("./PopoverContext");
var _utils = require("./utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable react-native/no-inline-styles */
const PopoverArrow = StyledPopoverArrow => /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    value: {
      placement,
      actualPlacement,
      updateArrowSize,
      arrowHeight,
      arrowWidth,
      arrowProps,
      updateArrowElement,
      isFlipped
    }
  } = (0, _PopoverContext.usePopoverContent)('PopoverContext');
  const additionalStyles = _react.default.useMemo(() => {
    return (0, _utils.getArrowStyles)({
      height: arrowHeight,
      width: arrowWidth,
      actualPlacement
    });
  }, [arrowHeight, arrowWidth, placement, actualPlacement]);
  _react.default.useEffect(() => {
    var _arrowProps$style, _arrowProps$style2, _arrowProps$style3, _arrowProps$style4;
    const ArrowComponent = /*#__PURE__*/_react.default.createElement(StyledPopoverArrow, _extends({
      ref: ref,
      onLayout: event => {
        const {
          height,
          width
        } = event.nativeEvent.layout;
        updateArrowSize({
          height,
          width
        });
      }
    }, props, {
      key: actualPlacement + 'arrow',
      initial: {
        opacity: 0,
        y: actualPlacement === 'top' ? 2 : actualPlacement === 'bottom' ? -2 : 0,
        x: actualPlacement === 'right' ? -2 : actualPlacement === 'left' ? 2 : 0,
        rotate: '45deg'
      },
      animate: {
        opacity: 1,
        y: 0,
        x: 0,
        rotate: '45deg'
      },
      exit: {
        opacity: 0,
        rotate: '45deg'
      },
      style: [props === null || props === void 0 ? void 0 : props.style, arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style, {
        // To avoid border radius case
        top: placement === 'right bottom' || placement === 'left bottom' ? (arrowProps === null || arrowProps === void 0 || (_arrowProps$style = arrowProps.style) === null || _arrowProps$style === void 0 ? void 0 : _arrowProps$style.top) > 4 ? (arrowProps === null || arrowProps === void 0 || (_arrowProps$style2 = arrowProps.style) === null || _arrowProps$style2 === void 0 ? void 0 : _arrowProps$style2.top) - 4 : arrowProps === null || arrowProps === void 0 || (_arrowProps$style3 = arrowProps.style) === null || _arrowProps$style3 === void 0 ? void 0 : _arrowProps$style3.top : arrowProps === null || arrowProps === void 0 || (_arrowProps$style4 = arrowProps.style) === null || _arrowProps$style4 === void 0 ? void 0 : _arrowProps$style4.top
      }, additionalStyles],
      dataSet: {
        flip: isFlipped
      },
      states: {
        flip: isFlipped
      }
    }));
    updateArrowElement(ArrowComponent);
  }, [additionalStyles, placement, arrowHeight, arrowWidth, actualPlacement, JSON.stringify(arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.style)]);
  return null;
});
var _default = exports.default = PopoverArrow;
//# sourceMappingURL=PopoverArrow.js.map