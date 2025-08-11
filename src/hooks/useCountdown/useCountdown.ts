import { useEffect, experimental_useEffectEvent as useEffectEvent, useRef, useState } from "react";


export default function useCountdown(endTime: number, options: { interval: number, onTick: () => void, onComplete: (time: number) => void }) {
    const { interval, onTick, onComplete } = options
    const [count, setCount] = useState(Math.round((endTime - Date.now()) / interval));
    const id = useRef<number>(null)

    const handleInterval = useEffectEvent(() => {
        if (count > 0) {
            setCount(c => c - 1)
            onTick()
        }
        if (count === 0) {
            window.clearInterval(id.current!)
            id.current = null
            callOnComplete(Date.now())
        }
    })

    const callOnComplete = useEffectEvent(onComplete)

    useEffect(() => {
        id.current = window.setInterval(handleInterval, interval)

        return () => { window.clearInterval(id.current!) }
    }, [interval])

    return count;
}
