import React from "react";
import "./About.css";
import manas from "./images/manas.jpg";
import bhavyanshi from "./images/bhavyanshi.jpg";
import manisha from "./images/manisha.jpg";
import aayushi from "./images/aayushi.jpg";
// import instaLogo from "./Images/instagram logo.jpg";
// import linkedinLogo from "./Images/linkedin logo.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="App">
      <div className="aboutusdiv">
        <TextSection
          title="About us"
          content="Welcome to Webcycle, where sustainability meets innovation! Founded by a group of passionate friends, Webcycle is our collective effort to inspire and empower individuals towards a greener future."
        />
      </div>
      <div className="ourstorydiv">
        <TextSection
          title="Our Story"
          content="Born from our shared love for the planet and a deep-seated desire to make a positive impact, Webcycle began as a brainstorming session among friends. Fueled by our diverse backgrounds in environmental science, engineering, and design, we set out to create a platform that not only educates but also motivates action towards sustainable living."
        />
      </div>
      <div className="missiondiv">
        <TextSection
          title="Mission"
          content="At Webcycle, our mission is clear: to promote sustainable practices and environmental stewardship through accessible and engaging content. We believe that small actions lead to significant change, and through our platform, we aim to empower individuals to adopt eco-friendly habits in their daily lives."
        />
      </div>
      <div className="ourapproachdiv">
        <TextSection
          title="Our Approach"
          content="Through informative articles, practical tips, and inspiring stories, we aim to make sustainability accessible and relevant to everyone. From reducing plastic waste to promoting renewable energy solutions, we cover a wide range of topics aimed at empowering our audience to live more sustainably."
        />
      </div>
      <div className="meettheteamdiv">
        <TextSection
          title="Meet the Team"
          content="Meet the passionate individuals behind Webcycle:"
        />
        <TeamSection />
      </div>
      <div className="joinusdiv">
        <TextSection
          title="Join Us"
          content="Whether you're just beginning your sustainability journey or are already a seasoned eco-warrior, Webcycle invites you to join our community. Together, we can make a difference—one small step at a time."
        />
      </div>
      <div className="getinvolveddiv">
        <TextSection
          title="Get Involved"
          content="Explore our content, join the conversation on social media, and subscribe to our newsletter for the latest updates and tips on sustainable living. Thank you for visiting Webcycle, where we're dedicated to cycling towards a greener tomorrow, today!"
        />
      </div>
    </div>
  );
}

function TextSection({ title, content }) {
  return (
    <div
      className={
        title === "About us" ||
        title === "Mission" ||
        title === "Meet the Team" ||
        title === "Get Involved"
          ? "lefttextdiv"
          : "righttextdiv"
      }
    >
      <h2
        className={
          title === "About us" ||
          title === "Mission" ||
          title === "Meet the Team" ||
          title === "Get Involved"
            ? "lefthead"
            : "righthead"
        }
      >
        {title}
      </h2>
      <p
        className={
          title === "About us" ||
          title === "Mission" ||
          title === "Meet the Team" ||
          title === "Get Involved"
            ? "leftpara"
            : "rightpara"
        }
      >
        {content}
      </p>
    </div>
  );
}

function TeamSection() {
  const teamMembers = [
    {
      name: "Manas Verma",
      img: manas,
      insta: "https://www.instagram.com/mv_is_here21",
      linkedin: "https://www.linkedin.com/in/manas-verma-86a632283/",
    },
    {
      name: "Bhavyanshi Karela",
      img: bhavyanshi,
      insta: "https://www.instagram.com/bhavyan.she/",
      linkedin: "https://www.linkedin.com/in/bhavyanshi-karela-252a86274/",
    },
    {
      name: "Manisha Choudhary",
      img: manisha,
      insta: "https://www.instagram.com/manisha15_07",
      linkedin: "https://www.linkedin.com/in/manisha-choudhary-71ba5828b/",
    },
    {
      name: "Aayushi Prajapati",
      img: aayushi,
      insta: "https://www.instagram.com/aayushiprajapati615",
      linkedin: "https://www.linkedin.com/in/aayushi-prajapati-00189b28b/",
    },
  ];

  return (
    <div className="backdiv">
      {teamMembers.map((member) => (
        <div className="division" key={member.name}>
          <center>
            <img
              src={member.img}
              height="52%"
              width="40%"
              className="photo"
              alt={member.name}
            />
          </center>
          <br />
          <b className="name">{member.name}</b>
          <br />
          <FaInstagram />
          <a
            className="alink"
            href={member.insta}
            target="_blank"
            rel="noopener noreferrer"
          >
            {member.insta.split(".com/")[1]}
          </a>
          <br />
          <FaLinkedin />
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="alink"
          >
            {member.name.toLowerCase()}
          </a>
        </div>
      ))}
    </div>
  );
}

export default About;
