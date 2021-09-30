import React from "react";
import "../Common_style.scss";
import Accordeon from "../components/Accordeon/Accordeon";
import accordeon_items from "../data/accordeon_items.json";

const Home = ({ pageTitle }) => {
  return (
    <>
      <div className="container">
        <h1>{pageTitle}</h1>
        <Accordeon items={accordeon_items} />
      </div>
    </>
  );
};

export default Home;
