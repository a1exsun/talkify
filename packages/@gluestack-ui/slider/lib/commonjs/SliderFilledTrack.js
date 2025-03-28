"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Context = require("./Context");
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SliderFilledTrack(StyledSliderFilledTrack) {
  return /*#__PURE__*/(0, _react.forwardRef)(({
    _experimentalSliderFilledTrack = false,
    _experimentalSliderFilledTrackValue = 0,
    style,
    ...props
  }, ref) => {
    const _ref = _react.default.useRef(null);
    const {
      state,
      trackLayout,
      orientation,
      isDisabled,
      isFocused,
      isHovered,
      isPressed,
      isFocusVisible
    } = _react.default.useContext(_Context.SliderContext);
    const getSliderTrackPosition = () => {
      if (orientation === 'vertical') {
        return trackLayout.height * state.getThumbPercent(0);
      } else {
        return trackLayout.width * state.getThumbPercent(0);
      }
    };
    const sliderTrackPosition = getSliderTrackPosition();
    let positionProps = orientation === 'vertical' ? {
      height: sliderTrackPosition
    } : {
      width: sliderTrackPosition
    };
    if (_experimentalSliderFilledTrack) {
      positionProps = orientation === 'vertical' ? {
        height: _experimentalSliderFilledTrackValue
      } : {
        width: _experimentalSliderFilledTrackValue
      };
    }
    return /*#__PURE__*/_react.default.createElement(StyledSliderFilledTrack, _extends({}, props, {
      ref: (0, _utils.mergeRefs)([_ref, ref]),
      style: [style, positionProps],
      states: {
        hover: isHovered,
        disabled: isDisabled,
        focus: isFocused,
        focusVisible: isFocusVisible,
        active: isPressed
      },
      dataSet: {
        hover: isHovered ? 'true' : 'false',
        disabled: isDisabled ? 'true' : 'false',
        focus: isFocused ? 'true' : 'false',
        focusVisible: isFocusVisible ? 'true' : 'false',
        active: isPressed ? 'true' : 'false'
      },
      disabled: isDisabled,
      tabIndex: _reactNative.Platform.OS === 'web' ? -1 : undefined
    }));
  });
}
var _default = exports.default = SliderFilledTrack;
//# sourceMappingURL=SliderFilledTrack.js.map