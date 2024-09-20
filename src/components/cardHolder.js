import { useContext } from "react";
import DataContext from "../dataContext";
import Card from "./Card";

import "./cardHolder.css";

const CardHolder = ({ filteredResults,
                       isCardClicked, 
                       setIsCardClicked ,
                       clickedCountry,
                       setClickedCountry}) => {
  const { allData } = useContext(DataContext);
  console.log("isCardClicked in cardHolder", isCardClicked)

  return (
    <div className="cardHolderWrapper">
      <Card 
        data={allData} 
        filteredResults={filteredResults} 
        isCardClicked = {isCardClicked}
        setIsCardClicked = {setIsCardClicked}
        clickedCountry={clickedCountry}
        setClickedCountry={setClickedCountry}
        />
    </div>
  );
};

export default CardHolder;
