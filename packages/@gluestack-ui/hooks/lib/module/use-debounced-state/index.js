import { useEffect, useRef, useState, useCallback } from 'react';

/**
 *
 * @param defaultValue
 * @param wait Wait Time for Debounce
 * @param options options object default false
 * @returns `[value, setValue]` value after update and setter function
 */
export function useDebouncedState(defaultValue, wait, options = {
  leading: false
}) {
  const [value, setValue] = useState(defaultValue);
  const timeoutRef = useRef(undefined);
  const leadingRef = useRef(true);
  const clearTimeoutRef = () => clearTimeout(timeoutRef.current);
  useEffect(() => clearTimeoutRef, []);
  const debouncedSetValue = useCallback(newValue => {
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