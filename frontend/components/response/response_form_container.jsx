import { connect } from 'react-redux';
import { createResponse, deleteResponse, requestResponse } from '../../actions/response_actions';
import ResponseForm from './response_form';

const mstp = (state, ownProps) => {
  return({
    responses: state.entities.responses,
    response: {
      body: '', 
      author_id: state.session.id, //
    }
  })
}

const mdtp = dispatch => {
  return({
    requestResponse: (response) => dispatch(requestResponse(response)), 
    createResponse: (response) => dispatch(createResponse(response)), 
    deleteResponse: (responseId) => dispatch(deleteResponse(responseId))
  })  
}

export default connect(mstp, mdtp)(ResponseForm)

