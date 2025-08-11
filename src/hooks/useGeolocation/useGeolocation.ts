import * as React from "react";

export default function useGeolocation(options = {}) {
    const [state, setState] = React.useState({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: null,
        error: null
    });

    return state;
}
