import "./LabServices.scss"
import React, { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import about from "../../Assets/Images/Laboratory Services/slider.png"
import labElement1 from "../../Assets/Images/About/lab element one.png"
import labElement2 from "../../Assets/Images/About/lab element two.png"
import aboutbg from "../../Assets/Images/About/bg.jpg"
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img from "../../Assets/Images/2149335686.jpg"
import l1 from "../../Assets/Images/Laboratory Services/Analysis of Water, Air, Effluent, Noise, Luminosity, Chemicals, Food, Oil.jpg"
import l2 from "../../Assets/Images/Laboratory Services/Pilot Plant Studies.jpg"
import l3 from "../../Assets/Images/Laboratory Services/Treatability Studies.jpg"
import l4 from "../../Assets/Images/Laboratory Services/Lab Steps and Accreditations.jpg"
import l5 from "../../Assets/Images/Laboratory Services/Corrosion Coupon Studies.jpg"
import l6 from "../../Assets/Images/Laboratory Services/Environmental Studies.jpg"
import ReadMoreArea from '@foxeian/react-read-more';
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";


const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [activeTab, setActiveTab] = useState("tab1");
  const services = [
    { id: "tab1", image: l1, title: <div><span>Analysis of</span> Water, Air, Effluent,<br />  Noise, Luminosity, Chemicals, Food, Oil</div>, content: " We are engaged in rendering services for Analysis of Water, Air, Food, Oil, Soil, Noise, Chemicals, Medical  Devices. All these services are provided by our experienced professionals, in accordance with the established norms and standards of the industry. All our professionals make sure to use premium quality material, while offering these services to the customers." },
    { id: "tab2", image: l2, title: "Pilot Plant Studies", content: "A pilot plant is a prototype of a processing system which is operated to generate data about the behaviour and efficacy of different processes for use in design of larger facilities. These plants are generally preferred and deployed to reduce the risks associated with opting for large process plants straight away." },
    { id: "tab3", image: l3, title: "Treatability Studies", content: "The Treatment of difficult Effluent and Water can be tedious and cumbersome. Treatability studies help in exploring appropriate technology for treatment and also  reducing the capital cost as well as operational cost for a full scale plant. " },
    { id: "tab4", image: l4, title: "Lab Steps and Accreditations", content: "Quality Control is an integral part of any product line, more so in beverages and water Industry. We set up complete laboratory, provide training and technical help in accreditation or approvals" },
    {
      id: "tab5", image: l5, title: "Corrosion Coupon Studies", content: <ReadMoreArea
        lettersLimit={350} // limit of letters (100 letters)
      >
        Corrosion of metallic components due to ambient air pollution has been documented for many years. It historically occurred only at industrial sites such as pulp and paper mills, petrochemical refineries, and geothermal plants. These facilities produce local environments relatively high in sulfur content – hydrogen sulfide, sulfur dioxide, Mercaptans, or Sulfur laden Particulates. Therefore, Equipments in these plants were subject to corrosion due to reactions with the environmental sulfur and humidity. Compounds such as nitrogen oxides and chlorine can also be present at these facilities and promote corrosion of electronics.
      </ReadMoreArea>
    },
    { id: "tab6", image: l6, title: "Environmental Studies", content: "Baseline data, Mapping Environmental parameters help ascertain Environmental impacts as well as track seasonal fluctuations, thereby enabling mitigation and preventive actions." }
  ];



  return (
    <div>
      <>
        <Helmet>
          <title>Laboratory Services | Quality Analyst and Labs Pvt. Ltd.</title>
          <meta name="description" content="Explore the laboratory services offered by Quality Analyst and Labs Pvt. Ltd. We provide high-quality analytical testing and research services with a focus on accuracy and precision." />
          <meta name="keywords" content="Laboratory Services, Quality Analyst, Analytical Testing, Research Services, Quality Testing, Laboratory Solutions" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Laboratory Services | Quality Analyst and Labs Pvt. Ltd." />
          <meta property="og:description" content="Discover the comprehensive laboratory services offered by Quality Analyst and Labs Pvt. Ltd. Our services cover a wide range of testing and analysis solutions." />
          <meta property="og:image" content="https://qualityanalyst.net/qualityLogo.png" />
          <meta property="og:url" content="https://qualityanalyst.net/laboratory-services" />
        </Helmet>

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
                <h2 className="lab-title"> <span class="text">Laboratory<br /> Services</span></h2>

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
            <h2 > <span class="text">Laboratory Services</span></h2>
          </div>
          {/* <section className="services-section" id="service">
            <ul className="services-section-left">
              {services.map((service) => (
                <li key={service.id} className="service-tab-item">
                  <button
                    className={`nav-link ${activeTab === service.id ? "active" : ""}`}
                    onClick={() => setActiveTab(service.id)}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="tab-content-box"
            >
              <h3 className="tab-title">{services.find(service => service.id === activeTab).title}</h3>
              <hr className="tab-divider" />
              <div className="tab-content-body">
                <img src={services.find(service => service.id === activeTab).image} alt="" />
                <div className="tab-text">
                  <p>{services.find(service => service.id === activeTab).content}</p>
                  <button>Send Enquiry</button>
                </div>

              </div>
            </motion.div>
          </section> */}

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
                  <img src={service.image} alt="service" />
                  <div className="tab-text">
                    <p>{service.content}</p>
                    {/* <button className="button">Send Enquiry</button> */}
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