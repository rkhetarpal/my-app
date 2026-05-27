import "./About.scss"
// import iso1 from "../../Assets/Images/Home/1.jpg"
// import iso2 from "../../Assets/Images/Home/2.jpg"
// import iso3 from "../../Assets/Images/Home/3.jpg"
// import iso4 from "../../Assets/Images/Home/4.jpg"

import labImage from "../../Assets/Images/7998.jpg"
import labImage2 from "../../Assets/Images/2149335686.jpg"
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { motion, AnimatePresence } from "framer-motion";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import dev from "../../Assets/Images/About/cropped-devinder-scaled-1.jpg"
import about from "../../Assets/Images/About/1308996.png"
import labElement1 from "../../Assets/Images/About/lab_element_one.png"
import labElement2 from "../../Assets/Images/About/lab_element_two.png"
import labElement3 from "../../Assets/Images/About/lab_element_three.png"
import aboutbg from "../../Assets/Images/About/bg.jpg"
import mission from "../../Assets/Images/About/mission.jpg"
import story from "../../Assets/Images/About/story.jpg"
import styles from "./CertificateSlider.module.scss";
import cert3 from "../../Assets/Images/About/Certificates/Certificate_Global_Water_Partnership_page-0001.jpg"
import cert4 from "../../Assets/Images/About/Certificates/Certificate_TC-7160.pdf-2024-26_page-0001.jpg"
import cert11 from "../../Assets/Images/About/Certificates/NABL-2026-30.jpg"
import cert5 from "../../Assets/Images/About/Certificates/Print_Udyam_Registration_Certificate-1_page-0001.jpg"
import cert6 from "../../Assets/Images/About/Certificates/Quality_Analyst_&_Labs_EMS_(1).jpg"
import cert7 from "../../Assets/Images/About/Certificates/Quality_Analyst_&_Labs_QMS_(1).jpg"
import cert8 from "../../Assets/Images/About/Certificates/CERT_INSCAI_Devinder_Khetarpal_090425_page-0001.jpg"
import cert9 from "../../Assets/Images/About/Certificates/2.jpg"
import cert10 from "../../Assets/Images/About/Certificates/3.jpg"

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#certificates") {
      const section = document.getElementById("certificates");
      if (section) {
        const yOffset = -100; // your offset
        const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: yPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const features = [
    {
      icon: <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m325.95 282.75 3.64-9.75h31.41v-31h-27.36l-45.82 45.82-.02-.02c-8.14 8.15-19.4 13.2-31.8 13.2-24.81 0-45-20.19-45-45 0-12.4 5.05-23.66 13.2-31.8l-.02-.02 42.08-42.08c-7.53-1.06-15.1-.97-22.56.26l-10.44 1.74-15.09-27.19-26.23 14.55 15.09 27.2-7 7.94c-5.83 6.61-10.66 14.79-13.98 23.65l-3.65 9.75h-31.4v29h30.78l3.6 10.7c3.31 9.85 4.89 14.26 12.89 23.94l6.73 8.18-15.9 26.49 25.72 15.44 16.04-26.73 10.39 2.11c9.01 1.82 18.11 1.99 27.05.51l10.44-1.74 15.09 27.19 26.23-14.56-15.09-27.19 7-7.94c6.44-7.29 11.01-14.7 13.98-22.65z" /><path d="m314.63 133.73 12.9-12.9 1.11-14.09c-22.47-10.93-47.31-16.74-72.64-16.74-91.53 0-166 74.47-166 166s74.47 166 166 166 166-74.47 166-166c0-25.32-5.81-50.16-16.75-72.64l-14.08 1.11-27.53 27.53h27.36v91h-41.23c-2.41 4.75-5.25 9.36-8.54 13.86l19.62 35.35-78.7 43.67-19.66-35.43c-5.49.33-11.01.23-16.51-.31l-20.88 34.77-77.16-46.32 20.69-34.47c-4-5.84-6.35-10.55-8.19-15.12h-39.44v-89h41.14c2.53-5.18 5.45-10.13 8.69-14.74l-19.68-35.47 78.7-43.67 19.66 35.43c5.49-.33 11.01-.23 16.51.31l20.88-34.77z" /><path d="m488.01 147.63-31.69 31.69-19.31 1.53c9.81 23.66 14.99 49.19 14.99 75.15 0 108.07-87.92 196-196 196-108.07 0-196-87.93-196-196s87.93-196 196-196c25.97 0 51.5 5.17 75.15 14.98l1.53-19.3 31.69-31.69c-33.7-15.78-70.5-23.99-108.37-23.99-141.572 0-256 114.394-256 256 0 141.572 114.393 256 256 256 141.572 0 256-114.394 256-256 0-37.87-8.21-74.67-23.99-108.37z" /><circle cx="256" cy="256" r="15" /><path d="m511.99 81.22-69.06 69.06-65.16 5.16-81.17 81.17c-4.44-9.26-11.95-16.77-21.21-21.21l81.17-81.18 5.16-65.15 69.06-69.06v81.21z" /></svg>,
      title: "Accuracy and Precision",
      desc: "We are committed to delivering the highest level of accuracy in every test result. Our meticulous attention to detail and adherence to rigorous scientific standards ensure the reliability of our data."
    },
    {
      icon: <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_22-guarantee" data-name="22-guarantee"><g id="glyph"><path d="m217.788 161.621 38.212-20.089 38.212 20.089a12 12 0 0 0 17.412-12.649l-7.3-42.551 30.916-30.134a12 12 0 0 0 -6.65-20.468l-42.723-6.208-19.106-38.711a12 12 0 0 0 -21.522 0l-19.106 38.711-42.723 6.208a12 12 0 0 0 -6.65 20.468l30.914 30.134-7.3 42.551a12 12 0 0 0 17.412 12.649z" /><path d="m503.034 182.392-34.539-25.9 1.755-43.137a12 12 0 0 0 -18.9-10.3l-35.302 24.845-40.483-15a12 12 0 0 0 -15.636 14.787l12.719 41.256-26.774 33.867a12 12 0 0 0 9.232 19.441l43.166.651 23.936 35.93a12 12 0 0 0 9.984 5.347 12.226 12.226 0 0 0 1.548-.1 12 12 0 0 0 9.81-8.02l13.959-40.853 41.567-11.661a12 12 0 0 0 3.958-21.154z" /><path d="m156.894 222.252a12 12 0 0 0 9.232-19.441l-26.774-33.867 12.719-41.256a12 12 0 0 0 -15.636-14.788l-40.483 15-35.3-24.845a12 12 0 0 0 -18.9 10.3l1.755 43.137-34.539 25.9a12 12 0 0 0 3.958 21.154l41.567 11.661 13.957 40.853a12 12 0 0 0 21.342 2.773l23.936-35.93z" /><path d="m404 348a24.01 24.01 0 0 0 23.244-18 24.01 24.01 0 0 0 -23.244-18h-88v-55c0-14.962 0-44.791-39.252-48.6a8 8 0 0 0 -8.748 7.972v54.364a8 8 0 0 1 -1.187 4.192l-22.813 37.072h1l-33 21.551v154.157a31.835 31.835 0 0 0 16 4.292h160a24.01 24.01 0 0 0 23.244-18 24.01 24.01 0 0 0 -23.244-18h-24v-12h32a24.01 24.01 0 0 0 23.244-18 24.01 24.01 0 0 0 -23.244-18h-32v-12h40a24.01 24.01 0 0 0 23.244-18 24.01 24.01 0 0 0 -23.244-18h-40v-12z" /><path d="m188 312h-80a12 12 0 0 0 -12 12v168a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-168a12 12 0 0 0 -12-12zm-40 173a12 12 0 1 1 12-12 12 12 0 0 1 -12 12z" /></g></g></svg>,
      title: "Customer Satisfaction",
      desc: "Our clients are at the heart of everything we do. We strive to exceed their expectations by providing exceptional service, clear communication, and tailored solutions. We aim to build lasting partnerships based on trust and mutual respect. "
    },

    {
      icon: <svg id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m66.995 255.935h-55.931c0-41.784 10.46-81.125 28.905-115.547l48.479 27.99c-13.702 26.178-21.454 55.962-21.454 87.557zm87.709-159.631-27.989-48.479c-31.892 19.865-58.885 46.856-78.752 78.747l48.48 27.99c14.909-23.427 34.834-43.35 58.262-58.257zm93.361-29.272v-55.967c-38.81 1.245-75.34 11.516-107.561 28.783l27.989 48.48c23.961-12.544 50.944-20.103 79.571-21.294zm123.561-27.185c-32.22-17.267-68.75-27.537-107.561-28.783v55.968c28.628 1.192 55.611 8.75 79.571 21.294l27.989-48.48zm44.062 114.714 48.479-27.99c-19.866-31.891-46.859-58.882-78.752-78.746l-27.989 48.479c23.428 14.907 43.353 34.83 58.262 58.257zm29.28 93.374h55.968c-1.245-38.805-11.513-75.33-28.776-107.547l-48.479 27.99c12.54 23.957 20.095 50.935 21.287 79.557zm-21.294 95.571 48.479 27.99c17.267-32.22 27.537-68.751 28.783-107.561h-55.968c-1.192 28.628-8.75 55.611-21.294 79.571zm-66.235 72.052 27.99 48.479c31.891-19.866 58.882-46.86 78.747-78.752l-48.479-27.989c-14.907 23.428-34.83 43.353-58.257 58.262zm-101.374 29.447v55.931c41.784 0 81.125-10.46 115.547-28.905l-27.99-48.479c-26.178 13.703-55.962 21.454-87.557 21.454zm0-29.578c44.042 0 83.915-17.852 112.777-46.715 28.863-28.863 46.715-68.736 46.715-112.777s-17.852-83.915-46.715-112.777c-28.862-28.863-68.736-46.715-112.777-46.715s-83.915 17.852-112.777 46.715c-28.863 28.862-46.715 68.736-46.715 112.777 0 4.418 3.582 8 8 8h20.296c4.418 0 8-3.582 8-8s-3.582-8-8-8h-12.071c1.117-20.328 6.465-39.528 15.179-56.736l10.469 6.044c3.814 2.209 8.697.908 10.906-2.906s.908-8.697-2.906-10.906l-10.472-6.046c5.42-8.27 11.663-15.951 18.626-22.915s14.645-13.206 22.915-18.626l6.046 10.472c2.209 3.814 7.092 5.115 10.906 2.906s5.115-7.092 2.906-10.906l-6.044-10.469c17.208-8.714 36.407-14.062 56.736-15.179v12.071c0 4.418 3.582 8 8 8s8-3.582 8-8v-12.071c20.328 1.117 39.528 6.465 56.736 15.179l-6.044 10.469c-2.209 3.814-.908 8.697 2.906 10.906s8.697.908 10.906-2.906l6.046-10.472c8.27 5.42 15.951 11.663 22.915 18.626 6.963 6.963 13.206 14.645 18.626 22.915l-10.472 6.046c-3.814 2.209-5.115 7.092-2.906 10.906s7.092 5.115 10.906 2.906l10.469-6.044c8.714 17.208 14.062 36.407 15.179 56.736h-12.071c-4.418 0-8 3.582-8 8s3.582 8 8 8h12.071c-1.117 20.328-6.465 39.528-15.179 56.736l-10.469-6.044c-3.814-2.209-8.697-.908-10.906 2.906s-.908 8.697 2.906 10.906l10.472 6.046c-5.42 8.27-11.663 15.951-18.626 22.915-6.963 6.963-14.645 13.206-22.914 18.626l-6.046-10.472c-2.209-3.814-7.092-5.115-10.906-2.906s-5.115 7.092-2.906 10.906l6.044 10.469c-17.208 8.714-36.407 14.062-56.736 15.179v-12.071c0-4.418-3.582-8-8-8s-8 3.582-8 8v20.296c0 4.418 3.582 8 8 8zm-49.039-78.494h95.96v-35.446h-133.468c15.007 8.857 27.84 21.001 37.509 35.446zm3.487 64.278c0 54.927-44.798 99.724-99.724 99.724s-99.725-44.797-99.725-99.724 44.798-99.724 99.724-99.724 99.724 44.798 99.724 99.724zm-49.185-26.274h-44.121l23.506-40.713h-39.235l-41.229 71.155h38.921l-22.319 62.818 84.477-93.261zm140.883-198.908c-3.814-2.209-8.697-.908-10.906 2.906l-32.577 56.426c-.874-.113-1.759-.191-2.663-.191-11.437 0-20.765 9.328-20.765 20.765s9.328 20.765 20.765 20.765 20.765-9.328 20.765-20.765c0-4.727-1.611-9.079-4.288-12.576l32.576-56.423c2.209-3.814.908-8.697-2.906-10.906z" fill-rule="evenodd" /></svg>,
      title: "Speed and Efficiency",
      desc: "We understand the importance of timely results. We are dedicated to delivering our services with speed and efficiency, without compromising accuracy or quality."
    },
    {
      icon: <svg id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m393.717 105.533-93.256-93.256v87.106h43.305c3.447 0 6.276 2.705 6.276 6.15s-2.829 6.274-6.276 6.274h-49.579c-3.444 0-6.277-2.829-6.277-6.274v-99.53h-258.359v499.994h364.166v-87.476l10.087 11.934 15.381-12.919-11.319-13.533c39.371-39.615 42.692-103.467 6.153-147.144-6.03-7.257-12.919-13.533-20.302-18.823zm-240.891 134.226c-2.338-2.337-2.338-6.397 0-8.735 2.457-2.461 6.396-2.461 8.858 0l29.896 29.773 69.632-86.86c2.218-2.707 6.033-3.074 8.736-.983 2.708 2.215 3.199 6.151.987 8.856l-73.693 91.903c-.25.248-.497.617-.742.863-2.459 2.459-6.397 2.459-8.859 0zm255.283 203.49 22.885-19.192 47.983 57.211c5.288 6.273 4.429 15.747-1.848 21.036-6.272 5.291-15.745 4.43-21.036-1.845zm-140.005-190.45c-40.846 34.203-46.257 95.595-12.058 136.441 34.206 40.72 95.593 46.137 136.319 11.933 40.845-34.079 46.257-95.473 12.059-136.315-34.207-40.846-95.596-46.261-136.32-12.059zm-56.467 85.259c-57.581-16.116-89.078-45.15-94.367-86.979v-113.312c32.725 7.629 67.053.862 94.367-18.578 27.435 19.44 61.759 26.208 94.482 18.578v82.675c-16.482 3.693-32.234 11.197-46.014 22.761-28.049 23.498-41.338 58.069-38.875 92.027-3.075.985-6.277 1.845-9.593 2.828z" fill-rule="evenodd" /></svg>,
      title: "Integrity and Transparency",
      desc: "We uphold the highest ethical standards in all our interactions. We are committed to transparency in our processes and communications, ensuring our clients have complete confidence in our services."
    },
    {
      icon: <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 510 510" xmlns="http://www.w3.org/2000/svg"><path d="m108.501 273.056v-37.855l24.27-9.341c3.114-12.973 8.223-25.308 15.209-36.645l-10.578-23.791 28.022-28.022 23.791 10.578c11.337-6.986 23.672-12.095 36.605-15.169l9.381-24.31h39.638l9.341 24.31c12.933 3.074 25.268 8.183 36.605 15.169l23.791-10.578 20.662 20.662c-2.711-1.469-5.756-2.22-9.036-2.22-5.905 0-10.921 2.398-14.614 6.822-.034.039-15.881 18.708-28.115 33.119-15.033-14.83-35.686-23.981-58.477-23.981-41.595 0-76.032 30.481-82.206 70.338l-4.488-5.285c-.024-.028-.048-.056-.072-.084-3.762-4.369-8.754-6.638-14.458-6.638-5.826 0-10.697 2.269-14.459 6.638-.024.028-.048.056-.072.084zm250.035-100.133 42.197 49.71c.784.922.941 2.158.431 3.257-.51 1.118-1.55 1.785-2.766 1.785h-19.656v139.557c0 3.374-2.766 6.12-6.14 6.12h-32.82c-3.374 0-6.14-2.746-6.14-6.12v-139.557h-19.637c-1.236 0-2.276-.667-2.786-1.785-.51-1.099-.353-2.335.452-3.257l42.196-49.71c.589-.706 1.393-1.079 2.335-1.079.922 0 1.726.373 2.334 1.079zm-202.43 74.29 42.197 49.691c.784.941.961 2.158.451 3.276-.51 1.099-1.569 1.785-2.786 1.785h-19.656v65.267c0 3.374-2.747 6.12-6.121 6.12h-32.839c-3.374 0-6.12-2.746-6.12-6.12v-65.267h-19.657c-1.216 0-2.276-.686-2.786-1.785-.51-1.118-.333-2.335.452-3.276l42.196-49.691c.608-.706 1.393-1.078 2.335-1.078.922 0 1.726.372 2.334 1.078zm101.205-37.135c14.066 16.557 28.131 33.134 42.197 49.691.804.922.961 2.157.451 3.276-.51 1.098-1.55 1.765-2.786 1.765h-19.656v102.422c0 3.374-2.746 6.12-6.121 6.12h-32.819c-3.374 0-6.14-2.746-6.14-6.12v-102.422h-19.657c-1.216 0-2.256-.667-2.766-1.765-.529-1.119-.353-2.354.432-3.276 14.065-16.557 28.131-33.134 42.196-49.691.609-.726 1.413-1.079 2.335-1.079.941 0 1.746.353 2.334 1.079zm178.668-109.077c.569 1.423.454 3.028-.312 4.355s-2.099 2.23-3.615 2.449l-59.242 8.564c-1.895.274-3.78-.558-4.855-2.143-1.074-1.585-1.149-3.644-.192-5.303l6.736-11.683c-6.474-4.91-13.333-9.464-20.547-13.634-94.672-54.646-215.706-22.22-270.352 72.451-29.243 50.668-33.55 108.881-16.707 160.427l-37.089 21.425c-23.702-64.522-19.669-138.7 17.365-202.893 66.278-114.78 213.044-154.091 327.824-87.841 7.187 4.17 14.073 8.642 20.684 13.388l9.115-15.794c.957-1.659 2.778-2.625 4.688-2.488 1.911.137 3.575 1.354 4.285 3.132zm44.219 71.104c23.702 64.522 19.669 138.701-17.393 202.894-66.25 114.752-213.016 154.091-327.796 87.813-7.187-4.143-14.1-8.614-20.684-13.388l-9.171 15.899c-.957 1.659-2.777 2.626-4.688 2.489-1.91-.137-3.575-1.353-4.286-3.132l-22.212-55.585c-.569-1.423-.454-3.028.312-4.355.767-1.327 2.099-2.229 3.615-2.449l59.233-8.563c1.895-.274 3.781.559 4.855 2.145s1.148 3.646.19 5.305l-6.697 11.596c6.501 4.91 13.36 9.464 20.574 13.634 94.644 54.646 215.705 22.221 270.352-72.45 29.243-50.669 33.55-108.882 16.707-160.455z" /></svg>,
      title: "Continuous Improvement",
      desc: "We foster a culture of continuous learning and improvement. We invest in the latest technology and empower our team to innovate and evolve, ensuring we remain at the forefront of our industry."
    },
    {
      icon: <svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Guides" /><g id="_x32_0" /><g id="_x31_9" /><g id="_x31_8" /><g id="_x31_7" /><g id="_x31_6" /><g id="_x31_5" /><g id="_x31_4" /><g id="_x31_3" /><g id="_x31_2"><path d="m29.6581421 19.8860474-1.8865356-.6288452c-.1660767-.6447754-.420166-1.2526855-.7515869-1.8118896l.8898926-1.7798462c.0962524-.1925049.0585327-.4249878-.093689-.5771484l-.904541-.904541c-.1521606-.1522217-.3846436-.1899414-.5771484-.093689l-1.7798462.8898926c-.5592041-.3314209-1.1671143-.5855103-1.8118896-.7515869l-.6288452-1.8865356c-.0680544-.2041628-.2590944-.3418581-.4743044-.3418581h-1.2792969c-.21521 0-.40625.1376953-.4743042.3418579l-.6288452 1.8865356c-.6447754.1660767-1.2526855.420166-1.8118896.7515869l-1.7798462-.8898926c-.1925049-.0962524-.4249878-.0585327-.5771484.093689l-.904541.904541c-.1522217.1521606-.1899414.3846436-.093689.5771484l.8898926 1.7798462c-.3314209.5592041-.5855103 1.1671143-.7515869 1.8118896l-1.8865356.6288452c-.2041627.0680544-.341858.2590944-.341858.4743044v1.2792969c0 .21521.1376953.40625.3418579.4743042l1.8865356.6288452c.1660767.6447754.420166 1.2526855.7515869 1.8118896l-.8898926 1.7798462c-.0962524.1925049-.0585327.4249878.093689.5771484l.904541.904541c.1521606.1522217.3846436.1899414.5771484.093689l1.7798462-.8898926c.5592041.3314209 1.1671143.5855103 1.8118896.7515869l.6288452 1.8864746c.0680544.2041627.2590944.341919.4743044.341919h1.2792969c.21521 0 .40625-.1377563.4743042-.3419189l.6288452-1.8864746c.6447754-.1660767 1.2526855-.420166 1.8118896-.7515869l1.7798462.8898926c.1925049.0962524.4249878.0585327.5771484-.093689l.904541-.904541c.1522217-.1521606.1899414-.3846436.093689-.5771484l-.8898926-1.7798462c.3314209-.5592041.5855103-1.1671143.7515869-1.8118896l1.8865356-.6288452c.2041627-.0680544.341858-.2590944.341858-.4743044v-1.2792969c0-.2152099-.1376953-.4062499-.3418579-.4743041zm-8.6581421 6.1139526c-2.7614136 0-5-2.2385864-5-5s2.2385864-5 5-5 5 2.2385864 5 5-2.2385864 5-5 5z" /><path d="m15 2h-7c-.5522847 0-1 .4477153-1 1v3h9v-3c0-.5522847-.4477148-1-1-1z" /><circle cx="21" cy="19" r="2" /><path d="m24 23.6177979v-.6177979c0-1.1046143-.8954468-2-2-2h-2c-1.1045532 0-2 .8953857-2 2v.6177979c.7337646.8399047 1.7996826 1.3822021 3 1.3822021s2.2662354-.5422974 3-1.3822021z" /><path d="m20 4h-3v2c0 .5522461-.4476929 1-1 1h-9c-.5523071 0-1-.4477539-1-1v-2h-3c-.5523071 0-1 .4476929-1 1v24c0 .5522461.4476929 1 1 1h15.9511719c-.003418-.0095215-.010437-.0167236-.0136719-.0263672l-.4638672-1.3916016c-.3598633-.1201172-.7104492-.2646484-1.0483398-.4345703l-1.3120117.6572266c-.2089844.1035156-.4404297.1582031-.6713867.1582031-.4018555 0-.7788086-.15625-1.0615234-.4404297l-.9038086-.9033203c-.4575195-.4589844-.5698242-1.1542969-.28125-1.7314453l.6567383-1.3134766c-.1694336-.3378906-.3144531-.6875-.434082-1.046875l-1.3925783-.4648437c-.6137695-.2050781-1.0253906-.7773437-1.0253906-1.4228516v-1.2792969c0-.6455078.4116211-1.2177734 1.0244141-1.4228516l1.3935547-.4648438c.1196289-.359375.2646484-.7089844.434082-1.046875l-.6567383-1.3134766c-.2885742-.5771484-.1762695-1.2724609.2802734-1.7304688l.9057617-.9052734c.2817383-.2832031.6586914-.4394531 1.0605469-.4394531.230957 0 .4624023.0546875.6689453.1572266l1.3144531.6582031c.3378906-.1699219.6884766-.3144531 1.0483398-.4345703l.4638673-1.392578c.2041016-.6132812.7758789-1.0253906 1.4228516-1.0253906h.6396484v-6c0-.5523071-.4476929-1-1-1zm-12.1464844 20.8535156-2 2c-.0976562.0976563-.2255859.1464844-.3535156.1464844s-.2558594-.0488281-.3535156-.1464844l-1-1c-.1953125-.1953125-.1953125-.5117188 0-.7070313s.5117188-.1953125.7070313 0l.6464843.6464845 1.6464844-1.6464844c.1953125-.1953125.5117188-.1953125.7070313 0s.1953124.5117187-.0000001.7070312zm0-5-2 2c-.0976562.0976563-.2255859.1464844-.3535156.1464844s-.2558594-.0488281-.3535156-.1464844l-1-1c-.1953125-.1953125-.1953125-.5117188 0-.7070313s.5117188-.1953125.7070313 0l.6464843.6464845 1.6464844-1.6464844c.1953125-.1953125.5117188-.1953125.7070313 0s.1953124.5117187-.0000001.7070312zm0-5-2 2c-.0976562.0976563-.2255859.1464844-.3535156.1464844s-.2558594-.0488281-.3535156-.1464844l-1-1c-.1953125-.1953125-.1953125-.5117188 0-.7070313s.5117188-.1953125.7070313 0l.6464843.6464845 1.6464844-1.6464844c.1953125-.1953125.5117188-.1953125.7070313 0s.1953124.5117187-.0000001.7070312zm0-5-2 2c-.0976562.0976563-.2255859.1464844-.3535156.1464844s-.2558594-.0488281-.3535156-.1464844l-1-1c-.1953125-.1953125-.1953125-.5117188 0-.7070313s.5117188-.1953125.7070313 0l.6464843.6464845 1.6464844-1.6464844c.1953125-.1953125.5117188-.1953125.7070313 0s.1953124.5117187-.0000001.7070312z" /></g><g id="_x31_1" /><g id="_x31_0" /><g id="_x30_9" /><g id="_x30_8" /><g id="_x30_7" /><g id="_x30_6" /><g id="_x30_5" /><g id="_x30_4" /><g id="_x30_3" /><g id="_x30_2" /><g id="_x30_1" /></svg>,
      title: "Ownership and Accountability",
      desc: "We instill a sense of pride and ownership in our team, encouraging them to take responsibility for their work and contribute to the collective success of the company. We are accountable for our actions and committed to delivering on our promises."
    },
  ];


  return (
    <div>
      <>
        <Helmet>
          <title>About Us | Quality Analyst and Labs Pvt. Ltd.</title>
          <meta name="description" content="Discover the mission, vision, leadership, and values of Quality Analyst and Labs Pvt. Ltd.—your trusted partner in analytical testing and environmental solutions." />
          <meta name="keywords" content="Analytical Testing, ISO 17025, Environmental Audit, Laboratory Services, Water Analysis, Sustainability, Delhi Lab Services" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="About Us | Quality Analyst and Labs Pvt. Ltd." />
          <meta property="og:description" content="Learn more about our leadership, mission, and values in the world of analytical services and lab testing." />
          <meta property="og:image" content="https://qualityanalyst.net/qualityLogo.png" />
          <meta property="og:url" content="https://qualityanalyst.net/about" />
        </Helmet>

        {/* ul slider area start */}
        <div className="about-page">
          <section className="about-page-slider">
            <img src={aboutbg} alt="about" className="bg" />
            <motion.div
              className="about-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="about-text">
                <h2 className="about-title"> <span class="text">About Us</span></h2>

              </div>
              <motion.div
                className="about-image"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <img src={about} alt="Laboratory" />
                {/* <img className='lab' src={about2} alt="Laboratory" /> */}
                <img className='labshape1' src={labElement1} alt="Laboratory" />
                <img className='labshape2' src={labElement2} alt="Laboratory" />
                <img className='labshape3' src={labElement3} alt="Laboratory" />
              </motion.div>
            </motion.div>
            {/* Floating Animated Molecules */}
            <div className="molecule molecule-1"></div>
            <div className="molecule molecule-2"></div>
            <div className="molecule molecule-3"></div>
          </section>
          <div className="about-page-slider-mobile">
            <h2 > <span class="text">About Us</span></h2>
          </div>
          <section className="about-body">

            <div className="about-card">
              <div className="about-image">
                <img src={dev} alt="story" />
              </div>
              <div className="about-text">
                <div className="sec-title">
                  <div className="title">Leadership</div>
                </div>
                <h2>Devinder Khetarpal
                </h2>
                <p>A water treatment professional with 32 years of extensive experience in water analysis, treatment, distribution and water footprint mapping. A qualified assessor for ISO 17025 – Laboratory Accreditation and ISO 14020 – Eco Labelling, having worked with Ion Exchange India Ltd and currently as CEO of Quality Analyst & Labs Pvt. Ltd. in New Delhi. Major areas of interest include sustainability, water conservation, carbon emissions, climate change, environmental & water audits and eco-labelling.</p>
              </div>
            </div>
          </section>

          <section className="story vision">


            <div className="story-body">

              <div className="story-image">
                <img src={story} alt="story" />
              </div>
              <div className="story-text">

                <div className="circle">
                  <h2>Our Vision</h2>
                </div>
                <p>Our vision is to instill a deep sense of pride and confidence in our customers, making Quality Analyst and Labs Private Limited synonymous with reliability and excellence in the analytical services sector. We envision a future where our meticulous approach to accuracy in test results and our dedication to delivering services with unparalleled speed become the hallmark of our brand. We aim to empower our clients with the knowledge and insights they need to succeed, becoming an indispensable asset to their operations. We strive to be recognized as a leader in the industry, continuously evolving and adapting to the changing needs of our clients and the evolving scientific landscape. By fostering a culture of ownership and accountability within our team, we empower our employees to take initiative and contribute their unique talents to the collective success of our company. We aspire to be a catalyst for progress, playing a pivotal role in advancing scientific understanding, promoting environmental sustainability, and ensuring the safety and well-being of our communities. Through our unwavering dedication to quality, speed, and customer satisfaction, we aim to shape a future where every analysis performed by Quality Analyst and Labs Private Limited represents a benchmark for excellence.
                </p>
              </div>
            </div>


          </section>

          <section className="about-section">
            <div className="row clearfix">
              {/*Content Column*/}
              <div className="content-column ">
                <div className="inner-column">
                  <div className="sec-title">
                    <div className="title">Our Mission</div>

                  </div>
                  <div className="text">
                    At Quality Analyst and Labs Private Limited, our mission is to redefine industry benchmarks by consistently delivering world-class analytical services that exceed customer expectations. We are driven by a relentless pursuit of excellence, aiming to achieve maximum customer satisfaction through a combination of precision, efficiency, and unwavering commitment. We strive to be more than just a testing laboratory; we aim to be a trusted partner, providing our clients with the critical data they need to make informed decisions and achieve their goals. We are dedicated to fostering a culture of continuous improvement, investing in state-of-the-art technology, and empowering our team of skilled professionals to provide innovative solutions. By upholding the highest standards of quality and integrity, we seek to build lasting relationships with our clients, enabling them to confidently navigate the complexities of their respective industries. Our commitment extends to promoting sustainable practices and contributing positively to the communities we serve, ensuring that our analytical expertise supports environmental stewardship and public health. We are dedicated to providing clear, transparent, and accurate analytical services that our clients can rely on.
                  </div>

                </div>
              </div>
              {/*Image Column*/}
              <div className="image-column ">
                <div
                  className="inner-column "
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src={mission} alt="mission" />

                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="values">
            <div className="circle">
              <h2>Our Values</h2>
            </div>
            <p>At Quality Analyst and Labs Private Limited, our actions are guided by a set of core values that define who we are and how we operate:

            </p>
            <div className="features">
              {features.map((feature, index) => (

                <div className={`feature feature-${index}`} key={index}>
                  <div className="icon">{feature.icon}</div>
                  <div className="text">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>

              ))}
            </div>
          </section>

          <section id="certificates" className="values">
            <div className="circle">
              <h2>Certificates</h2>
            </div>

            <div className="cert-body">

              <div className={styles.slide}>
                <img src={cert4} alt="Certificates" />
                <img src={cert11} alt="Certificates" />
                <img src={cert5} alt="Certificates" />
                <img src={cert6} alt="Certificates" />
                <img src={cert7} alt="Certificates" />
                <img src={cert8} alt="Certificates" />
                <img src={cert9} alt="Certificates" />
                <img src={cert3} alt="Certificates" />
                <img src={cert10} alt="Certificates" />
              </div>
            </div>


          </section>

        </div>



      </>

    </div >
  )
}

export default Home
