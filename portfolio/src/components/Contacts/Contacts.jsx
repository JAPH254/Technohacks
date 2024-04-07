import "./contacts.css";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import React, { useState } from "react";
import emailjs from "emailjs-com";


function Contacts() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_uaorr8y";
    const templateId = "template_o48noit";
    const publicKey = "_stGOWFDEFXmtGFrZ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Omanyu Japheth",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((Response) => {
        console.log("Email sent successfully", Response);
        alert("Email sent successfully");
        setname("");
        setemail("");
        setmessage("");
      })
      .catch((error) => {
        console.log("Email not sent", error);
        alert("Email not sent");
      });

  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoMdMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>me@gmail.com</h5>
            <a href="mailto:me@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Japheth omanyu</h5>
            <a href="mailto:me@gmail.com" target="_blank">
              Connect
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>message</h5>
            <a href="mailto:me@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>message</h5>
            <a href="https://api.whatsapp.com/send?phone+254759742384">
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your full name "
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Email</button>
        </form>
      </div>
    </section>
  );
}
export default Contacts;