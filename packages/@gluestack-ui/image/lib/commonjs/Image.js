"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Image = StyledImage => /*#__PURE__*/(0, _react.forwardRef)(({
  ...props
}, ref) => {
  // Assuming props is an object with a 'source' property
  let source = props.source;
  if (typeof source === 'number') {
    // Handle case where source is a number
  } else if (!props.source.uri) {
    // Check if source.uri is not defined or falsy
    source = {
      uri: props.source.default ? props.source.default.src : props.source
      // If so, set source to an object with a 'uri' property
      // Use a ternary operator to check if props.source.default exists,
      // and if so, use its 'src' property, otherwise, use the original source
    };
  }
  const {
    alt,
    ...resolvedProps
  } = props;
  if (typeof alt !== 'string') {
    console.warn('Please pass alt prop to Image component');
  }
  return /*#__PURE__*/_react.default.createElement(StyledImage, _extends({}, resolvedProps, {
    source: source,
    "aria-label": (props === null || props === void 0 ? void 0 : props['aria-label']) || alt,
    role: (props === null || props === void 0 ? void 0 : props.role) || 'img',
    alt: alt,
    ref: ref
  }));
});
exports.Image = Image;
//# sourceMappingURL=Image.js.map