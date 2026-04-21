import { createContext, useContext, useEffect, useState } from "react";

const ModeTheme = createContext<{
    isDarkMode: boolean;
    toggleModeTheme: () => void;
}>({ isDarkMode: false, toggleModeTheme: () => {} });

const ModeThemeProvider = ({ children } : { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleModeTheme = () => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        setIsDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        toggleModeTheme();
    }, []);

    return (
        <ModeTheme.Provider value={{ isDarkMode, toggleModeTheme }}>
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