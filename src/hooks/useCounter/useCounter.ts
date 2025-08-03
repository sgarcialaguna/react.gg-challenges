import * as React from "react";


declare type UseCounterOptions = { min?: number, max?: number }

export default function useCounter(startingValue = 0, options: UseCounterOptions = {}) {
    const { min, max } = options;

    if (typeof min === "number" && startingValue < min) {
        throw new Error(
            `Your starting value of ${startingValue} is less than your min of ${min}.`
        );
    }

    if (typeof max === "number" && startingValue > max) {
        throw new Error(
            `Your starting value of ${startingValue} is greater than your max of ${max}.`
        );
    }

    const [count, setCount] = React.useState(startingValue);

    const increment = () => {
        if (typeof max === "number" && count === max) {
            return
        }
        setCount(c => c + 1)
    };

    const decrement = () => {
        if (typeof min === "number" && count === min) {
            return
        };
        setCount(c => c - 1)
    }

    const set = (newValue: number) => {
        if (typeof min === "number" && newValue < min) {
            return
        }

        if (typeof max === "number" && newValue > max) {
            return
        }
        setCount(newValue)
    }

    const reset = () => { setCount(startingValue) };

    return [
        count,
        {
            increment,
            decrement,
            set,
            reset
        }
    ];
}
