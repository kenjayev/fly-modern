import "./blog.css";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <section className="blog">
      <div className="container">
        <h4 className="section__title">{t("blogSection.title")}</h4>
        <p className="section__subtitle">{t("blogSection.subtitle")}</p>
        <div className="blog__list">
          <div className="blog__item">
            <div className="blog__item-img">
              <img src="/img/blog__dubai.jpg" alt="" />
            </div>
            <div className="blog__item-text">
              <h5 className="blog__item-title">
                {t("blogSection.blogList.item1.title")}
              </h5>
              <p className="blog__item-subtitle">
                {t("blogSection.blogList.item1.subtitle")}
              </p>
              <p className="blog__item-desc">
                {t("blogSection.blogList.item1.desc")}
              </p>
            </div>
            <div className="blog__item-footer">
              <a className="blog__item-link" href="tel:+998 97 442 03 08">
                Ko'proq bilish
              </a>
              <a className="blog__item-link" href="#bron">
                Band qilish
              </a>
            </div>
          </div>
          <div className="blog__item">
            <div className="blog__item-img">
              <img src="/img/blog__turkiya.jpg" alt="" />
            </div>
            <div className="blog__item-text">
              <h5 className="blog__item-title">
                {t("blogSection.blogList.item2.title")}
              </h5>
              <p className="blog__item-subtitle">
                {t("blogSection.blogList.item2.subtitle")}
              </p>
              <p className="blog__item-desc">
                {t("blogSection.blogList.item2.desc")}
              </p>
            </div>
            <div className="blog__item-footer">
              <a className="blog__item-link" href="tel:+998 97 442 03 08">
                Ko'proq bilish
              </a>
              <a className="blog__item-link" href="#bron">
                Band qilish
              </a>
            </div>
          </div>
          <div className="blog__item">
            <div className="blog__item-img">
              <img src="/img/blog__misr.jpg" alt="" />
            </div>
            <div className="blog__item-text">
              <h5 className="blog__item-title">
                {t("blogSection.blogList.item3.title")}
              </h5>
              <p className="blog__item-subtitle">
                {t("blogSection.blogList.item3.subtitle")}
              </p>
              <p className="blog__item-desc">
                {t("blogSection.blogList.item3.desc")}
              </p>
            </div>
            <div className="blog__item-footer">
              <a className="blog__item-link" href="tel:+998 97 442 03 08">
                Ko'proq bilish
              </a>
              <a className="blog__item-link" href="#bron">
                Band qilish
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
