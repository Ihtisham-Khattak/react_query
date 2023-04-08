import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <div>
      <button className="button" onClick={() => setPage("Planet")}>
        Planet
      </button>
      <button className="button" onClick={() => setPage("People")}>
        People
      </button>
    </div>
  );
};

export default Navbar;
