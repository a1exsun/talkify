function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SliderContext } from './Context';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover } from '@react-native-aria/interactions';
function SliderTrack(StyledSliderTrack) {
  return /*#__PURE__*/forwardRef(({
    children,
    style,
    ...props
  }, ref) => {
    const _ref = React.useRef(null);
    const {
      isHovered
    } = useHover({}, _ref);
    const {
      trackProps,
      onTrackLayout,
      isFocused,
      isFocusVisible,
      isDisabled,
      isPressed
    } = React.useContext(SliderContext);
    return /*#__PURE__*/React.createElement(StyledSliderTrack, _extends({
      onLayout: onTrackLayout,
      ref: mergeRefs([_ref, ref])
    }, trackProps, {
      style: style
    }, props, {
      isDisabled: isDisabled,
      tabIndex: -1,
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
    }), children);
  });
}
export default SliderTrack;
//# sourceMappingURL=SliderTrack.js.map