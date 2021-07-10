import React from 'react';
import { Link } from 'react-router-dom';

class StoryShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true
  };
  }

  componentDidMount(){
    this.props.requestStory(this.props.match.params.storyId)
  }
  



  render(){
    return(
      <>
  
        <h1>{this.props.story.title}</h1>
        <p>{this.props.story.body}</p>
        <Link to={`/stories/${this.props.story.id}/edit`}>Edit</Link>
        <br/>
        
        <Link to={`/`}>Home</Link>
      
      </>
    )
  }
}

export default StoryShow