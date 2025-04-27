import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" className="nav-link hover-effect active">
          Home
          <svg className="home-circle" width="80" height="80" viewBox="0 0 150 150">
            <circle className="draw-circle" cx="75" cy="75" r="70"/>
          </svg>
        </a>
        <a href="#" className="nav-link hover-effect">
          Streams
          <svg className="streams-circle" width="80" height="80" viewBox="0 0 150 150">
            <circle className="draw-circle" cx="85" cy="75" r="70"/>
          </svg>
        </a>
        <a href="#" className="nav-link hover-effect">
          Party
          <svg className="party-circle" width="80" height="80" viewBox="0 0 150 150">
            <circle className="draw-circle" cx="75" cy="75" r="70"/>
          </svg>
        </a>
        <a href="#" className="nav-link hover-effect">
          Premium
          <svg className="premiun-circle" width="150" height="150" viewBox="0 0 250 250">
            <circle className="draw-circle" cx="85" cy="75" r="70"/>
          </svg>
        </a>
      </div>

      <div className="navbar-center">
        <h1 className="brand-name">Gamor</h1>
      </div>

      <div className="navbar-right">
        <a href="/login" className="nav-link hover-effect">
          Sign in
          <svg className="signIn-circle" width="80" height="80" viewBox="0 0 150 150">
            <circle className="draw-circle" cx="75" cy="75" r="70"/>
          </svg>
        </a>
        <a href="#" className="create-account-btn">
          Create account
        </a>
      </div>
    </nav>
  )
}

export default Navbar
