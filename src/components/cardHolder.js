import { useContext } from "react";
import DataContext from "../dataContext";
import ThemeSwitchContext from "../context/ThemeSwitchContext";
import Card from "./Card";

import "./cardHolder.css";

const CardHolder = ({ filteredResults,
                      isCardClicked, 
                      setIsCardClicked ,
                      setClickedCountry}) => {
  const { allData } = useContext(DataContext);
  const { theme } = useContext(ThemeSwitchContext);

  return (
    <div className={`cardHolderWrapper ${theme}`}>
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
