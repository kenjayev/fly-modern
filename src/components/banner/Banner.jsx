import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import "./banner.css";
import axios from "axios";
import { useState } from "react";

export default function Banner() {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const sendMessage = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const token = "7922668080:AAEUM61mCz7R_pAAtf8mSi00g3xHNXtnAoM";
    const chat_ID = "617030856";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const firstName = e.target.firstname.value;
    const telNumber = e.target.telNumber.value;

    const text = `<b>Ismi:</b> ${firstName} \n <b>Tel:</b> <u>+${telNumber}</u>`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_ID,
        text: text,
        parse_mode: "HTML",
      },
    })
      .then((res) => {
        toast.success(t("successAlert"));
      })
      .catch((error) => {
        toast.error(t("errorAlert"));
      })
      .finally(() => {
        setIsLoading(false);
      });

    e.target.reset();
  };

  return (
    <section className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <div className="banner__caption">
            <div className="banner__top-liner"></div>
            <h3 className="banner__title">{t("bannerSection.title")}</h3>
            <p className="banner__subtitle">{t("bannerSection.desc")}</p>
            <a href="#popular__places" className="banner__caption-button">
              {t("bannerSection.link")}
            </a>
          </div>
          {/* ./banner__caption End */}
          <div className="banner__booking">
            <form className="banner__booking-form" onSubmit={sendMessage}>
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
                  type="number"
                  name="tenNumber"
                  id="telNumber"
                  className="banner__booking-input"
                  placeholder={
                    t("bannerSection.bannerForm.telNumber") + " +" + 998 + "..."
                  }
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
                <button
                  className={`banner__booking-button ${
                    isLoading ? "disabled" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading
                    ? t("loading")
                    : t("bannerSection.bannerForm.submitButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
