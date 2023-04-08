import React from "react";

const PlanetComponent = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Surface Water - {planet.surface_water}</p>
      <p>Climate - {planet.climate}</p>
      <p>Population - {planet.population}</p>
    </div>
  );
};

export default PlanetComponent;
