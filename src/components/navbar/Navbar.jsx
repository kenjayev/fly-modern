import "./navbar.css";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import ChangeLang from "../change-lang/ChangeLang";
import { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const openMenu = () => {
    document.body.style.overflowY = "hidden";
    setIsOpenMenu(true);
  };
  const closeMenu = () => {
    document.body.style.overflowY = "auto";
    setIsOpenMenu(false);
  };

  return (
    <div className={`navbar ${isOpenMenu ? "openMenu" : ""}`}>
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__logo-box">
            <img src="/img/logo.png" alt="" className="navbar__logo-img" />
            <h2>Fly modern</h2>
            <h5>AVIAKASSA VISA TOURISM</h5>
          </div>

          <nav className="navbar__menu">
            <ul className="navbar__menu-list">
              <li className="navbar__menu-item">
                <a href="#" className="navbar__menu-link" onClick={closeMenu}>
                  {t("headerSection.navList.link1")}
                </a>
              </li>
              <li className="navbar__menu-item">
                <a
                  href="#about"
                  className="navbar__menu-link"
                  onClick={closeMenu}
                >
                  {t("headerSection.navList.link2")}
                </a>
              </li>
              <li className="navbar__menu-item">
                <a
                  href="#tours"
                  className="navbar__menu-link"
                  onClick={closeMenu}
                >
                  {t("headerSection.navList.link3")}
                </a>
              </li>
              <li className="navbar__menu-item">
                <a
                  href="#contact"
                  className="navbar__menu-link"
                  onClick={closeMenu}
                >
                  {t("headerSection.navList.link4")}
                </a>
              </li>
              <li className="navbar__menu-item">
                <ChangeLang />
              </li>
            </ul>
            <div
              className="navbar__menu-btn navbar__menu-close"
              onClick={closeMenu}
            >
              <IoCloseSharp className="navbar__menu-icon" />
            </div>
          </nav>
          <div className="backdrop" onClick={closeMenu}></div>

          <div className="navbar__menu-btn" onClick={openMenu}>
            <IoMenu className="navbar__menu-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
