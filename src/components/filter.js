import React, { useContext, useEffect } from "react";
import DataContext from "../dataContext";
import "./filter.css";
import ThemeSwitchContext from "../context/ThemeSwitchContext";

function Filter({setFilter}) {
  const { uniqueRegionList, allData } = useContext(DataContext);
  const {theme} = useContext(ThemeSwitchContext)

  const countryBasedOnRegionFinder = (e) => {
    const result = allData.filter((dataPoint) => dataPoint.region=== e.target.value)
    setFilter(result)
  }

  return (
    <div className='filterContainer'>
      <label for="continentsList"></label>
      <select 
        id="continentsList" 
        className={`dropdown ${theme}Elements`} 
        onChange={countryBasedOnRegionFinder}>
        <option className={`dropdown-options ${theme}Elements`} value="" selected>
          Filter by Regions
        </option>
        {uniqueRegionList.length > 0 &&
          uniqueRegionList.map((region, index) => (
            <option key={index} id="optionId" value={region} className={`dropdown-options ${theme}Elements`}>
              {region}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Filter;
