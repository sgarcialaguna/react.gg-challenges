import { useState, type SetStateAction } from "react";

const isPlainObject = (value: unknown) => {
    return Object.prototype.toString.call(value) === "[object Object]";
};

export default function useObjectState<T extends Record<string, unknown>>(initialValue: T): [T, (arg0: Partial<T> | SetStateAction<Partial<T>>) => void] {
    const [value, setValue] = useState(initialValue)
    return [value, (newValue) => {
        if (isPlainObject(newValue)) {
            return setValue(v => ({ ...v, ...newValue }))
        }
        if (typeof newValue === 'function') {
            return setValue(v => ({ ...v, ...newValue(v) }))
        }
        return
    }];
}
