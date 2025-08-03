import { useEffect } from "react";

export default function useLockBodyScroll() {
    useEffect(() => {
        const oldValue = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = oldValue }
    }, [])
}
