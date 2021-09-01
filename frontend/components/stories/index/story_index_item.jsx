import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LikeButton from '../../like_button/like_button';


const StoryIndexItem = (props) => {
   
 
 
  
  return(
    
    <>
      
      {/* <p>{props.story.title}</p>
      <Link to={`/stories/${props.story.id}`}>Read this story</Link> */}
      {/* <Link to={`/stories/${props.story.id}`}>{props.story.title}</Link> */}
       {/* <div className="home-index"> */}
       
          <div className="home-index-item">
            <div className="home-index-item-title">
              
              <div className="home-stories"> 
                  <div className="column-stories">
                    {/* <br/>
                      <h1 className="splash-header">Medium is a place to write, read, and connect</h1> 
                      <br/>
                      <p className="splash-sub-header">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                     */}
                     <p className="who-wrote-this">App Academy</p>
                     <br/>
                          <Link className="title-wrapper"to={`/stories/${props.story.id}`}>
                                <h1 className="user-item-title">{props.story.title}</h1>
                          </Link>
                     <br/>
                          <p className="subtitle">Wouldn't it be cool if this was a dynamic subtitle?</p>
                     <br/>
                          <div className="subtitle-subs">
                            <br/>
                            <p className="date">Dec 28</p>
                            <p>
                              
                            </p>
                            <br/>
                            <p className="date">2 min read</p>
                            <br/>
                            <p className="genre">Nonfiction</p>
                            {/* <LikeButton storyId={this.props.storyId} currentUserId={this.props.currentUserId} fetchLike={this.props.fetchLike} createLike={this.props.createLike} deleteLike={this.props.deleteLike}/> */}
                          </div>
                  </div>
                  <div className="column-picture-2">
                      {/* <img className="quote-pic" src={window.quote} alt="quote-pic" /> */}
                      <div className="index-item-image">
                        <Link to={`/stories/${props.story.id}`}><img className="picture" src="https://source.unsplash.com/random" alt="random_photo" />
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
