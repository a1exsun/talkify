function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { SelectPortalContext } from './SelectContext';
export const SelectItem = (StyledSelectItem, StyledSelectItemText) => /*#__PURE__*/forwardRef(({
  // isDisabled,
  // isFocused,
  // isFocusVisible,
  // isHovered,
  // isInvalid,
  label,
  value,
  textStyle,
  ...props
}, ref) => {
  const {
    onValueChange,
    handleClose,
    value: activeValue,
    setLabel
  } = React.useContext(SelectPortalContext);
  if (Platform.OS !== 'web') {
    return /*#__PURE__*/React.createElement(StyledSelectItem, _extends({
      ref: ref,
      onPress: () => {
        if (!props.isDisabled) {
          onValueChange(value);
          setLabel(label);
          handleClose();
        }
      }
    }, props, {
      states: {
        checked: activeValue === value
      },
      dataSet: {
        checked: activeValue == value ? 'true' : 'false'
      }
    }), /*#__PURE__*/React.createElement(StyledSelectItemText, textStyle, label));
  }
  return /*#__PURE__*/React.createElement("option", {
    value: value,
    disabled: props.isDisabled,
    ref: ref
  }, label);
});
//# sourceMappingURL=SelectItem.js.map