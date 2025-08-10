import { useCallback, useEffect, useState } from 'react'

export default function useOrientation() {
    const [orientation, setOrientation] = useState({
        angle: screen.orientation?.angle ?? window.orientation,
        type: screen.orientation?.type || 'UNKNOWN'
    });

    const handleScreenOrientationChange = useCallback(() => {
        setOrientation({ angle: screen.orientation.angle, type: screen.orientation.type })
    }, [])

    const handleOrientationChange = useCallback(() => {
        setOrientation({ angle: window.orientation, type: "UNKNOWN" as OrientationType })
    }, [])

    useEffect(() => {
        if (window.screen.orientation) {
            window.screen.orientation.addEventListener('change', handleScreenOrientationChange)
            return () => window.screen.orientation.removeEventListener('change', handleScreenOrientationChange)
        }

        window.addEventListener('orientationchange', handleOrientationChange)
        return () => window.removeEventListener('orientationchange', handleOrientationChange)
    }, [handleScreenOrientationChange, handleOrientationChange])

    return orientation;
}