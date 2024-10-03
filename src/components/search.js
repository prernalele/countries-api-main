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
   const refValue = userInput.current.value;
   setSearchCountry(refValue);

   // clearing any earlier timer
    if(timer) {
      clearTimeout(timer);
    }

  // setting new timer
    const newTimer = setTimeout(() => {
      
    }, 1000)
    setTimer(newTimer)
  };

  return (
    <div className="searchBarAndIcon">
      {
        <ion-icon 
        name="search-outline" 
        id="search-icon-id"
        className={`searchIcon ${searchInUse} && style={display:none}`}
        aria-hidden="true"
        ></ion-icon>
      }
      <input
        type="text"
        placeholder= "Search for a country"
        className={`searchBar ${theme}`}
        ref={userInput}
        onChange={handleUserInput}
        onMouseover={() => setSearchInUse(true)}
      />
    </div>
  );
}

export default Search;
