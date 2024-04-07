import React from 'react'
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdDisplaySettings } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { useState } from 'react';

function Navbar() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active': ''}><FaInfoCircle /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active': ''}><FaBook /></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'? 'active': ''}><MdDisplaySettings /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''}><MdContactMail /></a>
    </nav>
  )
}

export default Navbar