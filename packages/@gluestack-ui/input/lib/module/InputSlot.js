function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useInput } from './InputContext';
import { useFormControl } from '@gluestack-ui/form-control';
export const InputSlot = StyledInputSlot => /*#__PURE__*/forwardRef(({
  children,
  onPress,
  focusOnPress = true,
  ...props
}, ref) => {
  const {
    inputFieldRef,
    isDisabled
  } = useInput('InputContext');
  const handleFocus = () => {
    var _inputFieldRef$curren;
    focusOnPress && ((_inputFieldRef$curren = inputFieldRef.current) === null || _inputFieldRef$curren === void 0 ? void 0 : _inputFieldRef$curren.focus());
  };
  const inputProps = useFormControl({
    isDisabled: props.isDisabled
  });
  return /*#__PURE__*/React.createElement(StyledInputSlot, _extends({
    states: {
      disabled: isDisabled || inputProps.isDisabled
    },
    dataSet: {
      disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false'
    },
    onPress: () => {
      if (onPress) onPress();
      handleFocus();
    },
    accessibilityElementsHidden: true,
    tabIndex: -1,
    ref: ref
  }, props), children);
});
//# sourceMappingURL=InputSlot.js.map