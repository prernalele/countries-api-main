import { useState, useRef, useContext } from "react";
import ThemeSwitchContext from "../context/ThemeSwitchContext";

import "./Search.css";

function Search({ searchCountry, setSearchCountry }) {
  const [searchInUse, setSearchInUse] = useState(false);
  const [timer, setTimer] = useState(null)
  const {theme} = useContext(ThemeSwitchContext)

  const userInput = useRef("");

  const handleUserInput = (e) => {
   setSearchInUse(true)
   const refValue = userInput.current.value;
   setSearchCountry(refValue);

   // clearing any earlier timer
    if(timer) {
      clearTimeout(timer);
    }

  // setting new timer
    const newTimer = setTimeout(() => {
      setSearchInUse(false)
    }, 1000)

    setTimer(newTimer)
  };
  return (
    <div>
      <input
        type="text"
        placeholder={!searchInUse ? "Search for a country" : ""}
        className={`searchBar ${theme}`}
        ref={userInput}
        onChange={handleUserInput}
      />
      {!searchInUse && (
        <ion-icon name="search-outline" className="searchIcon"></ion-icon>
      )}
    </div>
  );
}

export default Search;
