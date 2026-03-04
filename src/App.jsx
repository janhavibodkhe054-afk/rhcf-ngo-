import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./component/ScrollToTop";
import About from "./component/About/About";
import OurWork from "./component/OurWork";
import ImpactandMedia from "./pages/ImpactandMedia";
import Campaigns from "./pages/Campaigns";
import ResourceCenter from "./pages/ResourceCenter";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/media" element={<ImpactandMedia />} />
        <Route path="/camp" element={<Campaigns />} />
        <Route path="/center" element={<ResourceCenter />} />
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
