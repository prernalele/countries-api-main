import { useState, useRef } from "react";
import "./Search.css";

function Search() {
  const [searchCountry, setSearchCountry] = useState("");
  const searchInUse = useRef(false);

  //const userInput = useRef("");
  const searchFunction = (e) => {
    console.log("e.target.value", e.target.value);
    setSearchCountry(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country"
        className="searchBar"
        value={searchCountry}
        ref={searchInUse}
        onClick={(e) => {
          console.log("opposite searchInUse.current", !searchInUse.current);
          console.log("e target value", e.target.value);
          return (searchInUse.current = searchInUse.current + 1);
        }}
        onChange={searchFunction}
      />
      {searchInUse.current === false ? (
        <ion-icon name="search-outline" className="searchIcon"></ion-icon>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
