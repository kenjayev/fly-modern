import "./contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className="contact">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d191770.76997450867!2d69.285482!3d41.321517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0a3eff6793%3A0x374f8cd599c1c8fa!2sYagona%20Darcha%20Shaykhontokhur%20tumani!5e0!3m2!1sen!2sus!4v1743512672591!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <div
          className="contact__booking"
          data-aos="zoom-in-up"
          data-aos-duration={1200}
          data-aos-delay={50}
        >
          <h4 className="section__title">{t("contactSection.title")}</h4>
          <p className="section__subtitle">{t("contactSection.subtitle")}</p>
          <p className="contact__direktor-name">
            {t("contactSection.direktor")}
          </p>
          <a
            style={{ color: "#e1ac0c" }}
            href="tel:+998951270090"
            className="contact__tel-number"
          >
            +998951270090
          </a>
          <button className="contact__modal-btn btn">
            {t("contactSection.bookingBtn")}
          </button>
        </div>
      </div>
    </section>
  );
}
