import React, {useContext} from "react";
import ThemeSwitchContext from "../context/ThemeSwitchContext";
import "./Card.css";

const Card = ({ data, filteredResults,isCardClicked,
  setIsCardClicked, clickedCountry, setClickedCountry }) => {

  const {theme} = useContext(ThemeSwitchContext)
  console.log("country clicked", clickedCountry)

  const openCountryCard = (e) => {
    console.log("e.target", e.target.closest('div'))
    setIsCardClicked(!isCardClicked)
    setClickedCountry(e.target.value)
  }


  return (filteredResults?.length > 0 ? filteredResults : data).map(
    (singleDataPoint, index) => {
      const { flags, name, capital, population, region } = singleDataPoint;
      return (
        <div key={index} className={`wrapper ${theme}`} onClick={openCountryCard}
        value={name}>
          <img alt={`flag of ${name}`} src={flags.svg} />
          <div className="cardDetailsWrapper">
            <div className="name">
              <span id="name-value"> {name}</span>
            </div>
            <div className="capital">
              <span className="label">Capital: </span>
              <span className="capital-value"> {capital}</span>
            </div>
            <div className="region">
              <span className="label">Region:</span>
              <span className="region-value">{region}</span>
            </div>
            <div className="population">
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
