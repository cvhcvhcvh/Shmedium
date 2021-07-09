import React from 'react';
import { connect } from 'react-redux';
import { requestStory, updateStory } from '../../actions/report_actions';
import StoryForm from './report_form';

/*
Export a container component for the `EditReportForm` component given below that
will be used to edit an existing report. The `EditReportForm` component should
fetch the report being edited when it successfully mounts to the DOM and will
only render the `ReportForm` once it has received that report.

In the container, pass in the report being edited as a `report` prop along with
a `formType` prop set to the string 'Update Report'. The edit form should
pre-fill each field with the report's values. Additionally, map in a function
that will dispatch `requestReport` as a prop of the same name, and one that will
dispatch the appropriate action to the store on form submission as an `action`
prop.

**Do NOT modify the `render` function provided for the `EditReportForm`.**
*/

class EditStoryForm extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestStory(this.props.match.params.reportId)
  }

  render() {
    // DO NOT MODIFY THIS FUNCTION
    const { action, formType, story } = this.props;

    // Hint: The report will not exist on the first render - what do we need to 
    // do to get it?
    if (!report) return null;
    return (
      <ReportForm
        action={action}
        formType={formType}
        story={story} />
    );
  }
}


const mstp = (state, ownProps) => {
  return({
    story: state.stories[ownProps.match.params.storyId], 
    formType: "Update Story"
  })
}

const mdtp = dispatch => {
  return({
    requestStory: (storyId) => dispatch(requestStory(storyId)), 
    action: (story) => dispatch(updateStory(story))
  })
}

export default connect(mstp, mdtp)(EditStoryForm)