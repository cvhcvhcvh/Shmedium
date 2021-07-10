import { connect } from 'react-redux';
import { createStory } from '../../../actions/story_actions';
import StoryForm from './story_form';

const mstp = state => {
  return({
    story: {
      title: '', //
      body: '', //
      // createdAt: '', //
      // updatedAt: ''
      author_id: state.session.id
    }, 
    formType: "Add Story"
  })
}

const mdtp = dispatch => {
  return({
    action: (story) => dispatch(createStory(story))
  })  
}

export default connect(mstp, mdtp)(StoryForm)