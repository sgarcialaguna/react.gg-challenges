import { useRef, useState } from "react";

export default function useMouse() {
    const [state, setState] = useState({
        x: 0,
        y: 0,
        elementX: 0,
        elementY: 0,
        elementPositionX: 0,
        elementPositionY: 0
    });

    const ref = useRef(null);

    return [state, ref];
}
