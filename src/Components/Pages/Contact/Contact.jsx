import "./Contact.scss"
import React, { useState, useRef, useEffect } from "react";
import "animate.css/animate.min.css";
import blog from "../../Assets/Images/2149335686.jpg"
import fb from "../../Firebase/firebase";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DB = fb.firestore()
const CF = DB.collection('Contact_Form');

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  const form = useRef();
  const [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Message: ""
  });

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  //connect with firebase
  const SubmitData = async (e) => {
    e.preventDefault();
    const { Name, Email, Mobile, Message } = userData;
    if (Name && Email && Mobile && Message) {


      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(userData.Email)) {
        toast.warning('Please enter a valid email address');
        return
      }

      if (typeof Mobile !== "undefined") {

        var pattern = new RegExp(/^[0-9\b]+$/);

        if (!pattern.test(userData.Mobile)) {
          toast.warning("Please enter only number.");
          return

        } else if (userData.Mobile.length !== 10) {
          toast.warning("Please enter 10 digit Mobile number.");
          return
        }
      }

      try {

        CF.add({
          Name: Name,
          Email: Email,
          Mobile: Mobile,

          Message: Message
        }).then((docRef) => {
          toast.success('Message Sent Successfully');
        }).catch((error) => {
          console.error("error:", error);
        });

        emailjs.sendForm('service_2u7g9er', 'template_3ygcxp5', form.current, 'UDqjA4S3qCAI1MPCq')
          .then((result) => {
            console.log(result.text);

          }, (error) => {
            console.log(error.text);
          });

        setUserData({
          Name: "",
          Email: "",
          Mobile: "",
          Message: ""
        })

        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        toast.warning("Error adding document")
      }
    }
    else {
      toast.warning('Please fill the data');
    }
  };

  return (
    <div>
      <>
        <Helmet>
          <title>Contact Us | Quality Analyst and Labs Pvt. Ltd.</title>
          <meta name="description" content="Get in touch with Quality Analyst and Labs Pvt. Ltd. for any inquiries. Reach out to us via email, phone, or visit our offices in Gurugram and Delhi." />
          <meta name="keywords" content="Contact Quality Analyst, Lab in Gurugram, Lab in Delhi, Contact info, Analytical Services, Reach Quality Analyst" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Contact Us | Quality Analyst and Labs Pvt. Ltd." />
          <meta property="og:description" content="Need help or have questions? Contact Quality Analyst and Labs Pvt. Ltd. at our Gurugram or Delhi locations. We’re here to assist you." />
          <meta property="og:image" content="https://qualityanalyst.net/qualityLogo.png" />
          <meta property="og:url" content="https://qualityanalyst.net/contact" />
        </Helmet>
        <div className="contact-page">
          <div className="circle">
            <h2>Contact Us</h2>
          </div>
          <ToastContainer />

          <div className="container">
            <div className="contact-body">
              <div className="contact-info">
                <h2>Gurugram</h2>
                {/* <p>We are here to answer any questions you may have. Reach out to us and we'll respond as soon as we can.</p> */}
                <div className="info-item">
                  <i className="fas fa-thumbtack"></i>
                  <p>Plot No-270, Udyog Vihar Industrial Area Phase 6, Sector 37, Gurugram, Haryana 122004
                  </p>
                </div>
                {/* <div className="info-item">
                <i className="fa fa-envelope"></i>
                <p>info@example.com</p>
              </div> */}
                <div className="info-item">
                  <i className="fa fa-envelope"></i>
                  <p><a href="mailto:info@qualityanalyst.net">info@qualityanalyst.net</a></p>
                </div>

                <div className="info-item">
                  <i className="fa fa-phone"></i>
                  <p><a href="tel:919312430446">+91 - 9312430446</a></p>
                </div>
                <div className="info-item">
                  <i className="fa fa-phone"></i>
                  <p><a href="tel:0124-4384380">0124-4384380/1/2</a></p>
                </div>
              </div>
              <div className="contact-info">
                <h2>Delhi</h2>
                <div className="info-item">
                  <i className="fas fa-thumbtack"></i>
                  <p>382, Vardhman Charve Plaza-5 Plot 20, KP Block Commercial Centre, Pitampura, New Delhi – 110034</p>
                </div>
                <div className="info-item">
                  <i className="fa fa-envelope"></i>
                  <p><a href="mailto:support@qualityanalyst.net">support@qualityanalyst.net</a></p>
                </div>
                <div className="info-item">
                  <i className="fa fa-phone"></i>
                  <p><a href="tel:919810098791">+91 - 9810098791</a></p>
                </div>

                {/* <div className="info-item">
                  <i className="fa fa-phone"></i>
                  <p><a href="tel:9101127310554">+91 - 011 - 27310554</a> ,<a href="tel:01101132445930">011-011 - 32445930</a> ,<a href="tel:01132445940">011-32445940</a></p>
                </div> */}
              </div>
            </div>

            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form action="POST" ref={form}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name='Name'
                    value={userData.Name}
                    onChange={postUserData}
                    required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Mobile</label>
                  <input type="text" id="name" name='Mobile'
                    value={userData.Mobile}
                    onChange={postUserData}
                    required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name='Email'
                    value={userData.Email}
                    onChange={postUserData}
                    required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="Message" rows="5"
                    value={userData.Message}
                    onChange={postUserData}
                    required ></textarea>
                </div>
                <button type="submit" onClick={SubmitData} className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default Home