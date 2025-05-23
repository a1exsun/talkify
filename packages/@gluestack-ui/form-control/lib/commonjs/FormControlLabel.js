"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
var _useFormControl = require("./useFormControl");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FormControlLabel = ({
  Label: StyledFormControlLabel,
  LabelAstrick: StyledFormControlLabelAstrick
}) => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  const formControlContext = (0, _useFormControl.useFormControlContext)();
  const {
    isRequired,
    ...combinedProps
  } = (0, _utils.combineContextAndProps)(formControlContext, props);
  const _ref = _react.default.useRef(null);
  const mergedRef = (0, _utils.mergeRefs)([_ref, ref]);
  _react.default.useEffect(() => {
    if (_ref.current) {
      // RN web doesn't support htmlFor for Label element yet
      if (props.htmlFor) {
        _ref.current.htmlFor = props.htmlFor;
      } else if (combinedProps !== null && combinedProps !== void 0 && combinedProps.id) {
        _ref.current.htmlFor = combinedProps.id;
      }
    }
  }, [combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.id, props.htmlFor]);
  return /*#__PURE__*/_react.default.createElement(StyledFormControlLabel, _extends({
    ref: mergedRef
  }, combinedProps, {
    id: combinedProps === null || combinedProps === void 0 ? void 0 : combinedProps.labelId
  }), children, isRequired && /*#__PURE__*/_react.default.createElement(StyledFormControlLabelAstrick, null, "*"));
});
var _default = exports.default = FormControlLabel;
//# sourceMappingURL=FormControlLabel.js.map