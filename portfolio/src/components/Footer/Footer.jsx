import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Galaxy</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>
    <div className="footer__socials">
      <a href="#"><i className="fa fa-facebook">Facebok</i></a>
      <a href="#"><i className="fa fa-twitter"></i>Twitter</a>
      <a href="#"><i className="fa fa-instagram">Instagram</i></a>
      <a href="#"><i className="fa fa-linkedin"></i>LinkedIn</a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Galaxy softwares. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer