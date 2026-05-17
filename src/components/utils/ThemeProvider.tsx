"use client";

import { useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();

    useEffect(() => {
        // Apply theme class to document root for CSS variable switching
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.classList.remove("theme-dark", "theme-light");
        document.documentElement.classList.add(`theme-${theme}`);
    }, [theme]);

    return <>{children}</>;
}
