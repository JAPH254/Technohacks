import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>what i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Prototyping</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Prototyping</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list__icon" />
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list__icon" />
              <p>Prototyping</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
