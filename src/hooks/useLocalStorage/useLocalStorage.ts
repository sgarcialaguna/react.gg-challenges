import * as React from "react";

const dispatchStorageEvent = (key, newValue) => {
    window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const setItem = (key, value) => {
    const stringifiedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifiedValue);
    dispatchStorageEvent(key, stringifiedValue);
};

const removeItem = (key) => {
    window.localStorage.removeItem(key);
    dispatchStorageEvent(key, null);
};

const getItem = (key) => {
    return window.localStorage.getItem(key);
};

const subscribe = () => { };

const getServerSnapshot = () => {
    throw Error("useLocalStorage is a client-only hook");
};

export default function useLocalStorage(key, initialValue) {
    const getSnapshot = () => { };

    const store = React.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );

    const setState = () => { };

    return [store ? JSON.parse(store) : initialValue, setState];
}
