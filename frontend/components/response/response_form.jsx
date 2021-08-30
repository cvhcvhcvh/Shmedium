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
          <p>Login to post comments</p>
          }

        </div>
          <div className="response-feed-header">
            <h1>Responses</h1>
          </div>

      </>
    )
  }
}

export default ResponseForm