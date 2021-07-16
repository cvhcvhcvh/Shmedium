import React from 'react';


const ResponseIndexItem = props => {
  return(
    <div className="actual-response-box">
      <br/>
        <div className="actual-responses">
          {props.response.body}
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

