import { useState, useContext, useEffect } from "react";
import DataContext from "../dataContext";
import Search from "./Search";
import Filter from "./Filter";
import "./SearchFilter.css";


function SearchFilter({ setFilteredResults }) {
  const { allData } = useContext(DataContext);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    const newFilteredResult = allData.filter(
      (data) => data.name.toLowerCase().includes(searchCountry.toLowerCase())
    );
    setFilteredResults(newFilteredResult);
  }, [searchCountry, allData, setFilteredResults]);

  return (
    <div className="searchFilterContainer">
      <Search
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
      />
      <Filter setFilter={setFilteredResults}/>
    </div>
  );
}

export default SearchFilter;
