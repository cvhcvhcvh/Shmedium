import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const homeLinks = () => (
    <nav className="sign-in-get-started">
      <Link to="/login" style={{ textDecoration: 'none' }}>Sign In</Link>
      <br/>
      <br/>
      <Link to="/signup" style={{ textDecoration: 'none' }}>Get Started</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : homeLinks();
  
};


export default Greeting;

