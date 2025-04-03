import { useTranslation } from "react-i18next";
import "./services.css";
import { useState } from "react";

export default function Services() {
  const { t } = useTranslation();
  const accordionData = [
    {
      title: t("servicesSection.planning.planningList.item1.title"),
      content: t("servicesSection.planning.planningList.item1.desc"),
    },
    {
      title: t("servicesSection.planning.planningList.item2.title"),
      content: t("servicesSection.planning.planningList.item2.desc"),
    },
    {
      title: t("servicesSection.planning.planningList.item3.title"),
      content: t("servicesSection.planning.planningList.item3.desc"),
    },
  ];
  return (
    <section className="services">
      <div className="container">
        <h4 className="section__title">{t("servicesSection.title")}</h4>
        <p className="section__subtitle">{t("servicesSection.subtitle")}</p>
        <div className="services__list">
          {/*  */}
          <div className="services__item">
            <div className="services__item-img">
              <img src="/img/icon/service_icon_1.png" alt="icon| service-1" />
            </div>
            <h5 className="services__item-title">
              {t("servicesSection.servicesList.item1.title")}
            </h5>
            <p className="services__item-desc">
              {t("servicesSection.servicesList.item1.desc")}
            </p>
          </div>
          {/*  */}
          <div className="services__item">
            <div className="services__item-img">
              <img src="/img/icon/service_icon_2.png" alt="icon| service-2" />
            </div>
            <h5 className="services__item-title">
              {t("servicesSection.servicesList.item2.title")}
            </h5>
            <p className="services__item-desc">
              {t("servicesSection.servicesList.item2.desc")}
            </p>
          </div>
          {/*  */}
          <div className="services__item">
            <div className="services__item-img">
              <img src="/img/icon/service_icon_3.png" alt="icon| service-3" />
            </div>
            <h5 className="services__item-title">
              {t("servicesSection.servicesList.item3.title")}
            </h5>
            <p className="services__item-desc">
              {t("servicesSection.servicesList.item3.desc")}
            </p>
          </div>
          {/*  */}
        </div>
        <div className="services__planning">
          <div className="services__planning-text">
            <h5 className="services__planning-heading">
              {t("servicesSection.planning.title")}
            </h5>
            <p className="services__planning-desc">
              {t("servicesSection.planning.desc")}
            </p>
            <a href="#" className="btn services__planning-link">
              {t("servicesSection.planning.link")}
            </a>
          </div>
          <div className="services__planning-accordion">
            <Accordion accordionData={accordionData} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Accordion({ accordionData }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <div className="accordion">
      {accordionData &&
        accordionData.map((item, index) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
    </div>
  );
}

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className={`accordion__item ${isOpen ? "active" : ""}`}>
      <div className="accordion__header" onClick={onClick}>
        <span className="accordion__title">{title}</span>
        <div className="accordion__indicator"></div>
      </div>
      <div className="accordion__body">
        <p className="accordion__content">{content}</p>
      </div>
    </div>
  );
}
