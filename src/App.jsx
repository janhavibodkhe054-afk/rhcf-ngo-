import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./component/ScrollToTop";

//about
import AboutUs from "./component/About/AboutUs";
import VisionMission from "./component/About/VisionMission";
import OurTeamLeader from "./component/About/OurTeamLeader";
import OurJourney from "./component/About/OurJourney";

//work
import Education from "./component/OurWork/Education";
import Health from "./component/OurWork/Health";
import Women from "./component/OurWork/Women";
import Skill from "./component/OurWork/Skill";
import Child from "./component/OurWork/Child";
import Community from "./component/OurWork/Community";

//media center
import OurImpact from "./component/MediaCenter/OurImpact";
import Stories from "./component/MediaCenter/Stories";
import Testimonial from "./component/MediaCenter/Testimonial";
import Photo from "./component/MediaCenter/Photo";
import News from "./component/MediaCenter/News";
import NewsPaper from "./component/MediaCenter/NewsPaper";

//resourse center
import Reports from "./component/ResourseCenter/Reports";
import Publication from "./component/ResourseCenter/Publication";
import Policies from "./component/ResourseCenter/Policies";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import WaterSanitation from "./pages/WaterSanitation";
import Hygiene from "./pages/Hygiene";
import Agri from "./pages/Agri";
import GroundWater from "./pages/GroundWater";
import SuccessStories from "./pages/SuccessStories";

import TechnicalStrength from "./pages/TechnicalStrength";


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="mt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        

        {/* About */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/vision" element={<VisionMission />} />
        <Route path="/team" element={<OurTeamLeader />} />
        <Route path="/journey" element={<OurJourney />} />
        <Route path="/technical" element={<TechnicalStrength />} />

        {/* Our Work */}

        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/women" element={<Women />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/child" element={<Child />} />
        <Route path="/community" element={<Community />} />
        <Route path="/water" element={<WaterSanitation />} />
        <Route path="/hygine" element={<Hygiene />} /> 
        <Route path="/agri" element={<Agri />} />
        <Route path="/groundwater" element={<GroundWater />} />

        {/* media center */}
        <Route path="/impact" element={<OurImpact />} />
        <Route path="/stories" element={<SuccessStories />} />

        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/news" element={<News />} />
        <Route path="/newspaper" element={<NewsPaper/> } />

        {/* Resource center */}
        <Route path="/reports" element={<Reports />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/policies" element={<Policies />} />
        

      {/* 404 Page */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-3xl font-bold">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
