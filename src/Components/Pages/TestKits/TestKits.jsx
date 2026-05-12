import "../LabServices/LabServices.scss"
import React, { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import about from "../../Assets/Images/Test Kits/slider.png"
import labElement1 from "../../Assets/Images/About/lab element one.png"
import labElement2 from "../../Assets/Images/About/lab element two.png"
import aboutbg from "../../Assets/Images/About/bg.jpg"
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img from "../../Assets/Images/2149335686.jpg"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";

import t1 from "../../Assets/Images/Test Kits/water.jpg"
import t2 from "../../Assets/Images/Test Kits/food.jpg"

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [activeTab, setActiveTab] = useState("tab1");
  const services = [
    { id: "tab1", image: t1, title: "Water", content: "Turn yourself into analyst by our Rapid Water Test kits, Analyze Hardness, Calcium, Chlorides, Alkalinity, pH, Iron at home and take precautions accordingly while using water." },
    { id: "tab2", image: t2, title: "Food", content: "Food adulterants are on the rise, Use our Rapid Food Test kits for common contaminants and save yourself and your loved ones from consuming harmful chemicals and contaminants." },
  ];



  return (
    <div>
      <Helmet>
        <title>Test Kits | Quality Analyst and Labs Pvt. Ltd.</title>
        <meta name="description" content="Explore our high-quality laboratory test kits designed for accurate testing and analysis across multiple industries. Get reliable results with Quality Analyst's premium test kits." />
        <meta name="keywords" content="Test Kits, Laboratory Test Kits, Accurate Testing, Premium Test Kits, Quality Analyst, Testing Solutions, Industrial Test Kits" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Test Kits | Quality Analyst and Labs Pvt. Ltd." />
        <meta property="og:description" content="Discover Quality Analyst's range of premium test kits that offer accuracy and reliability for laboratory testing in various industries." />
        <meta property="og:image" content="https://qualityanalyst.net/qualityLogo.png" />
        <meta property="og:url" content="https://qualityanalyst.net/test-kits" />
      </Helmet>

      <>
        {/* ul slider area start */}
        <div className="lab-page">

          <section className="lab-page-slider">
            <img src={aboutbg} alt="about" className="bg" />
            <motion.div
              className="lab-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="lab-text">
                <h2 className="lab-title"> <span class="text">Test Kits</span></h2>
              </div>
              <motion.div
                className="lab-image"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <img src={about} alt="Laboratory" />
                {/* <img className='lab' src={about2} alt="Laboratory" /> */}
                <img className='labshape1' src={labElement1} alt="Laboratory" />
                <img className='labshape2' src={labElement2} alt="Laboratory" />
                {/* <img className='labshape3' src={labElement3} alt="Laboratory" /> */}
              </motion.div>
            </motion.div>
            {/* Floating Animated Molecules */}
            <div className="molecule molecule-1"></div>
            <div className="molecule molecule-2"></div>
            <div className="molecule molecule-3"></div>
          </section>

          <div className="lab-page-slider-mobile">
            <h2 className="lab-title"> <span class="text">Test Kits</span></h2>
          </div>

          <section className="services-section2">
            {services.map((service) => (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="tab-content-box"
              >
                <h3 className="tab-title">{service.title}</h3>
                <hr className="tab-divider" />
                <div className="tab-content-body">
                  <img src={service.image} alt={service.title} />
                  <div className="tab-text">
                    <p>{service.content}</p>
                    <Link to={"/contact"} className="button">Send Enquiry</Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </section>

        </div>



      </>

    </div >
  )
}

export default Home