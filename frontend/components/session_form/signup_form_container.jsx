import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal } from '../../actions/modal_actions';


const mstp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Get Started',
    navLink: <Link to="/login" style={{ textDecoration: 'none' }}>Sign In</Link>,
    
  };
};

const mdtp = dispatch => {
  return {
    action: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
          Login
      </button>
    ),
  };
};

export default connect(mstp, mdtp)(SessionForm);
