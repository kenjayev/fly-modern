import { useTranslation } from "react-i18next";

function visitCountryDB() {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      title: t("visitCountrySection.list.item1.title"),
      subtitle: t("visitCountrySection.list.item1.subtitle"),
      description: t("visitCountrySection.list.item1.desc"),
      img_src: "/img/visit-country__reilway.jpg",
    },
    {
      id: 2,
      title: t("visitCountrySection.list.item2.title"),
      subtitle: t("visitCountrySection.list.item2.subtitle"),
      description: t("visitCountrySection.list.item2.desc"),
      img_src: "/img/visit-country__air.jpg",
    },
    {
      id: 3,
      title: t("visitCountrySection.list.item3.title"),
      subtitle: t("visitCountrySection.list.item3.subtitle"),
      description: t("visitCountrySection.list.item3.desc"),
      img_src: "/img/visit-country__dubai.jpg",
    },
    {
      id: 4,
      title: t("visitCountrySection.list.item4.title"),
      subtitle: t("visitCountrySection.list.item4.subtitle"),
      description: t("visitCountrySection.list.item4.desc"),
      img_src: "/img/visit-country__antalya.jpg",
    },
    {
      id: 5,
      title: t("visitCountrySection.list.item5.title"),
      subtitle: t("visitCountrySection.list.item5.subtitle"),
      description: t("visitCountrySection.list.item5.desc"),
      img_src: "/img/visit-country__misr.jpg",
    },
    {
      id: 6,
      title: t("visitCountrySection.list.item6.title"),
      subtitle: t("visitCountrySection.list.item6.subtitle"),
      description: t("visitCountrySection.list.item6.desc"),
      img_src: "/img/visit-country__istanbul.jpg",
    },
  ];
}

export default visitCountryDB;
