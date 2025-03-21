"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Context = require("./Context");
var _accordion = require("@react-native-aria/accordion");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const AccordionItem = StyledAccordionItem => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const [titleText, setTitleText] = (0, _react.useState)('');
  const {
    state,
    isDisabledAccordion,
    selectedValues
  } = (0, _react.useContext)(_Context.AccordionContext);
  const {
    isDisabled,
    value
  } = props;
  const {
    regionProps,
    buttonProps,
    isExpanded
  } = (0, _accordion.useAccordionItem)(state, {
    value,
    isExpanded: selectedValues.includes(value),
    isDisabled: isDisabled !== undefined ? isDisabled : isDisabledAccordion
  });
  const context = (0, _react.useMemo)(() => {
    return {
      isDisabled: isDisabled !== undefined ? isDisabled : isDisabledAccordion,
      isExpanded,
      value,
      buttonProps,
      regionProps,
      titleText,
      setTitleText
    };
  }, [isDisabled, isDisabledAccordion, isExpanded, value, buttonProps, regionProps, titleText]);
  return /*#__PURE__*/_react.default.createElement(_Context.AccordionItemContext.Provider, {
    value: context
  }, /*#__PURE__*/_react.default.createElement(StyledAccordionItem, _extends({
    ref: ref
  }, props), children));
});
exports.AccordionItem = AccordionItem;
//# sourceMappingURL=AccordionItem.js.map