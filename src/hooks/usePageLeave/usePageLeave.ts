import { experimental_useEffectEvent as useEffectEvent, useEffect } from "react";

export default function usePageLeave(cb: () => void) {
    const invokeCallback = useEffectEvent((event: MouseEvent) => {
        if (!event.relatedTarget) {
            cb()
        }
    })

    useEffect(() => {
        window.document.addEventListener('mouseout', invokeCallback)
        return () => window.document.removeEventListener('mouseout', invokeCallback);
    }, [])
}