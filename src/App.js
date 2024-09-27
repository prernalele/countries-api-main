import "./components/TopHeader";
import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import TopHeader from "./components/TopHeader";
import SearchFilter from "./components/SearchFilter";
import CardHolder from "./components/CardHolder";
import data from "./components/data.json";
import { DataContextProvider } from "./dataContext";
import ThemeSwitchContextProvider from "./context/ThemeSwitchContextProvider"
import ThemeSwitchContext from "./context/ThemeSwitchContext";
import SingleCard from "./components/SingleCard";

function App() {
  const [uniqueRegionList, setUniqueRegionList] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isSingleCardClicked, setIsSingleCardClicked] = useState(false)
  const [clickedCountry, setClickedCountry] = useState({})
  const { theme } = useContext(ThemeSwitchContext)


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
      <div className={theme}>
      <DataContextProvider value={{ allData,setAllData, uniqueRegionList }}>
        <TopHeader />
        {isSingleCardClicked ? <SingleCard 
        clickedCountry={clickedCountry}
        setClickedCountry={setClickedCountry}
        isSingleCardClicked={isSingleCardClicked}
        setIsCardClicked={setIsSingleCardClicked}
        /> :
        <div className={`searchResultWrapper ${theme}`} >
        <SearchFilter
          filteredResults={filteredResults}
          setFilteredResults={setFilteredResults}
        /> 
        <CardHolder 
        isCardClicked = {isSingleCardClicked} 
        filteredResults={filteredResults} 
        setIsCardClicked = {setIsSingleCardClicked}
        setClickedCountry={setClickedCountry} />
        </div>
      }
      </DataContextProvider>
    </div>

  );
}

export default App;
