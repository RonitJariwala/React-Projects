import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <ScrollLink to="hero" smooth={true} offset={-70} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="programs" smooth={true} offset={-70} duration={500}>
            Programs
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} offset={-70} duration={500}>
            About Us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="campus" smooth={true} offset={-70} duration={500}>
            Campus
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonials" smooth={true} offset={-70} duration={500}>
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} offset={-70} duration={500} className="btn">
            Contact
          </ScrollLink>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
