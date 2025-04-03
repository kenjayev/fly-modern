import "./footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/*  */}
          <div className="footer__about-us">
            <div className="footer__logo">
              <img src="/img/logo.png" alt="footer logo" />
              <h2>Fly modern</h2>
              <h5>AVIAKASSA VISA TOURISM</h5>
            </div>
            <p className="footer__about-text">{t("footerSection.desc")}</p>
            <a
              className="footer__social-link"
              target="_blank"
              href="https://instagram.com/flymodern_travel"
            ></a>
          </div>
          {/*  */}
          <div className="footer__useful-links">
            <h5 className="footer__links-title">
              {t("footerSection.links.title")}
            </h5>
            <ul className="footer__links-list">
              <li className="footer__links-item">
                <a href="#" className="footer__links-link">
                  {t("footerSection.links.link1")}
                </a>
              </li>
              <li className="footer__links-item">
                <a href="#" className="footer__links-link">
                  {t("footerSection.links.link2")}
                </a>
              </li>
              <li className="footer__links-item">
                <a href="#" className="footer__links-link">
                  {t("footerSection.links.link3")}
                </a>
              </li>
              <li className="footer__links-item">
                <a href="#" className="footer__links-link">
                  {t("footerSection.links.link4")}
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="footer__contact-info">
            <h5 className="footer__contact-title">
              {t("footerSection.contacts.title")}
            </h5>
            <p className="footer__contact-desc">
              {t("footerSection.contacts.desc")}
            </p>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <span className="footer__contact-link-info">
                  {t("footerSection.contacts.contact1")}
                </span>
                <a href="tel:+998951270090" className="footer__contact-link">
                  +998-95-127-00-90
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-link-info">
                  {t("footerSection.contacts.contact2")}
                </span>
                <a
                  href="mailto:flymoderntravel@mail.ru"
                  className="footer__contact-link"
                >
                  flymoderntravel@mail.ru
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-link-info">
                  {t("footerSection.contacts.contact3")}
                </span>
                <a href="#" className="footer__contact-link">
                  {t("footerSection.contacts.contactAddress")}
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      </div>
    </footer>
  );
}
