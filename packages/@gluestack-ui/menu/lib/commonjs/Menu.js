"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _menu = require("@react-native-aria/menu");
var _reactStately = require("react-stately");
var _Popover = require("./MenuPopover/Popover");
var _MenuItem = require("./MenuItem");
var _OverlayAnimatePresence = require("./MenuPopover/OverlayAnimatePresence");
var _useTypeSelect = require("./useTypeSelect");
var _utils = require("@react-stately/utils");
var _MenuContext = require("./MenuContext");
var _utils2 = require("@gluestack-ui/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable @typescript-eslint/no-unused-vars */
const Menu = ({
  StyledMenu,
  StyledMenuItem,
  StyledBackdrop,
  AnimatePresence,
  StyledSeparator
}) => {
  return /*#__PURE__*/(0, _react.forwardRef)(({
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
    const [isOpen, setIsOpen] = (0, _utils.useControlledState)(isOpenProp, defaultIsOpen, isOpenValue => {
      isOpenValue ? onOpen === null || onOpen === void 0 ? void 0 : onOpen() : onClose === null || onClose === void 0 ? void 0 : onClose();
    });
    const handleClose = () => {
      setIsOpen(false);
    };
    const showBackdrop = _react.default.useRef(false);
    const state = (0, _reactStately.useMenuTriggerState)({
      isOpen: isOpen || false,
      //@ts-ignore
      closeOnSelect: closeOnSelect,
      onOpenChange: isOpenValue => {
        setIsOpen(isOpenValue);
      },
      defaultOpen: defaultIsOpen
    });
    const triggerRef = _react.default.useRef(null);
    const {
      menuTriggerProps,
      menuProps
    } = (0, _menu.useMenuTrigger)({}, state, triggerRef);
    const updatedTrigger = () => {
      return trigger({
        ...menuTriggerProps,
        ref: triggerRef
      });
    };
    if (_experimentalOverlay) {
      return /*#__PURE__*/_react.default.createElement(_MenuContext.MenuContext.Provider, {
        value: {
          onClose: handleClose,
          showBackdrop
        }
      }, updatedTrigger(), /*#__PURE__*/_react.default.createElement(MenuComponent, _extends({}, menuProps, props, {
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
    return /*#__PURE__*/_react.default.createElement(_MenuContext.MenuContext.Provider, {
      value: {
        onClose: handleClose,
        showBackdrop
      }
    }, updatedTrigger(), /*#__PURE__*/_react.default.createElement(_Popover.Popover, {
      placement: placement,
      triggerRef: triggerRef,
      state: state,
      shouldOverlapWithTrigger: shouldOverlapWithTrigger,
      crossOffset: crossOffset,
      offset: offset,
      shouldFlip: shouldFlip,
      StyledBackdrop: StyledBackdrop,
      useRNModal: useRNModal
    }, /*#__PURE__*/_react.default.createElement(MenuComponent, _extends({}, menuProps, props, {
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
exports.Menu = Menu;
const MenuComponent = /*#__PURE__*/(0, _react.forwardRef)(({
  StyledMenu,
  StyledMenuItem,
  StyledSeparator,
  AnimatePresence,
  isOpen,
  closeOnSelect,
  ...props
}, ref) => {
  const state = (0, _reactStately.useTreeState)(props);
  const menuRef = (0, _react.useRef)(null);
  const mergeRef = (0, _utils2.mergeRefs)([menuRef, ref]);
  const {
    menuProps
  } = (0, _menu.useMenu)(props, state, menuRef);
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
  const typeSelectProps = (0, _useTypeSelect.useTypeSelect)(state);
  return /*#__PURE__*/_react.default.createElement(_OverlayAnimatePresence.OverlayAnimatePresence, {
    visible: isOpen,
    AnimatePresence: AnimatePresence
  }, /*#__PURE__*/_react.default.createElement(StyledMenu, _extends({}, menuProps, typeSelectProps, {
    ref: mergeRef,
    role: "list"
  }, restProps), [...state.collection].map(item => {
    switch (item.type) {
      case 'item':
        return /*#__PURE__*/_react.default.createElement(_MenuItem.MenuItem, {
          StyledMenuItem: StyledMenuItem,
          key: item.key,
          item: item,
          state: state,
          onAction: props.onAction,
          onClose: props.onClose,
          closeOnSelect: closeOnSelect
        });
      case 'seperator':
        return StyledSeparator && /*#__PURE__*/_react.default.createElement(StyledSeparator, _extends({}, item.props, {
          key: item.key
        }));
      default:
        return null;
    }
  })));
});
//# sourceMappingURL=Menu.js.map