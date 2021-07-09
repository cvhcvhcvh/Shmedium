import { connect } from 'react-redux';
import StoryShow from './story_show';
import { requestStory } from '../../actions/story_actions';

/*
Export a container component for the `ReportShow` that maps in the appropriate
report from the store as a `report` prop. Additionally, it should map in a
function that will dispatch `requestReport` to the store as a prop of the same
name.
*/


const mstp = (state, ownProps) => {
  return({
    story: state.stories[ownProps.match.params.storyId]
    
  })
}

const mdtp = dispatch => {
  return({
    requestStory: (storyId) => dispatch(requestStory(storyId))
  })
}

export default connect(mstp, mdtp)(StoryShow)

