import { useEffect, experimental_useEffectEvent as useEffectEvent, useRef, useState } from "react";


function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function useRandomInterval(cb: () => void, { minDelay, maxDelay }: { minDelay: number, maxDelay: number }) {
    const id = useRef<number>(null)
    const [stopped, setStopped] = useState(false)

    const invokeCallback = useEffectEvent(() => {
        cb()
        if (!stopped) {
            id.current = window.setTimeout(invokeCallback, getRandomNumber(minDelay, maxDelay))
        }
    })

    useEffect(() => {
        id.current = window.setTimeout(invokeCallback, getRandomNumber(minDelay, maxDelay))
        return () => window.clearTimeout(id.current!)
    }, [id, minDelay, maxDelay, invokeCallback])

    useEffect(() => {
        if (stopped) {
            window.clearTimeout(id.current!)
        }
    })

    return () => { setStopped(true) };
}
