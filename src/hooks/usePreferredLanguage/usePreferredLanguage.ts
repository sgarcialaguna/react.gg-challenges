import { useSyncExternalStore } from "react"

function checkForWindow() {
    if (typeof window === "undefined") {
        throw new Error("window undefined. Is this running on the server?")
    }

}

function subscribe(callback: () => void) {
    checkForWindow()
    window.addEventListener('languagechange', callback)

    return () => window.removeEventListener('languagechange', callback)
}


function getSnapshot(): string {
    checkForWindow()
    return window.navigator.language
}

export default function usePreferredLanguage() {
    const language = useSyncExternalStore(subscribe, getSnapshot)
    return language
}
