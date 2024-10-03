import React, {useContext} from "react";
import ThemeSwitchContext from "../context/ThemeSwitchContext";
import DataContext from "../dataContext";
import "./Card.css";

const Card = ({ data, filteredResults,isCardClicked,
  setIsCardClicked, setClickedCountry }) => {

  const {theme} = useContext(ThemeSwitchContext)

  const { allData } = useContext(DataContext);

  const openCountryCard = (e) => {
    const nameClicked = e.target.getAttribute('data-name')
    setIsCardClicked(!isCardClicked)
    const countryLookup = allData.find((dataPoint) => dataPoint.name.toLowerCase() ===nameClicked.toLowerCase() )
    console.log("countryLookup", countryLookup)
    setClickedCountry(countryLookup)
  }


  return ((filteredResults?.length > 0 ? filteredResults : data).map(
    (singleDataPoint, index) => {
      const { flags, name, capital, population, region } = singleDataPoint;
      return (
        <div key={index} className={`wrapper ${theme}Elements`} onClick={openCountryCard}
        data-name={name}>
          <img  data-name={name} alt={`flag of ${name}`} src={flags.svg} />
          <div data-name={name} className="cardDetailsWrapper">
            <div data-name={name} className="name">
              <span data-name={name} id={`{name}-value`}> {name}</span>
            </div>
            <div  data-name={name}className="capital">
              <span data-name={name} className="label">Capital: </span>
              <span data-name={name} className="capital-value"> {capital}</span>
            </div>
            <div data-name={name} className="region">
              <span data-name={name} className="label">Region:</span>
              <span data-name={name} className="region-value">{region}</span>
            </div>
            <div data-name={name} className="population">
              <span data-name={name} className="label">Population:</span>
              <span data-name={name} className="population-value">{population}</span>
            </div>
          </div>
        </div>
      );
    }
  ) )
  }

export default Card;
