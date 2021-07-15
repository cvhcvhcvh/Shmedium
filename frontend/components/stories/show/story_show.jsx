import React from 'react';
import { Link } from 'react-router-dom';
import ResponseFormContainer from '../../response/response_form_container';
import ResponseIndexItem from '../../response/response_index_item';



class StoryShow extends React.Component{
  constructor(props){
    super(props)
   
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    // debugger 
    this.props.requestUsers()
    this.props.requestResponses()
    this.props.requestStory(this.props.match.params.storyId)
    .then(() => {
      this.setState({loading: false})
    })
  }

  
  
  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.props.story.id)
    this.props.history.push(`/`)
  }

  // must find a way to get actions to run so that container can do its job:  ie, when coming from index page, RECEIVE_STORIES/RECEIVE_STORY is called so the container can function 



  render(){
    // debugger
    // if (!this.props.story){
    //   return null
    // }

    // if (this.state.loading){
    //   return(
    //       <>
    //           loading
    //       </>
    //   )
    // } else {
    if (this.state.loading){
        return null
    }
    

    // const {listing, currentUser, listingId, reviews, deleteReview} = this.props
    const { story, user, currentUser, deleteResponse, requestResponses, responses } = this.props;

    let responseItems = responses.map(response => {
            return (
            <ResponseIndexItem key={response.id} user={user} response={response} deleteResponse={deleteResponse} currentUser={currentUser}/>   
            )
        }  
    )
    // const { story, user, currentUser } = this.props;
    
    // debugger 
    return(
      <>
        <div className="story-show-item">
          <div className="story-info">
            <h1>{story.title}</h1>
            <br/>
            <Link to={`/users/${story.author_id}`}>{user.username}</Link>
            <br/>
          </div>
          <br/>
          <p>{story.body}</p>
         
          <br/>
          <br/>
          <div className="story-button-div">
            <Link className="story-button" to={`/stories/${this.props.story.id}/edit`}>Edit</Link>
            <br/>
          
            <button className="story-button" onClick={this.handleSubmit}>Delete</button>
            <br/>
            <Link className="story-button" to={`/stories/new`}>New Story</Link>
            <br/>
            <Link className="story-button" to={`/`}>Home</Link>
            <br/>
          </div>
        </div>

        <div>
          <ResponseFormContainer story={story}/>
            {responseItems}
        </div>
      </>
    )
    }
  
}

export default StoryShow