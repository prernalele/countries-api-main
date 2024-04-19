import "./components/TopHeader";
import "./App.css";
import React, { useState, useEffect } from "react";
import TopHeader from "./components/TopHeader";
import SearchFilter from "./components/SearchFilter";
import CardHolder from "./components/CardHolder";
import data from "./components/data.json";

function App() {
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
        return setUniqueRegionList([...uniqueRegionList, data.region]);
      }
    });
  });


  return (
    <div>
      <TopHeader />
      <SearchFilter regionList={uniqueRegionList} />
      <CardHolder data={allData} />
    </div>
  );
}

export default App;
