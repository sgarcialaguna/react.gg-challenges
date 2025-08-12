import { useEffect, useState } from "react";

const getConnection = () => {
    return (
        navigator?.connection ||
        navigator?.mozConnection ||
        navigator?.webkitConnection
    );
};

export default function useNetworkState() {
    const online = navigator.onLine;
    const connection = getConnection();
    // dummy variable to trigger rerender
    const [, setX] = useState(false)

    useEffect(() => {
        if (!connection) {
            return
        }

        function toggleX() {
            setX(x => !x)
        }

        window.addEventListener('online', toggleX)
        window.addEventListener('offline', toggleX)
        connection.addEventListener('change', toggleX)

        return () => {
            window.removeEventListener('online', toggleX)
            window.removeEventListener('offline', toggleX)
            connection.removeEventListener('change', toggleX)
        }
    }, [connection])

    return {
        online,
        downlink: connection?.downlink,
        downlinkMax: connection?.downlinkMax,
        effectiveType: connection?.effectiveType,
        rtt: connection?.rtt,
        saveData: connection?.saveData,
        type: connection?.type
    };
}
