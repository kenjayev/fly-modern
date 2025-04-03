import React from "react";

const VisitCountryItem = ({ img_src, title, subtitle, description, id }) => {
  return (
    <div
      className={id % 2 ? "visit-country__item" : "visit-country__item reverse"}
      // data-aos="fade-up"
      // data-aos-duration="800"
      // data-aos-delay="1000"
    >
      <div
        className="visit-country__item-img"
        data-aos={`fade-up-${id % 2 ? "right" : "left"}`}
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <img src={img_src} alt={img_src} />
      </div>
      <div
        className="visit-country__item-text"
        data-aos={`fade-up-${id % 2 ? "left" : "right"}`}
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <h5 className="visit-country__item-title">{title}</h5>
        <p className="visit-country__item-subtitle">{subtitle}</p>
        <p className="visit-country__item-description">{description}</p>
      </div>
    </div>
  );
};

export default VisitCountryItem;
