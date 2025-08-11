import { useEffect, experimental_useEffectEvent as useEffectEvent, useReducer } from "react";

declare type State = {
    error: unknown,
    data: unknown
}

const initialState: State = {
    error: undefined,
    data: undefined
};

declare type Action = { type: 'loading' } | { type: 'fetched' | 'error', payload: unknown }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "loading":
            return { ...initialState };
        case "fetched":
            return { ...initialState, data: action.payload };
        case "error":
            return { ...initialState, error: action.payload };
        default:
            return state;
    }
};

export default function useFetch(url: string, options: RequestInit) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const startFetchingData = useEffectEvent(() => fetch(url, options))

    useEffect(() => {
        async function fetchData() {
            try {
                dispatch({ type: 'loading' })
                const response = await startFetchingData()
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`)
                }
                const data = await response.json()
                dispatch({ type: 'fetched', payload: data })
            }
            catch (error) {
                dispatch({ type: 'error', payload: error })
            }
        }
        fetchData()
    }, [url])

    return state;
}
