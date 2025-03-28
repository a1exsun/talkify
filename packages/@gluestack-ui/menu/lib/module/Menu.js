function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { forwardRef, useRef } from 'react';
import { useMenu, useMenuTrigger } from '@react-native-aria/menu';
import { useTreeState, useMenuTriggerState } from 'react-stately';
import { Popover } from './MenuPopover/Popover';
import { MenuItem } from './MenuItem';
import { OverlayAnimatePresence } from './MenuPopover/OverlayAnimatePresence';
import { useTypeSelect } from './useTypeSelect';
import { useControlledState } from '@react-stately/utils';
import { MenuContext } from './MenuContext';
import { mergeRefs } from '@gluestack-ui/utils';
export const Menu = ({
  StyledMenu,
  StyledMenuItem,
  StyledBackdrop,
  AnimatePresence,
  StyledSeparator
}) => {
  return /*#__PURE__*/forwardRef(({
    crossOffset,
    closeOnSelect,
    defaultIsOpen,
    isOpen: isOpenProp,
    onOpen,
    onClose,
    offset,
    placement = 'bottom start',
    shouldFlip = true,
    trigger,
    shouldOverlapWithTrigger,
    _experimentalOverlay = false,
    useRNModal = false,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = useControlledState(isOpenProp, defaultIsOpen, isOpenValue => {
      isOpenValue ? onOpen === null || onOpen === void 0 ? void 0 : onOpen() : onClose === null || onClose === void 0 ? void 0 : onClose();
    });
    const handleClose = () => {
      setIsOpen(false);
    };
    const showBackdrop = React.useRef(false);
    const state = useMenuTriggerState({
      isOpen: isOpen || false,
      //@ts-ignore
      closeOnSelect: closeOnSelect,
      onOpenChange: isOpenValue => {
        setIsOpen(isOpenValue);
      },
      defaultOpen: defaultIsOpen
    });
    const triggerRef = React.useRef(null);
    const {
      menuTriggerProps,
      menuProps
    } = useMenuTrigger({}, state, triggerRef);
    const updatedTrigger = () => {
      return trigger({
        ...menuTriggerProps,
        ref: triggerRef
      });
    };
    if (_experimentalOverlay) {
      return /*#__PURE__*/React.createElement(MenuContext.Provider, {
        value: {
          onClose: handleClose,
          showBackdrop
        }
      }, updatedTrigger(), /*#__PURE__*/React.createElement(MenuComponent, _extends({}, menuProps, props, {
        isOpen: state.isOpen,
        AnimatePresence: AnimatePresence,
        autoFocus: state.focusStrategy || true,
        onClose: () => state.close(),
        StyledMenu: StyledMenu,
        StyledMenuItem: StyledMenuItem,
        StyledSeparator: StyledSeparator,
        closeOnSelect: closeOnSelect,
        ref: ref
      })));
    }
    return /*#__PURE__*/React.createElement(MenuContext.Provider, {
      value: {
        onClose: handleClose,
        showBackdrop
      }
    }, updatedTrigger(), /*#__PURE__*/React.createElement(Popover, {
      placement: placement,
      triggerRef: triggerRef,
      state: state,
      shouldOverlapWithTrigger: shouldOverlapWithTrigger,
      crossOffset: crossOffset,
      offset: offset,
      shouldFlip: shouldFlip,
      StyledBackdrop: StyledBackdrop,
      useRNModal: useRNModal
    }, /*#__PURE__*/React.createElement(MenuComponent, _extends({}, menuProps, props, {
      isOpen: state.isOpen,
      AnimatePresence: AnimatePresence,
      autoFocus: state.focusStrategy || true,
      onClose: () => state.close(),
      StyledMenu: StyledMenu,
      StyledMenuItem: StyledMenuItem,
      StyledSeparator: StyledSeparator,
      closeOnSelect: closeOnSelect,
      ref: ref
    }))));
  });
};
const MenuComponent = /*#__PURE__*/forwardRef(({
  StyledMenu,
  StyledMenuItem,
  StyledSeparator,
  AnimatePresence,
  isOpen,
  closeOnSelect,
  ...props
}, ref) => {
  const state = useTreeState(props);
  const menuRef = useRef(null);
  const mergeRef = mergeRefs([menuRef, ref]);
  const {
    menuProps
  } = useMenu(props, state, menuRef);
  const {
    onClose,
    onOpen,
    selectionMode,
    onSelectChange,
    shouldFlip,
    children,
    placement,
    offset,
    crossOffset,
    trigger,
    StyledBackdrop,
    ...restProps
  } = props;
  const typeSelectProps = useTypeSelect(state);
  return /*#__PURE__*/React.createElement(OverlayAnimatePresence, {
    visible: isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/React.createElement(StyledMenu, _extends({}, menuProps, typeSelectProps, {
    ref: mergeRef,
    role: "list"
  }, restProps), [...state.collection].map(item => {
    switch (item.type) {
      case 'item':
        return /*#__PURE__*/React.createElement(MenuItem, {
          StyledMenuItem: StyledMenuItem,
          key: item.key,
          item: item,
          state: state,
          onAction: props.onAction,
          onClose: props.onClose,
          closeOnSelect: closeOnSelect
        });
      case 'seperator':
        return StyledSeparator && /*#__PURE__*/React.createElement(StyledSeparator, _extends({}, item.props, {
          key: item.key
        }));
      default:
        return null;
    }
  })));
});
//# sourceMappingURL=Menu.js.map