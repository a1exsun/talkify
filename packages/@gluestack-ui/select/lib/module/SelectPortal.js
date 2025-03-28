function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { SelectContext, SelectPortalContext } from './SelectContext';
import { StyleSheet, Platform } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
const PLACEHOLDER_OPTION = '__GluestackPlaceholder__';
export const SelectPortal = StyledSelectPortal => /*#__PURE__*/forwardRef(({
  children,
  ...props
}, ref) => {
  const {
    isOpen,
    handleClose,
    closeOnOverlayClick,
    isDisabled,
    hoverRef,
    hoverProps,
    focusProps,
    onValueChange,
    value,
    setFocused,
    setValue,
    label,
    setLabel,
    onOpen,
    placeholder,
    isReadOnly,
    ...portalProps
  } = React.useContext(SelectContext);
  if (Platform.OS !== 'web') {
    return /*#__PURE__*/React.createElement(StyledSelectPortal, _extends({
      isOpen: isOpen,
      onClose: handleClose,
      closeOnOverlayClick: closeOnOverlayClick
    }, props, {
      ref: ref
    }), /*#__PURE__*/React.createElement(SelectPortalContext.Provider, {
      value: {
        isOpen,
        handleClose,
        closeOnOverlayClick,
        isDisabled,
        hoverRef,
        hoverProps,
        focusProps,
        setValue,
        value: !value ? PLACEHOLDER_OPTION : value,
        setLabel,
        label,
        isReadOnly,
        setFocused,
        onValueChange,
        placeholder,
        ...portalProps
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("select", _extends({
    disabled: isDisabled || isReadOnly
  }, focusProps, {
    onMouseEnter: hoverProps.onHoverIn,
    onMouseLeave: hoverProps.onHoverOut,
    onChange: e => {
      onValueChange(e.target.value);
      setLabel(e.target.options[e.target.selectedIndex].text);
      handleClose();
    },
    onKeyDown: e => {
      if (e.code === 'Space') {
        onOpen && onOpen();
      }
    },
    ref: mergeRefs([ref, hoverRef]),
    value: !value ? PLACEHOLDER_OPTION : value,
    "aria-label": placeholder,
    "aria-readonly": isReadOnly,
    style: StyleSheet.flatten([{
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0,
      zIndex: 1,
      cursor: isDisabled ? 'not-allowed' : 'pointer'
    }]),
    onClick: onOpen,
    onFocus: () => {
      setFocused(true);
    },
    onBlur: () => {
      setFocused(false);
    }
  }), /*#__PURE__*/React.createElement("option", {
    disabled: true,
    value: PLACEHOLDER_OPTION
  }, placeholder), children));
});
//# sourceMappingURL=SelectPortal.js.map