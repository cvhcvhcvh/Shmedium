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
    console.log(this.props)
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
          <h1>{this.props.formType}</h1>
          <label>Title
            <input type="text" value={this.state.title} onChange={this.updateTitle}/>
          </label>
          <label>Body
            <textarea value={this.state.body} onChange={this.updateBody}/>
          </label>
          <button type="submit">Submit</button>
        </form>

      </>
    )
  }
}

export default StoryForm