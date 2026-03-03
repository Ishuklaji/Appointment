import React from "react";
import Slider from "../components/Slider/Slider";
import Facility from "../components/Static/Facility/Facility";
import ShortIntro from "../components/Static/ShortIntro/ShortIntro";
import WhyChoose from "../components/Static/WhyChoose/WhyChoose";
import ContactMessage from "../components/Static/ConatctMessage/ConatctMessage";

const Home = () => {
  return (
    <>
      {/*slider  */}
      <Slider />
      {/* facility */}
      <Facility />
      {/* short hospital intro */}
      <ShortIntro />
      {/* Why choose page */}
      <WhyChoose />
      {/* contact */}
      <ContactMessage />
    </>
  );
};

export default Home;
