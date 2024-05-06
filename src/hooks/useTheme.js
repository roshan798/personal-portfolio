import { useState, useEffect } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const prevTheme = localStorage.getItem("theme");
        return prevTheme ? JSON.parse(prevTheme) : "light";
    });

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? setTheme("dark")
            : setTheme("light");
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.remove("light");
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
        }

        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};

export default useTheme;
