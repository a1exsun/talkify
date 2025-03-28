function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
export const Image = StyledImage => /*#__PURE__*/forwardRef(({
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
  return /*#__PURE__*/React.createElement(StyledImage, _extends({}, resolvedProps, {
    source: source,
    "aria-label": (props === null || props === void 0 ? void 0 : props['aria-label']) || alt,
    role: (props === null || props === void 0 ? void 0 : props.role) || 'img',
    alt: alt,
    ref: ref
  }));
});
//# sourceMappingURL=Image.js.map