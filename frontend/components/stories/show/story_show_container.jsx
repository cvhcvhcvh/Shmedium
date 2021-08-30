import { connect } from 'react-redux';
import StoryShow from './story_show';
import { requestStory, deleteStory } from '../../../actions/story_actions';
import { requestUsers } from '../../../actions/user_actions';
import {deleteResponse, requestResponses, requestResponse} from '../../../actions/response_actions';


const mstp = (state, ownProps) => {
  // debugger
  const story = state.entities.stories[ownProps.match.params.storyId] || {}
  const user = state.entities.users[story.author_id] || {}

  return({
    story: story,
    user: user,
    currentUser: state.session.id, //
    responses: Object.values(state.entities.responses)

  })
}

const mdtp = dispatch => {
  return({
    requestStory: (storyId) => dispatch(requestStory(storyId)), 
    requestUsers: () => dispatch(requestUsers()), 
    action: (storyId) => dispatch(deleteStory(storyId)), 
    deleteResponse: (responseId) => dispatch(deleteResponse(responseId)), 
    requestResponses: () => dispatch(requestResponses()), 
    requestResponse: (responseId) => dispatch(requestResponse(responseId))
    
  })
}

export default connect(mstp, mdtp)(StoryShow)

