import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { ToastContext } from './ToastContext';
import { ToastList } from './ToastList';
export const ToastProvider = ({
  children
}) => {
  const [toastInfo, setToastInfo] = useState({});
  const [visibleToasts, setVisibleToasts] = useState({});
  const AnimationWrapper = React.useRef(View);
  const AnimatePresence = React.useRef(View);
  const toastIndex = React.useRef(1);
  const hideAll = React.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);
  const hideToast = React.useCallback(id => {
    setVisibleToasts(prevVisibleToasts => ({
      ...prevVisibleToasts,
      [id]: false
    }));
  }, [setVisibleToasts]);
  const isActive = React.useCallback(id => {
    for (const toastPosition of Object.keys(toastInfo)) {
      const positionArray = toastInfo[toastPosition];
      if (positionArray.findIndex(toastData => toastData.id === id) > -1) {
        return true;
      }
    }
    return false;
  }, [toastInfo]);
  const removeToast = React.useCallback(id => {
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
  const setToast = React.useCallback(props => {
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
  const contextValue = React.useMemo(() => {
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
  return /*#__PURE__*/React.createElement(ToastContext.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/React.createElement(ToastList, null));
};
export const getToastHook = (StyledAnimationWrapper, StyledAnimatePresence) => {
  const useToast = () => {
    const {
      AnimationWrapper,
      AnimatePresence,
      setToast,
      hideAll,
      isActive,
      hideToast
    } = React.useContext(ToastContext);
    AnimatePresence.current = StyledAnimatePresence;
    AnimationWrapper.current = StyledAnimationWrapper;
    const toast = useMemo(() => ({
      show: setToast,
      close: hideToast,
      closeAll: hideAll,
      isActive
    }), [setToast, hideAll, isActive, hideToast]);
    return toast;
  };
  return useToast;
};
//# sourceMappingURL=Toast.js.map