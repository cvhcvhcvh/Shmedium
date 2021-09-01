import { connect } from 'react-redux';
import SplashPage from './splash_page';
// import StoryIndex from './story_index';
import { requestStories } from '../../actions/story_actions';
import { requestUsers } from '../../actions/user_actions';
// import LikeButton from '../like_button/like_button';


const mstp = (state) => {
  
  return {
    currentUserId: state.session.id,
    stories: Object.values(state.entities.stories)
    
  };
};

const mdtp = dispatch => {
  return({
    requestStories: () => dispatch(requestStories()), 
    requestUsers: () => dispatch(requestUsers())
    // removeStory: (storyId) => dispatch(removeStory(storyId))
  })
}
export default connect(mstp, mdtp)(SplashPage);

