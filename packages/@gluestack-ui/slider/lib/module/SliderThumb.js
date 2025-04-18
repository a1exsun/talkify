function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useEffect } from 'react';
import { Platform } from 'react-native';
import { useSliderThumb } from '@react-native-aria/slider';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SliderContext } from './Context';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '@gluestack-ui/utils';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
import { composeEventHandlers } from '@gluestack-ui/utils';
const positionMap = new Map([['horizontal true', 'right'], ['horizontal false', 'left'], ['vertical true', 'top'], ['vertical false', 'bottom']]);
function SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction) {
  return /*#__PURE__*/forwardRef(({
    children,
    scaleOnPressed = 1,
    style,
    ...props
  }, ref) => {
    var _thumbStyles$transfor;
    const [thumbSize, setThumbSize] = React.useState({
      height: 0,
      width: 0
    });
    const _ref = React.useRef(null);
    const {
      isHovered
    } = useHover({}, _ref);
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
    } = React.useContext(SliderContext);
    const inputRef = React.useRef(null);
    const {
      thumbProps,
      inputProps
    } = useSliderThumb({
      index: 0,
      trackLayout,
      inputRef,
      isDisabled,
      orientation: orientation
    }, state, isReversed);
    const {
      isFocusVisible,
      focusProps: focusRingProps
    } = useFocusRing();
    const {
      isFocused,
      focusProps
    } = useFocus();
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
    useEffect(() => {
      setIsPressed(state.isThumbDragging(0));
    }, [state, setIsPressed, isPressed]);
    useEffect(() => {
      setIsFocused(isFocused);
    }, [isFocused, setIsFocused]);
    useEffect(() => {
      setIsFocusVisible(isFocusVisible);
    }, [isFocusVisible, setIsFocusVisible]);
    useEffect(() => {
      setIsHovered(isHovered);
    }, [isHovered, setIsHovered]);
    return /*#__PURE__*/React.createElement(StyledSliderThumb, _extends({
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
      onFocus: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onFocus, focusProps.onFocus), focusRingProps.onFocus)
      // @ts-ignore - web only
      ,
      onBlur: composeEventHandlers(composeEventHandlers(props === null || props === void 0 ? void 0 : props.onBlur, focusProps.onBlur), focusRingProps.onBlur),
      ref: mergeRefs([_ref, ref])
    }, props), /*#__PURE__*/React.createElement(StyledSliderThumbInteraction, {
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
    }, children, Platform.OS === 'web' && /*#__PURE__*/React.createElement(VisuallyHidden, null, /*#__PURE__*/React.createElement("input", _extends({
      ref: inputRef
    }, inputProps)))));
  });
}
export default SliderThumb;
//# sourceMappingURL=SliderThumb.js.map