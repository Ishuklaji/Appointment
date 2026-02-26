import React from "react";
import Slider from "../components/Slider/Slider";
import Facility from "../components/Static/Facility/Facility";
import ShortIntro from "../components/Static/ShortIntro/ShortIntro";

const Home = () => {
  return (
    <>
      {/*slider  */}
      <Slider />
      {/* facility */}
      <Facility />
      {/* short hospital intro */}
      <ShortIntro />
    </>
  );
};

export default Home;
