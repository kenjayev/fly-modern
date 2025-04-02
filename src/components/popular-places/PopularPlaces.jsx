import "./popularPlaces.css";
import PopularPlacesItem from "./PopularPlacesItem";
import popularPlacesDB from "./popularPlacesDB";
import { useTranslation } from "react-i18next";

export default function PopularPlaces() {
  const { t } = useTranslation();
  const popularPlacesDBArr = popularPlacesDB();
  return (
    <section className="popular-places">
      <div className="popular-places__wrapper">
        <h4 className="section__title">{t("popularPlacesSection.title")}</h4>
        <p className="section__subtitle">
          {t("popularPlacesSection.subtitle")}
        </p>
        <div className="popular-places__list">
          {popularPlacesDBArr &&
            popularPlacesDBArr.map((places) => (
              <PopularPlacesItem
                key={places?.title}
                img_src={places?.img_src}
                title={places?.title}
                booking_count={places?.booking_count}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
