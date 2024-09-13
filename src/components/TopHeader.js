import React, {useContext} from 'react'
import ModeSwitcher from "./ModeSwitcher";
import ThemeSwitchContext from '../context/ThemeSwitchContext';
import "./TopHeader.css";

function TopHeader() {
  const {theme} = useContext(ThemeSwitchContext)
  console.log("theme", theme)
  return (
    <div className="container">
      <h1 className="headerTitle">Where in the world ?</h1>
      <ModeSwitcher />
    </div>
  );
}

export default TopHeader;
