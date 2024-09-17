import React, { useContext } from "react";
import DataContext from "../dataContext";
import "./filter.css";
import ThemeSwitchContext from "../context/ThemeSwitchContext";
//import data from "./data.json";

function Filter() {
  const { uniqueRegionList } = useContext(DataContext);
  const {theme} = useContext(ThemeSwitchContext)

  return (
    <div className='filterContainer'>
      <select className={`dropdown ${theme}`}>
        <option className={`dropdown-options ${theme}`} value="Filter by Region">
          Filter by Region
        </option>
        {uniqueRegionList.length > 0 &&
          uniqueRegionList.map((region, index) => (
            <option key={index} value={region} className={theme}>
              {region}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Filter;
