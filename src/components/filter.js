import React, { useContext } from "react";
import DataContext from "../dataContext";
import "./filter.css";
//import data from "./data.json";

function Filter() {
  const { uniqueRegionList } = useContext(DataContext);

  return (
    <div className="filterContainer">
      <select className="dropdown">
        <option className="dropdown-options" value="Filter by Region">
          Filter by Region
        </option>
        {uniqueRegionList.length > 0 &&
          uniqueRegionList.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Filter;
