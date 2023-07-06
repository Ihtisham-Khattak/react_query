import React from "react";
import { useQuery } from "react-query";
import PeopleComponent from "./PeopleComponent";
import Loader from "react-js-loader"

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return await res.json();
};
const People = () => {

  const { data, status } = useQuery("People", fetchPeople);

  return (
    <div>
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
            {data.results.map((people) => (
              <PeopleComponent people={people} />
            ))}
          </div>
        ))
      }
    </div>
  );
};

export default People;
