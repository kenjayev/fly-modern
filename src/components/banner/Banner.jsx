import { useTranslation } from "react-i18next";
import "./banner.css";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__caption">
            <div className="banner__top-liner"></div>
            <h3 className="banner__title">{t("bannerSection.title")}</h3>
            <p className="banner__subtitle">{t("bannerSection.desc")}</p>
            <a href="#planID" className="banner__caption-button">
              {t("bannerSection.link")}
            </a>
          </div>
          {/* ./banner__caption End */}
          <div className="banner__booking">
            <form className="banner__booking-form">
              <div className="banner__booking-input-box">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="banner__booking-input"
                  placeholder={t("bannerSection.bannerForm.name")}
                  required
                />
              </div>
              <div className="banner__booking-input-box">
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="banner__booking-input"
                  placeholder={t("bannerSection.bannerForm.location")}
                  required
                />
              </div>
              <div className="banner__booking-input-box">
                <input
                  type="date"
                  id="data"
                  name="trip-start"
                  className="banner__booking-input"
                  defaultValue="2024-07-22"
                  min="2024-02-16"
                  max="2099-12-31"
                />
              </div>
              <div className="banner__booking-button-box">
                <button className="banner__booking-button">
                  {t("bannerSection.bannerForm.submitButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
