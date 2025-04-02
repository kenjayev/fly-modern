import "./navbar.css";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import ChangeLang from "../change-lang/ChangeLang";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    i18n.changeLanguage("eng");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__logo-box">
            <img src="/img/logo.png" alt="" className="navbar__logo-img" />
            <h2>Fly modern</h2>
            <h5>AVIAKASSA VISA TOURISM</h5>
          </div>

          <nav className="navbar__menu">
            <ul className="navbar__menu-list">
              <li className="navbar__menu-list">
                <a href="#" className="navbar__menu-link">
                  {t("headerSection.navList.link1")}
                </a>
              </li>
              <li className="navbar__menu-list">
                <a href="#" className="navbar__menu-link">
                  {t("headerSection.navList.link2")}
                </a>
              </li>
              <li className="navbar__menu-list">
                <a href="#" className="navbar__menu-link">
                  {t("headerSection.navList.link3")}
                </a>
              </li>
              <li className="navbar__menu-list">
                <a href="#" className="navbar__menu-link">
                  {t("headerSection.navList.link4")}
                </a>
              </li>
              <li className="navbar__menu-list">
                <ChangeLang />
              </li>
            </ul>
          </nav>

          <div className="navbar__menu-btn">
            <IoMenu className="navbar__menu-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
