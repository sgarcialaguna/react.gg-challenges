import { useEffect, useRef, useState } from "react";

export default function useThrottle(value: unknown, interval = 500) {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastTime = useRef<number>(Date.now())
    const id = useRef<number>(null)

    useEffect(() => {
        const now = Date.now()

        function updateThrottledValue() {
            lastTime.current = now
            setThrottledValue(value)
        }

        function clearTimeout() {
            if (id.current) {
                window.clearTimeout(id.current)
                id.current = null
            }
        }

        if (now - lastTime.current >= interval) {
            updateThrottledValue()
        }
        else {
            id.current = window.setTimeout(updateThrottledValue, interval)
            return clearTimeout
        }

    }, [value, interval])

    return throttledValue;
}
