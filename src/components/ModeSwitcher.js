import "./ModeSwitcher.css";
import { useContext } from 'react'
import ThemeSwitchContext from "../context/ThemeSwitchContext";

function ModeSwitcher() {
  const { toggleTheme } = useContext(ThemeSwitchContext)
  const {theme} = useContext(ThemeSwitchContext)
  return (
    <div className= {`modeClass ${theme}`}>
      <ion-icon name="moon" className="moon" onClick={toggleTheme}></ion-icon>
      <span className={`modeText ${theme}`}  onClick={toggleTheme}>Mode</span>
    </div>
  );
}

export default ModeSwitcher;
