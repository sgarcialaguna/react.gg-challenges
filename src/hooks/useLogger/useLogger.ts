import { useEffect, experimental_useEffectEvent as useEffectEvent, useRef } from "react";

export default function useLogger(name: string, ...args: Array<unknown>) {
    const mounted = useRef<boolean>(false)
    const logEvent = useEffectEvent((type: 'mounted' | 'updated' | 'unmounted') => { console.log(`${name} ${type}:`, args) })

    useEffect(() => {
        if (mounted.current) {
            logEvent('updated')
        }
    }, [args])

    useEffect(() => {
        logEvent('mounted')
        mounted.current = true
        return () => { logEvent('unmounted'); mounted.current = false }
    }, [])
}
