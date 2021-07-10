import React from 'react';
import { Link } from 'react-router-dom';

class StoryShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true


    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.requestStory(this.props.match.params.storyId)
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.props.story.id)
    .then(() => this.props.history.push('/'))
  }


  render(){
    return(
      <>
  
        <h1>{this.props.story.title}</h1>
        <p>{this.props.story.body}</p>
        <Link to={`/stories/${this.props.story.id}/edit`}>Edit</Link>
        <br/>
        <Link to={`/`}>Home</Link>
        <br/>
      
        {/* <button onClick={() => this.props.deleteStory(this.props.story.id)}>Later, Bitch</button> */}
        <button onClick={this.handleSubmit}>Later, Bitch</button>
      </>
    )
  }
}

export default StoryShow