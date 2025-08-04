import * as React from "react";

declare type ListFunctions = {
    set: (l: Array<unknown>) => void
    push: (value: unknown) => void
    removeAt: (idx: number) => void
    insertAt: (idx: number, value: unknown) => void
    updateAt: (idx: number, value: unknown) => void
    clear: () => void
}

export default function useList(defaultList: Array<unknown> = []): [list: Array<unknown>, ListFunctions] {
    const [list, setList] = React.useState(defaultList);

    return [list, {
        set: setList,
        push: (value) => setList(l => [...l, value]),
        removeAt: (idx) => setList(l => [...l.slice(0, idx), ...l.slice(idx + 1)]),
        insertAt: (idx, value) => setList(l => [...l.slice(0, idx), value, ...l.slice(idx)]),
        updateAt: (idx, value) => setList(l => [...l.slice(0, idx), value, ...l.slice(idx + 1)]),
        clear: () => setList([])
    }];
}