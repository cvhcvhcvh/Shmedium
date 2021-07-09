import { RECEIVE_STORY, RECEIVE_STORIES, REMOVE_STORY } from '../actions/story_actions';


const storiesReducer = (oldState={}, action) => {
  Object.freeze(oldState)
  let newState;

  switch (action.type){
    case RECEIVE_STORIES:
      return action.stories
    case RECEIVE_STORY:
      return Object.assign({}, oldState, {[action.story.id]: action.story})
    case REMOVE_STORY:
      newState = Object.assign({}, oldState)
      delete newState[action.storyId]
      return newState
      
    default: 
      return oldState
  }
}

export default storiesReducer

