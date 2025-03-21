"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("@gluestack-ui/hooks");
var _overlay = require("@gluestack-ui/overlay");
var _PopoverContext = require("./PopoverContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // import { useOverlayPosition } from '@react-native-aria/overlays';
const Popover = StyledPopover => /*#__PURE__*/(0, _react.forwardRef)(({
  onOpen,
  trigger,
  onClose,
  isOpen: isOpenProp,
  children,
  defaultIsOpen = false,
  initialFocusRef,
  finalFocusRef,
  useRNModal,
  focusScope = true,
  trapFocus = true,
  placement = 'bottom',
  shouldOverlapWithTrigger = false,
  crossOffset,
  offset,
  isKeyboardDismissable = true,
  shouldFlip,
  // @ts-ignore
  _experimentalOverlay = false,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = (0, _hooks.useControllableState)({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : onClose && onClose();
    }
  });
  const [bodyMounted, setBodyMounted] = _react.default.useState(false);
  const [headerMounted, setHeaderMounted] = _react.default.useState(false);
  var idCounter = 0;
  function uniqueId(prefix = '') {
    var id = ++idCounter;
    return prefix + id;
  }
  const id = uniqueId();
  const popoverContentId = `${id}-content`;
  const headerId = `${popoverContentId}-header`;
  const bodyId = `${popoverContentId}-body`;
  const handleOpen = _react.default.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const handleClose = _react.default.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const updatedTrigger = reference => {
    return trigger({
      'ref': reference,
      'onPress': handleOpen,
      'aria-expanded': isOpen ? true : false,
      'aria-controls': isOpen ? popoverContentId : undefined,
      'aria-haspopup': true
    }, {
      open: isOpen
    });
  };

  // let floatingParams: any = {};

  // if (Platform.OS === 'web') {
  //   floatingParams = { whileElementsMounted: autoUpdate };
  // }

  const targetRef = _react.default.useRef(null);
  const contextValue = _react.default.useMemo(() => {
    return {
      targetRef,
      strategy: 'absolute',
      handleClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      bodyId,
      headerId,
      headerMounted,
      bodyMounted,
      setBodyMounted,
      setHeaderMounted,
      isOpen,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      focusScope,
      trapFocus,
      shouldFlip
    };
  }, [targetRef, handleClose, initialFocusRef, finalFocusRef, popoverContentId, bodyId, headerId, headerMounted, bodyMounted, setBodyMounted, setHeaderMounted, isOpen, placement, shouldOverlapWithTrigger, crossOffset, offset, focusScope, trapFocus, shouldFlip]);
  if (_experimentalOverlay) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/_react.default.createElement(_PopoverContext.PopoverProvider, {
      value: contextValue
    }, /*#__PURE__*/_react.default.createElement(StyledPopover, _extends({
      ref: ref
    }, props), children)));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, updatedTrigger(targetRef), /*#__PURE__*/_react.default.createElement(_overlay.Overlay, {
    isOpen: isOpen,
    onRequestClose: handleClose,
    isKeyboardDismissable: isKeyboardDismissable,
    useRNModal: useRNModal
  }, /*#__PURE__*/_react.default.createElement(_PopoverContext.PopoverProvider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(StyledPopover, _extends({
    ref: ref
  }, props), children))));
});
exports.Popover = Popover;
//# sourceMappingURL=Popover.js.map