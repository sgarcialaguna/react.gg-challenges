import { useSyncExternalStore } from "react";
import memoize from "lodash.memoize";

function subscribe(callback: () => void) {
    window.addEventListener('resize', callback)
    return () => window.removeEventListener('resize', callback)
}

const getDimensions = memoize(function (width: number, height: number) {
    return { width, height }
}, (width, height) => [width, height].toString())


function getSnapshot() {
    return getDimensions(window.innerWidth, window.innerHeight)
}

export default function useWindowSize() {
    const size = useSyncExternalStore(subscribe, getSnapshot)
    return size;
}
