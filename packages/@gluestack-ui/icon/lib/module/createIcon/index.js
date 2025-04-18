function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Path, G } from 'react-native-svg';
const ChildPath = ({
  element,
  fill,
  stroke: pathStroke
}) => {
  const pathStrokeColor = pathStroke || '';
  const fillColor = fill || '';
  if (!element) {
    return null;
  }
  return /*#__PURE__*/React.cloneElement(element, {
    fill: fillColor ? fillColor : 'currentColor',
    stroke: pathStrokeColor
  });
};
export function createIcon({
  Root,
  path,
  d,
  ...initialProps
}) {
  const IconTemp = /*#__PURE__*/forwardRef((props, ref) => {
    let children = path;
    if (d && (!path || Object.keys(path).length === 0)) {
      children = /*#__PURE__*/React.createElement(Path, {
        fill: "currentColor",
        d: d
      });
    }
    const finalProps = {
      ...initialProps,
      ...props
    };
    const {
      stroke = 'currentColor',
      color,
      ...resolvedProps
    } = finalProps;
    let type = resolvedProps.type;
    if (type === undefined) {
      type = 'svg';
    }
    let colorProps = {};
    if (color) {
      colorProps = {
        ...colorProps,
        color: color
      };
    }
    if (stroke) {
      colorProps = {
        ...colorProps,
        stroke: stroke
      };
    }
    let sizeProps = {};
    let sizeStyle = {};
    if (type === 'font') {
      if (resolvedProps.sx) {
        var _resolvedProps$sx;
        sizeProps = {
          ...sizeProps,
          fontSize: resolvedProps === null || resolvedProps === void 0 || (_resolvedProps$sx = resolvedProps.sx) === null || _resolvedProps$sx === void 0 ? void 0 : _resolvedProps$sx.h
        };
      }
      if (resolvedProps.size) {
        // sizeProps = { ...sizeProps, fontSize: resolvedProps?.size };
      }
    }
    return /*#__PURE__*/React.createElement(Root, _extends({}, resolvedProps, colorProps, {
      role: "img",
      ref: ref
    }, sizeProps, sizeStyle), React.Children.count(children) > 0 ? /*#__PURE__*/React.createElement(G, null, React.Children.map(children, (child, i) => /*#__PURE__*/React.createElement(ChildPath, _extends({
      key: (child === null || child === void 0 ? void 0 : child.key) ?? i,
      element: child
    }, child === null || child === void 0 ? void 0 : child.props)))) : null);
  });
  const Icon = IconTemp;
  return Icon;
}
//# sourceMappingURL=index.js.map