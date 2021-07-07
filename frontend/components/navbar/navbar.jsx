import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
      <div className="topnav">
        <a className="active" href="#home">Shmedium</a>
          <Link to="/"></Link>
        <a href="#news">Linkedin</a>
        <a href="#contact">Github</a>
        <a href="#about">App Academy</a>
        <a className="nav-link" href="#">Sign In</a>
        <a className="nav-link" href="#">Get Started</a>
      </div>
  )
}

