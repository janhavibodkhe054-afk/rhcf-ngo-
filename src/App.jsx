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

//resourse center
import Reports from "./component/ResourseCenter/Reports";
import Publication from "./component/ResourseCenter/Publication";
import Policies from "./component/ResourseCenter/Policies";
import Donate from "./pages/Donate";
import NewsPaper from "./component/ResourseCenter/NewsPaper";

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
        

        {/* About */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/vision" element={<VisionMission />} />
        <Route path="/team" element={<OurTeamLeader />} />
        <Route path="/journey" element={<OurJourney />} />

        {/* Our Work */}

        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/women" element={<Women />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/child" element={<Child />} />
        <Route path="/community" element={<Community />} />

        {/* media center */}
        <Route path="/impact" element={<OurImpact />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/news" element={<News />} />

        {/* Resource center */}
        <Route path="/reports" element={<Reports />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/newspaper" element={<NewsPaper/> } />

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
