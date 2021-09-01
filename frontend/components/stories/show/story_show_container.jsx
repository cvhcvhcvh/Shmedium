import { connect } from 'react-redux';
import StoryShow from './story_show';
import { requestStory, deleteStory } from '../../../actions/story_actions';
import { requestUsers } from '../../../actions/user_actions';
import {deleteResponse, requestResponses, requestResponse} from '../../../actions/response_actions';
import { createLike, deleteLike, fetchLike } from '../../../util/like_api_util';


const mstp = (state, ownProps) => {
  // debugger
  const story = state.entities.stories[ownProps.match.params.storyId] || {}
  const user = state.entities.users[story.author_id] || {}

  return({
    storyId: story.id,
    story: story,
    user: user,
    currentUserId: state.session.id, 
    currentUser: state.session.id,//
    responses: Object.values(state.entities.responses), 
    fetchLike: (like) => fetchLike(like),
    createLike: (like) => createLike(like), 
    deleteLike: (like) => deleteLike(like)

  })
}

const mdtp = dispatch => {
  return({
    requestStory: (storyId) => dispatch(requestStory(storyId)), 
    requestUsers: () => dispatch(requestUsers()), 
    action: (storyId) => dispatch(deleteStory(storyId)), 
    deleteResponse: (responseId) => dispatch(deleteResponse(responseId)), 
    requestResponses: () => dispatch(requestResponses()), 
    requestResponse: (responseId) => dispatch(requestResponse(responseId)), 

    
  })
}

export default connect(mstp, mdtp)(StoryShow)

