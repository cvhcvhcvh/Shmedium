import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { requestStory, createStory, requestStories } from '../../actions/story_actions';
import UserShow from './user_show';

const mstp = (state, ownProps) => {
  return({
    user: state.entities.users[ownProps.match.params.userId],
    stories: Object.values(state.entities.stories),
    currentUser: state.session.id 
  })
};

const mdtp = dispatch => {
  return({
    requestUser: user => dispatch(requestUser(user)),
    requestStory: story => dispatch(requestStory(story)),
    createStory: story => dispatch(createStory(story)),
    requestStories: stories => dispatch(requestStories(stories))
  })
};

export default connect(mstp, mdtp)(UserShow);