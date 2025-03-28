"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _slider = require("@react-stately/slider");
var _hooks = require("@gluestack-ui/hooks");
var _Context = require("./Context");
var _slider2 = require("@react-native-aria/slider");
var _formControl = require("@gluestack-ui/form-control");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Slider(StyledSlider) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    orientation = 'horizontal',
    isReversed = false,
    'isHovered': isHoveredProp,
    'isDisabled': isDisabledProp,
    'isFocused': isFocusedProp,
    'isFocusVisible': isFocusVisibleProp,
    'isPressed': isPressedProp,
    // @ts-ignore
    'aria-label': ariaLabel = 'Slider',
    children,
    ...props
  }, ref) => {
    const formControlContext = (0, _formControl.useFormControlContext)();
    const [isFocused, setIsFocused] = _react.default.useState(false);
    const [isFocusVisible, setIsFocusVisible] = _react.default.useState(false);
    const [isHovered, setIsHovered] = _react.default.useState(false);
    const [isPressed, setIsPressed] = _react.default.useState(false);
    const {
      isDisabled,
      isReadOnly,
      ...newProps
    } = {
      ...formControlContext,
      ...props,
      'aria-label': ariaLabel
    };
    if (typeof props.value === 'number') {
      //@ts-ignore - React Native Aria slider accepts array of values
      newProps.value = [props.value];
    }
    if (typeof props.defaultValue === 'number') {
      //@ts-ignore - React Native Aria slider accepts array of values
      newProps.defaultValue = [props.defaultValue];
    }
    props = newProps;
    const {
      onLayout,
      layout: trackLayout
    } = (0, _hooks.useLayout)();
    const updatedProps = Object.assign({}, props);
    if (isReadOnly || isDisabled) {
      updatedProps.isDisabled = true;
    }
    const state = (0, _slider.useSliderState)({
      ...updatedProps,
      //@ts-ignore
      numberFormatter: {
        format: e => e
      },
      minValue: props.minValue,
      maxValue: props.maxValue,
      onChange: val => {
        props.onChange && props.onChange(val[0]);
      },
      onChangeEnd: val => {
        props.onChangeEnd && props.onChangeEnd(val[0]);
      }
    });
    const {
      trackProps
    } = (0, _slider2.useSlider)(props, state, trackLayout, isReversed);
    const contextValue = _react.default.useMemo(() => {
      return {
        isDisabled: isDisabled || isDisabledProp,
        isFocused: isFocused || isFocusedProp,
        isFocusVisible: isFocusVisible || isFocusVisibleProp,
        isPressed: isPressed || isPressedProp,
        isHovered: isHovered || isHoveredProp,
        isReadOnly,
        isReversed,
        trackLayout,
        state,
        orientation,
        setIsFocused,
        setIsFocusVisible,
        setIsPressed,
        setIsHovered,
        trackProps,
        onTrackLayout: onLayout
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trackLayout, state, orientation, isDisabled, isReversed, isReadOnly, onLayout, isFocused, setIsFocused, isFocusVisible, setIsFocusVisible, isPressed, setIsPressed, isHoveredProp, isDisabledProp, isFocusedProp, isFocusVisibleProp, isPressedProp]);
    return /*#__PURE__*/_react.default.createElement(_Context.SliderContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/_react.default.createElement(StyledSlider, _extends({}, props, {
      ref: ref,
      states: {
        hover: isHovered || isHoveredProp,
        disabled: isDisabled || isDisabledProp,
        focus: isFocused || isFocusedProp,
        focusVisible: isFocusVisible || isFocusVisibleProp,
        active: isPressed || isPressedProp
      },
      dataSet: {
        hover: isHovered || isHoveredProp ? 'true' : 'false',
        disabled: isDisabled || isDisabledProp ? 'true' : 'false',
        focus: isFocused || isFocusedProp ? 'true' : 'false',
        focusVisible: isFocusVisible || isFocusVisibleProp ? 'true' : 'false',
        active: isPressed || isPressedProp ? 'true' : 'false'
      },
      orientation: orientation ?? 'horizontal',
      isReversed: isReversed ?? false
    }), children));
  });
}
var _default = exports.default = Slider;
//# sourceMappingURL=Slider.js.map