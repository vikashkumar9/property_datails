import React from "react";
import { useParams } from "react-router-dom";
import citydata from "../../data/citydata.json";
import { CiLocationOn } from "react-icons/ci";
import { FaBuilding, FaBed, FaBath } from "react-icons/fa";
import { BiDirections } from "react-icons/bi";

const Property = () => {
  const { id } = useParams();

  const property = citydata.cities.find((item) => item.id === parseInt(id));

  return (
    <div>
      <div className="cit_container ">
        <div>
          <img
            src={property.image}
            alt={property.city}
            className="city_img"
            height="400px"
          />
        </div>

        <div>
          <span>
            {" "}
            <CiLocationOn />
          </span>
          <span>{property.location}</span>
        </div>
        <div className="all_rooms">
          <div>
            <FaBuilding />
            <p className="item_text">{property.rooms} Room</p>
          </div>
          <div>
            <FaBed />
            <p className="item_text">{property.bedrooms} Bed</p>
          </div>
          <div>
            <FaBath />
            <p className="item_text">{property.bathrooms} Bath</p>
          </div>
          <div>
            <BiDirections />
            <p className="item_text">{property.area_sqft} sft</p>
          </div>
        </div>
        <div className="price_section">
          <div className="price">
            <h3>${property.price_per_month_usd}</h3>
            <h4>/month</h4>
          </div>
          <div>
            <button className="read_btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
