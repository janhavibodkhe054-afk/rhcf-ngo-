import React from "react";
import HeroSlider from "../component/Home/HeroSlider";
import AboutImpact from "../component/Home/AboutImpact";
import VisionMissionPage from "../component/Home/VisionMissionPage";
import OurPrograms from "../component/Home/OurPrograms";
import SupportCause from "../component/Home/SupportCause";
import Recognition from "../component/Home/Recognition";
import SDGSection from "../component/Home/SDGSection";
import NgoInfoSection from "../component/Home/NgoInfoSection";
import Certificate from "../component/Home/Certificate";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <AboutImpact />
      <Certificate/>
      <OurPrograms />
      <SDGSection/>
      <NgoInfoSection/>
      <Recognition/>
      
      <SupportCause/>
    </div>
  );
};

export default Home;
