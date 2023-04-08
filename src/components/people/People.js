import React from "react";
import { useQuery } from "react-query";
import PeopleComponent from "./PeopleComponent";

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
            <p>Loading the People Data</p>
          </div>
        )) ||
        (status === "success" && (
          <div>
            {data.results.map((people) => (
              <PeopleComponent people={people} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default People;
