import React from "react";

const VisitCountryItem = ({ img_src, title, subtitle, description, id }) => {
  return (
    <div
      className={id % 2 ? "visit-country__item" : "visit-country__item reverse"}
    >
      <div className="visit-country__item-img">
        <img src={img_src} alt={img_src} />
      </div>
      <div className="visit-country__item-text">
        <h5 className="visit-country__item-title">{title}</h5>
        <p className="visit-country__item-subtitle">{subtitle}</p>
        <p className="visit-country__item-description">{description}</p>
      </div>
    </div>
  );
};

export default VisitCountryItem;
