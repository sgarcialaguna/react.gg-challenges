import { useState } from "react";

function oldSchoolCopy(text: string) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}

export default function useCopyToClipboard(): [string | null, (text: string) => void] {
    const [lastValue, setLastValue] = useState<string | null>(null)

    function copy(text: string) {
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(text)
        } else {
            oldSchoolCopy(text)
        }
        setLastValue(text)
    }

    return [lastValue, copy];
}
