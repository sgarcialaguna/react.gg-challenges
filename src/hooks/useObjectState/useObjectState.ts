import * as React from "react";

const isPlainObject = (value) => {
    return Object.prototype.toString.call(value) === "[object Object]";
};

export default function useObjectState(initialValue) {
    return [{}, () => { }];
}
