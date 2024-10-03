import React, { useState } from 'react'

import ThemeSwitchContext from './ThemeSwitchContext'

const ThemeSwitchContextProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    
    const toggleTheme = () => {
        setTheme((prevTheme)=> {
            if(prevTheme === 'light' ) {
                localStorage.setItem("theme", "dark")
                return 'dark'
            }
            else {
                localStorage.setItem("theme","light" )
                return 'light'
            } })
    }

    return (
        <ThemeSwitchContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeSwitchContext.Provider>
    )

}

export default ThemeSwitchContextProvider