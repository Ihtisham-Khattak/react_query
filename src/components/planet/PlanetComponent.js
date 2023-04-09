import React from "react";

const PlanetComponent = ({ planet, index }) => {
  return (
    <div className="card" key={index}>
      <h3>{planet.name}</h3>
      <p>Surface Water - {planet.surface_water}</p>
      <p>Climate - {planet.climate}</p>
      <p>Population - {planet.population}</p>
    </div>
  );
};

export default PlanetComponent;
