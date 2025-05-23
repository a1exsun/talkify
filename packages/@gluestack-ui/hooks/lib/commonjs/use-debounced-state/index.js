"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebouncedState = useDebouncedState;
var _react = require("react");
/**
 *
 * @param defaultValue
 * @param wait Wait Time for Debounce
 * @param options options object default false
 * @returns `[value, setValue]` value after update and setter function
 */
function useDebouncedState(defaultValue, wait, options = {
  leading: false
}) {
  const [value, setValue] = (0, _react.useState)(defaultValue);
  const timeoutRef = (0, _react.useRef)(undefined);
  const leadingRef = (0, _react.useRef)(true);
  const clearTimeoutRef = () => clearTimeout(timeoutRef.current);
  (0, _react.useEffect)(() => clearTimeoutRef, []);
  const debouncedSetValue = (0, _react.useCallback)(newValue => {
    clearTimeoutRef();
    if (leadingRef.current && options.leading) {
      setValue(newValue);
    } else {
      timeoutRef.current = setTimeout(() => {
        leadingRef.current = true;
        setValue(newValue);
      }, wait);
    }
    leadingRef.current = false;
  }, [options.leading, wait]);
  return [value, debouncedSetValue];
}
//# sourceMappingURL=index.js.map