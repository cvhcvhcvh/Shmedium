import React from 'react';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item';


class UserShow extends React.Component {
  constructor(props){
    super(props)

    // this.userStory = this.userStory.bind(this)
  }
  componentDidMount() {
    this.props.requestUser(this.props.match.params.userId)
    // this.props.requestStories(stories)
  }


  userStory() {
    const {user, stories} = this.props
    const userStories = stories.map(story => {
    
      if (user.id === story.author_id)
        return (
          <UserShowItem key={story.id} story={story} />
        )
    })
    if (userStories){
      return(

        <h2>{userStories}</h2>
      )
    }
  }
  
  render() {
    return(
      <>
        {this.userStory()}
      </>
    )
  }
}

export default UserShow;

