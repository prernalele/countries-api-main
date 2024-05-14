import { useContext } from "react";
import DataContext from "../dataContext";
import Card from "./Card";

import "./cardHolder.css";

const CardHolder = ({ filteredResults }) => {
  const { allData } = useContext(DataContext);
  return (
    <div className="cardHolderWrapper">
      <Card data={allData} filteredResults={filteredResults} />
    </div>
  );
};

export default CardHolder;
