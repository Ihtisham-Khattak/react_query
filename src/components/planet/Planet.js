import React, { useState } from "react";
import { useQuery } from "react-query";
import PlanetComponent from "./PlanetComponent";
import Loader from "react-js-loader";

const fetchPlanet = async (key, greeting, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${2}`);
  return res.json();
};
const Planet = () => {
  // 1. useQuery accept 2 aurgements (Name, and callback function)
  // 2. {} contains data (fetch data from the API), status(loading, error, pending)
  // 3. Query variable

  const [page, setPage] = useState(2);

  const { data, status } = useQuery(["Planet", "page", page], fetchPlanet);
  console.log("🚀 ~ file: Planet.js:17 ~ Planet ~ data:", data);

  return (
    <div>
      {/* <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button> */}
      <h2>
        {(status === "error" && (
          <div>
            <p>Error</p>
          </div>
        )) ||
          (status === "loading" && (
            <div>
              <Loader
                type="spinner-circle"
                bgColor={"#FFFFFF"}
                title={"Data Loading"}
                color={"#FEEF3E"}
                size={100}
              />
            </div>
          )) ||
          (status === "success" && (
            <div>
              {data.results.map((planet, index) => (
                <PlanetComponent planet={planet} index={index} />
              ))}
            </div>
          ))}
      </h2>
    </div>
  );
};

export default Planet;
