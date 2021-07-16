import { connect } from 'react-redux';
import { createResponse, deleteResponse, requestResponse } from '../../actions/response_actions';
import ResponseForm from './response_form';

const mstp = (state, ownProps) => {
  return({
    response: state.entities.responses[ownProps.match.params.responseId],
   
  })
}

const mdtp = dispatch => {
  return({
    requestResponse: (response) => dispatch(requestResponse(response)), 
    updateResponse: (response) => dispatch(updateResponse(response))
  })  
}

export default connect(mstp, mdtp)(ResponseForm)

