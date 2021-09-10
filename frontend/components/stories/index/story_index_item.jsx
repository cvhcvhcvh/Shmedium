import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LikeButton from '../../like_button/like_button';


const StoryIndexItem = (props) => {
   
  return(
    
    <>
          <div className="home-index-item">
            <div className="home-index-item-title">
              
              <div className="home-stories"> 
                  <div className="column-stories">
                    {/* <br/>
                      <h1 className="splash-header">Medium is a place to write, read, and connect</h1> 
                      <br/>
                      <p className="splash-sub-header">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                     */}
                     <div className="trending-logo-author"> 
                      <img className="logo-pic" src={window.logo} alt="logo-pic" />
                    
                       <p className="who-wrote-this">App Academy</p>
                     </div>
                     
                          <Link className="title-wrapper"to={`/stories/${props.story.id}`}>
                                <h1 className="user-item-title">{props.story.title}</h1>
                          </Link>
          
                          <p className="subtitle">Wouldn't it be cool if this was a dynamic subtitle?</p>
                     
                          <div className="subtitle-subs-index">
                            <br/>
                            <p className="date">Dec 28  • </p>
                            <p>
                              
                            </p>
                            
                            <p className="date">2 min  • </p>
                            <br/>
                            <p className="genre">Nonfiction</p>
                            {/* <LikeButton storyId={this.props.storyId} currentUserId={this.props.currentUserId} fetchLike={this.props.fetchLike} createLike={this.props.createLike} deleteLike={this.props.deleteLike}/> */}
                          </div>
                  </div>
                  <div>
                    
                  </div>
                  <div className="column-picture-2">
                      {/* <img className="quote-pic" src={window.quote} alt="quote-pic" /> */}
                      <div className="index-item-image">
                        <Link to={`/stories/${props.story.id}`}>
                          {/* <img className="picture" src="https://source.unsplash.com/random" alt="random_photo" /> */}
                          {<img className="picture" src={props.story.photo_url} alt="" /> }
                        </Link>

                      </div>

                  </div>
                </div>
            </div>
          </div>
      {/* </div> */}
    </>
  )
}

export default StoryIndexItem
