import { useEffect, useRef, useState, experimental_useEffectEvent as useEffectEvent } from 'react'



export default function useInterval(cb: () => void, ms: number) {
    const interval = useRef<number>(undefined)
    const [stopped, setStopped] = useState(false)

    const invokeCallback = useEffectEvent(cb)

    useEffect(() => {
        console.log("FIRING EFFECT")
        interval.current = window.setInterval(invokeCallback, ms)
        return () => window.clearInterval(interval.current)
    }, [invokeCallback, ms])

    useEffect(() => {
        if (stopped) {
            window.clearInterval(interval.current)
        }
    }, [stopped])

    return () => setStopped(true)
}
