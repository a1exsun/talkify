function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useContext } from 'react';
import { CheckboxProvider } from './CheckboxProvider';
import { useFocusRing } from '@react-native-aria/focus';
import { useHover } from '@react-native-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { CheckboxGroupContext } from './CheckboxGroup';
import { combineContextAndProps, mergeRefs, stableHash } from '@gluestack-ui/utils';
import { useFormControlContext } from '@gluestack-ui/form-control';
import { VisuallyHidden } from '@react-aria/visually-hidden';
export const Checkbox = StyledCheckbox => /*#__PURE__*/forwardRef(({
  children,
  ...props
}, ref) => {
  const {
    isHovered: isHoveredProp,
    isFocusVisible: isFocusVisibleProp,
    isChecked: isCheckedProp,
    isDisabled: isDisabledProp,
    isInvalid: isInvalidProp,
    isReadOnly: isReadOnlyProp,
    isIndeterminate: isIndeterminateProp,
    isFocused,
    isPressed
  } = props;
  const formControlContext = useFormControlContext();
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...combinedProps
  } = combineContextAndProps(formControlContext, props);
  const checkboxGroupContext = useContext(CheckboxGroupContext);
  const state = useToggleState({
    ...combinedProps,
    defaultSelected: props.defaultIsChecked,
    isSelected: isCheckedProp
  });
  //aria-state-hook
  const _ref = React.useRef(null);
  const {
    isHovered
  } = useHover({}, _ref);
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const ariaLabel = combinedProps['aria-label'] || combinedProps.value || 'Checkbox';
  const mergedRef = mergeRefs([ref, _ref]);
  const {
    inputProps: groupItemInputProps
  } = checkboxGroupContext ?
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useCheckboxGroupItem({
    ...combinedProps,
    'aria-label': ariaLabel,
    'value': combinedProps.value
  }, checkboxGroupContext.state,
  //@ts-ignore
  mergedRef) :
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useCheckbox({
    ...combinedProps,
    'aria-label': ariaLabel
  }, state,
  //@ts-ignore
  mergedRef);
  const inputProps = React.useMemo(() => groupItemInputProps,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [groupItemInputProps.checked, groupItemInputProps.disabled, groupItemInputProps]);
  const contextCombinedProps = React.useMemo(() => {
    return {
      ...checkboxGroupContext,
      ...combinedProps
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableHash(combinedProps)]);
  const {
    checked: isChecked,
    disabled: isDisabled
  } = inputProps;
  return /*#__PURE__*/React.createElement(StyledCheckbox, _extends({}, contextCombinedProps, {
    role: "label"
    // remove in future, role="label" is not supported in react-native-web, PR is open
    ,
    accessibilityRole: "label",
    ref: mergedRef,
    states: {
      checked: isChecked || isCheckedProp,
      disabled: isDisabled || isDisabledProp,
      hover: isHovered || isHoveredProp,
      invalid: isInvalid || isInvalidProp,
      readonly: isReadOnly || isReadOnlyProp,
      active: isPressed,
      focus: isFocused,
      indeterminate: isIndeterminate || isIndeterminateProp,
      focusVisible: isFocusVisible || isFocusVisibleProp
    },
    dataSet: {
      checked: isChecked || isCheckedProp ? 'true' : 'false',
      disabled: isDisabled || isDisabledProp ? 'true' : 'false',
      hover: isHovered || isHoveredProp ? 'true' : 'false',
      invalid: isInvalid || isInvalidProp ? 'true' : 'false',
      readonly: isReadOnly || isReadOnlyProp ? 'true' : 'false',
      active: isPressed ? 'true' : 'false',
      focus: isFocused ? 'true' : 'false',
      indeterminate: isIndeterminate || isIndeterminateProp ? 'true' : 'false',
      focusVisible: isFocusVisible || isFocusVisibleProp ? 'true' : 'false'
    }
  }), /*#__PURE__*/React.createElement(CheckboxProvider, {
    isChecked: isChecked || isCheckedProp,
    isDisabled: isDisabled || isDisabledProp,
    isFocusVisible: isFocusVisible || isFocusVisibleProp,
    isHovered: isHovered || isHoveredProp,
    isInvalid: isInvalid || isInvalidProp,
    isReadOnly: isReadOnly || isReadOnlyProp,
    isIndeterminate: isIndeterminate || isIndeterminateProp,
    isPressed: isPressed
  }, /*#__PURE__*/React.createElement(VisuallyHidden, null, /*#__PURE__*/React.createElement("input", _extends({}, inputProps, focusProps, {
    ref: mergedRef
  }))), children));
});
//# sourceMappingURL=Checkbox.web.js.map