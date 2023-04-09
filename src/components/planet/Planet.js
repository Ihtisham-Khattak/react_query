import React, { useState } from "react";
import { useQuery } from "react-query";
import PlanetComponent from "./PlanetComponent";
import Loader from "react-js-loader";

const fetchPlanet = async (key, page) => {
  const res = await fetch('https://swapi.dev/api/planets/?page=2');
  return res.json();
};
const Planet = () => {
  // 1. useQuery accept 2 aurgements (Name, and callback function)
  // 2. {} contains data (fetch data from the API), status(loading, error, pending)
  // 3. Query variable

  const [page, setPage] = useState(1);
  console.log("🚀 ~ file: Planet.js:16 ~ Planet ~ page:", page)

  const { data, isFetching, isPreviousData, status } = useQuery(
    ["Planet", page],
    fetchPlanet
  );
  console.log("🚀 ~ file: Planet.js:17 ~ Planet ~ data:", data);

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
            <>
              <h4>Current Page: {page}</h4>
              <div>
                {data.results.map((planet, index) => (
                  <PlanetComponent planet={planet} index={index} />
                ))}
              </div>
              <button
                className="button"
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 0}
              >
                Prev Page
              </button>{" "}
              <button
                className="button"
                onClick={() => {
                  if (!isPreviousData && data.hasMore) {
                    setPage((old) => old + 1);
                  }
                }}
                // Disable the Next Page button until we know a next page is available
                disabled={isPreviousData || !data?.hasMore}
              >
                Next Page
              </button>
              {isFetching ? <span> Loading...</span> : null}{" "}
            </>
          ))}
      </h2>
    </div>
  );
};

export default Planet;
