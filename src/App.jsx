import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Header from "./Components/Molecules/Header/Header";
import Preloader from "./Components/Molecules/Preloader/Preloader";
import Footer from "./Components/Molecules/Footer/Footer";
import Home from "./Components/Pages/Home/Home"
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Components/Assets/dist/css/wedget.css"
import "./Components/Assets/Sass/style.scss"
import AboutUs from "./Components/Pages/About/About"
import LabServices from "./Components/Pages/LabServices/LabServices"
import TestKits from "./Components/Pages/TestKits/TestKits"
import Sustainability from "./Components/Pages/Sustainability/Sustainability"
import Technicals from "./Components/Pages/Resources/Technicals/Technicals";
import HowWeAddValue from "./Components/Pages/Resources/HowWeAddValue/HowWeAddValue";
import Career from "./Components/Pages/Career/Career"
import Contact from "./Components/Pages/Contact/Contact"

// Main App Component with Routing
const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/laboratory-services" element={<LabServices />} />
            <Route path="/test-kits" element={<TestKits />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/technicals" element={<Technicals />} />
            <Route path="/how-we-add-value" element={<HowWeAddValue />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />


            <Route path="*" element={<NotFound />} /> {/* 404 Page */}
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
