import React from "react";

const PopularPlacesItem = ({ img_src, title, booking_count, id }) => {
  console.log(id);
  return (
    <div
      className="popular-places__item"
      data-aos="zoom-in-up"
      data-aos-duration={550}
      data-aos-delay={100 * id - 100}
    >
      <img src={img_src} alt={img_src} />
      <div className="popular-places__item-info">
        <h5 className="popular-places__item-title">{title}</h5>
        <p className="popular-places__item-booking">{booking_count}</p>
      </div>
    </div>
  );
};

export default PopularPlacesItem;
