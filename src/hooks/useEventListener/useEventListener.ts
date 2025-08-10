import { useEffect, experimental_useEffectEvent as useEffectEvent } from "react";


export default function useEventListener(target: HTMLElement, eventName: string, handler: (e: Event) => void, options = {}) {
    const addEventListener = useEffectEvent((target: HTMLElement, eventName: string) => {
        target.addEventListener(eventName, handler)
    })

    const removeEventListener = useEffectEvent((target: HTMLElement, eventName: string) => {
        target.removeEventListener(eventName, handler)
    })

    useEffect(() => {
        if (!target || !target.nodeType) {
            return
        }
        addEventListener(target, eventName)
        return () => removeEventListener(target, eventName)
    }, [target, eventName, options])
}
