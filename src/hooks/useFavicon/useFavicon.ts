import { useEffect } from "react"

export default function useFavicon(url: string) {
    useEffect(() => {
        let element = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
        if (!element) {
            element = document.createElement('link')
            element.rel = 'icon'
            document.head.appendChild(element)
        }
        element.href = url

    }, [url])
}
