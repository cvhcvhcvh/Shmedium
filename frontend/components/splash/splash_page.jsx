import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import StoryIndexContainer from '../stories/index/story_index_container';
import TrendingIndexItem from '../trending/trending_index_item';
import LikeButton from '../like_button/like_button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";





export default class SplashPage extends Component {

  
  render() {

    const { stories } = this.props

    return (
      
      <>
          
          {!this.props.currentUserId ? <> <header className="home-header">
            <div>
              <div className="welcome-message"> 
                <div className="column">
                  <br/>
                    <h1 className="splash-header">Medium is a place to write, read, and connect</h1> 
                    <br/>
                    <p className="splash-sub-header">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                      <div>
                        <button className="welcome-message-button" onClick={() => dispatch(openModal('signup'))}>
                          Start Writing
                        </button>
                      </div>
                </div>
                <div className="column-picture">
                    <img className="quote-pic" src={window.quote} alt="quote-pic" />
                </div>
              </div>
            </div>
          </header> 

          <div className="trending-div">
            <div className="trending-on">
              <div className="trending-arrow"><FontAwesomeIcon icon={faChartLine} /></div>
                <p className="trending-on-shmedium">TRENDING ON SHMEDIUM</p>
            </div>
            <div className="trending-story-box">
              {/* <Trending firstSix={firstSix}/> */}
              
              
              {stories.map((story)=>{
                
                  if (story.id > 7 && story.id < 14) {
                    
                    return(
                      
                        <TrendingIndexItem key={story.id} story={story}/>
                      
                    )
                  }
                })}
              

            </div> 
          </div> </> : null}
          
          <div className="splash-index">
            <div className="discover">
              <StoryIndexContainer/>
            </div>
          </div>
          
      </>
    )
  }
}


      