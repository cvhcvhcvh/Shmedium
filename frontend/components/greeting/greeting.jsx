import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import Header from '../header/header';

const Greeting = ({ currentUser, logout }) => {

  const loggedOut = () => (
    <>
    
      <div id="sticky" className="header-background">
        <div className="splash-home-logged-out">
              {/* <div className="topnav-logged-out"> */}
                {/* <a className="shmedium-home-link" href="#">Shmedium</a> */}

                  <Link to="/" className="shmedium-home-link"><img className="home-logo" src={window.home} alt="quote-pic" />Shmedium
                  </Link>
                <div className="blank">
                </div>
                <div className="nav-buttons-right-logged-out">
                    <a className="nav-words" href="https://www.linkedin.com/in/cvhcvh/">Linkedin</a>
                    <a className="nav-words" href="https://github.com/cvhcvhcvh">Github</a>
                    <a className="nav-link-login" href="#"onClick={() => dispatch(openModal('login'))}>Sign In</a>
                    <a className="nav-link-signup" href="#" onClick={() => dispatch(openModal('signup'))}
                    >Get Started</a>
                </div>
        </div>
      </div>
      </>
  );

  const loggedIn = () => (
      
          <div className="topnav-logged-in">
            <a className="shmedium-home-link" href="#"><img className="home-logo" src={window.home} alt="quote-pic" />Shmedium</a>
              {/* <Link to="/"></Link> */}
                <div className="nav-buttons-right-logged-in"> 
                  
                      <a className="login-write" href="#/stories/new">Write</a>
                        
                        
                        {/* Hi, {currentUser.username}! */}
                      {/* <img className="home-logo" src={window.login} alt="quote-pic"/> */}
                      
                      <div className="dropdown">
                        <img className="profile-logo" src={window.login} alt="quote-pic"/>
                        <div className="dropdown-content">
                          <button className="submit-button" onClick={logout}>Sign Out</button>
                        </div>

                      </div>
                      
             
                </div>
          </div>
        
     

  );

  return currentUser ? loggedIn() : loggedOut();
  
};


export default Greeting;

