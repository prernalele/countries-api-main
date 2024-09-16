import React, {useContext} from 'react'
import ModeSwitcher from "./ModeSwitcher";
import ThemeSwitchContext from '../context/ThemeSwitchContext';
import "./TopHeader.css";

function TopHeader() {
  const {theme} = useContext(ThemeSwitchContext)
  console.log("theme", theme)
  return (
    <div className="container theme" >
      <h1 className="headerTitle theme">Where in the world ?</h1>
      <ModeSwitcher />
    </div>
  );
}

export default TopHeader;
