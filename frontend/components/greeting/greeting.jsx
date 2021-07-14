import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import SplashPage from '../splash/splash_page';
// import StoryIndexContainer from '../stories/index/story_index_container';




const Greeting = ({ currentUser, logout }) => {
  const loggedOut = () => (
   
        <div className="splash-home-logged-out">
              <div className="topnav-logged-out">
                <a className="shmedium-home-link" href="#">Shmedium</a>
                  <Link to="/"></Link>
                      <div className="nav-buttons-right-logged-out">
                          <a href="#linkedin">Linkedin</a>
                          <a href="#github">Github</a>
                          <a href="#app-academy">App Academy</a>
                          <a className="nav-link-login" href="#"onClick={() => dispatch(openModal('login'))}>Sign In</a>
                          <a className="nav-link-signup" href="#" onClick={() => dispatch(openModal('signup'))}
                          >Get Started</a>
                      </div>

              </div>
            <div className="home-index">
              {/* <SplashPage/> */}
            </div>
        </div>
  );
  const loggedIn = () => (
      <div className="splash-home">
        <div className="topnav-logged-in">
          <a className="shmedium-home-link" href="#">Shmedium</a>
            <Link to="/"></Link>
               <div className="nav-buttons-right-logged-in"> 
                    {/* <a href="#linkedin">Linkedin</a>
                    <a href="#github">Github</a>
                    <a href="#app-academy">App Academy</a> */}
                    <h2 className="header-name">Hi, {currentUser.username}!</h2>
                    <br/>
                    <button className="header-button" onClick={logout}>Log Out</button>
               </div>
        </div>
          <div className="home-index"> 
            {/* <StoryIndexContainer/> */}
          </div>
      </div>
  );

  return currentUser ? loggedIn() : loggedOut();
  
};


export default Greeting;

