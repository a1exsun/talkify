function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { useRadioGroup } from '@react-native-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupProvider } from './RadioGroupContext';
import { useFormControlContext } from '@gluestack-ui/form-control';
export const RadioGroup = StyledRadioGroup => /*#__PURE__*/forwardRef(({
  children,
  isInvalid,
  ...props
}, ref) => {
  const formControlContext = useFormControlContext();
  const state = useRadioGroupState({
    ...props,
    validationState: isInvalid ? 'invalid' : 'valid'
  });
  const radioGroupState = useRadioGroup({
    ...formControlContext,
    ...props,
    'aria-label': props['aria-label'] || 'RadioGroup'
  }, state);
  const contextValue = React.useMemo(() => {
    return {
      ...formControlContext,
      state
    };
  }, [formControlContext, state]);
  return /*#__PURE__*/React.createElement(RadioGroupProvider, {
    state: contextValue
  }, /*#__PURE__*/React.createElement(StyledRadioGroup, _extends({}, radioGroupState.radioGroupProps, props, {
    ref: ref
  }), children));
});
//# sourceMappingURL=RadioGroup.js.map