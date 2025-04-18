function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { useFormControl } from '@gluestack-ui/form-control';
import { useTextarea } from './TextareaContext';
export const Textarea = StyledTextarea => /*#__PURE__*/forwardRef(({
  children,
  multiline = true,
  onKeyPress,
  'aria-label': ariaLabel = 'Input Field',
  ...props
}, ref) => {
  const {
    isDisabled,
    isReadOnly,
    isFocused,
    isInvalid,
    isHovered,
    isFocusVisible,
    isRequired,
    handleFocus
  } = useTextarea('TextareaContext');
  const textareaProps = useFormControl({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    id: props.id
  });
  return /*#__PURE__*/React.createElement(StyledTextarea, _extends({
    ref: ref
  }, props, {
    states: {
      focus: isFocused,
      invalid: isInvalid,
      readonly: isReadOnly,
      required: isRequired,
      hover: isHovered,
      focusVisible: isFocusVisible,
      disabled: isDisabled || textareaProps.isDisabled
    },
    dataSet: {
      focus: isFocused ? 'true' : 'false',
      invalid: isInvalid ? 'true' : 'false',
      readonly: isReadOnly ? 'true' : 'false',
      required: isRequired ? 'true' : 'false',
      hover: isHovered ? 'true' : 'false',
      focusVisible: isFocusVisible ? 'true' : 'false',
      disabled: isDisabled || textareaProps.isDisabled ? 'true' : 'false'
    },
    accessible: true,
    "aria-label": ariaLabel,
    "aria-required": isRequired || textareaProps.isRequired,
    "aria-invalid": isInvalid || textareaProps.isInvalid,
    "aria-disabled": isDisabled || textareaProps.isDisabled,
    "aria-selected": Platform.OS !== 'web' ? isFocused : undefined,
    "aria-hidden": isDisabled,
    editable: isDisabled || isReadOnly ? false : true,
    disabled: isDisabled || textareaProps.isDisabled,
    multiline: multiline,
    onKeyPress: e => {
      e.persist();
      onKeyPress && onKeyPress(e);
    },
    onFocus: e => {
      handleFocus(true, props !== null && props !== void 0 && props.onFocus ? () => props === null || props === void 0 ? void 0 : props.onFocus(e) : () => {});
    },
    onBlur: e => {
      handleFocus(false, props !== null && props !== void 0 && props.onBlur ? () => props === null || props === void 0 ? void 0 : props.onBlur(e) : () => {});
    }
  }), children);
});
//# sourceMappingURL=Textarea.js.map