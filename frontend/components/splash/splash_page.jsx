import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import StoryIndexContainer from '../stories/index/story_index_container';
import Trending from '../trending/trending_index';


export default class SplashPage extends Component {

  
  render() {

    // stories.
    // // firstSix = 
    // // sixAfter =

    return (
      <>
          
          {!this.props.currentUserId ? <> <header className="home-header">
            <div>
              <div className="welcome-message"> 
                <div className="column">
                    <h1 className="splash-header">Medium is a place to write, read, and connect</h1> 
                    <br/>
                    <p className="splash-sub-header">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                    {/* <Link to="/" style={{ textDecoration: 'none' }}className="header-link">
                    </Link> */}
                </div>
                <div className="column">
                    <p>image</p>
                </div>
              </div>
            </div>
          </header> 

          <div className="trending-div">
            <div className="trending-story-box">
              {/* <Trending firstSix={firstSix}/> */}
              <Trending/>

            </div> 
          </div> </> : null}
          
          <div>
            {/* <StoryIndexContainer sidxAfter={sixAfter}/> */}
            <StoryIndexContainer/>

          </div>
      </>
    )
  }
}


      