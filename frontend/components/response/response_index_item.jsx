import React from 'react';
import LikeButton from '../like_button/like_button';


const ResponseIndexItem = props => {
  return(
    <div className="actual-response-box">
      <br/>
        <div className="actual-responses">
          
          {props.response.body}
          <div className="like-response">
            {/* <LikeButton/> */}
          </div>
          {/* {props.currentUser === props.user ? 
            <button onClick={() => props.deleteResponse(props.response.id)}>Delete</button>
        : ""} */}
            <br/>
            <div>
              {props.currentUser === props.response.author_id ?
                <button 
                className="story-button" 
                onClick={() => props.deleteResponse(props.response.id)}>Delete
                </button>  : null}
            </div>
        </div>

    </div>
  )
}

export default ResponseIndexItem

