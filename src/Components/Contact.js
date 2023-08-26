import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./Components.css";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="ContactPage">
      <p className="contactText" style={{textAlign:"center", fontSize:"25px", color:"grey"}}> Let's Grab a Coffee?</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "7%",
          }}
        >
         <a href="https://www.linkedin.com/in/vimur-s-545970242" target="_blank" className="svgss">
          <FaLinkedin className="svgss" /></a>

          <a href="https://github.com/VimurS/" target="_blank" className="svgss"> <FaGithub /> </a>

          <a href="https://twitter.com/vimur7?t=qsKRtJteBRBS03-iMiMsYw&s=09" target="_blank" className="svgss">
          <FaTwitter className="svgss" /></a>

          <a href="https://www.instagram.com/vimur.sivakumar?utm_source=qr&r=nametag" target="_blank" className="svgss">
          <FaInstagram className="svgss" /></a>

          <a href="https://www.facebook.com/profile.php?id=100009282106685" target="_blank" className="svgss">
          <FaFacebook className="svgss" /></a>

          {/* <a href="mailto:svimur7@gmail.com" className="svgss">
          <FaMailBulk className="svgss" /></a> */}
        </div>
       
        <p className="footer">
          Vimur.Sivakumar © {currentYear} - All Rights Reserved
        </p>
        <p className="footer2">Developed with ❤️ in Coimbatore </p>
      </div>
    </>
  );
}

export default Contact;
