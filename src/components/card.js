import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return data.map((singleDataPoint, index) => {
    console.log("singleDataPoint", singleDataPoint);
    const { flags, name, capital, population, region } = singleDataPoint;
    return (
      <div key={index} className="wrapper">
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
  });
};

export default Card;
