import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const StoryIndexItem = (props) => {
   
  
  return(
    
    <>
      
      {/* <p>{props.story.title}</p>
      <Link to={`/stories/${props.story.id}`}>Read this story</Link> */}
      <Link to={`/stories/${props.story.id}`}>{props.story.title}</Link>

      <br/>
      <br/>
      {/* <Link to={`/stories/${props.story.id}/edit`}>Edit</Link> */}
      {/* <button onClick={() => props.removeStory(props.story.id)}></button> */}
      
    </>
  )
}

export default StoryIndexItem
