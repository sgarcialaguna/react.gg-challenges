import * as React from "react";

const placeholder = () => { };

export default function useQueue(initialValue = []) {
    const [queue, setQueue] = React.useState(initialValue);

    const add = placeholder;

    const remove = placeholder;

    const clear = placeholder;

    return {
        add,
        remove,
        clear,
        first: null,
        last: null,
        size: null,
        queue
    };
}
