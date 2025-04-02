import Banner from "./banner/Banner";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import PopularPlaces from "./popular-places/PopularPlaces";
import Pricing from "./pricing/Pricing";
import VideoContent from "./video-content/VideoContent";
import VisitCountry from "./visit-country/VisitCountry";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <PopularPlaces />
      <VisitCountry />
      <Blog />
      <VideoContent />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
