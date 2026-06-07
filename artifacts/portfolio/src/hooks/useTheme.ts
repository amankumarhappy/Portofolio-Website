import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";

function getAutoTheme(): Theme {
    const hour = new Date().getHours();
    // Dark mode: 6pm (18) to 6am (6)
    return hour >= 18 || hour < 6 ? "dark" : "light";
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("dark");
    const [isManual, setIsManual] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("akh-theme") as Theme | null;
        const manual = localStorage.getItem("akh-theme-manual") === "true";
        if (stored && manual) {
            setTheme(stored);
            setIsManual(true);
        } else {
            setTheme(getAutoTheme());
            setIsManual(false);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
        // Also set class for conditional styling
        root.classList.remove("theme-dark", "theme-light");
        root.classList.add(`theme-${theme}`);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        setIsManual(true);
        localStorage.setItem("akh-theme", next);
        localStorage.setItem("akh-theme-manual", "true");
    }, [theme]);

    return { theme, toggleTheme, isManual };
}
