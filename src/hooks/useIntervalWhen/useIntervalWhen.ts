import { useEffect, experimental_useEffectEvent as useEffectEvent, useRef, useState } from "react";


export default function useIntervalWhen(cb: () => void, { ms, when, startImmediately }: { ms: number, when: boolean, startImmediately: boolean }) {
    const invokeCallback = useEffectEvent(cb)
    const id = useRef<number>(null)
    const [stopped, setStopped] = useState(false)

    useEffect(() => {
        if (stopped) {
            return
        }
        if (startImmediately) {
            invokeCallback()
        }
        id.current = window.setInterval(() => {
            if (when) {
                invokeCallback()
            }
        }, ms)
        return () => window.clearInterval(id.current!)
    }, [ms, startImmediately, stopped, when])

    useEffect(() => {
        if (stopped) {
            window.clearInterval(id.current!)
        }
    }, [stopped])

    return () => setStopped(true)
}
