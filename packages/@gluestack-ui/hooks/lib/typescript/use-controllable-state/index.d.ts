import React from 'react';
export declare function useControllableProp<T>(prop: T | undefined, state: T): readonly [boolean, T];
export interface UseControllableStateProps<T> {
    /**
     * The value to used in controlled mode
     */
    value?: T;
    /**
     * The initial value to be used, in uncontrolled mode
     */
    defaultValue?: T | (() => T);
    /**
     * The callback fired when the value changes
     */
    onChange?: (value: T) => void;
    /**
     * The component name (for warnings)
     */
    name?: string;
}
/**
 * React hook for using controlling component state.
 * @param props
 */
export declare function useControllableState<T>(props: UseControllableStateProps<T>): [T, React.Dispatch<React.SetStateAction<T>>];
//# sourceMappingURL=index.d.ts.map