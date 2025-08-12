import { useEffect, useSyncExternalStore } from "react";

const dispatchStorageEvent = (key: string, newValue: string | null) => {
    window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const setItem = (key: string, value: unknown) => {
    const stringifiedValue = JSON.stringify(value);
    window.sessionStorage.setItem(key, stringifiedValue);
    dispatchStorageEvent(key, stringifiedValue);
};

const removeItem = (key: string) => {
    window.sessionStorage.removeItem(key);
    dispatchStorageEvent(key, null);
};

const getItem = (key: string) => {
    return window.sessionStorage.getItem(key);
};

const subscribe = (callback: () => void) => {
    window.addEventListener('storage', callback)
    return () => window.removeEventListener('storage', callback)
};

const getServerSnapshot = () => {
    throw Error("useSessionStorage is a client-only hook");
};

export default function useSessionStorage(key: string, initialValue: unknown) {
    const getSnapshot = () => getItem(key)

    useEffect(() => {
        if (!initialValue) {
            return;
        }
        if (getItem(key)) {
            return;
        }
        setItem(key, initialValue);
    }, [initialValue, key]);


    const store = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );

    const setState = (value: string | ((oldValue: string) => string)) => {
        if (typeof value === "function") {
            setItem(key, value(JSON.parse(getItem(key)!)))
        }
        else {
            setItem(key, value);
        }
    };


    return [store ? JSON.parse(store) : initialValue, setState];
}
