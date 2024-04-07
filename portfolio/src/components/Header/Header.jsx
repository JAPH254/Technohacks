import React from "react";
import "./Header.css";
import CTA from "./CTA";
import Header_socials from "./Header_socials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <div className="header_top">
          <div className="logo">
            <img src="src\assets\logo-no-background.png" alt="No image" />
          </div>
          <div className="tags">
            <h5>Hello I am</h5>
            <h1>Japheth Omanyu</h1>
            <h5 className="text-light">A fullstack Developer</h5>
            <p>
              Feel free to connect, checkout, download and even ask any
              question.
            </p>
          </div>
        </div>
        <CTA />
        <div className="header_bottom">
          <Header_socials />
          <div className="me">
            <img
              src="src\assets\pexels-christina-morillo-1181278.jpg"
              alt="Image here"
            />
          </div>
          <a href="#" className="scroll_down">
            Scroll down
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
