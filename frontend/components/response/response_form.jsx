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
       <form onSubmit={this.handleSubmit}action="">
          <textarea onChange={this.updateBody} value={this.state.body}/>
            <input type="submit" />


       </form>

      </>
    )
  }
}

export default ResponseForm