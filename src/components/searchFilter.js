import Search from "./Search";
import Filter from "./Filter";
import "./SearchFilter.css";

function SearchFilter({ regionList }) {
  return (
    <div className="searchFilterContainer">
      <Search />
      <Filter regionList={regionList} />
    </div>
  );
}

export default SearchFilter;
