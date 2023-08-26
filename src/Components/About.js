import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "./Components.css";
import trip from "../media/trippic.jpg";

function About() {

  return (
    <>
      <div className="AboutPage">
      <img className="abtImg" src={trip} alt="picture taken on a road trip"></img>
      <p className="abtText">
      Hi, I'm Vimur, a 22-year-old Software Engineer. I've gained experience in Product Design and Development through collaborations with various organizations, ranging from small-scale startups to large multinational corporations. Additionally, I'm currently working on my startup, which has a mission to foster a healthier and more joyful society by revolutionizing food products. Our focus is on introducing organic alternatives to conventional and processed foods.
<br></br>
<br></br>
Several things always pique my interest, <br></br>

I take pleasure in spending quality time with my friends, embarking on journeys to uncharted destinations, and uncovering new experiences together. I have a genuine enthusiasm for engaging with people and immersing myself in their stories.
There's something comforting about sharing tea or coffee during the late hours while indulging in meaningful conversations.

I find great satisfaction in reading books, particularly those penned by Tamil authors.

Being a sports enthusiast, you'll often find me on the field playing cricket or cycling during the weekends. Weekdays are dedicated to hitting the gym. My newfound addiction to physical fitness brings an invigorating rush of energy.

Life is an open book, and I've always been eager to try out new experiences. I don't rigidly plan things; instead, I'm always ready to seize opportunities that align with my passions.
<br></br>
<br></br>
My journey in life is characterized by a willingness to explore and embrace new challenges that come my way.
      </p>

      </div>
    </>
  );
  
}

export default About;
