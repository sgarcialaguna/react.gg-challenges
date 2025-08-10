import * as React from "react";

export default function useWindowScroll() {
    const [state, setState] = React.useState({
        x: null,
        y: null
    });

    const scrollTo = () => { };

    return [state, scrollTo];
}