import { useEffect } from "react";

function useShortcut(keys: string[], callback: () => void) {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (keys.includes(event.key)) {
                event.preventDefault();
                callback();
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [keys, callback]);
}

export default useShortcut;
