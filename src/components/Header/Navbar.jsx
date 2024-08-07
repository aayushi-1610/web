import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";

export default function Navbar(props) {
  const [showNavItems, setShowNavItems] = useState(false);
  const history = useHistory();

  function handleClick() {
    setShowNavItems((prev) => !prev);
  }

  function signOut() {
    props.signout();
    history.push("/");
  }

  return (
    <div className="header">
      <ul className="menu">
        <li className="navitem">
          <Link to="/">Home</Link>
        </li>
        <li className="navitem">
          <Link to="/Blog">News & Blogs</Link>
        </li>
        <li className="navitem">
          <Link to="/Quiz">Quizzes</Link>
        </li>
        <li className="navitem">
          <Link to="/Programmes">Programmes</Link>
        </li>
        <li className="navitem">
          <Link to="/Eco-Friendly">Eco-Friendly</Link>
        </li>
        <li className="navitem">
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li className="navitem">
          <Link to="/About">About Us</Link>
        </li>
        <div className="hamburger-menu">
          <span onClick={handleClick}>
            <GiHamburgerMenu />
          </span>
        </div>
        <li>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={props.changeMode}></span>
          </label>
        </li>
        <div className="login">
          {!props.login && (
            <li className="navitemm">
              <Link to="/login">Log In</Link>
            </li>
          )}
          {!props.login && (
            <li className="navitemm">
              <Link to="/sign-up">Sign Up</Link>
            </li>
          )}
          {props.login && (
            <li className="navitemm">
              <Link to="/Profile">{props.username}</Link>
            </li>
          )}
          {props.login && (
            <li className="navitemm">
              <Link to="/" onClick={signOut}>
                Sign Out
              </Link>
            </li>
          )}
        </div>
        <div className={showNavItems ? "mobile-version-menu" : "inactive"}>
          <li className="navitemm">
            <Link to="/">Home</Link>
          </li>
          <li className="navitemm">
            <Link to="/Blog">News & Blogs</Link>
          </li>
          <li className="navitemm">
            <Link to="/Quiz">Quizzes</Link>
          </li>
          <li className="navitemm">
            <Link to="/Programmes">Programmes</Link>
          </li>
          <li className="navitemm">
            <Link to="/">Eco-Friendly</Link>
          </li>
          <li className="navitemm">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="navitemm">
            <Link to="/About">About Us</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
