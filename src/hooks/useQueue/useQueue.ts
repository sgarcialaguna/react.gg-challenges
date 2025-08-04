import * as React from "react";


export default function useQueue<T>(initialValue: Array<T> = []) {
    const [queue, setQueue] = React.useState(initialValue);

    const add = (e: T) => { console.log(e); setQueue(q => [...q, e]) };

    const remove = () => {
        const firstItem = queue[0]
        setQueue(q => q.slice(1));
        return firstItem
    }

    const clear = () => setQueue([]);

    return {
        add,
        remove,
        clear,
        first: queue.length > 0 ? queue[0] : null,
        last: queue.length > 0 ? queue[queue.length - 1] : null,
        size: queue.length,
        queue
    };
}
