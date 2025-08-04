import { useRef, experimental_useEffectEvent as useEffectEvent, useEffect, useState } from "react";



export default function useTimeout(cb: () => void, ms: number) {
    const timeout = useRef<number>(undefined)
    const [stopped, setStopped] = useState(false)

    const invokeCallback = useEffectEvent(cb)

    useEffect(() => {
        timeout.current = window.setTimeout(invokeCallback, ms)
        return () => window.clearTimeout(timeout.current)
    })

    useEffect(() => {
        if (stopped) {
            window.clearTimeout(timeout.current)
        }
    })


    return () => { setStopped(true) };
}
