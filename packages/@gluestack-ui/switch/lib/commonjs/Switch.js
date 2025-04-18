"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = Switch;
var _react = _interopRequireWildcard(require("react"));
var _interactions = require("@react-native-aria/interactions");
var _toggle = require("@react-stately/toggle");
var _formControl = require("@gluestack-ui/form-control");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Switch(StyledSwitch) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    disabled,
    isDisabled,
    isInvalid,
    defaultValue,
    onToggle,
    value,
    onValueChange,
    ...props
  }, ref) => {
    const formControlContext = (0, _formControl.useFormControlContext)();
    const combinedProps = {
      ...formControlContext,
      ...props
    };
    const state = (0, _toggle.useToggleState)({
      defaultSelected: !(defaultValue === null || defaultValue === undefined) ? defaultValue : !(value === null || value === undefined) ? value : false
    });
    const checked = !(value === null || value === undefined) ? value : state.isSelected;
    const _ref = _react.default.useRef(null);
    const {
      isHovered
    } = (0, _interactions.useHover)({}, _ref);
    const mergedRef = (0, _utils.mergeRefs)([ref, _ref]);
    return /*#__PURE__*/_react.default.createElement(StyledSwitch, _extends({
      states: {
        hover: isHovered,
        disabled: disabled || isDisabled || combinedProps.isDisabled,
        invalid: isInvalid || combinedProps.isInvalid,
        checked: value || checked
      },
      dataSet: {
        hover: isHovered ? 'true' : 'false',
        disabled: disabled || isDisabled || combinedProps.isDisabled ? 'true' : 'false',
        invalid: isInvalid || combinedProps.isInvalid ? 'true' : 'false',
        checked: value || checked ? 'true' : 'false'
      },
      disabled: disabled || isDisabled || combinedProps.isDisabled,
      onValueChange: val => {
        onValueChange && onValueChange(val);
        onToggle ? onToggle(val) : state.toggle();
      },
      value: value || checked
    }, combinedProps, {
      ref: mergedRef
    }));
  });
}
//# sourceMappingURL=Switch.js.map