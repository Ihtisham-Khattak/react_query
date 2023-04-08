import React from "react";
import { useQuery } from "react-query";
import PlanetComponent from "./PlanetComponent";

const fetchPlanet = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};
const Planet = () => {
  // useQuery accept 2 aurgements (Name, and callback function)
  //{} contains data (fetch data from the API), status(loading, error, pending)
  const { data, status } = useQuery("Planet", fetchPlanet);

  return (
    <div>
      <h2>
        {(status === "error" && (
          <div>
            <p>Error</p>
          </div>
        )) ||
          (status === "loading" && (
            <div>
              <p>Loading the Planet Data</p>
            </div>
          )) ||
          (status === "success" && (
            <div>
              {data.results.map((planet) => (
                <PlanetComponent planet={planet} />
              ))}
            </div>
          ))}
      </h2>
    </div>
  );
};

export default Planet;
