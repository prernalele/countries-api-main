// import React, { useState, useEffect, useRef } from "react";
import "./filter.css";
//import data from "./data.json";

function Filter({ regionList }) {
  // const [uniqueRegionList, setUniqueRegionList] = useState([]);
  // const [allData, setAllData] = useState([]);

  // useEffect(() => {
  //   //gets data
  //   fetch(data)
  //     .then(setAllData(data))
  //     .catch((error) => console.log("Error fetching data", error));
  // }, []);

  // useEffect(() => {
  //   allData.map((data) => {
  //     if (!uniqueRegionList.includes(data.region)) {
  //       setUniqueRegionList([...uniqueRegionList, data.region]);
  //     }
  //   });
  // });

  return (
    <div className="filterContainer">
      <select className="dropdown">
        <option className="dropdown-options" value="Filter by Region">
          Filter by Region
        </option>
        {regionList.length > 0 &&
          regionList.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Filter;
