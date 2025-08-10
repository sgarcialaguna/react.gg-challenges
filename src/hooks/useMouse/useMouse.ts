import { useLayoutEffect, useRef, useState } from "react";


export default function useMouse() {
    const [state, setState] = useState({
        x: 0,
        y: 0,
        elementX: 0,
        elementY: 0,
        elementPositionX: 0,
        elementPositionY: 0
    });

    const ref = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const updateState = (event: globalThis.MouseEvent) => {
            const rect = ref.current?.getBoundingClientRect()
            const elementPositionX = rect ? rect.x + window.scrollX : 0
            const elementPositionY = rect ? rect.y + window.scrollY : 0
            const elementX = rect ? event.pageX - elementPositionX : 0
            const elementY = rect ? event.pageY - elementPositionY : 0
            setState({ x: event.clientX, y: event.clientY, elementX, elementY, elementPositionX, elementPositionY })
        }

        document.addEventListener('mousemove', updateState)
        return () => document.removeEventListener("mousemove", updateState)
    }, [])

    return [state, ref];
}
