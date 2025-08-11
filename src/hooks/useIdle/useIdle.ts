import { useEffect, useState } from "react";

function throttle(cb: () => void, ms: number) {
    let lastTime = 0;
    return () => {
        const now = Date.now();
        if (now - lastTime >= ms) {
            cb();
            lastTime = now;
        }
    };
}

export default function useIdle(ms = 1000 * 20) {
    const [idle, setIdle] = useState(false);

    useEffect(() => {
        const id = window.setInterval(throttledSetIdle, ms)

        function throttledSetIdle() {
            throttle(() => setIdle(true), ms)()
        }

        function resetIdle() {
            throttledSetIdle()
            setIdle(false);
        }

        window.addEventListener("mousemove", resetIdle);
        window.addEventListener("mousedown", resetIdle);
        window.addEventListener("resize", resetIdle);
        window.addEventListener("keydown", resetIdle);
        window.addEventListener("touchstart", resetIdle);
        window.addEventListener("wheel", resetIdle);
        document.addEventListener("visibilitychange", resetIdle);

        return () => {
            window.removeEventListener("mousemove", resetIdle);
            window.removeEventListener("mousedown", resetIdle);
            window.removeEventListener("resize", resetIdle);
            window.removeEventListener("keydown", resetIdle);
            window.removeEventListener("touchstart", resetIdle);
            window.removeEventListener("wheel", resetIdle);
            document.removeEventListener("visibilitychange", resetIdle);
            window.clearInterval(id)
        };
    }, [ms]);

    return idle;
}
