"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarFallbackText = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const getFirstCharacters = str => {
  const words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      result += words[i].charAt(0);
    }
    if (result.length >= 2) {
      break;
    }
  }
  return result.toUpperCase();
};
const AvatarFallbackText = StyledAvatarFallbackText => /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  ...props
}, ref) => {
  let fallbackText = '';
  if (typeof children === 'string') {
    fallbackText = getFirstCharacters(children);
  }
  return /*#__PURE__*/_react.default.createElement(StyledAvatarFallbackText, _extends({
    ref: ref
  }, props), fallbackText);
});
exports.AvatarFallbackText = AvatarFallbackText;
//# sourceMappingURL=AvatarFallbackText.js.map