// import React from 'react';
// import { closeModal } from '../../actions/modal_actions';
// import { connect } from 'react-redux';
// import SignUpFormContainer from '../session_form/signup_form_container';
// import LogInFormContainer from '../session_form/login_form_container';

// function Modal ({modal, closeModal}) {
//   if (!modal){
//     return null;
//   }

//   return(
//     <div className="modal">
//       <div className="modal=content">
//         <div className="modal=header">
//           <h4 className="modal-title">Modal Title</h4>
//         </div>
//          <div className="modal-body">
//            This is modal content
//          </div>
//         <div className="modal=footer">
//           <button className="button">Close</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Modal;

import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mstp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdtp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mstp, mdtp)(Modal);