"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsheetDragIndicatorWrapper = ActionsheetDragIndicatorWrapper;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("@gluestack-ui/utils");
var _ActionsheetContentContext = require("./ActionsheetContentContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const windowHeight = _reactNative.Dimensions.get('window').height;
function ActionsheetDragIndicatorWrapper(StyledActionsheetDragIndicatorWrapper) {
  return /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
    const {
      pan,
      handleClose,
      handleCloseBackdrop,
      snapPoints,
      contentSheetHeight
    } = (0, _ActionsheetContentContext.useActionsheetContent)('ActionsheetContentContext');
    const handleCloseRef = _react.default.useRef(null);
    const panResponder = _react.default.useRef(_reactNative.PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        return gestureState.dy > 15;
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          _reactNative.Animated.event([null, {
            dy: pan.y
          }], {
            useNativeDriver: false
          })(e, gestureState);
        }
      },
      onPanResponderRelease: (_e, gestureState) => {
        if (!snapPoints) {
          if (contentSheetHeight.current / 4 < gestureState.dy) {
            handleCloseBackdrop();
            _reactNative.Animated.timing(pan, {
              toValue: {
                x: 0,
                y: contentSheetHeight.current
              },
              duration: 200,
              useNativeDriver: true
            }).start(handleClose);
          } else {
            _reactNative.Animated.spring(pan, {
              toValue: {
                x: 0,
                y: 0
              },
              overshootClamping: true,
              useNativeDriver: true
            }).start();
          }
        } else {
          const contentSheetHeightWithSnapPoint = windowHeight * (parseFloat(snapPoints[0]) * 0.01);
          if (contentSheetHeightWithSnapPoint / 4 < gestureState.dy) {
            handleCloseBackdrop();
            _reactNative.Animated.timing(pan, {
              toValue: {
                x: 0,
                y: contentSheetHeightWithSnapPoint
              },
              duration: 200,
              useNativeDriver: true
            }).start(handleClose);
          } else {
            _reactNative.Animated.spring(pan, {
              toValue: {
                x: 0,
                y: 0
              },
              overshootClamping: true,
              useNativeDriver: true
            }).start();
          }
        }
      }
    })).current;
    const mergedRef = (0, _utils.mergeRefs)([ref, handleCloseRef]);
    return /*#__PURE__*/_react.default.createElement(StyledActionsheetDragIndicatorWrapper, _extends({}, panResponder.panHandlers, props, {
      ref: mergedRef
    }));
  });
}
//# sourceMappingURL=ActionsheetDragIndicatorWrapper.js.map