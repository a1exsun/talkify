"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AnimatedHeight = ({
  hide,
  extraHeight = 0,
  children
}) => {
  const [measuredHeight, setMeasuredHeight] = (0, _react.useState)(0);
  const opacityValue = (0, _react.useRef)(new _reactNative.Animated.Value(hide ? 0 : 1)).current;
  const heightValue = (0, _react.useRef)(new _reactNative.Animated.Value(hide ? 0 : measuredHeight + extraHeight)).current;
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(opacityValue, {
      toValue: hide ? 0 : 1,
      duration: 200,
      // Set your transition duration here
      useNativeDriver: false
    }).start();
    _reactNative.Animated.timing(heightValue, {
      toValue: hide ? 0 : 1,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [hide, measuredHeight, extraHeight, heightValue, opacityValue]);
  const animatedHeight = heightValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, measuredHeight + extraHeight]
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.hidden, {
      height: animatedHeight
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.autoBottom, {
      opacity: opacityValue
    }],
    onLayout: e => {
      const height = Math.round(e.nativeEvent.layout.height);
      setMeasuredHeight(height);
    }
  }, children));
};
var _default = exports.default = AnimatedHeight;
const styles = _reactNative.StyleSheet.create({
  autoBottom: {
    bottom: 'auto'
  },
  hidden: {
    overflow: 'hidden'
  }
});
//# sourceMappingURL=AnimatedHeight.js.map