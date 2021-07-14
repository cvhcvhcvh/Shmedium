import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mstp = (state) => {
  
  return {
    currentUserId: state.session.id,
    stories: Object.values(state.entities.stories)
    
  };
};

const mdtp = dispatch => ({
  requestStories: (stories) => dispatch(requestStories(stories))
});

export default connect(mstp, mdtp)(SplashPage);

