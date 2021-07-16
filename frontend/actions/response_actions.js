import * as ResponseAPIUtil from '../util/response_api_util';

export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES"
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE"
export const REMOVE_RESPONSE = "REMOVE_RESPONSE"


export const receiveResponses = (responses) => {
  return({
    type: RECEIVE_RESPONSES, //
    responses
  })
}

export const receiveResponse = (response) => {
  return({
    type: RECEIVE_RESPONSE, //
    response
  })
}

export const removeResponse = (responseId) => {
  return({
    type: REMOVE_RESPONSE, 
    responseId
  })
}

export const requestResponses = () => dispatch => {
  return(
    ResponseAPIUtil.requestResponses()
    .then(responses => dispatch(receiveResponses(responses)))
  )
}
  
export const requestRespsonse = (responseId) => dispatch => {
  return(
    ResponseAPIUtil.requestResponse(responseId)
    .then(response => dispatch(receiveResponse(response)))
  )
}
      
export const createResponse = response => dispatch => {
  return(
    ResponseAPIUtil.createResponse(response)
    .then(response => dispatch(receiveResponse(response)))
  )
}

export const updateResponse = (response) => dispatch => {
  return(
    ResponseAPIUtil.updateResponse(response)
    .then(response => dispatch(receiveResponse(response)))
  )
}

export const deleteResponse = (responseId) => dispatch => {
  return(
    ResponseAPIUtil.deleteResponse(responseId)
    .then(() => dispatch(removeResponse(responseId)))
  )
}
