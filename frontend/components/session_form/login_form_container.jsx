import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mstp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign In',
    // navLink: <Link to="/signup" style={{ textDecoration: 'none' }}>Get Started</Link>,
    welcome: "Welcome back."
    
  };
};

const mdtp = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
    otherForm: (
      <>
        <div>No account?</div>
          <button onClick={() => dispatch(openModal('signup'))}>
            Create one
          </button>
      </>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mstp, mdtp)(SessionForm);

