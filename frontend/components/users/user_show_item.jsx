import React from 'react';
import { Link } from 'react-router-dom';

const UserShowItem = ({ story }) => {
  

  return(
      <>
        
          {/* <Link to={`/users/${story.author.id}`}></Link> */}

        
          <Link to={`/users/${story.author.id}`}>{story.author.username}</Link>
          <br/>
          <Link to={`/stories/${story.id}`}>
            <h1 className="user-item-title">{story.title}</h1>
            <br/>
            <h3 className="user-item-body">{story.body}</h3>
          </Link>

    
          <Link to={`/stories/${story.id}`}></Link>
    </>
  )
}

export default UserShowItem;

