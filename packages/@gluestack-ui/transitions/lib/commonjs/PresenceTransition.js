"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _overlay = require("@gluestack-ui/overlay");
var _Transition = require("./Transition");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // @ts-ignore
// import { ExitAnimationContext } from '../../primitives/Overlay/ExitAnimationContext';
// import type { IPresenceTransitionProps } from './types';
// import { useHasResponsiveProps } from '../../@gluestack-ui/hooks/useHasResponsiveProps';
const PresenceTransition = (_ref, ref) => {
  let {
    visible = false,
    onTransitionComplete,
    ...rest
  } = _ref;
  // const [animationExited, setAnimationExited] = React.useState(!visible);

  const {
    setExited
  } = _react.default.useContext(_overlay.ExitAnimationContext);
  return /*#__PURE__*/_react.default.createElement(_Transition.Transition, _extends({
    visible: visible,
    onTransitionComplete: state => {
      if (state === 'exited') {
        setExited(true);
      } else {
        setExited(false);
      }
      onTransitionComplete && onTransitionComplete(state);
    }
  }, rest, {
    ref: ref
  }));
};
var _default = /*#__PURE__*/(0, _react.forwardRef)(PresenceTransition);
exports.default = _default;
//# sourceMappingURL=PresenceTransition.js.map