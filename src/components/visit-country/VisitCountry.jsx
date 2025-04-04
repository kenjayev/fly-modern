import { useTranslation } from "react-i18next";
import "./visitCountry.css";
import visitCountryDB from "./visitCountryDB";
import VisitCountryItem from "./VisitCountryItem";

export default function VisitCountry() {
  const { t } = useTranslation();
  const visitCountryDBArr = visitCountryDB();
  return (
    <section className="visit-country">
      <div className="container">
        <div className="visit-country__list">
          <h4
            className="visit-country__title"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            {t("visitCountrySection.title")}
          </h4>
          {visitCountryDBArr &&
            visitCountryDBArr.map((country) => (
              <VisitCountryItem key={country.title} {...country} />
            ))}
        </div>
      </div>
    </section>
  );
}
