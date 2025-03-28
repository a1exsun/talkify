"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ButtonGroup = StyledButtonGroup => /*#__PURE__*/(0, _react.forwardRef)(({
  flexDirection = 'row',
  isAttached,
  isDisabled,
  children,
  isReversed,
  reversed,
  ...props
}, ref) => {
  const direction = flexDirection.includes('reverse') ? flexDirection === 'column-reverse' ? 'column' : 'row' : flexDirection;
  let computedChildren;
  let childrenArray = _react.default.Children.toArray((0, _utils.flattenChildren)(children));
  childrenArray = isReversed || reversed ? [...childrenArray].reverse() : childrenArray;
  if (childrenArray) {
    computedChildren = childrenArray.map((child, index) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return child;
      }
      const attachedStyles = {};
      if (index === 0) {
        if (direction === 'column') {
          attachedStyles.borderBottomLeftRadius = 0;
          attachedStyles.borderBottomRightRadius = 0;
        } else {
          attachedStyles.borderTopRightRadius = 0;
          attachedStyles.borderBottomRightRadius = 0;
        }
      } else if (index === (children === null || children === void 0 ? void 0 : children.length) - 1) {
        if (direction === 'column') {
          attachedStyles.borderTopLeftRadius = 0;
          attachedStyles.borderTopRightRadius = 0;
        } else {
          attachedStyles.borderTopLeftRadius = 0;
          attachedStyles.borderBottomLeftRadius = 0;
        }
      } else {
        attachedStyles.borderRadius = 0;
      }
      const childProps = {
        isDisabled,
        ...child.props,
        style: {
          ...(isAttached ? attachedStyles : {}),
          ...child.props.style
        }
      };
      const clonedChild = /*#__PURE__*/_react.default.cloneElement(child, {
        ...childProps
      });
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: child.key ?? `spaced-child-${index}`
      }, clonedChild);
    });
  }
  const gapProp = isAttached ? {
    gap: 0
  } : {};
  if (computedChildren) return /*#__PURE__*/_react.default.createElement(StyledButtonGroup, _extends({
    flexDirection: flexDirection
  }, props, {
    ref: ref
  }, gapProp), computedChildren);
  return null;
});
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map