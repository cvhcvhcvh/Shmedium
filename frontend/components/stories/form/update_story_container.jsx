import React from 'react';
import { connect } from 'react-redux';
import { requestStory, updateStory } from '../../../actions/story_actions';
import StoryForm from './story_form';
import { withRouter} from 'react-router-dom';


class EditStoryForm extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestStory(this.props.match.params.storyId)
  }

  render() {
   
    const { action, formType, story } = this.props;
    // console.warn(this.props.ownProps)

 
    if (!story) return null;
    return (
      <StoryForm
        history={this.props.history}
        action={action}
        formType={formType}
        story={story} />
    );
  }
}


const mstp = (state, ownProps) => {
  return({
    story: state.entities.stories[ownProps.match.params.storyId], 
    formType: "Update Story", 
    ownProps: ownProps
  })
}

const mdtp = dispatch => {
  return({
    requestStory: (storyId) => dispatch(requestStory(storyId)), 
    action: (story) => dispatch(updateStory(story))
  })
}

export default connect(mstp, mdtp)(EditStoryForm)