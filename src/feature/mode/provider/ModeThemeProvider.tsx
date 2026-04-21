import { createContext, useContext, useEffect, useState } from "react";

const ModeTheme = createContext<{
    theme: string | null;
    toggleModeTheme: () => void;
}>({ theme: 'light', toggleModeTheme: () => {} });

const ModeThemeProvider = ({ children } : { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            applyTheme(JSON.parse(storedTheme));
        }
    }, []);

    const applyTheme = (mode: string) => {
        const root = document.documentElement;

        if (mode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        setTheme(mode);
        localStorage.setItem('theme', JSON.stringify(mode));
    };

    const toggleModeTheme = () => {
        applyTheme(theme === 'dark' ? 'light' : 'dark');
    };

    if (!theme) return null;

    return (
        <ModeTheme.Provider value={{ theme, toggleModeTheme }}>
            {children}
        </ModeTheme.Provider>
    )
}

const useModeTheme = () => {
    const context = useContext(ModeTheme);
    if (context === undefined) {
        throw new Error("useModeTheme must be used within a ModeThemeProvider");
    }
    return context;
}

export { ModeTheme, ModeThemeProvider, useModeTheme };