import { RECEIVE_STORY } from '../actions/story_actions';
import merge from 'lodash/merge'

const storiesReducer = (oldState={}, action) => {
  Object.freeze(state)
  let newState;

  switch (action.type){
    case RECEIVE_STORY:
      return merge({}, oldState, {[action.story.id]: action.story})
    
    default: 
      return oldState
  }
}

export default storiesReducer

