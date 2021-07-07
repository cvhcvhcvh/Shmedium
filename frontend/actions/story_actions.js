import * as StoryAPIUtil from '../util/story_api_util';

export const RECEIVE_STORY = "RECEIVE_STORY"

export const receiveStory = story => {
  return({
    type: RECEIVE_STORY, //
    story
  })
}

export const createStory = story => dispatch => {
 return(
   StoryAPIUtil.createStory(story)
   .then(story => dispatch(receiveStory(story)))
 )
}

