import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign In',
    navLink: <Link to="/signup" style={{ textDecoration: 'none' }}>Get Started</Link>,
  };
};

const mdtp = dispatch => {
  return {
    action: (user) => dispatch(login(user)),
  };
};

export default connect(mstp, mdtp)(SessionForm);
