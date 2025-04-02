import React from "react";

const PopularPlacesItem = ({ img_src, title, booking_count }) => {
  return (
    <div className="popular-places__item">
      <img src={img_src} alt={img_src} />
      <div className="popular-places__item-info">
        <h5 className="popular-places__item-title">{title}</h5>
        <p className="popular-places__item-booking">{booking_count}</p>
      </div>
    </div>
  );
};

export default PopularPlacesItem;
