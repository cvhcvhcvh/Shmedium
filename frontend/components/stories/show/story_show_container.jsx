import { connect } from 'react-redux';
import StoryShow from './story_show';
import { requestStory, deleteStory } from '../../../actions/story_actions';
import { requestUsers } from '../../../actions/user_actions';



const mstp = (state, ownProps) => {
  // debugger
  const story = state.entities.stories[ownProps.match.params.storyId] || {}
  const user = state.entities.users[story.author_id] || {}

  return({
    story: story,
    user: user,
    currentUser: state.session.id, //
    
  })
}

const mdtp = dispatch => {
  return({
    requestStory: (storyId) => dispatch(requestStory(storyId)), 
    requestUsers: () => dispatch(requestUsers()), 
    action: (storyId) => dispatch(deleteStory(storyId))
  })
}

export default connect(mstp, mdtp)(StoryShow)

