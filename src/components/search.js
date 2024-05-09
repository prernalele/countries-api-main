import { useState, useRef } from "react";
import { useContext } from "react";
import DataContext from "../dataContext";
import "./Search.css";

function Search() {
  // console.log("data", data && Object.entries(data[0]));
  const { allData, uniqueRegionList } = useContext(DataContext);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchInUse, setSearchInUse] = useState(false);

  const userInput = useRef("");

  const searchClickHandler = (e) => {
    setSearchInUse((prev) => !prev);
  };
  const handleUserInput = (e) => {
    if (e.charCode === 13) {
      const refValue = userInput.current.value;
      setSearchCountry(refValue);
      // call the method that fetches countries per searchCountry
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder={!searchInUse ? "Search for a country" : ""}
        className="searchBar"
        ref={userInput}
        onClick={searchClickHandler}
        onKeyPress={handleUserInput}
      />
      {!searchInUse && (
        <ion-icon name="search-outline" className="searchIcon"></ion-icon>
      )}
    </div>
  );
}

export default Search;
