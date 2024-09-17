import React, {useContext} from "react";
import ThemeSwitchContext from "../context/ThemeSwitchContext";
import "./Card.css";

const Card = ({ data, filteredResults }) => {
  const {theme} = useContext(ThemeSwitchContext)
  return (filteredResults?.length > 0 ? filteredResults : data).map(
    (singleDataPoint, index) => {
      const { flags, name, capital, population, region } = singleDataPoint;
      return (
        <div key={index} className={`wrapper ${theme}`}>
          <img alt={`flag of ${name}`} src={flags.svg} />
          <div className="cardDetailsWrapper">
            <div className="name">
              <span className="label">Name:</span>
              <span className="name-value"> {name}</span>
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
