import { useLayoutEffect, useState } from 'react'

export default function useOrientation() {
    const [orientation, setOrientation] = useState({
        angle: 0,
        type: "UNKNOWN"
    });

    useLayoutEffect(() => {
        const handleScreenOrientationChange = () => {
            setOrientation({ angle: screen.orientation.angle, type: screen.orientation.type })
        }

        const handleOrientationChange = () => {
            setOrientation({ angle: window.orientation, type: "UNKNOWN" as OrientationType })
        }

        if (window.screen?.orientation) {
            handleScreenOrientationChange()
            window.screen.orientation.addEventListener('change', handleScreenOrientationChange)
            return () => window.screen.orientation.removeEventListener('change', handleScreenOrientationChange)
        }

        handleOrientationChange()
        window.addEventListener('orientationchange', handleOrientationChange)
        return () => window.removeEventListener('orientationchange', handleOrientationChange)
    }, [])

    return orientation;
}