import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
// import SplashPage from '../splash/splash_page';
// import StoryIndexContainer from '../stories/index/story_index_container';




const Greeting = ({ currentUser, logout }) => {
  const loggedOut = () => (
    <>
      <div id="sticky" className="header-background">

        <div className="splash-home-logged-out">
              {/* <div className="topnav-logged-out"> */}
                {/* <a className="shmedium-home-link" href="#">Shmedium</a> */}
      
                  <Link to="/" className="shmedium-home-link">Shmedium</Link>
                <div className="blank">
                 
                </div>
                <div className="nav-buttons-right-logged-out">
                    <a className="nav-words" href="https://www.linkedin.com">Linkedin</a>
                    <a className="nav-words" href="https://www.github.com">Github</a>
                    <a className="nav-link-login" href="#"onClick={() => dispatch(openModal('login'))}>Sign In</a>
                    <a className="nav-link-signup" href="#" onClick={() => dispatch(openModal('signup'))}
                    >Get Started</a>
                </div>

              {/* </div> */}
            {/* <div className="home-index"> */}
              {/* <SplashPage/> */}
            {/* </div> */}
        </div>
      </div>


      
      </>
  );
  const loggedIn = () => (
      <div className="splash-home">
        <div className="topnav-logged-in">
          <a className="shmedium-home-link" href="#">Shmedium</a>
            {/* <Link to="/"></Link> */}
               <div className="nav-buttons-right-logged-in"> 
                    <h2 className="header-name">Hi, {currentUser.username}!</h2>
                    <br/>
                    <button className="submit-button" onClick={logout}>Log Out</button>
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

