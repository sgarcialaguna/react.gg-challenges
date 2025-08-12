import * as React from "react";

export function isTouchEvent({ nativeEvent }: { nativeEvent: Event }) {
    return window.TouchEvent
        ? nativeEvent instanceof TouchEvent
        : "touches" in nativeEvent;
}

export function isMouseEvent(event: React.SyntheticEvent) {
    return event.nativeEvent instanceof MouseEvent;
}

declare type UseLongPressOptions = {
    threshold?: number,
    onStart?: (event: React.SyntheticEvent) => void
    onFinish?: (event: React.SyntheticEvent) => void
    onCancel?: (event: React.SyntheticEvent) => void
}

export default function useLongPress(callback: () => void, options: UseLongPressOptions = {}) {
    const { threshold = 400, onStart, onFinish, onCancel } = options;
    const id = React.useRef<number>(null)

    return React.useMemo(() => {
        if (typeof callback !== "function") {
            return {};
        }

        const start = (event: React.SyntheticEvent) => {
            if (!isMouseEvent(event) && !isTouchEvent(event)) { return }
            if (onStart) {
                onStart(event)
            }
            id.current = window.setTimeout(() => { id.current = null; if (onFinish) { onFinish(event); } callback() }, threshold)
        };

        const cancel = (event: React.SyntheticEvent) => {
            if (!isMouseEvent(event) && !isTouchEvent(event)) { return }
            if (!id.current) {
                return
            }
            window.clearTimeout(id.current)
            id.current = null
            if (onCancel) {
                onCancel(event)
            }
        };

        const mouseHandlers = {
            onMouseDown: start,
            onMouseUp: cancel,
            onMouseLeave: cancel
        };

        const touchHandlers = {
            onTouchStart: start,
            onTouchEnd: cancel
        };


        return {
            ...mouseHandlers,
            ...touchHandlers
        };
    }, [callback, threshold, onCancel, onFinish, onStart]);
}
