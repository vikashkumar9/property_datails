import React from "react";
import { Routes, Route } from "react-router-dom";
import { City } from "./components/city/City";
import Property from "./components/Property/Property";
export const CityRoutes = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<City />} />

        <Route path="property/:id" element={<Property />} />
      </Routes>
    </div>
  );
};
