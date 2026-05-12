import React from 'react'
import logo from "../../Assets/Images/logo.png"
import "./Footer.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* <footer>
        <div id="ul-footer-area" className="ul-footer-area mt-70 pt-50 pb-10">
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay=".5s"
            >
              <div className="footer-single-wedget">
                <div className="custom-html-widget">
                  <img src={logo} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta quasi, sequi alias, facere exercitationem laboriosam temporibus laborum repudiandae enim cumque.
                  </p>

                </div>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-3 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="footer-single-wedget">
                <div className="widget_nav_menu">
                  <h3>services</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">service 1</a>
                    </li>
                    <li>
                      <a href="#">service 2</a>
                    </li>
                    <li>
                      <a href="#">service 3</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-3 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay=".4s"
            >
              <div className="footer-single-wedget">
                <div className="custom-html-widget">
                  <h3>contact us</h3>
                  <ul className="contact-details">
                   
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                      </svg>
                      <p> +012-345-678</p>

                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                      </svg>
                      <p style={{textTransform: "lowercase"}}>abc@email.com</p>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                      <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className=" frame col-xl-3 col-lg-2 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.599060441047!2d77.13251027517008!3d28.701637880939693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03af1e753b87%3A0x5aef8037229a8270!2sVardhman%20Electronics%20%7C%20Pitampura%20%7C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1741340218408!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>
        </div>
        <div className="ul-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="footer-copyright text-center ">
                  <p>
                    © 2025 All Right Reserved by{" "}
                    <a href="#" target="_blank">
                      Quality Lab
                    </a>
                  </p><br />
                  <p>
                    Designed by{" "}
                    <a href="#" target="_blank">
                      AHS Assured Services
                    </a>
                  </p>
                  <div className="flex-grow-1" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      <footer className="footer">
        <div className="container">

          {/* Animated Sections */}
          <motion.div
            className="footer-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* About Section */}
            <div className="footer-section">
              <h2>About Us</h2>
              <p>Quality Lab is the fastest growing certified independent analytical laboratory, serving the best in the business among five star hotels, embassies, industrial firms and water treatment OEM's</p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about-us"}>About Us</Link></li>
                <li>
                  <Link to="/laboratory-services"> Laboratory Services</Link>
                </li>
                <li><Link to="/test-kits">Test Kits</Link></li>
                <li> <Link to="/sustainability">Sustainability</Link></li>
                <li>  <Link to="/career">Career</Link></li>
                <li>  <Link to="/career">Contact Us</Link></li>

              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-section">
              <h3>Contact Us</h3>
              <a href="tel:919810098791"><div><div className="svg"><FaPhoneAlt /></div>+91 9810098791</div></a>
              <a href="mailto:info@qualityanalyst.net"><div><div className="svg"><FaEnvelope /></div>info@qualityanalyst.net</div></a>
              <div><div className="svg"><FaMapMarkerAlt /></div>Plot No-270, Udyog Vihar Industrial Area Phase 6, Sector 37, Gurugram, Haryana 122004
              </div>
            </div>

            {/* Google Map */}
            <div className="footer-section map-container">
              <h3>Find Us</h3>

              <iframe title="Quality Lab Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56120.358265016184!2d76.99819229732682!3d28.463810500866334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17f21d156d61%3A0x70e97395fec8c56a!2sQuality%20Analyst%20%26%20Labs%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1742295212775!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>
            </div>

          </motion.div>

          {/* Social Media */}
          {/* <motion.div
            className="social-icons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
            <a href="#" className="icon"><FaInstagram /></a>
          </motion.div> */}

          {/* Copyright */}
          <div className="footer-bottom">
            <p> © {new Date().getFullYear()} Quality Lab. All rights reserved. Designed By <a style={{color: "#fff"}} href="https://ahsassuredservices.com/web_design_and_development"> AHS</a></p>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default Footer