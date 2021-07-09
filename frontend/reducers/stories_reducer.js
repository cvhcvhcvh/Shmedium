import { RECEIVE_STORY, RECEIVE_STORIES, REMOVE_STORY } from '../actions/story_actions';
import merge from 'lodash/merge'

const storiesReducer = (oldState={}, action) => {
  Object.freeze(state)
  let newState;

  switch (action.type){
    case RECEIVE_STORIES:
      return action.stories
    case RECEIVE_STORY:
      return merge({}, oldState, {[action.story.id]: action.story})
    case REMOVE_STORY:
      newState = merge({}, oldState)
      delete newState[action.storyId]
      return newState
      
    default: 
      return oldState
  }
}

export default storiesReducer

