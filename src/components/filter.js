import React, { useState, useEffect, useRef } from "react";
import data from "./data.json";

function Filter() {
  const [uniqueRegionList, setUniqueRegionList] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    //gets data
    fetch(data)
      .then(setAllData(data))
      // .then(
      //   (uniqueRegionList = allData.map((data) => {
      //     const isDuplicate = uniqueRegionList.find(
      //       (unique) => unique === data.region
      //     );
      //     if (!isDuplicate) uniqueRegionList.push(data.region);
      //     console.log("uniqueRegionList", uniqueRegionList);
      //     return uniqueRegionList;
      //   }))
      // )
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  function uniqueRegions(e) {
    allData.map((data) => {
      const isDuplicate = uniqueRegionList.find(
        (unique) => unique === data.region
      );
      if (!isDuplicate) setUniqueRegionList((pre) => [...pre, data.region]);
      console.log("uniqueRegionList", uniqueRegionList);
      //return uniqueRegionList;
    });
    console.log(uniqueRegionList);
    // return uniqueRegionList;
  }

  return (
    <div>
      <label htmlFor="options"> Filter by Region</label>
      <select id="options" onClick={uniqueRegions}>
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
