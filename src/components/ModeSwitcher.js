import "./ModeSwitcher.css";
import { useContext } from 'react'
import ThemeSwitchContext from "../context/ThemeSwitchContext";

function ModeSwitcher() {
  const { toggleTheme } = useContext(ThemeSwitchContext)
  return (
    <div className="modeClass">
      <ion-icon name="moon" className="moon" onClick={toggleTheme}></ion-icon>
      <span className="modeText">Mode</span>
    </div>
  );
}

export default ModeSwitcher;
