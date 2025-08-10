import { useLayoutEffect, useState } from 'react'

export default function useOrientation() {
    const [orientation, setOrientation] = useState({
        angle: 0,
        type: "UNKNOWN"
    });

    useLayoutEffect(() => {
        const handleChange = () => {
            setOrientation({ angle: window.screen.orientation.angle, type: window.screen.orientation.type })
        }

        const handle_orientationchange = () => {
            setOrientation({ angle: window.orientation, type: "UNKNOWN" as OrientationType })
        }

        if (window.screen?.orientation) {
            handleChange()
            window.screen.orientation.addEventListener('change', handleChange)
            return () => window.screen.orientation.removeEventListener('change', handleChange)
        }

        handle_orientationchange()
        window.addEventListener('orientationchange', handle_orientationchange)
        return () => window.removeEventListener('orientationchange', handle_orientationchange)
    }, [])

    return orientation;
}