import { useEffect, experimental_useEffectEvent as useEffectEvent } from "react";

type Options = {
    event?: 'keydown'
    target?: HTMLElement
    eventOptions?: AddEventListenerOptions
}

export default function useKeyPress(key: string, cb: (event: Event) => void, options: Options = {}) {
    const { event = "keydown", target = window ?? null, eventOptions } = options;
    const invokeCallback = useEffectEvent((event: Event) => {
        const keyboardEvent = event as KeyboardEvent
        if (keyboardEvent.key === key) {
            cb(event)
        }
    })
    useEffect(() => {
        target.addEventListener(event, invokeCallback, eventOptions)
        return () => target.removeEventListener('keydown', invokeCallback, eventOptions)
    })
}
