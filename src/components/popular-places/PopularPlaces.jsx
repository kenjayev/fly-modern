import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./popularPlaces.css";
import { Pagination, Navigation } from "swiper/modules";

import PopularPlacesItem from "./PopularPlacesItem";
import popularPlacesDB from "./popularPlacesDB";

export default function PopularPlaces() {
  const { t } = useTranslation();
  const popularPlacesDBArr = popularPlacesDB();
  return (
    <section className="popular-places">
      <div className="popular-places__wrapper">
        <h4
          className="section__title"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          {t("popularPlacesSection.title")}
        </h4>
        <p
          className="section__subtitle"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="100"
        >
          {t("popularPlacesSection.subtitle")}
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            510: { slidesPerView: 2, slidesPerGroup: 2 },
            780: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 4, slidesPerGroup: 2 },
            1200: { slidesPerView: 6, slidesPerGroup: 0 },
          }}
          pagination={{ clickable: true }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="popular-places__list"
        >
          {popularPlacesDBArr &&
            popularPlacesDBArr.map((places, index) => (
              <SwiperSlide key={index}>
                <PopularPlacesItem
                  key={places?.title}
                  img_src={places?.img_src}
                  title={places?.title}
                  booking_count={places?.booking_count}
                  id={index + 1}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
