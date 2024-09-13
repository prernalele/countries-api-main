import "./components/TopHeader";
import "./App.css";
import React, { useState, useEffect } from "react";
import TopHeader from "./components/TopHeader";
import SearchFilter from "./components/SearchFilter";
import CardHolder from "./components/CardHolder";
import data from "./components/data.json";
import { DataContextProvider } from "./dataContext";
import ThemeSwitchContextProvider from "./context/ThemeSwitchContextProvider"

function App() {
  const [uniqueRegionList, setUniqueRegionList] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

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
      <ThemeSwitchContextProvider>
      <DataContextProvider value={{ allData, uniqueRegionList }}>
        <TopHeader />
        <SearchFilter
          filteredResults={filteredResults}
          setFilteredResults={setFilteredResults}
        />
        <CardHolder filteredResults={filteredResults} />
      </DataContextProvider>
      </ThemeSwitchContextProvider>
    </div>
  );
}

export default App;
