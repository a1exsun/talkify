function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { createContext, forwardRef } from 'react';
import { useCheckboxGroup } from '@react-native-aria/checkbox';
import { useCheckboxGroupState } from '@react-stately/checkbox';
import { useFormControlContext } from '@gluestack-ui/form-control';
export const CheckboxGroupContext = /*#__PURE__*/createContext(null);
const CheckboxGroup = StyledCheckboxGroup => /*#__PURE__*/forwardRef(({
  children,
  ...props
}, ref) => {
  const state = useCheckboxGroupState({
    ...props,
    validationState: props.isInvalid ? 'invalid' : 'valid'
  });
  const {
    groupProps
  } = useCheckboxGroup({
    ...props,
    'aria-label': props['aria-label']
  },
  //@ts-ignore
  state);
  const formControlContext = useFormControlContext();
  return /*#__PURE__*/React.createElement(CheckboxGroupContext.Provider, {
    value: {
      state: {
        ...formControlContext,
        ...state
      }
    }
  }, /*#__PURE__*/React.createElement(StyledCheckboxGroup, _extends({}, groupProps, props, {
    ref: ref
  }), children));
});
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map