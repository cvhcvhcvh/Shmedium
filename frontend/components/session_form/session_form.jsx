import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '', 
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoUserSignin(demoUser) {
    return e => {
      e.preventDefault();
      this.props.action(demoUser)
      .then(() => {
        this.props.closeModal()
        
    })
  }}

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
    .then(() => {
      this.props.closeModal()
      
  })
  }
    

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    

    const demoUser = {
      username: "Demo",
      email: "demo@user.com",
      password: "123456"
    } 

    const emailInput = this.props.formType === 'Get Started' ? (
      <>
        <br/>
        <label className="login-label">Email
        <br/>
        <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
          />
      </label>
        <br/>
      </>

    ) : (<></>)

    return (
      <>
      <h1 className={"splashlogo"}></h1>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <h1 className="welcome-heading">{this.props.welcome}</h1>
         <br/>
          <li className="errors-messages">
            {this.renderErrors()}
          </li>
          <br/>
            
          <div className="login-form">
            <div className="login-message">
            Connect with stories, authors, and trending topics.

            </div>
            <br/>
            <label className="login-label">Username
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            <br/>
            </label>
                <br/>
            {emailInput}
            <br/>
            <label className="login-label">Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
              <br/>
            </label>
                <br/>
                  <div className="buttons-buttons">
                    <input className="signin-button" type="submit" value={this.props.formType} />
                    {this.props.formType === 'Sign In' ? 
                          <button 
                            onClick={this.demoUserSignin(demoUser)}
                            className={"inputGroup-formButton signin-button"} 
                          >Demo</button> : ''} 
                  </div>
                    
             <br/>
            <div>{this.props.otherForm}</div>
          </div>
        </form>
      </div>

      </>
    );
  }
}

export default SessionForm;
