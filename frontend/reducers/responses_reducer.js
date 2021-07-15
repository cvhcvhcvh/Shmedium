import { RECEIVE_RESPONSES, RECEIVE_RESPONSE, REMOVE_RESPONSE } from '../actions/response_actions';
import { RECEIVE_STORIES } from '../actions/story_actions';



const responsesReducer = (oldState={}, action) => {
  Object.freeze(oldState)
  let newState;

  switch (action.type){
    case RECEIVE_RESPONSES:
      return action.responses
    case RECEIVE_RESPONSE:
      return Object.assign({}, oldState, {[action.response.id]: action.response})
    case REMOVE_RESPONSE:
      newState = Object.assign({}, oldState)
      delete newState[action.responseId]
      return newState
    // case RECEIVE_STORIES:
    //   return action.stories.responses
      
    default: 
      return oldState
  }
}

export default responsesReducer

