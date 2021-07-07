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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
    .then(() => this.props.history.push("/"));
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

    const emailInput = this.props.formType === 'Get Started' ? (
      <>
        <label>Email:
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
        {this.props.otherForm}
        <form onSubmit={this.handleSubmit} className="login-form-box">
      
          {/* {this.props.formType} or {this.props.navLink}
          {this.renderErrors()} */}
          <div className="login-form">
           
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
                <br/>
            {emailInput}
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
                <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>

      </>
    );
  }
}

export default SessionForm;
