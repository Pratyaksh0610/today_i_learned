import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [isDarkMode,setIsDarkMode] =useState(false);

    const toggleTheme = ()=>setIsDarkMode((prev)=>!prev);
    useEffect(()=>{
        console.log("isDarkMode",isDarkMode);
    },[isDarkMode]);

    return (
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}