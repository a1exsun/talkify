"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Context = require("./Context");
var _accordion = require("@react-native-aria/accordion");
var _utils = require("@react-stately/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Accordion = StyledAccordion => /*#__PURE__*/(0, _react.forwardRef)(({
  type = 'single',
  isCollapsible = true,
  isDisabled = false,
  value,
  defaultValue = [],
  onValueChange,
  children,
  ...props
}, ref) => {
  const [selectedValues, setSelectedValues] = (0, _utils.useControlledState)(value, defaultValue, incomingValue => {
    onValueChange && onValueChange(incomingValue);
  });
  const {
    state
  } = (0, _accordion.useAccordion)({
    type,
    isCollapsible,
    selectedValues,
    setSelectedValues
  });
  const contextValue = (0, _react.useMemo)(() => {
    return {
      state,
      isDisabledAccordion: isDisabled,
      selectedValues
    };
  }, [state, isDisabled, selectedValues]);
  return /*#__PURE__*/_react.default.createElement(_Context.AccordionContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(StyledAccordion, _extends({
    ref: ref
  }, props), children));
});
exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map