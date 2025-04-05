import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for style

import Banner from "./banner/Banner";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Services from "./our-services/Services";
import PopularPlaces from "./popular-places/PopularPlaces";
import Pricing from "./pricing/Pricing";
import VideoContent from "./video-content/VideoContent";
import VisitCountry from "./visit-country/VisitCountry";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true, // Faqat bir marta ishlashi uchun
    });
  });
  return (
    <>
      <Toaster
        style={{ background: "red" }}
        toastOptions={{
          style: {
            fontSize: "18px", // Shrift o‘lchamini kattalashtirish
          },
        }}
        position="top-right"
        reverseOrder={false}
      />
      <Navbar />
      <Banner />
      <PopularPlaces />
      <VisitCountry />
      <Blog />
      <Services />
      <VideoContent />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
