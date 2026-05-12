import React, { useEffect, useState, useRef } from 'react'
import "./Career.scss"
import fb from "../../Firebase/firebase";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DB = fb.firestore()
const CF = DB.collection('Career_Form');

const Career = () => {


    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [showForm, setShowForm] = useState(false);
    const handleApplyNowClick = () => {
        setShowForm(true);
    };
    const close = () => {
        setShowForm(false);
    };

    const form = useRef();
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Mobile: "",
        CoverLetter: ""
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
        const { Name, Email, Mobile, Position, CoverLetter } = userData;
        if (Name && Email && Mobile && Position && CoverLetter) {


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
                    Position: Position,
                    CoverLetter: CoverLetter
                }).then((docRef) => {
                    toast.success('Message Sent Successfully');
                }).catch((error) => {
                    console.error("error:", error);
                });

                emailjs.sendForm('service_2u7g9er', 'template_cad5tnr', form.current, 'UDqjA4S3qCAI1MPCq')
                    .then((result) => {
                        console.log(result.text);

                    }, (error) => {
                        console.log(error.text);
                    });

                setUserData({
                    Name: "",
                    Email: "",
                    Mobile: "",
                    Position: "",
                    CoverLetter: ""
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
        <div className='career'>
            <Helmet>
                <title>Careers at Quality Analyst and Labs Pvt. Ltd. | Join Our Team</title>
                <meta name="description" content="Explore rewarding career opportunities at Quality Analyst and Labs Pvt. Ltd. We are hiring for technical, marketing, and administrative roles across departments." />
                <meta name="keywords" content="Careers at Quality Analyst, Lab Jobs in Delhi, Technical Officer Jobs, Lab Assistant Vacancies, Quality Analyst Hiring, Job Openings in Analytical Labs" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Careers at Quality Analyst and Labs Pvt. Ltd." />
                <meta property="og:description" content="Join our growing team of professionals in analytical testing, marketing, and lab operations. View current job openings and apply online today." />
                <meta property="og:image" content="https://qualityanalyst.net/qualityLogo.png" />
                <meta property="og:url" content="https://qualityanalyst.net/career" />
            </Helmet>
            <ToastContainer />
            <div className="circle">
                <h2>Career</h2>
            </div>
            <div className="career-top">
                <p>Quality Lab believes in the adage that it is not the company but the people who run it that matter. Quality Lab is an equal opportunity employer, and performance is generously rewarded. We offer attractive career opportunities for technical, marketing, and support professionals. At present, we have openings for:
                </p>
            </div>

            <div className="career-body">
                <div className="career-card">
                    <h2>Technical Officers / Executives / Managers</h2>
                    <p>A highly rewarding opportunity awaits candidates who have B.E./B.Sc./M.Sc./Ph.D. as a basic qualification, with Chemistry as one of the subjects. Experience in the analytical field shall be an added advantage. Fresh graduates with an analytical bent of mind may also apply.
                    </p>
                    <button onClick={handleApplyNowClick}>Apply Now</button>
                </div>
                <div className="career-card">
                    <h2>Marketing Officers / Executives</h2>
                    <p>A suitable candidate would have a flair for marketing and achieving targets. A good personality with excellent written and spoken communication skills is a prerequisite. The emphasis is on delivering quality solutions to clients. An MBA would be a definite advantage.
                    </p>
                    <button onClick={handleApplyNowClick}>Apply Now</button>
                </div>
                <div className="career-card">
                    <h2>Administrative Officers / Co-ordinator / Accounts Officer </h2>
                    <p>People with good man-management skills and proficiency in computers are essential. Expertise in Tally is a prerequisite for accounts professionals.
                    </p>
                    <button onClick={handleApplyNowClick}>Apply Now</button>
                </div>
                <div className="career-card">
                    <h2>Field Exective / Sampling Assistant / Lab Assistant</h2>
                    <p> Knowledge of the various routes and general topography of the areas is essential for field executives and sampling assistants. Lab assistants should have a keen eye and strong presence of mind.
                    </p>
                    <button onClick={handleApplyNowClick}>Apply Now</button>
                </div>
            </div>

            <div className="career-last">
                <p>We impart suitable training to all new recruits. Candidates staying around our centres shall be preferred.</p>
                <p>Email your resume to us at : <a href="mailto:hr@qualityanalyst.net " style={{ color: "rgba(8, 142, 217, 1)" }}>hr@qualityanalyst.net</a></p>
            </div>
            {showForm && (

                <div className="career-form">

                    <form action="POST" ref={form}>
                        <h3>
                            <svg onClick={close} xmlns="http://www.w3.org/2000/svg" id="Solid" viewBox="0 0 64 64"><path d="M43.4141,32,58.95,16.4644a7.0076,7.0076,0,0,0,0-9.9L57.4351,5.05a7.0076,7.0076,0,0,0-9.8995,0L32,20.5859,16.4644,5.05a7.0076,7.0076,0,0,0-9.9,0L5.05,6.5649a7.0076,7.0076,0,0,0,0,9.9L20.5859,32,5.05,47.5356a7.0076,7.0076,0,0,0,0,9.8995L6.5649,58.95a7.0076,7.0076,0,0,0,9.9,0L32,43.4141,47.5356,58.95a7.0081,7.0081,0,0,0,9.8995,0L58.95,57.4351a7.0076,7.0076,0,0,0,0-9.8995ZM55.3209,7.1077a1,1,0,1,1,0,1.4142A1,1,0,0,1,55.3209,7.1077ZM48.25,21.25l7.7782-7.7782a3.0014,3.0014,0,0,0,.8707-2.3112,1,1,0,1,1,1.9956-.1257,5.0013,5.0013,0,0,1-1.4522,3.8512L49.664,22.664A1,1,0,0,1,48.25,21.25ZM8.4554,8.8351a1,1,0,1,1,0-1.4142A1,1,0,0,1,8.4554,8.8351Zm14.1422,7.0711a1,1,0,0,1-1.4143,0L13.4052,8.128a3.001,3.001,0,0,0-2.3112-.8707,1,1,0,0,1-.1257-1.9957,5.0012,5.0012,0,0,1,3.8511,1.4522l7.7782,7.7781A1,1,0,0,1,22.5976,15.9062Z" /></svg>
                            Apply Now
                        </h3>
                        <div className="f">
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
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name='Email'
                                value={userData.Email}
                                onChange={postUserData}
                                required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Select Position</label>
                            <select name="Position" id="Position" value={userData.Position}
                                onChange={postUserData}

                                required>
                                <option value="Technical Officers/Executives/Managers" >Technical Officers/Executives/Managers</option>
                                <option value="Marketing Officers/Executives">Marketing Officers/Executives</option>
                                <option value="Administrative Officers/Co-ordinator/Accounts Officer ">Administrative Officers/Co-ordinator/Accounts Officer </option>
                                <option value="Field Exective/Sampling Assistant/Lab Assistant">Field Exective/Sampling Assistant/Lab Assistant</option>

                            </select>

                        </div>
                        <div className="form-group">
                            <label htmlFor="CoverLetter">Cover Letter</label>
                            <textarea id="CoverLetter" name="CoverLetter" rows="5"
                                value={userData.CoverLetter}
                                onChange={postUserData}
                                required ></textarea>
                        </div>
                        <button type="submit" onClick={SubmitData} className="submit-button">Send Message</button>
                    </form>
                </div>
            )}

        </div>
    )
}

export default Career