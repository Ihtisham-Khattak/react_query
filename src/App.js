import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Planet from "./components/planet/Planet";
import People from "./components/people/People";

function App() {
  const [page, setPage] = useState("Planet");

  return (
    <div className="App">
      <h1>React Query Concept</h1>

      <Navbar setPage={setPage} />
      <div className="content">
        {page === "Planet" ? <Planet /> : <People />}
      </div>
    </div>
  );
}

export default App;
