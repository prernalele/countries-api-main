import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return data.map((singleDataPoint, index) => {
    return (
      <div key={index} className="wrapper">
        <div className="name">
          <span className="label">Name</span>
          <span className=" name-value"> {singleDataPoint.name}</span>
        </div>
        <div className="capital">
          <span className="label">Capital </span>
          <span className="capital-value"> {singleDataPoint.capital}</span>
        </div>
        <div className="region">
          <span className="label">Region</span>
          <span className="region-value">{singleDataPoint.region}</span>
        </div>
        <div className="population">
          <span className="label">Population</span>
          <span className="population-value">{singleDataPoint.population}</span>
        </div>
      </div>
    );
  });
};

export default Card;
