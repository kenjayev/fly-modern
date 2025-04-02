import { useTranslation } from "react-i18next";
import "./pricing.css";

export default function Pricing() {
  const { t } = useTranslation();
  return (
    <section className="pricing">
      <div className="container">
        <h4 className="section__title">{t("pricingSection.title")}</h4>
        <p className="section__subtitle">{t("pricingSection.subtitle")}</p>
        <div className="pricing__list">
          <div className="pricing__item">
            <div className="pricing__main">
              <div className="pricing__header">
                <h5 className="pricing__title">
                  {t("pricingSection.pricingList.item1.title")}
                </h5>
                <p className="pricing__subtitle">
                  {t("pricingSection.pricingList.subtitle")}
                </p>
                <p className="pricing__desc">
                  {t("pricingSection.pricingList.text")}
                </p>
              </div>
              <div className="pricing__body">
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item1.plan1")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item1.plan2")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item1.plan3")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item1.plan4")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item1.plan5")}
                </p>
              </div>
            </div>
            <div className="pricing__footer">
              <a className="pricing__btn" href="tel:+998974420308">
                Bog'lanish
              </a>
            </div>
          </div>
          {/* End of Pricing 1 item */}

          <div className="pricing__item">
            <div className="pricing__main">
              <div className="pricing__header">
                <h5 className="pricing__title">
                  {t("pricingSection.pricingList.item2.title")}
                </h5>
                <p className="pricing__subtitle">
                  {t("pricingSection.pricingList.subtitle")}
                </p>
                <p className="pricing__desc">
                  {t("pricingSection.pricingList.text")}
                </p>
              </div>
              <div className="pricing__body">
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item2.plan1")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item2.plan2")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item2.plan3")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item2.plan4")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item2.plan5")}
                </p>
              </div>
            </div>
            <div className="pricing__footer">
              <a className="pricing__btn" href="tel:+998974420308">
                Bog'lanish
              </a>
            </div>
          </div>
          {/* End of Pricing 2 item */}

          <div className="pricing__item">
            <div className="pricing__main">
              <div className="pricing__header">
                <h5 className="pricing__title">
                  {t("pricingSection.pricingList.item3.title")}
                </h5>
                <p className="pricing__subtitle">
                  {t("pricingSection.pricingList.subtitle")}
                </p>
                <p className="pricing__desc">
                  {t("pricingSection.pricingList.text")}
                </p>
              </div>
              <div className="pricing__body">
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item3.plan1")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item3.plan2")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item3.plan3")}
                </p>
                <p className="pricing__plan">
                  {t("pricingSection.pricingList.item3.plan4")}
                </p>
              </div>
            </div>
            <div className="pricing__footer">
              <a className="pricing__btn" href="tel:+998974420308">
                Bog'lanish
              </a>
            </div>
          </div>
          {/* End of Pricing 3 item */}
        </div>
        {/* Pricing List */}
      </div>
    </section>
  );
}
