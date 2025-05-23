"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToastHook = exports.ToastProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ToastContext = require("./ToastContext");
var _ToastList = require("./ToastList");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ToastProvider = ({
  children
}) => {
  const [toastInfo, setToastInfo] = (0, _react.useState)({});
  const [visibleToasts, setVisibleToasts] = (0, _react.useState)({});
  const AnimationWrapper = _react.default.useRef(_reactNative.View);
  const AnimatePresence = _react.default.useRef(_reactNative.View);
  const toastIndex = _react.default.useRef(1);
  const hideAll = _react.default.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);
  const hideToast = _react.default.useCallback(id => {
    setVisibleToasts(prevVisibleToasts => ({
      ...prevVisibleToasts,
      [id]: false
    }));
  }, [setVisibleToasts]);
  const isActive = _react.default.useCallback(id => {
    for (const toastPosition of Object.keys(toastInfo)) {
      const positionArray = toastInfo[toastPosition];
      if (positionArray.findIndex(toastData => toastData.id === id) > -1) {
        return true;
      }
    }
    return false;
  }, [toastInfo]);
  const removeToast = _react.default.useCallback(id => {
    setToastInfo(prev => {
      for (const toastPosition of Object.keys(prev)) {
        const positionArray = prev[toastPosition];
        const isToastPresent = positionArray.findIndex(toastData => toastData.id === id) > -1;
        if (isToastPresent) {
          const newPositionArray = positionArray.filter(item => item.id !== id);
          const temp = {};
          temp[toastPosition] = newPositionArray;
          const newToastInfo = {
            ...prev,
            ...temp
          };
          return newToastInfo;
        }
      }
      return prev;
    });
  }, [setToastInfo]);
  const setToast = _react.default.useCallback(props => {
    const {
      placement = 'bottom',
      render,
      id = `${toastIndex.current++}`,
      duration = 5000
    } = props;
    if (render) {
      const component = render({
        id
      });
      setToastInfo(prev => {
        return {
          ...prev,
          [placement]: [...(prev[placement] ? prev[placement] : []).filter(t => t.id !== id), {
            component,
            id,
            config: props
          }]
        };
      });
      setVisibleToasts(toasts => {
        return {
          ...Object.fromEntries(Object.entries(toasts).filter(([key]) => key !== id)),
          [id]: true
        };
      });
      if (duration !== null) {
        setTimeout(function () {
          hideToast(id);
        }, duration);
      }
    }
    return id;
  }, [hideToast]);
  const contextValue = _react.default.useMemo(() => {
    return {
      toastInfo,
      setToastInfo,
      setToast,
      removeToast,
      hideAll,
      isActive,
      visibleToasts,
      setVisibleToasts,
      hideToast,
      AnimationWrapper,
      AnimatePresence
    };
  }, [toastInfo, setToastInfo, setToast, removeToast, hideAll, isActive, visibleToasts, setVisibleToasts, hideToast]);
  return /*#__PURE__*/_react.default.createElement(_ToastContext.ToastContext.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/_react.default.createElement(_ToastList.ToastList, null));
};
exports.ToastProvider = ToastProvider;
const getToastHook = (StyledAnimationWrapper, StyledAnimatePresence) => {
  const useToast = () => {
    const {
      AnimationWrapper,
      AnimatePresence,
      setToast,
      hideAll,
      isActive,
      hideToast
    } = _react.default.useContext(_ToastContext.ToastContext);
    AnimatePresence.current = StyledAnimatePresence;
    AnimationWrapper.current = StyledAnimationWrapper;
    const toast = (0, _react.useMemo)(() => ({
      show: setToast,
      close: hideToast,
      closeAll: hideAll,
      isActive
    }), [setToast, hideAll, isActive, hideToast]);
    return toast;
  };
  return useToast;
};
exports.getToastHook = getToastHook;
//# sourceMappingURL=Toast.js.map