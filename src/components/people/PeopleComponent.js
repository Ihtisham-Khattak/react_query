import React from "react";

const PeopleComponent = ({people}) => {
  return (
    <div className="card">
      <h3>{people.name}</h3>
      <p>Date of Birth - {people.birth_year}</p>
      <p>Gender - {people.male}</p>
      <p>Skin Color - {people.skin_color}</p>
    </div>
  );
};

export default PeopleComponent;
