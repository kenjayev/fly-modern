import "./blog.css";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <section className="blog" id="blog">
      <div className="container">
        <h4
          className="section__title"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          {t("blogSection.title")}
        </h4>
        <p
          className="section__subtitle"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          {t("blogSection.subtitle")}
        </p>
        <div className="blog__list">
          <div
            className="blog__item"
            data-aos="zoom-in-up"
            data-aos-duration={1200}
            data-aos-delay={50}
          >
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
              <a className="blog__item-link" href="tel:+998974420308">
                {t("blogSection.blogList.linkLearnMore")}
              </a>
              <a className="blog__item-link" href="#bron">
                {t("blogSection.blogList.LinkBookNow")}
              </a>
            </div>
          </div>
          <div
            className="blog__item"
            data-aos="zoom-in-up"
            data-aos-duration={1200}
            data-aos-delay={100}
          >
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
              <a className="blog__item-link" href="tel:+998974420308">
                {t("blogSection.blogList.linkLearnMore")}
              </a>
              <a className="blog__item-link" href="#bron">
                {t("blogSection.blogList.LinkBookNow")}
              </a>
            </div>
          </div>
          <div
            className="blog__item"
            data-aos="zoom-in-up"
            data-aos-duration={1200}
            data-aos-delay={150}
          >
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
              <a className="blog__item-link" href="tel:+998974420308">
                {t("blogSection.blogList.linkLearnMore")}
              </a>
              <a className="blog__item-link" href="#bron">
                {t("blogSection.blogList.LinkBookNow")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
