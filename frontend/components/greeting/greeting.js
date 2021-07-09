import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';




const Greeting = ({ currentUser, logout }) => {
  const loggedOut = () => (
    // <nav className="sign-in-get-started">
    //   <Link to="/login" style={{ textDecoration: 'none' }}>Sign In</Link>
    //   <br/>
    //   <br/>
    //   <Link to="/signup" style={{ textDecoration: 'none' }}>Get Started</Link>
    // </nav>
    <div className="topnav">
        <a className="active" href="#home">Shmedium</a>
          <Link to="/"></Link>
        <a href="#linkedin">Linkedin</a>
        <a href="#github">Github</a>
        <a href="#app-academy">App Academy</a>
        <a className="nav-link-login" href="#"onClick={() => dispatch(openModal('login'))}>Sign In</a>
        <a className="nav-link-signup" href="#" onClick={() => dispatch(openModal('signup'))}>Get Started</a>
    </div>
  );
  const loggedIn = () => (
    
      <div className="topnav">
      <a className="active" href="#home">Shmedium</a>
        <Link to="/"></Link>
      <a href="#linkedin">Linkedin</a>
      <a href="#github">Github</a>
      <a href="#app-academy">App Academy</a>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? loggedIn() : loggedOut();
  
};


export default Greeting;

