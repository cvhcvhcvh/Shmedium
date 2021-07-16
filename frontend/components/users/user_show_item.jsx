import React from 'react';
import { Link } from 'react-router-dom';

const UserShowItem = ({ story }) => {
  

  return(
      <>
        
          {/* <Link to={`/users/${story.author.id}`}></Link> */}

        <div className="user-show-wrapper">

            <div className="author-underline">

              <div className="author-wrapper">
                <Link className="title-wrapper author-name" to={`/users/${story.author.id}`}>{story.author.username}</Link>
                <br/>
              </div>
            </div>
          <br/>
              <Link className="title-wrapper" to={`/stories/${story.id}`}>
                <h1 className="story-title">{story.title}</h1>
                <br/>
              </Link>
            <h3 className="user-item-body">{story.body}</h3>

    
          <Link to={`/stories/${story.id}`}></Link>
        </div>
    </>
  )
}

export default UserShowItem;

