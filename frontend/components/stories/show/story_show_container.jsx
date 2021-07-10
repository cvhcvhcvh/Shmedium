import { connect } from 'react-redux';
import StoryShow from './story_show';
import { requestStory, deleteStory } from '../../../actions/story_actions';


const mstp = (state, ownProps) => {
  return({
    story: state.entities.stories[ownProps.match.params.storyId]
    // storyId: ownProps.match.params.storyId
    
  })
}

const mdtp = dispatch => {
  return({
    requestStory: (storyId) => dispatch(requestStory(storyId)), 
    action: (storyId) => dispatch(deleteStory(storyId))
  })
}

export default connect(mstp, mdtp)(StoryShow)

