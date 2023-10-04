import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaBuilding, FaBed, FaBath } from "react-icons/fa";
import { BiDirections } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="cit_container grid-container">
      {data.map((cityItem) => (
        <div key={cityItem.id} className="city_card">
          <NavLink to={`/property/${cityItem.id}`}>
            <div>
              <img
                src={cityItem.image}
                alt={cityItem.city}
                className="city_img"
                height="400px"
              />
            </div>
          </NavLink>
          <div className="rent_heart_btn">
            <div>
              <button className="img_btn_1">For Rent</button>
            </div>
            <div>
              <button className="img_btn_2">
                {" "}
                <AiOutlineHeart />
              </button>
            </div>
          </div>
          <div>
            <span>
              {" "}
              <CiLocationOn />
            </span>
            <span>{cityItem.location}</span>
          </div>
          <div className="all_rooms">
            <div>
              <FaBuilding />
              <p className="item_text">{cityItem.rooms} Room</p>
            </div>
            <div>
              <FaBed />
              <p className="item_text">{cityItem.bedrooms} Bed</p>
            </div>
            <div>
              <FaBath />
              <p className="item_text">{cityItem.bathrooms} Bath</p>
            </div>
            <div>
              <BiDirections />
              <p className="item_text">{cityItem.area_sqft} sft</p>
            </div>
          </div>
          <div className="price_section">
            <div className="price">
              <h3>${cityItem.price_per_month_usd}</h3>
              <h4>/month</h4>
            </div>
            <div>
              <button className="read_btn">Read more</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
