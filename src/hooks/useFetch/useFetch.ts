import { experimental_useEffectEvent as useEffectEvent, useReducer } from "react";

declare type State = {
    error: unknown,
    data: unknown
}

const initialState: State = {
    error: undefined,
    data: undefined
};

declare type Action = { type: 'loading' | 'fetched' | 'error', payload: unknown }

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

export default function useFetch(url: string, options: unknown) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return state;
}
