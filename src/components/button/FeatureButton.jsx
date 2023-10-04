import React, { useEffect } from "react";
export const FeatureButton = ({ data, setdata }) => {
  const selectedCity = "New York";

  const handleData = (ele) => {
    const newdata = data.filter((e) => {
      return e.city === ele;
    });
    setdata(newdata);
  };
  useEffect(() => {
    handleData(selectedCity);
  }, [selectedCity]);

  return (
    <div>
      <button className="c_btn" onClick={() => handleData("New York")}>
        New York
      </button>
      <button className="c_btn" onClick={() => handleData("Los Angeles")}>
        Los Angeles
      </button>
      <button className="c_btn" onClick={() => handleData("Chicago")}>
        Chicago
      </button>
      <button className="c_btn" onClick={() => handleData("San Francisco")}>
        San Francisco
      </button>
    </div>
  );
};
