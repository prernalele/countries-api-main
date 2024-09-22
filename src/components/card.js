import React, {useContext} from "react";
import ThemeSwitchContext from "../context/ThemeSwitchContext";
import DataContext from "../dataContext";
import "./Card.css";

const Card = ({ data, filteredResults,isCardClicked,
  setIsCardClicked, clickedCountry, setClickedCountry }) => {

  const {theme} = useContext(ThemeSwitchContext)

  const { allData } = useContext(DataContext);

  const openCountryCard = (e) => {
    const indexClicked =  e.target.closest('div').getAttribute('data-key')
    console.log("e.target", e.target.closest('div').getAttribute('data-key') )
    console.log("data", allData[indexClicked])
    setIsCardClicked(!isCardClicked)
    setClickedCountry(allData[indexClicked])
  }


  return (filteredResults?.length > 0 ? filteredResults : data).map(
    (singleDataPoint, index) => {
      const { flags, name, capital, population, region } = singleDataPoint;
      return (
        <div data-key={index} className={`wrapper ${theme}`} onClick={openCountryCard}
        data-value={name}>
          <img  data-key={index} alt={`flag of ${name}`} src={flags.svg} />
          <div data-key={index} className="cardDetailsWrapper">
            <div className="name">
              <span id="name-value"> {name}</span>
            </div>
            <div  data-key={index} className="capital">
              <span className="label">Capital: </span>
              <span className="capital-value"> {capital}</span>
            </div>
            <div data-key={index} className="region">
              <span className="label">Region:</span>
              <span className="region-value">{region}</span>
            </div>
            <div data-key={index} className="population">
              <span className="label">Population:</span>
              <span className="population-value">{population}</span>
            </div>
          </div>
        </div>
      );
    }
  );
};

export default Card;
