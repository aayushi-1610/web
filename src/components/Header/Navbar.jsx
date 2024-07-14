import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import './Navbar.css'

export default function Navbar(props) {
  const [showNavItems, setShowNavItems] = useState(false);

  function handleClick() {
    setShowNavItems((prev) => !prev);
  }

  return (
    <div className="header">
      <ul className='menu'>
        <li className="navitem"><Link to="/">Home</Link></li>
        <li className="navitem"><Link to="/">News & Blogs</Link></li>
        <li className="navitem"><Link to="/Quiz">Quizzes</Link></li>
        <li className="navitem"><Link to="/">Programmes</Link></li>
        <li className="navitem"><Link to="/">Eco-Friendly</Link></li>
        <li className="navitem"><Link to="/">Contact Us</Link></li>
        <li className="navitem"><Link to="/">About Us</Link></li>
        <div className="hamburger-menu">
          <a onClick={handleClick}><GiHamburgerMenu /></a>
        </div>
        <li>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={props.changeMode}></span>
          </label>
        </li>
        <div className="login">
          {!props.login && <li><Link to='/'>Log In</Link></li>}
          {!props.login && <li><Link to='/'>Sign In</Link></li>}
          {props.login && <span>Username</span>}
          {props.login && <span>UserImage</span>}
        </div>
        <div className={`${showNavItems ? "mobile-version-menu" : "inactive"}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">News & Blogs</Link></li>
          <li><Link to="/Quiz">Quizzes</Link></li>
          <li><Link to="/">Programmes</Link></li>
          <li><Link to="/">Eco-Friendly</Link></li>
          <li><Link to="/">Contact Us</Link></li>
          <li><Link to="/">About Us</Link></li>
        </div>
      </ul>
    </div>

  )
}
