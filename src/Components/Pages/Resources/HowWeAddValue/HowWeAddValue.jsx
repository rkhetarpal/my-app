import "./HowWeAddValue.scss"
import React, { useState, useRef, useEffect } from "react";
import dev from "../../../Assets/Images/how we add value.jpg"
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);



  return (
    <div>
      <>
        <Helmet>
          <title>How We Add Value | Quality Analyst and Labs Pvt. Ltd.</title>
          <meta name="description" content="Learn how Quality Analyst and Labs Pvt. Ltd. contributes to sustainability by implementing rigorous quality control measures, minimizing waste, and empowering businesses to reduce their environmental footprint." />
          <meta name="keywords" content="Sustainability, Quality Control, Environmental Footprint, Data-Driven Insights, Eco-Conscious, Waste Minimization, Industrial Sustainability" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="How We Add Value | Quality Analyst and Labs Pvt. Ltd." />
          <meta property="og:description" content="Discover how Quality Analyst and Labs Pvt. Ltd. is committed to sustainability and how we help businesses adopt eco-conscious practices to reduce their environmental impact." />
          <meta property="og:image" content="https://qualityanalyst.net/qualityLogo.png" />
          <meta property="og:url" content="https://qualityanalyst.net/how-we-add-value" />
        </Helmet>

        {/* ul slider area start */}
        <div className="how-page">

          <section className="about-body">

            <div className="about-card">
              <div className="about-image">
                <img src={dev} alt="story" />
              </div>
              <div className="about-text">
                <div className="sec-title">
                  <div className="title">How We Add Value</div>
                </div>
                <p>Our commitment at Quality Analyst extends beyond mere analysis; we strive to be stewards of our planet. By implementing rigorous quality control measures, we minimize waste generation and optimize resource utilization across industries. Our data-driven insights empower businesses to adopt sustainable practices, reduce their environmental footprint, and lessen their impact on delicate ecosystems. We champion eco-conscious methodologies, contributing to a healthier Mother Earth for generations to come. Together, we can forge a path towards a greener, more sustainable industrial landscape.</p>
              </div>
            </div>
          </section>


        </div>



      </>

    </div >
  )
}

export default Home