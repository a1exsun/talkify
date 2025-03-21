"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _slider = require("@react-native-aria/slider");
var _visuallyHidden = require("@react-aria/visually-hidden");
var _Context = require("./Context");
var _interactions = require("@react-native-aria/interactions");
var _utils = require("@gluestack-ui/utils");
var _focus = require("@react-native-aria/focus");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const positionMap = new Map([['horizontal true', 'right'], ['horizontal false', 'left'], ['vertical true', 'top'], ['vertical false', 'bottom']]);
function SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    children,
    scaleOnPressed = 1,
    style,
    ...props
  }, ref) => {
    var _thumbStyles$transfor;
    const [thumbSize, setThumbSize] = _react.default.useState({
      height: 0,
      width: 0
    });
    const _ref = _react.default.useRef(null);
    const {
      isHovered
    } = (0, _interactions.useHover)({}, _ref);
    const {
      state,
      trackLayout,
      orientation,
      isDisabled,
      isReversed,
      isPressed,
      setIsHovered,
      setIsPressed,
      setIsFocused,
      setIsFocusVisible
    } = _react.default.useContext(_Context.SliderContext);
    const inputRef = _react.default.useRef(null);
    const {
      thumbProps,
      inputProps
    } = (0, _slider.useSliderThumb)({
      index: 0,
      trackLayout,
      inputRef,
      isDisabled,
      orientation: orientation
    }, state, isReversed);
    const {
      isFocusVisible,
      focusProps: focusRingProps
    } = (0, _focus.useFocusRing)();
    const {
      isFocused,
      focusProps
    } = (0, _focus.useFocus)();
    const thumbStyles = {
      transform: orientation === 'vertical' ? [{
        translateY: isReversed ? -(thumbSize === null || thumbSize === void 0 ? void 0 : thumbSize.height) / 2 : (thumbSize === null || thumbSize === void 0 ? void 0 : thumbSize.height) / 2
      }] : [{
        translateX: isReversed ? (thumbSize === null || thumbSize === void 0 ? void 0 : thumbSize.height) / 2 : -(thumbSize === null || thumbSize === void 0 ? void 0 : thumbSize.height) / 2
      }]
    };
    thumbStyles[`${positionMap.get(`${orientation} ${isReversed}`)}`] = `${state.getThumbPercent(0) * 100}%`;
    thumbStyles === null || thumbStyles === void 0 || (_thumbStyles$transfor = thumbStyles.transform) === null || _thumbStyles$transfor === void 0 || _thumbStyles$transfor.push({
      scale: state.isThumbDragging(0) ? scaleOnPressed : 1
    });
    (0, _react.useEffect)(() => {
      setIsPressed(state.isThumbDragging(0));
    }, [state, setIsPressed, isPressed]);
    (0, _react.useEffect)(() => {
      setIsFocused(isFocused);
    }, [isFocused, setIsFocused]);
    (0, _react.useEffect)(() => {
      setIsFocusVisible(isFocusVisible);
    }, [isFocusVisible, setIsFocusVisible]);
    (0, _react.useEffect)(() => {
      setIsHovered(isHovered);
    }, [isHovered, setIsHovered]);
    return /*#__PURE__*/_react.default.createElement(StyledSliderThumb, _extends({
      onLayout: layout => {
        var _layout$nativeEvent, _layout$nativeEvent2;
        setThumbSize({
          height: layout === null || layout === void 0 || (_layout$nativeEvent = layout.nativeEvent) === null || _layout$nativeEvent === void 0 || (_layout$nativeEvent = _layout$nativeEvent.layout) === null || _layout$nativeEvent === void 0 ? void 0 : _layout$nativeEvent.height,
          width: layout === null || layout === void 0 || (_layout$nativeEvent2 = layout.nativeEvent) === null || _layout$nativeEvent2 === void 0 || (_layout$nativeEvent2 = _layout$nativeEvent2.layout) === null || _layout$nativeEvent2 === void 0 ? void 0 : _layout$nativeEvent2.width
        });
      },
      states: {
        hover: isHovered,
        disabled: isDisabled,
        focus: isFocused,
        focusVisible: isFocusVisible,
        active: isPressed
      },
      dataSet: {
        hover: isHovered ? 'true' : 'false',
        disabled: isDisabled ? 'true' : 'false',
        focus: isFocused ? 'true' : 'false',
        focusVisible: isFocusVisible ? 'true' : 'false',
        active: isPressed ? 'true' : 'false'
      },
      disabled: isDisabled
    }, thumbProps, {
      style: [style, thumbStyles]
      // @ts-ignore - web only
      ,
      onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)
      // @ts-ignore - web only
      ,
      onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur),
      ref: (0, _utils.mergeRefs)([_ref, ref])
    }, props), /*#__PURE__*/_react.default.createElement(StyledSliderThumbInteraction, {
      states: {
        hover: isHovered,
        focus: isFocused,
        focusVisible: isFocusVisible,
        disabled: isDisabled,
        active: isPressed
      },
      dataSet: {
        hover: isHovered ? 'true' : 'false',
        focus: isFocused ? 'true' : 'false',
        focusVisible: isFocusVisible ? 'true' : 'false',
        disabled: isDisabled ? 'true' : 'false',
        active: isPressed ? 'true' : 'false'
      }
    }, children, _reactNative.Platform.OS === 'web' && /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, /*#__PURE__*/_react.default.createElement("input", _extends({
      ref: inputRef
    }, inputProps)))));
  });
}
var _default = exports.default = SliderThumb;
//# sourceMappingURL=SliderThumb.js.map