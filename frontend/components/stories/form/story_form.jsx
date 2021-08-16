import React from 'react';


class StoryForm extends React.Component {
  constructor(props){
    super(props)

    this.state = this.props.story

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);

  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
    .then((res) => this.props.history.push(`/stories/${res.story.id}`))
  }

  updateTitle(e){
    this.setState({
      title: e.target.value
    })
  }

  updateBody(e){
    this.setState({
      body: e.target.value
    })
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="add-story-wrapper">
            <div className="add-story-header">
              <h1>{this.props.formType}</h1>
            </div>
            <div className="testtt">
                <div>
                  <label className="add-login-label">Title
                    <input className="add-login-input" type="text" value={this.state.title} onChange={this.updateTitle}/>
                  </label>
                </div>
                <div>
                  <label className="add-login-label-body">Body
                    <input className="add-login-input" type="test" value={this.state.body} onChange={this.updateBody}/>
                  </label>
                </div>
                <div className="add-story-button">
                    <button className="add-signin-button" type="submit">Submit</button>
                </div>
            </div>
          </div>
        </form>

      </>
    )
  }
}

export default StoryForm