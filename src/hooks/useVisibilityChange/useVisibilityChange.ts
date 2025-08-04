import { useSyncExternalStore } from "react";

function getSnapshot() {
    return document.visibilityState
}

function subscribe(callback: () => void) {
    document.addEventListener('visibilitychange', callback)
    return () => document.removeEventListener('visibilitychange', callback)
}

export default function useVisibilityChange() {
    const value = useSyncExternalStore(subscribe, getSnapshot)
    return value === 'visible'
}
