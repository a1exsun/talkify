function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useMemo } from 'react';
import { Platform } from 'react-native';
import { useFormControl } from '@gluestack-ui/form-control';
import { useInput } from './InputContext';
import { mergeRefs } from '@gluestack-ui/utils';
export const Input = StyledInput => /*#__PURE__*/forwardRef(({
  children,
  onKeyPress,
  type = 'text',
  'aria-label': ariaLabel = 'Input Field',
  secureTextEntry,
  editable,
  disabled,
  ...props
}, ref) => {
  const {
    isDisabled,
    isReadOnly,
    isFocused,
    isInvalid,
    setIsFocused,
    isHovered,
    isFocusVisible,
    inputFieldRef,
    isRequired
  } = useInput('InputContext');
  const inputProps = useFormControl({
    isDisabled: props.isDisabled || disabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    id: props.id
  });
  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };
  const mergedRef = mergeRefs([ref, inputFieldRef]);
  const editableProp = useMemo(() => {
    if (editable !== undefined) {
      return editable;
    } else {
      return isDisabled || inputProps.isDisabled || isReadOnly ? false : true;
    }
  }, [isDisabled, inputProps.isDisabled, isReadOnly, editable]);
  return /*#__PURE__*/React.createElement(StyledInput, _extends({}, props, {
    type: type,
    states: {
      focus: isFocused,
      invalid: isInvalid,
      readonly: isReadOnly,
      required: isRequired,
      hover: isHovered,
      focusVisible: isFocusVisible,
      disabled: isDisabled || inputProps.isDisabled
    },
    dataSet: {
      focus: isFocused ? 'true' : 'false',
      invalid: isInvalid ? 'true' : 'false',
      readonly: isReadOnly ? 'true' : 'false',
      required: isRequired ? 'true' : 'false',
      hover: isHovered ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false',
      disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false'
    },
    disabled: isDisabled || inputProps.isDisabled,
    secureTextEntry: secureTextEntry || type === 'password',
    accessible: true,
    "aria-label": ariaLabel,
    "aria-required": isRequired || inputProps.isRequired,
    "aria-invalid": isInvalid || inputProps.isInvalid,
    "aria-disabled": isDisabled || inputProps.isDisabled,
    "aria-selected": Platform.OS !== 'web' ? isFocused : undefined
    // ios accessibility
    ,
    accessibilityElementsHidden: isDisabled || inputProps.isDisabled,
    readOnly: !editableProp,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, props !== null && props !== void 0 && props.onFocus ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, props !== null && props !== void 0 && props.onBlur ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => {});
    },
    ref: mergedRef
  }), children);
});
//# sourceMappingURL=Input.js.map