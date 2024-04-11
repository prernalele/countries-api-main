import "./Search.css";

function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country"
        className="searchBar"
      />
      <ion-icon name="search-outline" className="searchIcon"></ion-icon>
    </div>
  );
}

export default Search;
