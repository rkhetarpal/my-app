import React, { useState, useEffect } from 'react'
import logo from "../../Assets/Images/logo.png"
import "./Header.scss"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // const [menuOpen, setMenuOpen] = useState("none");

    // const open = () => {
    //     setMenuOpen("block")
    // }
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div>
            <header>
                <div className={"ul-nav-area"}>
                    <div className="row">
                        {/* logo start */}
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                            <div className="header-logo">
                                <Link to={"/"}>
                                    <img src={logo} alt="logo" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        {/* Toggle Button */}
                        <Link to={"/about-us#certificates"} className="acc">
                            <p>Accreditations</p>
                        </Link>
                        <div className="menu-toggle" onClick={toggleMenu}>
                            <p>Menu</p>
                            <svg id="Layer_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m16.197 118.877c-9.994-9.993-16.197-23.787-16.197-38.967s6.203-28.974 16.197-38.967 23.787-16.197 38.967-16.197h401.672c15.18 0 28.974 6.203 38.967 16.197s16.197 23.787 16.197 38.967-6.203 28.974-16.197 38.967c-9.993 9.994-23.787 16.197-38.967 16.197h-401.672c-15.18 0-28.974-6.203-38.967-16.197zm440.639 258.049h-401.672c-15.18 0-28.974 6.203-38.967 16.197-9.994 9.992-16.197 23.786-16.197 38.966s6.203 28.974 16.197 38.967c9.993 9.994 23.787 16.197 38.967 16.197h401.672c15.18 0 28.974-6.203 38.967-16.197 9.994-9.993 16.197-23.786 16.197-38.967 0-15.18-6.203-28.974-16.197-38.967-9.993-9.993-23.787-16.196-38.967-16.196zm0-176.09h-401.672c-15.18 0-28.974 6.203-38.967 16.197-9.994 9.993-16.197 23.786-16.197 38.967 0 15.18 6.203 28.974 16.197 38.968 9.994 9.993 23.787 16.197 38.967 16.197h401.672c15.18 0 28.974-6.203 38.967-16.197 9.994-9.995 16.197-23.788 16.197-38.968s-6.203-28.974-16.197-38.967c-9.993-9.994-23.787-16.197-38.967-16.197z" /></svg>
                        </div>


                        {/* main menu area start */}
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 header">
                            {/* Header Social Start */}

                            {/* Header Social End */}
                            <div className="main-menu-area text-center">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="active">
                                                <Link to={"/"}>home</Link>

                                            </li>
                                            <li>
                                                <Link to={"/about-us"}>about us</Link>
                                            </li>

                                            {/* <li>
                                                <a href="#">Laboratory Services</a>
                                                <ul className="sub-menu text-left">
                                                    <li>
                                                        <a href="#">Laboratory Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Test Kits</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sustainability</a>
                                                    </li>
                                                </ul>
                                            </li>  */}
                                            <li>
                                                <Link to="/laboratory-services"> Laboratory Services</Link>
                                            </li>
                                            <li>
                                                <Link to="/test-kits">Test Kits</Link>
                                            </li>
                                            <li>
                                                <Link to="/sustainability">Sustainability</Link>
                                            </li>
                                            {/*     <li>
                                                <a href="#">blog</a>
                                                <ul className="sub-menu text-left">
                                                    <li>
                                                        <a href="blog-list.html">blog list</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid.html">blog grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">blog details</a>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li>
                                                <a href="#">Resources</a>
                                                <ul className="sub-menu text-left">
                                                    <li>
                                                        <Link to="/how-we-add-value">How we add value</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/technicals">Technicals</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* <li>
                                                <a href="/">Resources</a>
                                            </li> */}
                                            {/* <li>
                                                <a href="/">Technicals</a>
                                            </li> */}
                                            {/* <li>
                                                <a href="/blogs">Blogs</a>
                                            </li> */}
                                            <li>
                                                <Link to="/career">Career</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <Link id="quote-btn" to={"/contact"}>
                                Contact Us 
                            </Link>

                            <ul className='header-cert'>
                                <li> <Link to={"/about-us#certificates"}>
                                    ISO 9001:2015 certified
                                </Link></li>
                                <li> <Link to={"/about-us#certificates"}>ISO 14001:2015 certified</Link> </li>
                                <li>  <Link to={"/about-us#certificates"}>ISO 17025: 2017 accredited </Link></li>
                                <li>  <Link to={"/about-us#certificates"}> NABL accredited</Link> </li>
                                <li><Link to={"/about-us#certificates"}>Member- Global Water Partnership</Link>
                                </li>
                            </ul>

                        </div>

                        {/* Mobile Menu */}
                        {/* {menuOpen && ( */}
                        <div className="mobile-menu" style={{ display: menuOpen ? "block" : "none" }}>

                            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" id="Solid" viewBox="0 0 64 64"><path d="M43.4141,32,58.95,16.4644a7.0076,7.0076,0,0,0,0-9.9L57.4351,5.05a7.0076,7.0076,0,0,0-9.8995,0L32,20.5859,16.4644,5.05a7.0076,7.0076,0,0,0-9.9,0L5.05,6.5649a7.0076,7.0076,0,0,0,0,9.9L20.5859,32,5.05,47.5356a7.0076,7.0076,0,0,0,0,9.8995L6.5649,58.95a7.0076,7.0076,0,0,0,9.9,0L32,43.4141,47.5356,58.95a7.0081,7.0081,0,0,0,9.8995,0L58.95,57.4351a7.0076,7.0076,0,0,0,0-9.8995ZM55.3209,7.1077a1,1,0,1,1,0,1.4142A1,1,0,0,1,55.3209,7.1077ZM48.25,21.25l7.7782-7.7782a3.0014,3.0014,0,0,0,.8707-2.3112,1,1,0,1,1,1.9956-.1257,5.0013,5.0013,0,0,1-1.4522,3.8512L49.664,22.664A1,1,0,0,1,48.25,21.25ZM8.4554,8.8351a1,1,0,1,1,0-1.4142A1,1,0,0,1,8.4554,8.8351Zm14.1422,7.0711a1,1,0,0,1-1.4143,0L13.4052,8.128a3.001,3.001,0,0,0-2.3112-.8707,1,1,0,0,1-.1257-1.9957,5.0012,5.0012,0,0,1,3.8511,1.4522l7.7782,7.7781A1,1,0,0,1,22.5976,15.9062Z" /></svg>

                            <nav>
                                <ul>
                                    <li><Link to="/" onClick={toggleMenu}>home</Link></li>
                                    <li><Link to="/about-us" onClick={toggleMenu}>about us</Link></li>
                                    <li><Link to="/laboratory-services" onClick={toggleMenu}>Laboratory Services</Link></li>
                                    <li><Link to="/test-kits" onClick={toggleMenu}>Test Kits</Link></li>
                                    <li><Link to="/sustainability" onClick={toggleMenu}>Sustainability</Link></li>
                                    <li><Link to="/how-we-add-value" onClick={toggleMenu}>How we add value</Link></li>
                                    <li><Link to="/technicals" onClick={toggleMenu}>Technicals</Link></li>
                                    <li><Link to="/career" onClick={toggleMenu}>Career</Link></li>
                                    <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                                </ul>
                                <ul className="header-cert-mobile">
                                    <li><Link to="/about-us#certificates" onClick={toggleMenu}>ISO 9001:2015 certified</Link></li>
                                    <li><Link to="/about-us#certificates" onClick={toggleMenu}>ISO 14001:2015 certified</Link></li>
                                    <li><Link to="/about-us#certificates" onClick={toggleMenu}>ISO 17025:2017 accredited</Link></li>
                                    <li><Link to="/about-us#certificates" onClick={toggleMenu}>NABL accredited</Link></li>
                                    <li><Link to="/about-us#certificates" onClick={toggleMenu}>Global Water Partnership</Link></li>
                                </ul>
                            </nav>
                        </div>
                        {/* )} */}

                        {/* main menu area end */}
                    </div>
                </div>

            </header>

        </div>
    )
}

export default Header
