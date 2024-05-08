import { useState, useEffect } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const prevTheme = localStorage.getItem("theme");
        return prevTheme ? JSON.parse(prevTheme) : "system";
    });
    const [mode,setMode] = useState();

    const setDark = () => {
        setMode("dark");
        const root = document.documentElement;
        root.classList.remove("light");
        root.classList.add("dark");
    }
    const setLight = () => {
        setMode("light");
        const root = document.documentElement;
        root.classList.remove("dark");
        root.classList.add("light");
    }
    useEffect(() => {
        if (theme === "system") {
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? setDark()
                : setLight();
        }
        else if (theme === "dark") {
            setDark();
        } else {
            setLight();
        }

        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    const toggleTheme = (_theme) => {
        setTheme(_theme);
    };

    return { mode,theme, toggleTheme };
};

export default useTheme;
