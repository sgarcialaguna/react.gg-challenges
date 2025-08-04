import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

export default function useContinuousRetry(
    callback,
    interval = 100,
    options = {}
) {
    const { maxRetries = Infinity } = options;
    const [hasResolved, setHasResolved] = React.useState(false);

    return hasResolved;
}
