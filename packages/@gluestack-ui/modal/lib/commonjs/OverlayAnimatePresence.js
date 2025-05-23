"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayAnimatePresence = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _overlay = require("@gluestack-ui/overlay");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable react-hooks/exhaustive-deps */

const defaultTransitionConfig = {
  type: 'timing',
  useNativeDriver: true,
  duration: 0,
  delay: 0
};
const OverlayAnimatePresence = exports.OverlayAnimatePresence = /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  visible = false,
  AnimatePresence
}, ref) => {
  const animateValue = _react.default.useRef(new _reactNative.Animated.Value(0)).current;
  const [animationState, setAnimationState] = _react.default.useState('');
  const prevVisible = _react.default.useRef(visible);
  const {
    setExited
  } = _react.default.useContext(_overlay.ExitAnimationContext);
  _react.default.useEffect(() => {
    if (animationState === 'entering' || animationState === 'exiting') {
      const startAnimation = animationState === 'entering' ? 1 : 0;
      const transition = defaultTransitionConfig;
      if (AnimatePresence) {
        _reactNative.Animated.sequence([
        // @ts-ignore - delay is present in defaultTransitionConfig
        //@ts-ignore
        _reactNative.Animated[transition.type ?? 'timing'](animateValue, {
          toValue: startAnimation,
          useNativeDriver: true
        })]).start(() => {
          if (animationState === 'entering') {
            setAnimationState('entered');
          } else if (animationState === 'exiting') {
            setAnimationState('exited');
          }
        });
      }
      // });
    }
    if (animationState === 'exited') {
      setExited(true);
    } else if (animationState === 'entered') {
      setExited(false);
    }
    // if (animationState === 'entering') {
    //   //
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationState]);
  _react.default.useEffect(() => {
    // if (!visible) {
    if (prevVisible.current !== visible && !visible) {
      setAnimationState('exiting');
    }
    if (visible) {
      setAnimationState('entering');
    }
    prevVisible.current = visible;
    // }
  }, [visible]);

  // {animationState === 'entered' || animationState === 'entering'

  if (!AnimatePresence) {
    return children;
  }
  return /*#__PURE__*/_react.default.createElement(AnimatePresence, {
    ref: ref
  }, visible ? children : null);
});
//# sourceMappingURL=OverlayAnimatePresence.js.map