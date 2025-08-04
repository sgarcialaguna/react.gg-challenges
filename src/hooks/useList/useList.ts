import * as React from "react";

const placeholder = () => { };

export default function useList(defaultList = []) {
    const [list, setList] = React.useState(defaultList);

    const set = placeholder;

    const push = placeholder;

    const removeAt = placeholder;

    const insertAt = placeholder;

    const updateAt = placeholder;

    const clear = placeholder;

    return [list, { set, push, removeAt, insertAt, updateAt, clear }];
}