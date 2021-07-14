import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const StoryIndexItem = (props) => {
   
  
  return(
    
    <>
      
      {/* <p>{props.story.title}</p>
      <Link to={`/stories/${props.story.id}`}>Read this story</Link> */}
      {/* <Link to={`/stories/${props.story.id}`}>{props.story.title}</Link> */}
       {/* <div className="home-index"> */}
          <div className="home-index-item">
            <div className="home-index-item-title">
              
                      <Link to={`/stories/${props.story.id}`}>
                            <h1 className="user-item-title">{props.story.title}</h1>
                      </Link>
                  <br/>
                subtitle
            </div>
          </div>
      {/* </div> */}
    </>
  )
}

export default StoryIndexItem
