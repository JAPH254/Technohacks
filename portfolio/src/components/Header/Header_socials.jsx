import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Header.css'


function Header_socials() {
  return (
   <div className="header_socials">
        <a href="#"><i className="fab fa-facebook-f"></i><FaFacebookF /></a>
        <a href="#"><i className="fab fa-twitter"></i><FaXTwitter /></a>
        <a href="#"><i className="fab fa-instagram"></i><FaInstagramSquare />
</a>
        <a href="#"><i className="fab fa-linkedin-in"></i><FaLinkedin /></a>
        <a href="#"></a>
        <a href="#"><i className="fab fa-github"></i><FaGithub /></a>
        {/* Remember to target blank */}
   </div>
  )
}

export default Header_socials