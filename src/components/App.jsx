import { Toaster } from "react-hot-toast";

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

function App() {
  return (
    <>
      <Toaster
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
