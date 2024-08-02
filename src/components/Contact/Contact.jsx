import React from "react";
import "./Contact.css";
import Form from "./components/Form";
// import logo from "./Images/logo.jpg";

const ContactUs = () => {
  return (
    <div className="backclass">
      <p className="cupara">
        <b>Get in Touch with Webcycle</b>
        <br />
        <br />
        We are excited to connect with you! Whether you have questions,
        feedback, or ideas to share, we’d love to hear from you. At Webcycle, we
        believe in the power of community and collaboration to drive sustainable
        change.
      </p>
      <br />
      <p className="cupara">
        <b>Our Mission:</b>
        <br />
        <br />
        Promoting sustainable practices and environmental stewardship through
        accessible and engaging content. We aim to empower individuals to adopt
        eco-friendly habits in their daily lives.
      </p>
      <br />
      <p className="cupara">
        <b style={{ fontSize: "larger" }}>Contact Information:</b>
        <br />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;Email:</b>
        For general inquiries and support, email us at: info@webcycle.com
      </p>
      <br />
      <p className="cupara">
        <b>&nbsp;&nbsp;&nbsp;&nbsp;Follow Us:</b>
        Join our community on social media to stay engaged and inspired. Follow
        us on:
        <ul>
          <li className="socialmedialist">Instagram: @webcycle</li>
          <li className="socialmedialist">Twitter: @webcycle</li>
          <li className="socialmedialist">Facebook: Webcycle</li>
        </ul>
      </p>
      <br />
      <p className="cupara">
        <b>Visit Our Blog:</b>
        Explore our blog for informative articles, practical tips, and inspiring
        stories on sustainable living.
        <a href="blogs.html" className="visiting">
          <b>Visit Blog</b>
        </a>
      </p>
      <br />
      <br />
      <p className="cupara">
        <Form />
      </p>
      <br />
      <br />
      <p className="cupara">
        <b>Thank You</b> for your interest in Webcycle. Together, we can make a
        difference and work towards a greener tomorrow. We look forward to
        hearing from you!
      </p>
    </div>
  );
};

export default ContactUs;
