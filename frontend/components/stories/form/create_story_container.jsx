import { connect } from 'react-redux';
import { createReport } from '../../actions/report_actions';
import StoryForm from './report_form';

/*
Export a container component for the `ReportForm` that will be used to create a
new report. Map in a report object with empty values for each field as a
`report` prop along with a `formType` prop set to the string 'Add Report'.
Additionally, map in a function that will dispatch the appropriate action to the
store on form submission as an `action` prop.
*/

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