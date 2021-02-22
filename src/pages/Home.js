import React from "react";

// Components
import Faculties from "../components/Faculties";

function Home() {
  return (
    <div className="Home">
      <h1>UNSW Course Reviews</h1>

      <h4>Please Select The Faculty Below</h4>

      <Faculties />
    </div>
  );
}

export default Home;
