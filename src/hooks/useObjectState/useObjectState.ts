import { useState, type SetStateAction } from "react";

const isPlainObject = (value: unknown) => {
    return Object.prototype.toString.call(value) === "[object Object]";
};

export default function useObjectState<T>(initialValue: Record<string, T>): [Record<string, T>, (arg0: Record<string, T> | SetStateAction<Record<string, T>>) => void] {
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
