import { useEffect, experimental_useEffectEvent as useEffectEvent, useRef } from "react";


export default function useClickAway(cb: () => void) {
    const invokeCallback = useEffectEvent(cb)
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        function handleClick(event: globalThis.MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                invokeCallback()
            }
        }

        window.addEventListener('mousedown', handleClick)
        return () => window.removeEventListener('mousedown', handleClick)
    }, [])

    return ref
}
