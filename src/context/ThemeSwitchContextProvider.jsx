import React, { useState } from 'react'

import ThemeSwitchContext from './ThemeSwitchContext'

const ThemeSwitchContextProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")

    return (
        <ThemeSwitchContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeSwitchContext.Provider>
    )

}

export default ThemeSwitchContextProvider