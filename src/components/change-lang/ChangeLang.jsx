import { useTranslation } from "react-i18next";
import { BiSolidDownArrow } from "react-icons/bi";
import "./changeLang.css";

export default function ChangeLang() {
  const currentLang = localStorage.getItem("fly-modern-lng");
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="change-lang">
      <button className="change-lang__btn--active">
        <img loading="lazy" src={`/img/icon/${currentLang}.png`} alt="" />
        <BiSolidDownArrow className="change-lang__icon" />
      </button>
      <div className="change-lang__sub-list">
        {currentLang !== "uz" && (
          <button className="change-lang__btn" onClick={() => changeLang("uz")}>
            <img loading="lazy" src={`/img/icon/uz.png`} alt="uz-lang-icon" />
          </button>
        )}
        {currentLang !== "eng" && (
          <button className="change-lang__btn">
            <img
              src={`/img/icon/eng.png`}
              alt="eng-lang-icon"
              onClick={() => changeLang("eng")}
            />
          </button>
        )}
        {currentLang !== "ru" && (
          <button className="change-lang__btn" onClick={() => changeLang("ru")}>
            <img loading="lazy" src={`/img/icon/ru.png`} alt="ru-lang-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

// {/* <a href="#" className="navbar__multilingual-link">
// <img loading="lazy" src="/img/icon/uz.png" alt="" />
// <span className="downarrow"></span>
// </a>
// <ul className="sub-menu">
// <li>
//   <a href="./eng.html">{/* <img loading="lazy" src="" alt="" /> */}</a>
// </li>
// <li>
//   <a href="./index.html">{/* <img loading="lazy" src="" alt="" /> */}</a>
// </li>
// </ul> */}
