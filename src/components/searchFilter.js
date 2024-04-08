import Search from "./Search";
import Filter from "./Filter";
import "./SearchFilter.css";

function SearchFilter() {
  return (
    <div className="searchFilterContainer">
      <Search />
      <Filter />
    </div>
  );
}

export default SearchFilter;
