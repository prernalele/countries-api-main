import React, {useContext} from 'react'
import ModeSwitcher from "./ModeSwitcher";
import ThemeSwitchContext from '../context/ThemeSwitchContext';
import "./TopHeader.css";

function TopHeader() {
  const {theme} = useContext(ThemeSwitchContext)
  return (
    <div className={`container ${theme}Elements`} >
      <h1 className={`headerTitle ${theme}Elements`}>Where in the world ?</h1>
      <ModeSwitcher />
    </div>
  );
}

export default TopHeader;
