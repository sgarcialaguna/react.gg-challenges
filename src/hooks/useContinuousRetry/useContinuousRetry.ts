import { useEffect, experimental_useEffectEvent as useEffectEvent, useState } from "react";


export default function useContinuousRetry(
    callback: () => boolean,
    interval = 100,
    options: { maxRetries?: number } = {}
) {
    const { maxRetries = Infinity } = options;
    const [hasResolved, setHasResolved] = useState(false);
    const invokeCallback = useEffectEvent(callback);

    useEffect(() => {
        let retries = 0;

        const id = window.setInterval(() => {
            if (invokeCallback()) {
                setHasResolved(true);
                window.clearInterval(id);
            } else if (retries >= maxRetries) {
                window.clearInterval(id);
            } else {
                retries += 1;
            }
        }, interval);

        return () => window.clearInterval(id);
    }, [interval, maxRetries, invokeCallback]);

    return hasResolved;
}
