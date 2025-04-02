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
        <h4 className="visit-country__title">
          {t("visitCountrySection.title")}
        </h4>
        <div className="visit-country__list">
          {visitCountryDBArr &&
            visitCountryDBArr.map((country) => (
              <VisitCountryItem key={country.title} {...country} />
            ))}
        </div>
      </div>
    </section>
  );
}
