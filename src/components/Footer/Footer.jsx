import React from 'react'
import './footer.css'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPhoneAlt, FaYoutube, FaCopyright, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className='footer'>
        {/* <div className="applogo"></div> */}
        <div className="allcontent">
          <div className="slogan">
            {/* <div className="treeimg"> */}
            "Be part of the <strong><span id='solution'>Solution</span></strong>,<br />not a part of <span id='pollution'>Pollution</span>"</div>
          {/* </div> */}
          <div className="allist">
            <ul>
              <li><strong><a href='/'>Blogs</a></strong></li>
              <li><strong><a href='/'>Programmes</a></strong></li>
              <li><strong><a href='/'>About Us</a></strong></li>
              <li><strong><a href='/'>Contact Us</a></strong></li>

              {/* <li><strong><a href='/'></a></strong></li> */}
            </ul>
          </div>
          <div className="allist">
            <ul>
              {/* <li><strong><a href='/'>Blogs</a></strong></li>
        <li><strong><a href='/'>About Us</a></strong></li> */}
              <li><strong><a href='/'>FAQs</a></strong></li>
              <li><strong><a href='/'>Terms & Conditions</a></strong></li>
              <li><strong><a href='/'>Privacy Policies</a></strong></li>
            </ul>
          </div>
        </div>
        <div className="follow">
          <p>Join Us On :</p>
          <FaInstagram className='icons' />
          <FaFacebook className='icons' />
          <FaTwitter className='icons' />
          <FaLinkedin className='icons' />
          <FaYoutube className='icons' />
          <br />
          <FaPhoneAlt className='icons' id='phone' /><span>91-9925431351</span>
        </div>
      </div>
      <div className="last">
        All Rights Reserved <FaCopyright /> WEBCYCLE 2024  <FaHeart />
      </div>
    </>
  )
}
