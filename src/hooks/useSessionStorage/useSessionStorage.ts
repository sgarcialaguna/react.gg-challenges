import * as React from "react";

const dispatchStorageEvent = (key, newValue) => {
    window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const setItem = (key, value) => {
    const stringifiedValue = JSON.stringify(value);
    window.sessionStorage.setItem(key, stringifiedValue);
    dispatchStorageEvent(key, stringifiedValue);
};

const removeItem = (key) => {
    window.sessionStorage.removeItem(key);
    dispatchStorageEvent(key, null);
};

const getItem = (key) => {
    return window.sessionStorage.getItem(key);
};

const subscribe = () => { };

const getServerSnapshot = () => {
    throw Error("useSessionStorage is a client-only hook");
};

export default function useSessionStorage(key, initialValue) {
    const getSnapshot = () => { };

    const store = React.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );

    const setState = () => { };

    return [store ? JSON.parse(store) : initialValue, setState];
}
