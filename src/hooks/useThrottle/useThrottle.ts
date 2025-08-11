import { useState } from "react";

export default function useThrottle(value: unknown, interval = 500) {
    const [throttledValue, setThrottledValue] = useState(value);

    return throttledValue;
}
