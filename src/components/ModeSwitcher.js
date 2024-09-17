import "./ModeSwitcher.css";
import { useContext } from 'react'
import ThemeSwitchContext from "../context/ThemeSwitchContext";

function ModeSwitcher() {
  const { toggleTheme } = useContext(ThemeSwitchContext)
  const {theme} = useContext(ThemeSwitchContext)
  return (
    <div className= {`modeClass ${theme}`}>
      <ion-icon name="moon" style={{color: `${theme}` === "light" ? "black" : "white"}} onClick={toggleTheme}></ion-icon>
      <span className={`modeText ${theme}`}  onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
}

export default ModeSwitcher;
