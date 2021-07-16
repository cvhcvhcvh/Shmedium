import React from 'react';

class EditResponseForm extends React.Component {
  constructor(props){
    super(props)

    this.state = this.props.response

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
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
          <label>Understanding
            <input type="text" value={this.state.understanding} onChange={this.updateUnderstanding}/>
          </label>
          <label>Improvement
            <textarea value={this.state.improvement} onChange={this.updateImprovement}/>
          </label>

        </form>

      </>
    )
  }
}

export default EditResponseForm