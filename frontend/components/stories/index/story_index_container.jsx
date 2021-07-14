import { connect } from 'react-redux';
import StoryIndex from './story_index';
import { requestStories } from '../../../actions/story_actions';
import { requestUsers } from '../../../actions/user_actions';



const mstp = state => {
  return({
    stories: Object.values(state.entities.stories)
  })
}

const mdtp = dispatch => {
  return({
    requestStories: () => dispatch(requestStories()), 
    requestUsers: () => dispatch(requestUsers())
    // removeStory: (storyId) => dispatch(removeStory(storyId))
  })
}

export default connect(mstp, mdtp)(StoryIndex)