import "../LabServices/LabServices.scss"
import React, { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import about from "../../Assets/Images/Sustainability/slider.png"
import labElement1 from "../../Assets/Images/About/lab_element_one.png"
import labElement2 from "../../Assets/Images/About/lab_element_two.png"
import aboutbg from "../../Assets/Images/About/bg.jpg"
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img from "../../Assets/Images/2149335686.jpg"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";

import s1 from "../../Assets/Images/Sustainability/Water_Footprint_Mapping.jpg"
import s2 from "../../Assets/Images/Sustainability/Environment_Footprint_Mapping.jpg"
import s3 from "../../Assets/Images/Sustainability/Water_and_Environmental_Audits.jpg"
import s4 from "../../Assets/Images/Sustainability/Eco_Labelling.jpg"
import s5 from "../../Assets/Images/Sustainability/CSR_Reports_Preparations.jpg"
import s6 from "../../Assets/Images/Sustainability/Improvements_in_WTPs_ETPs_and_Recycling_Systems.jpg"
import s7 from "../../Assets/Images/Sustainability/Only_One_Earth.jpg"

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [activeTab, setActiveTab] = useState("tab1");
  const services = [
    { id: "tab1", image: s1, title: "Water Footprint Mapping", content: <div>Through water footprint mapping we quantify the amount of freshwater required to produce a product, service, or the goods and services and how it can be reduced through due diligence.<br /><br /><span>Link - <a style={{ textDecoration: "underline!important" }} href="https://www.waterfootprint.org/the-network/professionals/devinder-khetarpal/">https://www.waterfootprint.org/the-network/professionals/devinder-khetarpal/z</a></span> </div> },
    { id: "tab2", image: s2, title: "Environment Footprint Mapping", content: <div>We calculate the total greenhouse gas emissions, expressed as carbon dioxide equivalents (CO₂e), resulting from activities such as burning fossil fuels, manufacturing, and transportation associated with an individual, organization, or product, and thereafter conduct due diligence to reduce the same.      </div> },
    { id: "tab3", image: s3, title: "Water and Environmental Audits", content: "We conduct systematic water and environmental audits to assess consumption, identify inefficiencies, and promote sustainability. Our process includes quantifying water loss, reducing usage, encouraging reuse, and fostering water stewardship. We also evaluate environmental compliance, identify pollutants, and provide technical solutions to minimize environmental impact and enhance organizational processes." },
    { id: "tab4", image: s4, title: "Eco Labelling", content: "We work closely with Green Seal, Inc. (USA) for eco-labelling services, including Green Seal audits. We provide technical guidance and assessments as per IS:14020." },
    { id: "tab5", image: s5, title: "CSR Reports Preparations", content: "A corporate sustainability report outlines a company's social, environmental, and economic performance, along with its commitment to sustainable development. We provide vital inputs in environmental performance for a corporate, both in terms of monitoring and achieving corporate environmental goals." },
    { id: "tab6", image: s6, title: "Improvements in WTP`s, ETP`s and Recycling Systems", content: "With 32 years of expertise in water and wastewater treatment, we strive to improve existing water treatment plants, sewage treatment plants, and effluent treatment plants using the latest technologies. The focus is on improving efficiency, reducing environmental impact, and lowering operational costs through advanced technologies, automation, and sustainable practices." },
    { id: "tab7", image: s7, title: "Only One Earth", content: <div>We are all aware that we have just one planet Earth to live on, and the resources of Earth are finite. Therefore, we urgently need to protect the environment, aiming to meet the needs of current and future generations. With this in mind, we assess organizations' environmental footprints and provide One Earth Certifications through Only One Earth (<a href="https://onlyoneearth.in/" target="_blank">www.onlyoneearth.in</a>).</div> }

  ];



  return (
    <div>
      <Helmet>
        <title>Sustainability | Quality Analyst and Labs Pvt. Ltd.</title>
        <meta name="description" content="Learn how Quality Analyst is driving sustainability through eco-conscious laboratory practices, minimizing environmental impact, and fostering green innovation." />
        <meta name="keywords" content="Sustainability, Eco-Conscious Practices, Environmental Impact, Green Innovation, Quality Analyst, Laboratory Services, Sustainable Solutions" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sustainability | Quality Analyst and Labs Pvt. Ltd." />
        <meta property="og:description" content="Discover how we champion sustainability in the laboratory industry, reducing our carbon footprint and promoting greener practices in testing and analysis." />
        <meta property="og:image" content="https://qualityanalyst.net/qualityLogo.png" />
        <meta property="og:url" content="https://qualityanalyst.net/sustainability" />
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
                <h2 className="lab-title"> <span class="text">Sustainability</span></h2>

              </div>
              <motion.div
                className="lab-image"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <img src={about} style={{ marginLeft: "-15%", width: "100%", marginTop: "5%" }} alt="Laboratory" />
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
            <h2 className="lab-title"> <span class="text">Sustainability</span></h2>
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