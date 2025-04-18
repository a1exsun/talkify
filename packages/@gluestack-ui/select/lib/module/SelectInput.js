function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useEffect } from 'react';
import { SelectContext } from './SelectContext';
export const SelectInput = StyledSelectInput => /*#__PURE__*/forwardRef(({
  placeholder: placeholderProp,
  ...props
}, ref) => {
  const {
    setValue,
    value,
    label,
    isDisabled,
    placeholder,
    setPlaceholder
  } = React.useContext(SelectContext);
  useEffect(() => {
    setPlaceholder && setPlaceholder(placeholderProp);
  }, [placeholderProp, setPlaceholder]);
  return /*#__PURE__*/React.createElement(StyledSelectInput, _extends({
    ref: ref,
    states: {
      disabled: isDisabled
    },
    dataSet: {
      disabled: isDisabled ? 'true' : 'false'
    },
    disabled: isDisabled,
    "aria-hidden": true,
    editable: false,
    tabIndex: -1,
    pointerEvents: "none"
    // android
    ,
    importantForAccessibility: "no",
    placeholder: placeholder,
    value: label ? label : value ? value : '',
    onChangeText: text => setValue(text)
  }, props));
});
//# sourceMappingURL=SelectInput.js.map