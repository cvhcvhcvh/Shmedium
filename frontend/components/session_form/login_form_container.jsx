import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mstp = ({ errors }, ownProps) => {
  return {
    errors: errors.session,
    formType: 'Sign In',
    // navLink: <Link to="/signup" style={{ textDecoration: 'none' }}>Get Started</Link>,
    welcome: "Welcome back.", 
    ownProps
    
  };
};

const mdtp = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
    otherForm: (
      <>
        <div>No account?
          <br/>
          <button className="submit-button" onClick={() => dispatch(openModal('signup'))}>Create One</button>
        </div>
      </>
    ),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
    
  };
};

export default connect(mstp, mdtp)(SessionForm);

