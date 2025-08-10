import { useCallback, useEffect, useState } from "react";

function scrollTo(options: ScrollToOptions): void;
function scrollTo(x: number, y: number): void;

function scrollTo(optionsOrX: ScrollToOptions | number, y?: number) {
    if (typeof optionsOrX === 'object') {
        return window.scrollTo(optionsOrX)
    }

    if (typeof optionsOrX === 'number' && typeof y === 'number') {
        return window.scrollTo(optionsOrX, y)
    }

    throw Error('Invalid parameters')

}

export default function useWindowScroll() {
    const [state, setState] = useState<{ x: number | null, y: number | null }>({
        x: 0,
        y: 0
    });

    const handleScroll = useCallback(() => {
        setState({ x: window.scrollX, y: window.scrollY })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return [state, scrollTo];
}