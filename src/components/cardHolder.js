import { useContext } from "react";
import DataContext from "../dataContext";
import Card from "./Card";

import "./cardHolder.css";

const CardHolder = ({ filteredResults,
                      isCardClicked, 
                      setIsCardClicked ,
                      setClickedCountry}) => {
  const { allData } = useContext(DataContext);

  return (
    <div className="cardHolderWrapper">
      <Card 
        data={allData} 
        filteredResults={filteredResults} 
        isCardClicked = {isCardClicked}
        setIsCardClicked = {setIsCardClicked}
        setClickedCountry={setClickedCountry}
        />
    </div>
  );
};

export default CardHolder;
