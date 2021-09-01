import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import StoryIndexContainer from '../stories/index/story_index_container';
import TrendingIndexItem from '../trending/trending_index_item';
import LikeButton from '../like_button/like_button';



export default class SplashPage extends Component {

  
  render() {

    const { stories } = this.props

  
    console.log(stories)
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
                    {/* <Link to="/" style={{ textDecoration: 'none' }}className="header-link">
                    </Link> */}
                </div>
                <div className="column-picture">
                    <img className="quote-pic" src={window.quote} alt="quote-pic" />
                </div>
              </div>
            </div>
          </header> 

          <div className="trending-div">
            <div className="trending-on">
              <p>TRENDING ON SHMEDIUM</p>
            </div>
            <div className="trending-story-box">
              {/* <Trending firstSix={firstSix}/> */}
              
              
              {stories.map((story)=>{
                
                  if (story.id > 7 && story.id < 15) {
                    
                    return(
                      
                        <TrendingIndexItem key={story.id} story={story}/>
                      
                    )
                  }
                })}
              

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


      