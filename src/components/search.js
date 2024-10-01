import { useState, useRef, useContext } from "react";
import ThemeSwitchContext from "../context/ThemeSwitchContext";

import "./Search.css";

function Search({ searchCountry, setSearchCountry }) {
  const [searchInUse, setSearchInUse] = useState(false);
  const [timer, setTimer] = useState(null)
  const {theme} = useContext(ThemeSwitchContext)

  const userInput = useRef("");

  const handleUserInput = (e) => {
    console.log("e.target", e.target)
    setSearchInUse(true)
   const refValue = userInput.current.value;
   setSearchCountry(refValue);

   // clearing any earlier timer
    if(timer) {
      clearTimeout(timer);
    }

  // setting new timer
    const newTimer = setTimeout(() => {
      
    }, 1000)
    setSearchInUse(false)
    setTimer(newTimer)
  };
  return (
    <div className="searchBarAndIcon">
      {!searchInUse && (
        <ion-icon name="search-outline" className="searchIcon"></ion-icon>
      )}
      <input
        type="text"
        placeholder={!searchInUse ? "Search for a country" : ""}
        className={`searchBar ${theme}`}
        ref={userInput}
        onClick={() =>setSearchInUse(true)}
        onChange={handleUserInput}
      />
    </div>
  );
}

export default Search;
