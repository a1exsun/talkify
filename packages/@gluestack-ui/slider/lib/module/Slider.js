function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useSliderState } from '@react-stately/slider';
import { useLayout } from '@gluestack-ui/hooks';
import { SliderContext } from './Context';
import { useSlider } from '@react-native-aria/slider';
import { useFormControlContext } from '@gluestack-ui/form-control';
function Slider(StyledSlider) {
  return /*#__PURE__*/forwardRef(({
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
    const formControlContext = useFormControlContext();
    const [isFocused, setIsFocused] = React.useState(false);
    const [isFocusVisible, setIsFocusVisible] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);
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
    } = useLayout();
    const updatedProps = Object.assign({}, props);
    if (isReadOnly || isDisabled) {
      updatedProps.isDisabled = true;
    }
    const state = useSliderState({
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
    } = useSlider(props, state, trackLayout, isReversed);
    const contextValue = React.useMemo(() => {
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
    return /*#__PURE__*/React.createElement(SliderContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(StyledSlider, _extends({}, props, {
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
export default Slider;
//# sourceMappingURL=Slider.js.map