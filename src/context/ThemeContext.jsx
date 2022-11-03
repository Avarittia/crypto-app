import React, {useState, useEffect, createContext} from "react";

const getInnitialTheme = () =>{
    if (typeof window !== 'undefined' && window.localStorage){
        const storedPrefs    = window.localStorage.getItem('color.theme')
        if ( typeof storedPrefs ==='string'){
            return storedPrefs
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches){
            return 'dark'
        }
    }
    return 'light'
    
}

export const ThemeContext = createContext()

export const ThemeProvider = ({innitialeTheme, children}) =>{
    const [theme, setTheme] = useState(getInnitialTheme)
    
    const rawSetTheme=(theme)=>{
        const root= window.document.documentElement;
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light': 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-them', theme)

    }
    if (innitialeTheme){
        rawSetTheme(innitialeTheme)
    }

    useEffect(()=>{
        rawSetTheme(theme)

    },[theme])

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}