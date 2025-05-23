/* eslint-disable react-hooks/exhaustive-deps */
import { ExitAnimationContext } from '@gluestack-ui/overlay';
import React, { forwardRef } from 'react';
import { Animated } from 'react-native';
const defaultTransitionConfig = {
  type: 'timing',
  useNativeDriver: true,
  duration: 0,
  delay: 0
};
export const OverlayAnimatePresence = /*#__PURE__*/forwardRef(({
  children,
  visible = false,
  AnimatePresence,
  onExit
}, ref) => {
  const animateValue = React.useRef(new Animated.Value(0)).current;
  const [animationState, setAnimationState] = React.useState('');
  const prevVisible = React.useRef(visible);
  const {
    setExited
  } = React.useContext(ExitAnimationContext);
  React.useEffect(() => {
    if (animationState === 'entering' || animationState === 'exiting') {
      const startAnimation = animationState === 'entering' ? 1 : 0;
      const transition = defaultTransitionConfig;
      if (AnimatePresence) {
        Animated.sequence([Animated[transition.type ?? 'timing'](animateValue, {
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
      onExit();
    } else if (animationState === 'entered') {
      setExited(false);
    }
    // if (animationState === 'entering') {
    //   //
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationState]);
  React.useEffect(() => {
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
  return /*#__PURE__*/React.createElement(AnimatePresence, {
    ref: ref
  }, visible ? children : null);
});
//# sourceMappingURL=OverlayAnimatePresence.js.map