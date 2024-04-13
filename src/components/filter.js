import React, { useState, useEffect, useRef } from "react";
import data from "./data.json";

function Filter() {
  const [uniqueRegionList, setUniqueRegionList] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    //gets data
    fetch(data)
      .then(setAllData(data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  useEffect(() => {
    allData.map((data) => {
      if (!uniqueRegionList.includes(data.region)) {
        setUniqueRegionList([...uniqueRegionList, data.region]);
      }
    });
  });

  return (
    <div>
      <label htmlFor="options"> Filter by Region</label>
      <select id="options">
        <option value="select a region"> Select a region</option>
        {uniqueRegionList.length > 0 &&
          uniqueRegionList.map((region) => (
            <option value={region}>{region}</option>
          ))}
      </select>
    </div>
  );
}

export default Filter;
