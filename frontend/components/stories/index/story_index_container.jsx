import { connect } from 'react-redux';

import StoryIndex from './story_index';
import { requestStories, removeStory } from '../../actions/story_actions';


const mstp = state => {
  return({
    stories: Object.values(state.stories)
  })
}

const mdtp = dispatch => {
  return({
    requestStories: () => dispatch(requestStories()), //
    deleteStory: (storyId) => dispatch(deleteStory(storyId))
  })
}

export default connect(mstp, mdtp)(StoryIndex)