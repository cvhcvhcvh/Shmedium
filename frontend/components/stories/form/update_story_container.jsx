import React from 'react';
import { connect } from 'react-redux';
import { requestStory, updateStory } from '../../../actions/story_actions';
import StoryForm from './story_form';


class EditStoryForm extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestStory(this.props.match.params.storyId)
  }

  render() {
   
    const { action, formType, story } = this.props;

 
    if (!story) return null;
    return (
      <StoryForm
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