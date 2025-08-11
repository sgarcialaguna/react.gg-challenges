import { useEffect, useState } from "react";

declare type State = {
    loading: boolean;
    accuracy: number | null;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    timestamp: number | null;
    error: unknown;
};

export default function useGeolocation(options: PositionOptions = {}) {
    const [state, setState] = useState<State>({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: null,
        error: null,
    });

    useEffect(() => {
        const successCallback = (p: GeolocationPosition) => {
            setState({
                loading: false,
                error: null,
                accuracy: p.coords.accuracy,
                altitude: p.coords.altitude,
                altitudeAccuracy: p.coords.altitudeAccuracy,
                timestamp: p.timestamp,
                heading: p.coords.heading,
                latitude: p.coords.latitude,
                longitude: p.coords.longitude,
                speed: p.coords.speed,
            });
        }

        const errorCallback = (error: GeolocationPositionError) => setState((s) => ({ ...s, error }))

        navigator.geolocation.getCurrentPosition(
            successCallback,
            errorCallback,
            options,
        );
        const id = navigator.geolocation.watchPosition(successCallback, errorCallback, options)

        return () => navigator.geolocation.clearWatch(id)
    }, [options]);

    return state;
}
