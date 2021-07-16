import React from 'react';
import { Link } from 'react-router-dom';
import UserShowItem from './user_show_item';


class UserShow extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      loading: true
    };
  }


  componentDidMount() {
    this.props.requestStories()
    this.props.requestUser(this.props.match.params.userId)
    .then(() => {
      this.setState({loading: false})
    })
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
    if (this.state.loading){
      return null
  }
    return(
      <>
        {this.userStory()}
      </>
    )
  }
}

export default UserShow;

