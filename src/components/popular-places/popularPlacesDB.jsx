import { useTranslation } from "react-i18next";

const popularPlacesDB = () => {
  const { t } = useTranslation();
  return [
    {
      img_src: "/img/popular-places__istanbul.jpg",
      title: t("popularPlacesSection.popularPlacesList.item1.name"),
      booking_count: `76 ${t(
        "popularPlacesSection.popularPlacesList.bookingCountText"
      )}`,
    },
    {
      img_src: "/img/popular-places__sharm.jpg",
      title: t("popularPlacesSection.popularPlacesList.item2.name"),
      booking_count: `96 ${t(
        "popularPlacesSection.popularPlacesList.bookingCountText"
      )}`,
    },
    {
      img_src: "/img/popular-places__tailand.jpg",
      title: t("popularPlacesSection.popularPlacesList.item3.name"),
      booking_count: `55 ${t(
        "popularPlacesSection.popularPlacesList.bookingCountText"
      )}`,
    },
    {
      img_src: "/img/popular-places__argentina.jpg",
      title: t("popularPlacesSection.popularPlacesList.item4.name"),
      booking_count: `66 ${t(
        "popularPlacesSection.popularPlacesList.bookingCountText"
      )}`,
    },
    {
      img_src: "/img/popular-places__dubai.jpg",
      title: t("popularPlacesSection.popularPlacesList.item5.name"),
      booking_count: `76 ${t(
        "popularPlacesSection.popularPlacesList.bookingCountText"
      )}`,
    },
    {
      img_src: "/img/popular-places__arabic.jpg",
      title: t("popularPlacesSection.popularPlacesList.item6.name"),
      booking_count: `76 ${t(
        "popularPlacesSection.popularPlacesList.bookingCountText"
      )}`,
    },
  ];
};

export default popularPlacesDB;
