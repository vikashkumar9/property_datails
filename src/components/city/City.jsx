import React, { useState } from "react";
import citydata from "../../data/citydata.json";
import "./city.css";

import { GiSandsOfTime } from "react-icons/gi";
import Card from "../citycard/Card";
import { FeatureButton } from "../button/FeatureButton";
export const City = () => {
  const [city, setCity] = useState(citydata.cities);
  const [noOfElements, setNoofElements] = useState(3);

  const element = city.slice(0, noOfElements);
  const showMore = () => {
    setNoofElements(noOfElements + 3);
  };

  return (
    <div className="container">
      <h2 className="heading">Featured Listed Property</h2>
      <div className="cityname_btns">
        <FeatureButton data={citydata.cities} setdata={setCity} />
      </div>
      <Card data={element} />
      <div className="showmore_btn">
        <button className="show_btn" onClick={showMore}>
          <GiSandsOfTime />
          Show More
        </button>
      </div>
    </div>
  );
};
