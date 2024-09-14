import React, { useState } from 'react'

import ThemeSwitchContext from './ThemeSwitchContext'

const ThemeSwitchContextProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")
    
    const toggleTheme = () => {
        setTheme((prevTheme)=> (prevTheme === 'light' ? "dark" : "light"))
    }

    return (
        <ThemeSwitchContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeSwitchContext.Provider>
    )

}

export default ThemeSwitchContextProvider