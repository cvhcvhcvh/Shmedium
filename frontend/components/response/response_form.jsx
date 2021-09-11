import React from 'react';


class ResponseForm extends React.Component {
  constructor(props){
    super(props)

    this.state = this.props.response

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    const ali = Object.assign({}, this.state, {story_id: this.props.story.id})
    this.props.createResponse(ali)
    this.setState({
      body: "", 
    })
    // .then((res) => this.props.history.push(`/response/${res.story.id}`))
  }

  updateBody(e){
    this.setState({
      body: e.target.value
    })
  }

  render(){
    
    return(
      <> 
        <br/>
        <div className="response-form">
          
          {this.props.currentUser ? 
          <form onSubmit={this.handleSubmit} action="">
            
          
            <textarea className="textarea" onChange={this.updateBody} value={this.state.body}/>
              <input className="submit-button" type="submit" value="Respond" />
              
          </form>
          : 
          <p className="login-to-post">Login to respond</p>
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
                <div className="story-show-footer-4">
                <p className="font2">Shmedium is an open platform where 170 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Learn more</p>
                <p className="font2">Follow the writers, publications, and topics that matter to you, and you’ll see them on your homepage and in your inbox. Explore</p>
                <p className="font2">If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. It’s easy and free to post your thinking on any topic. Start a blog</p>
                </div>

              </div>
            </div>
          </div>
        
        </div>
        responses are going here why
      </>
    )
  }
}

export default ResponseForm

