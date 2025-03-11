import { useEffect, useRef } from "react";

export function useInsideOutsClick<T extends HTMLElement>(
    onInsideClick?: () => void,
    onOutsideClick?: () => void
) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (ref.current && ref.current.contains(event.target as Node)) {
                onInsideClick?.();
            } else {
                onOutsideClick?.();
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onOutsideClick?.();
            }
        }

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onInsideClick, onOutsideClick]);

    return ref;
}
