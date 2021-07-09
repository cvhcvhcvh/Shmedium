import { connect } from 'react-redux';
import { createReport } from '../../actions/report_actions';
import StoryForm from './report_form';

const mstp = state => {
  return({
    story: {
      title: '', //
      body: '', //
      // createdAt: '', //
      // updatedAt: ''
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