import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../../like_button/like_button';
import ResponseFormContainer from '../../response/response_form_container';
import ResponseIndexItem from '../../response/response_index_item';
import { openModal } from '../../../actions/modal_actions';


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
    const { story, storyId, user, currentUser, deleteResponse, requestResponses, responses } = this.props;

    let responseItems = responses.filter(response => response.story_id === this.props.story.id).map(response => {
            return (
            <ResponseIndexItem key={response.id} user={user} response={response} deleteResponse={deleteResponse} currentUser={currentUser}/>   
            )
        }  
    )
 
    return(
      <>
        <div className="story-show-item">
          <br/>
          <div className="story-info">
            <br/>
          
            <h1 className="story-title">{story.title}</h1>
              <p className="story-show-subtitle">Make sure to double-check your pull requests for these things before you submit.</p>
              
                <div className="story-show-story-info">
                  <img className="logo-pic" src={window.logo} alt="logo-pic" />
                  <Link className="author" to={`/users/${story.author_id}`}>{user.username}</Link>
                </div>
                <div className="story-show-subtitle-subs">
                      <br/>
                      <p className="date">Dec 28 •</p>
                      <br/>
                      <p className="date">2 min •</p>
                      <br/>
                      <p className="genre">Nonfiction</p>
                        <div className="heart">
                          {currentUser ? 

                            <LikeButton storyId={this.props.storyId} currentUserId={this.props.currentUserId} fetchLike={this.props.fetchLike} createLike={this.props.createLike} deleteLike={this.props.deleteLike}/> : 
                    
                            <button className="login-to-like" onClick={() => dispatch(openModal('signup'))}>
                            Login to Like
                            </button>}
                        </div>
                      <div className="story-show-subtitle-links">
                        {/* <img className="logo-pic" src={window.github} alt="logo-pic" />
                        <img className="logo-pic" src={window.linkedin} alt="logo-pic" /> */}

                        <a href="https://www.linkedin.com/in/cvhcvh/"> <img className="logo-pic" src={window.linkedin} alt="logo-pic" target="_blank" /></a>
                        <a href="https://github.com/cvhcvhcvh"> <img className="logo-pic" src={window.github} alt="logo-pic" target="_blank"/></a>

                      </div>

                  </div>
                
              <br/>
    
              <div className="show-item-image">
                {
                  <img className="show-picture" src={story.photo_url} alt="" /> 
           
                }
              </div>
            <br/>
           
          </div>
        
          <p className="story-body">{story.body}</p>
           
          <br/>
          <br/>
              
          {currentUser === user.id ? 
          <div className="story-button-div">
            
            <Link className="story-button" to={`/stories/${this.props.story.id}/edit`}>Edit This Story</Link>
            <br/>
          
            <button className="story-button" onClick={this.handleSubmit}>Delete This Story</button>
            <br/>
            <Link className="story-button" to={`/stories/new`}>Write a New Story</Link>
            <br/>
            <Link className="story-button" to={`/`}>Home</Link>
            <br/>
            
          </div>
          : null}
        </div>
              
        <div>
          <ResponseFormContainer story={story} currentUser={currentUser}/>
          
            <h1 className="what-others-are-saying">What Others Are Saying</h1>
              { responseItems.length > 0 ? responseItems : <p className="what-others-are-saying-nothing-yet">No responses yet...</p>
              }
        </div>
        <div className="story-show-footer">
          <div className="story-show-footer-content">
            <div className="story-show-footer-1"> 
              <div className="story-show-footer-2">
                <div className="story-show-footer-3">
                  <p className="font">Learn more.</p>
                  
                  <p className="font">Make Shmedium yours.</p>
                  
                  <p className="font">Write a story on Shmedium.</p>
                 
                </div>
                <div className="border-bottom">
                  <div className="story-show-footer-4">
                    <p className="font2">Shmedium is an open platform where 170 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Learn more</p>
                    <p className="font2">Follow the writers, publications, and topics that matter to you, and you’ll see them on your homepage and in your inbox. Explore</p>
                    <p className="font2">If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. It’s easy and free to post your thinking on any topic. Start a blog</p>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
           <div className="shmedium-home-link-footer">
            <Link to="/" className="shmedium-home-link-footer">Shmedium
            </Link>
            
              <div className="shmedium-footer-about-box">
                  <a className="shmedium-footer-about" href="https://www.google.com" target="_blank">About</a>
                  <a className="shmedium-footer-about" href="https://www.google.com" target="_blank">Write</a>
                  <a className="shmedium-footer-about" href="https://www.google.com" target="_blank">Help</a>
                  <a className="shmedium-footer-about" href="https://www.google.com" target="_blank">Legal</a>
              </div>
           </div>
        </div>
      </>
    )
    }
  
}

export default StoryShow