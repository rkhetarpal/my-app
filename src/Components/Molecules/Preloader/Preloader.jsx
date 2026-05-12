import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="beaker">
        <div className="liquid"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Preloader;
