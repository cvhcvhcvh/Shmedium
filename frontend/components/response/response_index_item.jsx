import React from 'react';


const ResponseIndexItem = props => {
  return(
    <div>
        <div>
          {props.response.body}
          {/* {props.currentUser === props.user ? 
            <button onClick={() => props.deleteResponse(props.response.id)}>Delete</button>
        : ""} */}

            {props.currentUser === props.response.author_id ?
            <button 
            className="delete-comment" 
            onClick={() => props.deleteResponse(props.response.id)}>
            </button>  : null}
        </div>

    </div>
  )
}

export default ResponseIndexItem