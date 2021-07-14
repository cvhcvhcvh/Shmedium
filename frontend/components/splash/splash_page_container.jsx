import { connect } from 'react-redux';
import SplashPage from './splash_page';

const mstp = (state) => {
  
  return {
    currentUserId: state.session.id
  };
};

// const mdtp = dispatch => ({
//   logout: () => dispatch(logout()), 
//   openModal: modal => dispatch(openModal(modal))
// });

export default connect(mstp, null)(SplashPage);

